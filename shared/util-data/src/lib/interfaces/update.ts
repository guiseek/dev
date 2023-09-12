import {Observable} from 'rxjs'

export interface Update<T extends object> {
  update(value: Partial<T>): Promise<T> | Observable<T>
}
