import {CreateGroup, UpdateGroup} from '../dtos'
import {Repository} from '@dev/shared-util-data'
import {Group} from '../entities'

export abstract class GroupRepository extends Repository<Group> {
  abstract override create(value: CreateGroup): Promise<Group>
  abstract override update(value: UpdateGroup): Promise<Group>
}
