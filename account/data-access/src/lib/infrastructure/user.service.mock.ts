import {UpdatePassword, User, UserService} from '@dev/account-domain'
import {MockService} from '@dev/shared-data-access'
import {of} from 'rxjs'

export class UserServiceMock extends MockService<User> implements UserService {
  updatePassword(value: UpdatePassword) {
    return this.findOne(value.id)
  }

  create(value: Partial<User>) {
    const entity = {
      ...value,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User
    this.collection.push(entity)
    return of(entity)
  }
}
