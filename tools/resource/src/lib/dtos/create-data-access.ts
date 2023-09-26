import {CreateDomainDto} from './create-domain'
import {ApiProperty} from '@nestjs/swagger'
import {IsString} from 'class-validator'

export class CreateDataAccessDto extends CreateDomainDto {
  @ApiProperty({
    required: true,
  })
  @IsString()
  domain: string
}
