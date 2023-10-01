import {
  User,
  UserRepository,
  CreateUserAccountUseCase,
} from '@dev/account-domain'
import {DataSourceFacade} from '@dev/shared-data-source'
import {CreateUserDto, UpdateUserDto} from '../dtos'
import {BadRequestException} from '@nestjs/common'

export class UserFacade extends DataSourceFacade<User> {
  constructor(
    repository: UserRepository,
    private readonly createUserUseCase: CreateUserAccountUseCase
  ) {
    super(repository)
  }

  async create(value: CreateUserDto) {
    try {
      return await this.createUserUseCase.execute(value)
    } catch (err) {
      throw new BadRequestException(err)
    }
    // return this.repository.create(value)
  }

  update(value: UpdateUserDto) {
    return this.repository.update(value)
  }
}
