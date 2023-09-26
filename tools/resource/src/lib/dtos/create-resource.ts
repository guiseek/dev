import {CreateDomainDto} from './create-domain'
import {ApiProperty} from '@nestjs/swagger'
import {IsString} from 'class-validator'

export class CreateResourceDto extends CreateDomainDto {
  @ApiProperty({
    required: true,
  })
  @IsString()
  dataSource: string

  @ApiProperty({
    required: false,
    default: false,
    type: Boolean,
  })
  @IsString()
  global: boolean
}
