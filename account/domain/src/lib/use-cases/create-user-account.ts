import {CryptoService, GroupRepository, UserRepository} from '../ports'
import {UseCase} from '@dev/shared-util-data'
import {Group, User} from '../entities'
import {CreateUser} from '../dtos'

interface CreateUserWihtGroup extends CreateUser {
  groups: Group[]
}

export class CreateUserAccountUseCase
  implements UseCase<CreateUserWihtGroup, User>
{
  constructor(
    private readonly userRepository: UserRepository,
    private readonly groupRepository: GroupRepository,
    private readonly cryptoService: CryptoService
  ) {}

  async execute(input: CreateUser): Promise<User> {
    const groups = []

    const group = await this.groupRepository.findOne('permission', 1)
    if (group) groups.push(group)

    const password = this.cryptoService.hash(input.password)

    try {
      return await this.userRepository.create({...input, password, groups})
    } catch {
      throw new Error(`Erro ao criar usuário ${input.name}`)
    }
  }
}
