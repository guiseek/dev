import {Rail, RailService} from '@dev/learning-domain'
import {MockService} from '@dev/shared-data-access'
import {Observable, of} from 'rxjs'

export class RailServiceMock extends MockService<Rail> implements RailService {
  create(value: Partial<Rail>): Observable<Rail> {
    const entity = {
      ...value,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Rail
    this.collection.push(entity)
    return of(entity)
  }
}
