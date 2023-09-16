import {CreateRail, UpdateRail} from '../dtos'
import {Service} from '@dev/shared-util-data'
import {Rail} from '../entities'
import {Observable} from 'rxjs'

export abstract class RailService extends Service<Rail> {
  abstract override create(value: CreateRail): Observable<Rail>
  abstract override update(value: UpdateRail): Observable<Rail>
}
