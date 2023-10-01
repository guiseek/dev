import {User, UserRepository} from '@dev/account-domain'
import {BaseRepository} from '@dev/shared-data-source'

export class UserRepositoryImpl
  extends BaseRepository<User>
  implements UserRepository
{
  name = 'user'

  findByUsernameOrEmail(usernameOrEmail: string) {
    const query = this.repository.createQueryBuilder(this.name)

    query
      .where('user.username = :username', {username: usernameOrEmail})
      .orWhere('user.email = :email', {email: usernameOrEmail})

    return query.getOne()
  }
}
