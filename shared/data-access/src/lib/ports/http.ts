import {Observable} from 'rxjs'

export interface ResponseTypeMap<T = void> {
  arrayBuffer: ArrayBuffer
  text: string
  blob: Blob
  json: T
}

export interface RequestConfig extends Omit<RequestInit, 'method'> {
  responseType: keyof ResponseTypeMap
  params?: object
}

export type FetchResponse<
  T,
  C extends RequestConfig
> = ResponseTypeMap<T>[C extends keyof ResponseTypeMap
  ? C['responseType']
  : 'json']

export abstract class Http<T = unknown> {
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

// export abstract class Http {
//   abstract get<R, C extends RequestConfig = RequestConfig>(
//     input: RequestInfo | URL,
//     requestConfig?: Partial<C>
//   ): Observable<FetchResponse<R, C>>

//   abstract post<R, C extends RequestConfig = RequestConfig>(
//     input: RequestInfo | URL,
//     {responseType, data, ...init}: C
//   ): Observable<FetchResponse<R, C>>

//   abstract put<R, C extends RequestConfig = RequestConfig>(
//     input: RequestInfo | URL,
//     {responseType, data, ...init}: C
//   ): Observable<FetchResponse<R, C>>

//   abstract patch<R, C extends RequestConfig = RequestConfig>(
//     input: RequestInfo | URL,
//     {responseType, data, ...init}: C
//   ): Observable<FetchResponse<R, C>>

//   abstract delete<R, C extends RequestConfig = RequestConfig>(
//     input: RequestInfo | URL,
//     {responseType, data, ...init}: C
//   ): Observable<FetchResponse<R, C>>
// }
