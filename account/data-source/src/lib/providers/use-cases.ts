import {getJwtConfigToken, provideUseCase} from '@dev/shared-data-source'
import {
  JwtService,
  CryptoService,
  UserRepository,
  GroupRepository,
  CreateUserAccountUseCase,
  SignInUserAccountUseCase,
  ActivateUserAuthUseCase,
} from '@dev/account-domain'

export function provideCreateUserUseCases<P>() {
  return provideUseCase(
    CreateUserAccountUseCase,
    UserRepository,
    GroupRepository,
    CryptoService
  ) as P
}

export function provideSignInUserAccountUseCase<P>() {
  return provideUseCase(
    SignInUserAccountUseCase,
    UserRepository,
    CryptoService,
    JwtService,
    getJwtConfigToken()
  ) as P
}

export function provideActivateUserAuthUseCase<P>() {
  return provideUseCase(
    ActivateUserAuthUseCase,
    JwtService,
    getJwtConfigToken()
  ) as P
}
