import {Content, ContentService} from '@dev/content-domain'
import {MockService} from '@dev/shared-data-access'
import {Observable, of} from 'rxjs'

export class ContentServiceMock
  extends MockService<Content>
  implements ContentService
{
  create(value: Partial<Content>): Observable<Content> {
    const entity = {
      ...value,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Content
    this.collection.push(entity)
    return of(entity)
  }
}
