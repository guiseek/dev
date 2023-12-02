import {
  AccountInject,
  AuthServiceMock,
  GroupServiceMock,
  UserServiceMock,
} from '@dev/account-data-access'
import {EnvConfig} from '@dev/shared-util-data'

export const env: EnvConfig<AccountInject> = {
  production: false,
  level: 'testing',
  inject: {
    auth: AuthServiceMock,
    user: UserServiceMock,
    group: GroupServiceMock,
  },
  api: {
    account: [],
    accountAuth: '',
    accountGroups: [],
  },
}
