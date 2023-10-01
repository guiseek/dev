import {CryptoService, JwtService, UserRepository} from '../ports'
import {UseCase} from '@dev/shared-util-data'
import {AccessToken, SignIn} from '../dtos'

export class SignInUserAccountUseCase implements UseCase<SignIn, AccessToken> {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService,
    private readonly jwtConfig: {secret: string}
  ) {}

  async execute(input: SignIn) {
    const user = await this.userRepository.findByUsernameOrEmail(input.username)
    if (!user) throw new Error(`Credenciais inválidas`)

    const verified = this.cryptoService.compare(input.password, user.password)
    if (!verified) throw new Error(`Credenciais inválidas`)

    const {name, username, email, id} = user
    const payload = {sub: id, name, username, email}
    const accessToken = this.jwtService.sign(payload, this.jwtConfig)

    return {accessToken}
  }
}
