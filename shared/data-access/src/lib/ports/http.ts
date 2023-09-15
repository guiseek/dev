import {Observable} from 'rxjs'

abstract class Http<T = unknown> {
  constructor(protected readonly baseUrl: string) {}

  protected abstract request<R = T, D = unknown>(
    method: string,
    path: string,
    data?: T | D
  ): Observable<R>

  abstract get<R>(path: string, config?: Partial<RequestConfig>): Observable<R>

  abstract post<R, D = unknown>(
    path: string,
    data: D,
    options?: Partial<RequestConfig>
  ): Observable<R>

  abstract put<R, D = unknown>(
    path: string,
    data: D,
    options?: Partial<RequestConfig>
  ): Observable<R>

  abstract delete<R, D = unknown>(
    path: string,
    data?: D,
    options?: Partial<RequestConfig>
  ): Observable<R>
}

interface ResponseTypeMap<T = void> {
  arrayBuffer: ArrayBuffer
  text: string
  blob: Blob
  json: T
}

interface RequestConfig extends Omit<RequestInit, 'method'> {
  responseType: keyof ResponseTypeMap
  params?: object
}

type FetchResponse<T, C extends RequestConfig> =
  | ResponseTypeMap<T>[C extends keyof ResponseTypeMap
      ? C['responseType']
      : 'json']

export {Http}
export type {ResponseTypeMap, RequestConfig, FetchResponse}
