import {AuthFacade, AuthRequestDto} from '@dev/account-data-source'
import {IS_ALLOWED_ROUTE_KEY} from '@dev/shared-resource'
import {Reflector} from '@nestjs/core'
import {Request} from 'express'
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'

@Injectable()
export class AccountAuthGuard implements CanActivate {
  constructor(private authFacade: AuthFacade, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const isAllowedRoute = this.reflector.getAllAndOverride<boolean>(
      IS_ALLOWED_ROUTE_KEY,
      [context.getHandler(), context.getClass()]
    )

    if (isAllowedRoute) {
      // 💡 See this condition
      return true
    }

    const request = context.switchToHttp().getRequest<AuthRequestDto>()
    const token = this.#extractTokenFromHeader(request)
    if (!token) {
      throw new UnauthorizedException()
    }
    try {
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request.user = this.authFacade.canActivate(token)
    } catch {
      throw new UnauthorizedException()
    }

    return true
  }

  #extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined
  }
}
