import {EnvConfig} from '@dev/shared-util-data'
import {Http} from '@dev/shared-data-access'
import {AccountInject} from '../interfaces'
import {AuthService, GroupService, UserService} from '@dev/account-domain'
import {AuthFacade, GroupFacade, UserFacade} from '../application'

function provideServices(env: EnvConfig<AccountInject>) {
  return [
    {
      provide: UserService,
      useFactory(http: Http) {
        return new env.inject.user(http, env.api.account)
      },
      deps: [Http],
    },
    {
      provide: AuthService,
      useFactory(http: Http) {
        return new env.inject.auth(http, env.api.accountAuth)
      },
      deps: [Http],
    },
    {
      provide: GroupService,
      useFactory(http: Http) {
        return new env.inject.group(http, env.api.accountGroups)
      },
      deps: [Http],
    },
  ]
}

export function provideFacades() {
  return [
    {
      provide: UserFacade,
      deps: [UserService],
    },
    {
      provide: AuthFacade,
      deps: [AuthService],
    },
    {
      provide: GroupFacade,
      deps: [GroupService],
    },
  ]
}

export function provideAccount(env: EnvConfig<AccountInject>) {
  return [provideServices(env), provideFacades()]
}
