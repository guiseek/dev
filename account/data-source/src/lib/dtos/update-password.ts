import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty, IsUUID} from 'class-validator'
import {UpdatePassword} from '@dev/account-domain'

export class UpdatePasswordDto implements UpdatePassword {
  @ApiProperty()
  @IsUUID()
  id: string

  @ApiProperty()
  @IsNotEmpty({message: 'preencha a senha atual'})
  oldPassword: string

  @ApiProperty()
  @IsNotEmpty({message: 'preencha a senha'})
  password: string
}
