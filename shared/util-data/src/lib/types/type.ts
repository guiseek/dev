export interface Type<T = unknown> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...params: any[]): T
}
