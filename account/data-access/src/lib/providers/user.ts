import {UserServiceImpl, UserServiceMock} from '../infrastructure'
import {Http, provideServiceMock} from '@dev/shared-data-access'
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

export function provideUser(production = false, api: string | User[] = []) {
  const providers = []
  providers.push(
    production
      ? provideUserService(api as string)
      : provideUserServiceMock(api as User[])
  )

  providers.push(provideUserFacade())
  return providers
}
