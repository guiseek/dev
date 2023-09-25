import {SvcMockOf} from '../types'
import {Observable, of} from 'rxjs'
import {
  Entity,
  FindParams,
  PageMeta,
  Paged,
  Service,
  Where,
  where,
} from '@dev/shared-util-data'

export function provideServiceMock<E extends Entity, B>(
  base: B,
  impl: SvcMockOf<E>,
  collection: E[]
) {
  return {
    provide: base,
    useFactory() {
      return new impl(collection)
    },
  }
}

export abstract class MockService<
  T extends Entity & object
> extends Service<T> {
  constructor(readonly collection: T[] = []) {
    super()
  }

  find(params: FindParams<T> = {where: {}, options: {}}) {
    const {
      skip = 0,
      take = 10,
      order,
      sort = 'createdAt',
    } = params.options ?? {}

    const ord = order === 'ASC' ? 1 : -1
    console.log(this.collection)

    const entities = this.collection
      // .filter(where(params.where ?? {}))
      .slice(skip, skip + take)
      .sort((a, b) => {
        return a[sort as keyof T] > b[sort as keyof T] ? ord : ord * -1
      })

    const options = params.options ?? {}

    const itemCount = entities.length

    const pageMetaDto = new PageMeta({itemCount, options})

    return of(new Paged(entities, pageMetaDto))
  }

  filter(params: FindParams<T>): Observable<Paged<T>> {
    return this.find(params)
  }

  count(params: Where<T>) {
    const entities = this.collection.filter(where(params))

    return of(entities.length)
  }

  // abstract override create(value: Partial<T>): Observable<T>

  update(value: Partial<T>) {
    const index = this.collection.findIndex((item) => item.id === value.id)
    const entity = {...this.collection[index], ...value}
    this.collection[index] = entity
    return of(entity)
  }

  remove(id: string) {
    const index = this.collection.findIndex((item) => item.id === id)
    const entity = this.collection[index]
    this.collection.splice(index, 1)
    return of(entity)
  }

  removeBulk(...ids: string[]) {
    const {length} = ids.map((id) => this.remove(id))
    return of({affected: length})
  }

  findOne(id: string) {
    return of(this.collection.find((item) => item.id === id) ?? null)
  }
}
