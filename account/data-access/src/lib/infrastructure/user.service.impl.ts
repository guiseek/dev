import {UpdatePassword, User, UserService} from '@dev/account-domain'
import {BaseService} from '@dev/shared-data-access'
import {Observable} from 'rxjs'

export class UserServiceImpl extends BaseService<User> implements UserService {
  updatePassword(value: UpdatePassword): Observable<User> {
    return this.http.put(`${this.url}/password`, value)
  }
}
