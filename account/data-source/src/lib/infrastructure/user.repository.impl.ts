import {User, CreateUser, UpdateUser, UserRepository} from '@dev/account-domain'
import {PageMetaDto, PagedDto, findLike} from '@dev/shared-data-source'
import {FindParams} from '@dev/shared-util-data'
import {Repository} from 'typeorm'

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly repository: Repository<User>) {}

  async find({where, options = {}}: FindParams<User>) {
    const {skip, take, sort, order} = options

    const query = this.repository.createQueryBuilder('user')

    query
      .orderBy(`user.${sort ?? 'createdAt'}`, order)
      .skip(skip)
      .take(take)

    if (where) {
      query.where(findLike(where))
    }

    const [entities, itemCount] = await query.getManyAndCount()

    const meta = new PageMetaDto({itemCount, options})
    return new PagedDto(entities, meta)
  }

  create(value: CreateUser) {
    return this.repository.save(value)
  }

  update(value: UpdateUser) {
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

  findOne<K extends keyof User>(key: K, value: User[K]) {
    return this.repository.findOneBy({[key]: value})
  }
}
