import {Repository} from '@dev/shared-util-data'
import {CreateUser, UpdateUser} from '../dtos'
import {User} from '../entities'

export abstract class UserRepository extends Repository<User> {
  abstract override create(value: CreateUser): Promise<User>
  abstract override update(value: UpdateUser): Promise<User>
}
