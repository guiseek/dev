import {Group, GroupRepository} from '@dev/account-domain'
import {BaseRepository} from '@dev/shared-data-source'

export class GroupRepositoryImpl
  extends BaseRepository<Group>
  implements GroupRepository
{
  name = 'group'
}
