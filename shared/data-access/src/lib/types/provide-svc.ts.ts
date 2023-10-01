export type ProvideSvc<T> = (api?: any) => {
  provide: T
  useFactory?(...params: unknown[]): T
  useClass?(...params: unknown[]): T
  deps?: unknown[]
}
