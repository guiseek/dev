import {User, UserService} from '@dev/account-domain'
import {BaseService} from '@dev/shared-data-access'

export class UserServiceImpl extends BaseService<User> implements UserService {}
