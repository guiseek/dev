import {IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {DryRunDto} from './dry-run'

export class CreateLayerDto extends DryRunDto {
  @ApiProperty({
    required: true,
  })
  @IsString()
  name: string

  @ApiProperty({
    required: true,
  })
  @IsString()
  directory: string

  @ApiProperty({
    required: true,
  })
  @IsString()
  entity: string

  @ApiProperty({
    required: false,
  })
  tags: string
}
