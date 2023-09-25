import {
  BulkResult,
  FindParams,
  Paged,
  Repository,
  Where,
  where,
} from '@dev/shared-util-data'
import {PageMetaDto, PagedDto} from '../dtos'
import {RepoMockOf} from '../types'

interface Entity {
  id: string
  createdAt: Date
  updatedAt: Date
}

export function provideRepositoryMock<E extends Entity, B>(
  base: B,
  impl: RepoMockOf<E>,
  collection: E[]
) {
  return {
    provide: base,
    useFactory() {
      return new impl(collection)
    },
  }
}

export class MockRepository<T extends Entity & object> extends Repository<T> {
  constructor(readonly collection: T[] = []) {
    super()
  }

  async find(
    params: FindParams<T> = {where: {}, options: {}}
  ): Promise<Paged<T>> {
    const {
      skip = 0,
      take = 10,
      order,
      sort = 'createdAt',
    } = params.options ?? {}

    const ord = order === 'ASC' ? 1 : -1
    const entities = this.collection
      .filter(where(params.where ?? {}))
      .slice(skip, skip + take)
      .sort((a, b) => {
        return a[sort as keyof T] > b[sort as keyof T] ? ord : ord * -1
      })

    const options = params.options ?? {}

    const itemCount = entities.length

    const pageMetaDto = new PageMetaDto({itemCount, options})

    return new PagedDto(entities, pageMetaDto)
  }

  async count(params: Where<T> = {}): Promise<BulkResult> {
    const entities = this.collection.filter(where(params))

    return {affected: entities.length}
  }

  async create(value: Partial<T>) {
    const entity = {
      ...value,
      id: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    } as T
    this.collection.push(entity)
    return entity
  }

  async update(value: Partial<T>) {
    const index = this.collection.findIndex((item) => item.id === value.id)
    const entity = {...this.collection[index], ...value}
    this.collection[index] = entity
    return entity
  }

  async remove(id: string) {
    const index = this.collection.findIndex((item) => item.id === id)
    const entity = this.collection[index]
    this.collection.splice(index, 1)
    return entity
  }

  async removeBulk(...ids: string[]): Promise<BulkResult> {
    const {length} = ids.map((id) => this.remove(id))
    return {affected: length}
  }

  async findOne<K extends keyof T>(key: K, value: T[K]) {
    return this.collection.find((item) => item[key] === value) ?? null
  }
}
