import {Observable} from 'rxjs'

export interface FindOneBy<T extends object> {
  findOne<K extends keyof T>(
    key: K,
    value: T[K]
  ): Promise<T | null> | Observable<T | null>
}
