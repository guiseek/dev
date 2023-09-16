import {CreateRail} from '@dev/learning-domain'
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty, IsString} from 'class-validator'

export class CreateRailDto implements CreateRail {
  @ApiProperty()
  @IsString({message: 'o nome deve ser uma string'})
  @IsNotEmpty({message: 'por favor, preencha o nome'})
  name: string
}
