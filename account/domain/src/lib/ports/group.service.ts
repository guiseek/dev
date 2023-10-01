import {CreateGroup, UpdateGroup} from '../dtos'
import {Service} from '@dev/shared-util-data'
import {Group} from '../entities'
import {Observable} from 'rxjs'

export abstract class GroupService extends Service<Group> {
  abstract override create(value: CreateGroup): Observable<Group>
  abstract override update(value: UpdateGroup): Observable<Group>
}
