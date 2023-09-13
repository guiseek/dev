import {User, UserService, CreateUser, UpdateUser} from '@dev/account-domain'
import {BulkResult, FindParams, Paged, Where} from '@dev/shared-util-data'
import {Http} from '@dev/shared-data-access'
import {Observable} from 'rxjs'

export class UserServiceImpl implements UserService {
  constructor(private readonly http: Http) {}

  find({options}: FindParams<User> = {options: {}}) {
    return this.http.get<Paged<User>>('/api/account', {params: options})
  }

  filter({where = {}, options}: FindParams<User> = {where: {}, options: {}}) {
    return this.http.post<Paged<User>, Where<User>>(
      '/api/account/filter',
      where,
      {params: options}
    )
  }

  create(value: CreateUser) {
    return this.http.post<User, CreateUser>('/api/account', value)
  }

  update(value: UpdateUser) {
    return this.http.put<User, UpdateUser>('/api/account', value)
  }

  remove(id: string) {
    return this.http.delete<User>(`/api/account/${id}`)
  }

  removeBulk(...ids: string[]) {
    return this.http.delete<BulkResult>(`/api/account/bulk`, {params: {ids}})
  }

  findOne(value: string): Observable<User | null> {
    return this.http.delete<User>(`/api/account/${value}`)
  }
}
