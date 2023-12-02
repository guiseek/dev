import {UserService} from '@dev/account-domain'
import {EnvConfig} from '@dev/shared-util-data'
import {Http} from '@dev/shared-data-access'
import {AccountInject} from '../interfaces'
import {UserFacade} from '../application'

export function provideUserService(env: EnvConfig<AccountInject>) {
  return {
    provide: UserService,
    useFactory(http: Http) {
      return new env.inject.user(http, env.api.account)
    },
    deps: [Http],
  }
}

// export function provideUserServiceMock(collection: User[] = []) {
//   return provideServiceMock(UserService, UserServiceMock, collection)
// }

export function provideUserFacade() {
  return {
    provide: UserFacade,
    deps: [UserService],
  }
}

export function provideUser(env: EnvConfig<AccountInject>) {
  return [provideUserService(env), provideUserFacade()]
}

// export const provideUser = provideByEnv(
//   provideUserService,
//   provideUserServiceMock,
//   provideUserFacade()
// )
