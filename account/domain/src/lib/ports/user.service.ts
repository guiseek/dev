import {Paged, FindParams, Service, BulkResult} from '@dev/shared-util-data'
import {CreateUser, UpdateUser} from '../dtos'
import {User} from '../entities'
import {Observable} from 'rxjs'

export abstract class UserService implements Service<User> {
  abstract find(params?: FindParams<User>): Observable<Paged<User>>
  abstract filter(params: FindParams<User>): Observable<Paged<User>>
  abstract create(value: CreateUser): Observable<User>
  abstract update(value: UpdateUser): Observable<User>
  abstract remove(id: string): Observable<User>
  abstract removeBulk(...ids: string[]): Observable<BulkResult>
  abstract findOne(value: User[keyof User]): Observable<User | null>
}
