import {PageParams} from '../interfaces'

export class PageMeta {
  readonly page: number

  readonly take: number

  readonly itemCount: number

  readonly pageCount: number

  readonly hasPreviousPage: boolean

  readonly hasNextPage: boolean

  constructor({options, itemCount}: PageParams) {
    this.page = options.page ?? 1
    this.take = options.take ?? 10
    this.itemCount = itemCount
    this.pageCount = Math.ceil(this.itemCount / this.take)
    this.hasPreviousPage = this.page > 1
    this.hasNextPage = this.page < this.pageCount
  }
}
