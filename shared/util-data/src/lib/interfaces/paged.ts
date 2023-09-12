import {PageMeta} from './page-meta'

export interface Paged<T> {
  readonly data: T[]
  readonly meta: PageMeta
}
