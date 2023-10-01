import {Http, provideByEnv, provideServiceMock} from '@dev/shared-data-access'
import {UserServiceImpl, UserServiceMock} from '../infrastructure'
import {User, UserService} from '@dev/account-domain'
import {UserFacade} from '../application'

export function provideUserService(api = '/api/account') {
  return {
    provide: UserService,
    useFactory(http: Http) {
      return new UserServiceImpl(http, api)
    },
    deps: [Http],
  }
}

export function provideUserServiceMock(collection: User[] = []) {
  return provideServiceMock(UserService, UserServiceMock, collection)
}

export function provideUserFacade() {
  return {
    provide: UserFacade,
    deps: [UserService],
  }
}

export const provideUser = provideByEnv(
  provideUserService,
  provideUserServiceMock,
  provideUserFacade()
)
