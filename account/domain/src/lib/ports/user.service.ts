import {CreateUser, UpdateUser} from '../dtos'
import {Service} from '@dev/shared-util-data'
import {User} from '../entities'
import {Observable} from 'rxjs'

export abstract class UserService extends Service<User> {
  abstract override create(value: CreateUser): Observable<User>
  abstract override update(value: UpdateUser): Observable<User>
}
