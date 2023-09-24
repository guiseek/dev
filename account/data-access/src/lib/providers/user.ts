import {UserService} from '@dev/account-domain'
import {UserServiceImpl} from '../infrastructure'
import {Http} from '@dev/shared-data-access'
import {UserFacade} from '../application'

export function provideUserService() {
  return {
    provide: UserService,
    useFactory(http: Http) {
      return new UserServiceImpl(http, '/api/account')
    },
    deps: [Http],
  }
}

export function provideUserFacade() {
  return {
    provide: UserFacade,
    deps: [UserService],
  }
}
