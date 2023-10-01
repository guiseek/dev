import {SignIn} from '@dev/account-domain'
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty, MinLength} from 'class-validator'

export class SignInDto implements SignIn {
  @ApiProperty()
  @IsNotEmpty({message: 'preencha seu usuário'})
  username: string

  @ApiProperty()
  @IsNotEmpty({message: 'preencha sua senha'})
  @MinLength(6, {message: 'mínimo de 6 caracteres'})
  password: string
}
