export type ProvideSvc<T> = <U extends string = string>(
  api?: U
) => {
  provide: T
  useFactory?(...params: unknown[]): T
  useClass?(...params: unknown[]): T
  deps?: unknown[]
}
