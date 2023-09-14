import {User, UserRepository} from '@dev/account-domain'
import {BaseRepository} from '@dev/shared-data-source'

export class UserRepositoryImpl
  extends BaseRepository<User>
  implements UserRepository
{
  name = 'user'
}
