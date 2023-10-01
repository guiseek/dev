import {CreateUser} from '@dev/account-domain'
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty} from 'class-validator'

export class CreateUserDto implements CreateUser {
  @ApiProperty()
  @IsNotEmpty({message: 'preencha o nome'})
  name: string

  @ApiProperty()
  @IsNotEmpty({message: 'preencha o email'})
  email: string

  @ApiProperty()
  @IsNotEmpty({message: 'preencha o nascimento'})
  birthdate: Date

  @ApiProperty()
  @IsNotEmpty({message: 'preencha o usuário'})
  username: string

  @ApiProperty()
  @IsNotEmpty({message: 'preencha a senha'})
  password: string
}
