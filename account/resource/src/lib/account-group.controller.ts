import {PageOptionsDto} from '@dev/shared-data-source'
import {ApiPagedResponse} from '@dev/shared-resource'
import {
  GroupDto,
  GroupFacade,
  CreateGroupDto,
  UpdateGroupDto,
  WhereGroupDto,
} from '@dev/account-data-source'
import {ApiTags} from '@nestjs/swagger'
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

@ApiTags('account/groups')
@Controller('account/groups')
export class AccountGroupController {
  constructor(private readonly groupFacade: GroupFacade) {}

  @Get()
  @ApiPagedResponse(GroupDto)
  find(@Query() options: PageOptionsDto) {
    return this.groupFacade.find({options})
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.groupFacade.findOne(id)
    } catch {
      throw new NotFoundException('Conteúdo não existe')
    }
  }

  @Post('count')
  count(@Body() where: WhereGroupDto) {
    return this.groupFacade.count(where)
  }

  @Post('filter')
  filter(@Body() where: WhereGroupDto, @Query() options: PageOptionsDto) {
    return this.groupFacade.find({where, options})
  }

  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupFacade.create(createGroupDto)
  }

  @Put()
  update(@Body() updateGroupDto: UpdateGroupDto) {
    return this.groupFacade.update(updateGroupDto)
  }

  @Delete('bulk')
  removeBulk(@Query('ids') ids: string[]) {
    return this.groupFacade.removeBulk(ids)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupFacade.remove(id)
  }
}
