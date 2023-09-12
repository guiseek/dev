import {ApiProperty, PartialType} from '@nestjs/swagger'
import {CreateContentDto} from './create-content'
import {IsUUID} from 'class-validator'

export class UpdateContentDto extends PartialType(CreateContentDto) {
  @ApiProperty()
  @IsUUID()
  id: string
}
