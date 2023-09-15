import {CreateContent, UpdateContent} from '../dtos'
import {Service} from '@dev/shared-util-data'
import {Content} from '../entities'
import {Observable} from 'rxjs'

export abstract class ContentService extends Service<Content> {
  abstract override create(value: CreateContent): Observable<Content>
  abstract override update(value: UpdateContent): Observable<Content>
}
