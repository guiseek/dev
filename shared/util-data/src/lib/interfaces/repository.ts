import {FindParams} from './find-params'
import {BulkResult} from './bulk-result'
import {Paged} from './paged'
import {Where} from '../types'

export abstract class Repository<T extends object> {
  abstract find(params?: FindParams<T>): Promise<Paged<T>>
  abstract count(where?: Where<T>): Promise<BulkResult>
  abstract create(value: Partial<T>): Promise<T>
  abstract update(value: Partial<T>): Promise<T>
  abstract remove(id: string): Promise<T>
  abstract removeBulk(...ids: string[]): Promise<BulkResult>
  abstract findOne<K extends keyof T>(key: K, value: T[K]): Promise<T | null>
}
