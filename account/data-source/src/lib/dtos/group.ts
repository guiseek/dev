import {Group} from '@dev/account-domain'
import {ApiProperty} from '@nestjs/swagger'

export class GroupDto implements Group {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty({nullable: true})
  label: string | null

  @ApiProperty()
  permission: number

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
