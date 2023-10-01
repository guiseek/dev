import {ApiHideProperty, ApiProperty, PartialType} from '@nestjs/swagger'
import {CreateUserDto} from './create-user'
import {Exclude} from 'class-transformer'
import {IsUUID} from 'class-validator'

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsUUID()
  id: string

  @Exclude()
  @ApiHideProperty()
  override password: string
}
