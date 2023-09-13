import {ApiProperty, PartialType} from '@nestjs/swagger'
import {CreateUserDto} from './create-user'
import {IsUUID} from 'class-validator'

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsUUID()
  id: string
}
