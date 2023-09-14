import {PagedDto} from '@dev/shared-data-source'
import {Type, applyDecorators} from '@nestjs/common'
import {ApiOkResponse, getSchemaPath} from '@nestjs/swagger'

export const ApiPagedResponse = <T extends Type<unknown>>(model: T) => {
  return applyDecorators(
    ApiOkResponse({
      type: PagedDto<typeof model>,
      schema: {
        title: `PaginatedResponseOf${model.name}`,
        allOf: [{$ref: getSchemaPath(model)}],
      },
    })
  )
}
