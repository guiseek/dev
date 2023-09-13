import {CreateContent} from '@dev/content-domain'
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty, IsString} from 'class-validator'

export class CreateContentDto implements CreateContent {
  @ApiProperty()
  @IsString({message: 'o tíulo deve ser uma string'})
  @IsNotEmpty({message: 'por favor, preencha o título'})
  title: string

  @ApiProperty()
  @IsString({message: 'o caminho deve ser uma string'})
  @IsNotEmpty({message: 'por favor, preencha o caminho'})
  path: string
}
