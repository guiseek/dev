import {AuthUser} from '@dev/account-domain'
import {ApiProperty} from '@nestjs/swagger'

export class AuthUserDto implements AuthUser {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  email: string

  @ApiProperty()
  username: string
}
