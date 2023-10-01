import {UpdatePassword, User, UserService} from '@dev/account-domain'
import {Facade} from '@dev/shared-util-data'
import {catchError} from 'rxjs'

export class UserFacade extends Facade<User, UserService> {
  constructor(service: UserService) {
    super(service)
  }

  updatePassword(value: UpdatePassword) {
    const update$ = this.service.updatePassword(value)
    update$.pipe(catchError(this.handleError)).subscribe((selected) => {
      this.setState({selected})
      this.findOne(value.id)
    })
  }
}
