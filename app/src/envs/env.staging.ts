import {
  AccountInject,
  AuthServiceImpl,
  GroupServiceImpl,
  UserServiceImpl,
} from '@dev/account-data-access'
import {EnvConfig} from '@dev/shared-util-data'

export const env: EnvConfig<AccountInject> = {
  production: true,
  level: 'staging',
  inject: {
    auth: AuthServiceImpl,
    user: UserServiceImpl,
    group: GroupServiceImpl,
  },
  api: {
    account: 'http://localhost:3000/api/account',
    accountAuth: 'http://localhost:3000/api/account/auth',
    accountGroups: 'http://localhost:3000/api/account/groups',
  },
}
