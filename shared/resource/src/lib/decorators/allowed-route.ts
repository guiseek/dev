import {SetMetadata} from '@nestjs/common'

export const IS_ALLOWED_ROUTE_KEY = 'isAllowedRoute'
export const AllowedRoute = () => SetMetadata(IS_ALLOWED_ROUTE_KEY, true)
