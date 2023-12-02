import {PageOptionsDto, castTo} from '@dev/shared-data-source'
import {ApiPagedResponse} from '@dev/shared-resource'
import {
  UserDto,
  UserFacade,
  CreateUserDto,
  UpdateUserDto,
  WhereUserDto,
  UpdatePasswordDto,
} from '@dev/account-data-source'
import {ApiTags} from '@nestjs/swagger'
import {compareSync, hashSync} from 'bcrypt'
import {
  Get,
  Put,
  Body,
  Post,
  Param,
  Query,
  Delete,
  Controller,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common'

@ApiTags('account')
@Controller('account')
export class AccountResourceController {
  constructor(private readonly userFacade: UserFacade) {}

  @Get()
  @ApiPagedResponse(UserDto)
  async find(@Query() options: PageOptionsDto) {
    return this.userFacade.find({options}).then(({meta, data}) => {
      return {
        meta,
        data: data.map(castTo(UserDto)),
      }
    })
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.userFacade.findOne(id).then(castTo(UserDto))
    } catch {
      throw new NotFoundException('Usuário não existe')
    }
  }

  @Post('count')
  count(@Body() where: WhereUserDto) {
    return this.userFacade.count(where)
  }

  @Post('filter')
  filter(@Body() where: WhereUserDto, @Query() options: PageOptionsDto) {
    return this.userFacade.find({where, options})
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const password = hashSync(createUserDto.password, 10)
    return this.userFacade.create({...createUserDto, password})
  }

  @Put('password')
  async updatePassword(@Body() updatePasswordDto: UpdatePasswordDto) {
    const user = (await this.findOne(updatePasswordDto.id)) as UserDto
    if (!compareSync(updatePasswordDto.oldPassword, user.password)) {
      throw new BadRequestException('Senha inválida')
    }
    return this.userFacade.update(updatePasswordDto)
  }

  @Put()
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.userFacade.update(updateUserDto)
  }

  @Delete('bulk')
  removeBulk(@Query('ids') ids: string[]) {
    return this.userFacade.removeBulk(ids)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userFacade.remove(id)
  }
}
