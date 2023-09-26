import {CreateDomain, UpdateDomain} from '../dtos'
import {Service} from '@dev/shared-util-data'
import {Domain} from '../entities'
import {Observable} from 'rxjs'

export abstract class DomainService extends Service<Domain> {
  abstract override create(value: CreateDomain): Observable<Domain>
  abstract override update(value: UpdateDomain): Observable<Domain>
}
