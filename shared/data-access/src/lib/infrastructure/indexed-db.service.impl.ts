import {FindParams, Paged, Service} from '@dev/shared-util-data'
import {Observable} from 'rxjs'

function arrayBufferToBlob<B extends ArrayBuffer, T extends string>(
  buffer: B,
  type: T
) {
  return new Blob([buffer], {type: type})
}

function blobToArrayBuffer(blob: Blob) {
  return new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader()
    reader.addEventListener('loadend', () => {
      if (reader.result instanceof ArrayBuffer) {
        resolve(reader.result)
      }
    })
    reader.addEventListener('error', reject)
    reader.readAsArrayBuffer(blob)
  })
}

class MissingStoresError extends Error {
  constructor(readonly db: IDBDatabase) {
    super('Missing stores')
  }
}

export class DBClosedError extends Error {
  readonly code = 'DBClosed'
  constructor(dbName: string) {
    super(`IndexedDB database '${dbName}' is closed.`)
  }
}

export class IndexedDbService {
  #database: IDBDatabase | null

  readonly #pendingTransactions: IDBTransaction[] = []
  
  constructor(database: IDBDatabase, private readonly name: string) {
    this.#database = database
  }

  static async create(
    name: string,
    version: number | undefined,
    stores: string[]
  ) {
    const database = await IndexedDbService.#openDatabase(name, version, stores)
    return new IndexedDbService(database, name)
  }

  static async #openDatabase(
    name: string,
    version: number | undefined,
    stores: string[]
  ) {
    try {
      return await IndexedDbService.#doOpenDatabase(name, version, stores)
    } catch (err) {
      if (err instanceof MissingStoresError) {
        console.info(`Attempting to recreate the IndexedDB once.`, name)

        try {
          // Try to delete the db
          await IndexedDbService.#deleteDatabase(err.db)
        } catch (error) {
          console.error(
            `Error while deleting the IndexedDB`,
            error
            // getErrorMessage(error)
          )
          throw error
        }

        return await IndexedDbService.#doOpenDatabase(name, version, stores)
      }

      throw err
    }
  }

  static #deleteDatabase(indexedDB: IDBDatabase) {
    return new Promise<void>((c, e) => {
      // Close any opened connections
      indexedDB.close()

      // Delete the db
      const deleteRequest = window.indexedDB.deleteDatabase(indexedDB.name)
      deleteRequest.onerror = () => e(deleteRequest.error)
      deleteRequest.onsuccess = () => c()
    })
  }

  static #doOpenDatabase(
    name: string,
    version: number | undefined,
    stores: string[]
  ): Promise<IDBDatabase> {
    return new Promise((c, e) => {
      const request = window.indexedDB.open(name, version)
      request.onerror = () => e(request.error)
      request.onsuccess = () => {
        const db = request.result
        for (const store of stores) {
          if (!db.objectStoreNames.contains(store)) {
            console.error(
              `Error while opening IndexedDB. Could not find '${store}'' object store`
            )
            e(new MissingStoresError(db))
            return
          }
        }
        c(db)
      }
      request.onupgradeneeded = () => {
        const db = request.result
        for (const store of stores) {
          if (!db.objectStoreNames.contains(store)) {
            db.createObjectStore(store)
          }
        }
      }
    })
  }

  hasPendingTransactions(): boolean {
    return this.#pendingTransactions.length > 0
  }

  close(): void {
    if (this.#pendingTransactions.length) {
      this.#pendingTransactions
        .splice(0, this.#pendingTransactions.length)
        .forEach((transaction) => transaction.abort())
    }
    this.#database?.close()
    this.#database = null
  }

  runInTransaction<T>(
    store: string,
    transactionMode: IDBTransactionMode,
    dbRequestFn: (store: IDBObjectStore) => IDBRequest<T>[]
  ): Promise<T[]>
  runInTransaction<T>(
    store: string,
    transactionMode: IDBTransactionMode,
    dbRequestFn: (store: IDBObjectStore) => IDBRequest<T>
  ): Promise<T>
  async runInTransaction<T>(
    store: string,
    transactionMode: IDBTransactionMode,
    dbRequestFn: (store: IDBObjectStore) => IDBRequest<T> | IDBRequest<T>[]
  ): Promise<T | T[]> {
    if (!this.#database) {
      throw new DBClosedError(this.name)
    }
    const transaction = this.#database.transaction(store, transactionMode)
    this.#pendingTransactions.push(transaction)
    return new Promise<T | T[]>((c, e) => {
      transaction.oncomplete = () => {
        if (Array.isArray(request)) {
          c(request.map((r) => r.result))
        } else {
          c(request.result)
        }
      }
      transaction.onerror = () => e(transaction.error)
      transaction.onabort = () => e(transaction.error)
      const request = dbRequestFn(transaction.objectStore(store))
    }).finally(() =>
      this.#pendingTransactions.splice(
        this.#pendingTransactions.indexOf(transaction),
        1
      )
    )
  }

  async getKeyValues<V>(
    store: string,
    isValid: (value: unknown) => value is V
  ): Promise<Map<string, V>> {
    if (!this.#database) {
      throw new DBClosedError(this.name)
    }
    const transaction = this.#database.transaction(store, 'readonly')
    this.#pendingTransactions.push(transaction)
    return new Promise<Map<string, V>>((resolve) => {
      const items = new Map<string, V>()

      const objectStore = transaction.objectStore(store)

      // Open a IndexedDB Cursor to iterate over key/values
      const cursor = objectStore.openCursor()
      if (!cursor) {
        return resolve(items) // this means the `ItemTable` was empty
      }

      // Iterate over rows of `ItemTable` until the end
      cursor.onsuccess = () => {
        if (cursor.result) {
          // Keep cursor key/value in our map
          if (isValid(cursor.result.value)) {
            items.set(cursor.result.key.toString(), cursor.result.value)
          }

          // Advance cursor to next row
          cursor.result.continue()
        } else {
          resolve(items) // reached end of table
        }
      }

      // Error handlers
      const onError = (error: Error | null) => {
        // console.error(`IndexedDB getKeyValues(): ${toErrorMessage(error, true)}`);
        console.error(`IndexedDB getKeyValues(): ${error}`)

        resolve(items)
      }
      cursor.onerror = () => onError(cursor.error)
      transaction.onerror = () => onError(transaction.error)
    }).finally(() =>
      this.#pendingTransactions.splice(
        this.#pendingTransactions.indexOf(transaction),
        1
      )
    )
  }
}

const db = IndexedDbService.create('db', undefined, ['store1'])
console.log(db)
