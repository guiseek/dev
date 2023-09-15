import {Entity, FindParams, Where} from '@dev/shared-util-data'
import {FindOptionsWhere, Repository} from 'typeorm'
import {PageMetaDto, PagedDto} from '../dtos'
import {findLike} from '../utilities'

export abstract class BaseRepository<T extends Entity> {
  abstract name: string

  constructor(private readonly repository: Repository<T>) {}

  async find({where, options = {}}: FindParams<T>) {
    const {skip, take, sort, order} = options

    const query = this.repository.createQueryBuilder(this.name)

    query
      .orderBy(`${this.name}.${sort ?? 'createdAt'}`, order)
      .skip(skip)
      .take(take)

    if (where) {
      query.where(findLike(where))
    }

    const [entities, itemCount] = await query.getManyAndCount()

    const meta = new PageMetaDto({itemCount, options})
    return new PagedDto(entities, meta)
  }

  async count(where?: Where<T>) {
    const query = this.repository.createQueryBuilder(this.name)
    if (where) query.where(where)
    const affected = await query.getCount()
    return {affected}
  }

  create(value: T) {
    return this.repository.save(value)
  }

  update(value: T) {
    return this.repository.save(value)
  }

  async remove(id: string) {
    const user = await this.findOne('id', id)
    if (user) return this.repository.remove(user)
    else throw new Error(`${id} not found`)
  }

  removeBulk(...ids: string[]) {
    return this.repository.delete(ids)
  }

  findOne<K extends keyof T>(key: K, value: T[K]) {
    const options = {[key]: value} as FindOptionsWhere<T>
    return this.repository.findOneBy(options)
  }
}
