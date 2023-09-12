export interface Type<T = any> {
  new (...params: any[]): T
}
