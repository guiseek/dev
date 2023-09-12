import {Observable} from 'rxjs'

export interface Remove<T extends object> {
  remove(id: string): Promise<T> | Observable<T>
}
