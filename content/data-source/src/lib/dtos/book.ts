import {Book} from '@dev/content-domain'
import {ApiProperty} from '@nestjs/swagger'

export class BookDto implements Book {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
