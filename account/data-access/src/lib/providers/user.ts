import {UserServiceImpl, UserServiceMock} from '../infrastructure'
import {Env, Http, provideServiceMock} from '@dev/shared-data-access'
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

function getServiceByEnv(level: Env | string, api: string | User[] = []) {
  switch (level) {
    case 'staging':
    case 'production':
    case 'development':
      return provideUserService(api as string)
    case 'testing':
    default:
      return provideUserServiceMock(api as User[])
  }
}

export function provideUser(level: Env | string, api: string | User[] = []) {
  return [getServiceByEnv(level, api), provideUserFacade()]
}
