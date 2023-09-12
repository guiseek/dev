import {Observable} from 'rxjs'

export interface FindOne<T extends object> {
  findOne(value: T[keyof T]): Promise<T | null> | Observable<T | null>
}
