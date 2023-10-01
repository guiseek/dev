import {User} from '@dev/account-domain'
import {ApiProperty} from '@nestjs/swagger'
import {Exclude, Type} from 'class-transformer'
import {GroupDto} from './group'

export class UserDto implements User {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  email: string

  @ApiProperty()
  birthdate: Date

  @ApiProperty()
  username: string

  @ApiProperty()
  @Type(() => GroupDto)
  groups: GroupDto[]

  @Exclude()
  password: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
