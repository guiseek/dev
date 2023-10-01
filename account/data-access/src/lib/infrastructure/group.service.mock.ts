import {Group, GroupService} from '@dev/account-domain'
import {MockService} from '@dev/shared-data-access'
import {of} from 'rxjs'

export class GroupServiceMock
  extends MockService<Group>
  implements GroupService
{
  create(value: Partial<Group>) {
    const entity = {
      ...value,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Group
    this.collection.push(entity)
    return of(entity)
  }
}
