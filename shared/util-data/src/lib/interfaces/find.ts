import {FindParams} from './find-params'
import {Observable} from 'rxjs'
import {Paged} from './paged'

export interface Find<T extends object> {
  find(params?: FindParams<T>): Promise<Paged<T>> | Observable<Paged<T>>
}
