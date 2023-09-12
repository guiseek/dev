import {CreateContent} from '@dev/content-domain'
import {ApiProperty} from '@nestjs/swagger'
import {IsString} from 'class-validator'

export class CreateContentDto implements CreateContent {
  @ApiProperty()
  @IsString()
  title: string

  @ApiProperty()
  @IsString()
  path: string
}
