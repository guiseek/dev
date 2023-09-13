import {UserService} from '@dev/account-domain'
import {UserServiceImpl} from './infrastructure'
import {Http} from '@dev/shared-data-access'
import {UserFacade} from './application'

export function provideUserService() {
  return {
    provide: UserService,
    useClass: UserServiceImpl,
    deps: [Http],
  }
}

export function provideUserFacade() {
  return {
    provide: UserFacade,
    deps: [UserService],
  }
}
