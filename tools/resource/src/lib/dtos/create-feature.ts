import {CreateDomainDto} from './create-domain'
import {ApiProperty} from '@nestjs/swagger'
import {IsString} from 'class-validator'

export class CreateFeatureDto extends CreateDomainDto {
  @ApiProperty({
    required: true,
  })
  @IsString()
  dataAccess: string
}
