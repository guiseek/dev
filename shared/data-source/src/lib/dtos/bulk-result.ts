import {BulkResult} from '@dev/shared-util-data'
import {ApiProperty} from '@nestjs/swagger'

export class BulkResultDto implements BulkResult {
  @ApiProperty()
  affected?: number | null
}
