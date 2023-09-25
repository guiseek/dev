import {ApiProperty, PartialType} from '@nestjs/swagger'
import {CreateBookDto} from './create-book'
import {IsUUID} from 'class-validator'

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @ApiProperty()
  @IsUUID()
  id: string
}
