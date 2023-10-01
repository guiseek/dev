import {
  Paged,
  Where,
  Service,
  BulkResult,
  FindParams,
} from '@dev/shared-util-data'
import {Http} from '../ports'

export abstract class BaseService<T extends object> implements Service<T> {
  constructor(protected readonly http: Http<T>, readonly url: string) {}

  find({options}: FindParams<T> = {options: {}}) {
    return this.http.get<Paged<T>>(this.url, {params: options})
  }

  count(where: Where<T> = {}) {
    return this.http.post<number>(`${this.url}/count`, where)
  }

  filter({where = {}, options}: FindParams<T> = {where: {}, options: {}}) {
    return this.http.post<Paged<T>, Where<T>>(`${this.url}/filter`, where, {
      params: options,
    })
  }

  create(value: Partial<T>) {
    return this.http.post<T, Partial<T>>(this.url, value)
  }

  update(value: Partial<T>) {
    return this.http.put<T, Partial<T>>(this.url, value)
  }

  remove(id: string) {
    return this.http.delete<T>(`${this.url}/${id}`)
  }

  removeBulk(...ids: string[]) {
    return this.http.delete<BulkResult>(`${this.url}/bulk`, {params: {ids}})
  }

  findOne(value: string) {
    return this.http.delete<T>(`${this.url}/${value}`)
  }
}
