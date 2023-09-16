import {Rail} from '@dev/learning-domain'
import {ApiProperty} from '@nestjs/swagger'

export class RailDto implements Rail {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
