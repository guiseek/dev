import {
  AccountInject,
  AuthServiceImpl,
  GroupServiceImpl,
  UserServiceImpl,
} from '@dev/account-data-access'
import {EnvConfig} from '@dev/shared-util-data'

export const env: EnvConfig<AccountInject> = {
  production: false,
  level: 'development',
  inject: {
    auth: AuthServiceImpl,
    user: UserServiceImpl,
    group: GroupServiceImpl,
  },
  api: {
    account: '/api/account',
    accountAuth: '/api/account/auth',
    accountGroups: '/api/account/groups',
  },
}
