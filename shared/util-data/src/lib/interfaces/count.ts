import {Observable} from 'rxjs'
import {Where} from '../types'

export interface Count<T extends object> {
  count(where?: Where<T>): Promise<number> | Observable<number>
}
