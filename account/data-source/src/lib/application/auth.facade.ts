import {
  ActivateUserAuthUseCase,
  CreateUserAccountUseCase,
  SignInUserAccountUseCase,
} from '@dev/account-domain'
import {CreateUserDto, SignInDto} from '../dtos'

export class AuthFacade {
  constructor(
    private readonly signInUserAccount: SignInUserAccountUseCase,
    private readonly createUserAccount: CreateUserAccountUseCase,
    private readonly activateUserAuth: ActivateUserAuthUseCase
  ) {}

  signIn(signInDto: SignInDto) {
    return this.signInUserAccount.execute(signInDto)
  }

  signUp(createUserDto: CreateUserDto) {
    return this.createUserAccount.execute(createUserDto)
  }

  canActivate(token: string) {
    return this.activateUserAuth.execute(token)
  }
}
