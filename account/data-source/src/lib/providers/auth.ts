import {
  ActivateUserAuthUseCase,
  CreateUserAccountUseCase,
  SignInUserAccountUseCase,
} from '@dev/account-domain'
import {provideDeps} from '@dev/shared-data-source'
import {AuthFacade} from '../application'

export function provideAuthFacade<P>() {
  return provideDeps(
    AuthFacade,
    SignInUserAccountUseCase,
    CreateUserAccountUseCase,
    ActivateUserAuthUseCase
  ) as P
}
