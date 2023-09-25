import {PageOptionsDto} from '@dev/shared-data-source'
import {ApiPagedResponse} from '@dev/shared-resource'
import {
  UserDto,
  UserFacade,
  CreateUserDto,
  UpdateUserDto,
  WhereUserDto,
} from '@dev/account-data-source'
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
} from '@nestjs/common'
import {ApiTags} from '@nestjs/swagger'

@ApiTags('account')
@Controller('account')
export class AccountResourceController {
  constructor(private readonly userFacade: UserFacade) {}

  @Get()
  @ApiPagedResponse(UserDto)
  find(@Query() options: PageOptionsDto) {
    return this.userFacade.find({options})
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.userFacade.findOne(id)
    } catch {
      throw new NotFoundException('Usuário não encontrado')
    }
  }

  @Post('filter')
  filter(@Body() where: WhereUserDto, @Query() options: PageOptionsDto) {
    return this.userFacade.find({where, options})
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userFacade.create(createUserDto)
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
