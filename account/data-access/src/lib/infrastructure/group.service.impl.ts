import {Group, GroupService} from '@dev/account-domain'
import {BaseService} from '@dev/shared-data-access'

export class GroupServiceImpl
  extends BaseService<Group>
  implements GroupService {}
