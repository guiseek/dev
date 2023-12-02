import {
  UserServiceImpl,
  AuthServiceImpl,
  GroupServiceImpl,
  AuthServiceMock,
  UserServiceMock,
  GroupServiceMock,
} from '../infrastructure'

export interface AccountInject {
  auth: AuthServiceImpl | AuthServiceMock
  user: UserServiceImpl | UserServiceMock
  group: GroupServiceImpl | GroupServiceMock
}
