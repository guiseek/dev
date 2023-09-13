import {Paged, FindParams, Service, BulkResult} from '@dev/shared-util-data'
import {CreateContent, UpdateContent} from '../dtos'
import {Content} from '../entities'
import {Observable} from 'rxjs'

export abstract class ContentService implements Service<Content> {
  abstract find(params?: FindParams<Content>): Observable<Paged<Content>>
  abstract filter(params: FindParams<Content>): Observable<Paged<Content>>
  abstract create(value: CreateContent): Observable<Content>
  abstract update(value: UpdateContent): Observable<Content>
  abstract remove(id: string): Observable<Content>
  abstract removeBulk(...ids: string[]): Observable<BulkResult>
  abstract findOne(value: Content[keyof Content]): Observable<Content | null>
}
