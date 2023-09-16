import {ApiProperty, PartialType} from '@nestjs/swagger'
import {CreateRailDto} from './create-rail'
import {IsUUID} from 'class-validator'

export class UpdateRailDto extends PartialType(CreateRailDto) {
  @ApiProperty()
  @IsUUID()
  id: string
}
