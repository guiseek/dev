import {PageMeta} from './page-meta'

export class Paged<T> {
  readonly data: T[]

  readonly meta: PageMeta

  constructor(data: T[], meta: PageMeta) {
    this.data = data
    this.meta = meta
  }
}
