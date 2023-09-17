import {User} from '@dev/account-domain'
import {ApiProperty} from '@nestjs/swagger'

export class UserDto implements User {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  lastName: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
