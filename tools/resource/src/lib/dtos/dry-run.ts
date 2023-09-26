import {ApiProperty} from '@nestjs/swagger'
import {IsBoolean} from 'class-validator'

export class DryRunDto {
  @ApiProperty({
    required: true,
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  dryRun = true
}
