import {Group, GroupRepository} from '@dev/account-domain'
import {DataSourceFacade} from '@dev/shared-data-source'
import {CreateGroupDto, UpdateGroupDto} from '../dtos'

export class GroupFacade extends DataSourceFacade<Group> {
  constructor(repository: GroupRepository) {
    super(repository)
  }

  create(value: CreateGroupDto) {
    return this.repository.create(value)
  }

  update(value: UpdateGroupDto) {
    return this.repository.update(value)
  }
}
