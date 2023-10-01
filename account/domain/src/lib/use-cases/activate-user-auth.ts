import {JwtConfig} from '@dev/shared-data-source'
import {UseCase} from '@dev/shared-util-data'
import {JwtService} from '../ports'
import {AuthUser} from '../dtos'

export class ActivateUserAuthUseCase implements UseCase<string, AuthUser> {
  constructor(
    private jwtService: JwtService,
    private readonly jwtConfig: JwtConfig
  ) {
    console.log(jwtConfig)
  }

  execute(input: string) {
    try {
      return this.jwtService.verify<AuthUser>(input, this.jwtConfig)
    } catch {
      throw new Error(`Acesso não autorizado`)
    }
  }
}
