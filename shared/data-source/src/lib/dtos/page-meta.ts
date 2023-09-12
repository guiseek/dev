import {PageParams} from '@dev/shared-util-data'
import {ApiProperty} from '@nestjs/swagger'

export class PageMetaDto implements PageMetaDto {
  @ApiProperty()
  readonly page: number

  @ApiProperty()
  readonly take: number

  @ApiProperty()
  readonly itemCount: number

  @ApiProperty()
  readonly pageCount: number

  @ApiProperty()
  readonly hasPreviousPage: boolean

  @ApiProperty()
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
