import {ApiProperty, IntersectionType} from '@nestjs/swagger'
import {CreateDomainDto} from './create-domain'
import {IsString} from 'class-validator'

export class CreateDataSourceDto extends IntersectionType(CreateDomainDto) {
  @ApiProperty({
    required: true,
  })
  @IsString()
  domain: string
}
