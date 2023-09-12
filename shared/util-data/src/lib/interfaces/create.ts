import {Observable} from 'rxjs'

export interface Create<T extends object> {
  create(value: Partial<T>): Promise<T> | Observable<T>
}
