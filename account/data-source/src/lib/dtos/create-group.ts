import {CreateGroup} from '@dev/account-domain'
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty, IsOptional} from 'class-validator'

export class CreateGroupDto implements CreateGroup {
  @ApiProperty()
  @IsNotEmpty({message: 'por favor, preencha o name'})
  name: string

  @ApiProperty()
  @IsNotEmpty({message: 'por favor, preencha o label'})
  @IsOptional()
  label: string

  @ApiProperty()
  @IsNotEmpty({message: 'por favor, preencha o permission'})
  permission: number
}
