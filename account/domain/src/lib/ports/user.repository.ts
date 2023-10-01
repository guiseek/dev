import {CreateUser, UpdateUser} from '../dtos'
import {Repository} from '@dev/shared-util-data'
import {User} from '../entities'

export abstract class UserRepository extends Repository<User> {
  abstract override create<T>(value: CreateUser | T): Promise<User>
  abstract override update(value: UpdateUser): Promise<User>
  abstract findByUsernameOrEmail(usernameOrEmail: string): Promise<User | null>
}
