import {FindParams} from './find-params'
import {BulkResult} from './bulk-result'
import {Observable} from 'rxjs'
import {Paged} from './paged'

export abstract class Service<T extends object> {
  abstract find(params?: FindParams<T>): Observable<Paged<T>>
  abstract filter(params: FindParams<T>): Observable<Paged<T>>
  abstract create(value: Partial<T>): Observable<T>
  abstract update(value: Partial<T>): Observable<T>
  abstract remove(id: string): Observable<T>
  abstract removeBulk(...ids: string[]): Observable<BulkResult>
  abstract findOne(value: string): Observable<T | null>
}
