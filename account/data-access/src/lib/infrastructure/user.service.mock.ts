import {User, UserService} from '@dev/account-domain'
import {MockService} from '@dev/shared-data-access'
import {Observable, of} from 'rxjs'

export class UserServiceMock extends MockService<User> implements UserService {
  create(value: Partial<User>): Observable<User> {
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
