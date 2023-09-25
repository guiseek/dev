import {FindParams} from './find-params'
import {BulkResult} from './bulk-result'
import {Observable} from 'rxjs'
import {Paged} from '../base'
import {Where} from '../types'

export abstract class Service<T extends object> {
  abstract find(params?: FindParams<T>): Observable<Paged<T>>
  abstract count(where?: Where<T>): Observable<number>
  abstract filter(params: FindParams<T>): Observable<Paged<T>>
  abstract create(value: Partial<T>): Observable<T>
  abstract update(value: Partial<T>): Observable<T>
  abstract remove(id: string): Observable<T>
  abstract removeBulk(...ids: string[]): Observable<BulkResult>
  abstract findOne(value: string): Observable<T | null>
}
