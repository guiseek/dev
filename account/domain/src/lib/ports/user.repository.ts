import {Paged, FindParams, Repository, BulkResult} from '@dev/shared-util-data'
import {CreateUser, UpdateUser} from '../dtos'
import {User} from '../entities'

export abstract class UserRepository implements Repository<User> {
  abstract find(params?: FindParams<User> | undefined): Promise<Paged<User>>
  abstract create(value: CreateUser): Promise<User>
  abstract update(value: UpdateUser): Promise<User>
  abstract remove(id: string): Promise<User>
  abstract removeBulk(...ids: string[]): Promise<BulkResult>
  abstract findOne<K extends keyof User>(
    key: K,
    value: User[K]
  ): Promise<User | null>
}
