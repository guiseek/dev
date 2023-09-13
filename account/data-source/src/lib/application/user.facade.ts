import {User, UserRepository} from '@dev/account-domain'
import {CreateUserDto, UpdateUserDto} from '../dtos'
import {FindParams} from '@dev/shared-util-data'

export class UserFacade {
  constructor(private readonly repository: UserRepository) {}

  create(value: CreateUserDto) {
    return this.repository.create(value)
  }

  find(value: FindParams<User>) {
    return this.repository.find(value)
  }

  findOne(id: string) {
    return this.repository.findOne('id', id)
  }

  update(value: UpdateUserDto) {
    return this.repository.update(value)
  }

  remove(id: string) {
    return this.repository.remove(id)
  }

  removeBulk(ids: string[]) {
    return this.repository.removeBulk(...ids)
  }
}
