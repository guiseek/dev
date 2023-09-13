import {Content} from '@dev/content-domain'
import {ApiProperty} from '@nestjs/swagger'

export class ContentDto implements Content {
  @ApiProperty()
  id: string

  @ApiProperty()
  title: string

  @ApiProperty()
  path: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
