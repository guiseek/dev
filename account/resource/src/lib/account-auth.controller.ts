import {
  Get,
  Post,
  Body,
  HttpCode,
  Controller,
  HttpStatus,
  UseGuards,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common'
import {
  AuthFacade,
  AuthUserDto,
  CreateUserDto,
  SignInDto,
} from '@dev/account-data-source'
import {AccountAuthGuard} from './account-auth.guard'
import {AllowedRoute, ContextUser} from '@dev/shared-resource'
import {ApiTags} from '@nestjs/swagger'

@ApiTags('account/auth')
@Controller('account/auth')
export class AccountAuthController {
  constructor(private readonly authFacade: AuthFacade) {}

  @Post('login')
  @AllowedRoute()
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() signInDto: SignInDto) {
    try {
      return await this.authFacade.signIn(signInDto)
    } catch (err) {
      throw new UnauthorizedException(err)
    }
  }

  @AllowedRoute()
  @Post('register')
  async signUp(@Body() createUserAccount: CreateUserDto) {
    try {
      return await this.authFacade.signUp(createUserAccount)
    } catch (err) {
      throw new BadRequestException(err)
    }
  }

  @UseGuards(AccountAuthGuard)
  @Get('me')
  getProfile(@ContextUser() auth: AuthUserDto) {
    return auth
  }
}
