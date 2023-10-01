import {ApiProperty, PartialType} from '@nestjs/swagger'
import {CreateGroupDto} from './create-group'
import {IsUUID} from 'class-validator'

export class UpdateGroupDto extends PartialType(CreateGroupDto) {
  @ApiProperty()
  @IsUUID()
  id: string
}
