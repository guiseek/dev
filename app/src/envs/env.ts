import {
  AccountInject,
  AuthServiceImpl,
  GroupServiceImpl,
  UserServiceImpl,
} from '@dev/account-data-access'
import {EnvConfig} from '@dev/shared-util-data'

export const env: EnvConfig<AccountInject> = {
  production: true,
  level: 'production',
  inject: {
    auth: AuthServiceImpl,
    user: UserServiceImpl,
    group: GroupServiceImpl,
  },
  api: {
    account: 'https://api.queroser.dev/account',
    accountAuth: 'https://api.queroser.dev/account/auth',
    accountGroups: 'https://api.queroser.dev/account/groups',
  },
}
