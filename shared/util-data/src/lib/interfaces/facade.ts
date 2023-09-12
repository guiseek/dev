export interface Facade<T> {
  new (service: T): this
}
