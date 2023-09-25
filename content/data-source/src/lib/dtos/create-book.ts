import {CreateBook} from '@dev/content-domain'
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty, IsString} from 'class-validator'

export class CreateBookDto implements CreateBook {
  @ApiProperty()
  @IsString({message: 'o nome deve ser uma string'})
  @IsNotEmpty({message: 'por favor, preencha o nome'})
  name: string
}
