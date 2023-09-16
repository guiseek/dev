import {PageOptionsDto} from '@dev/shared-data-source'
import {ApiPagedResponse} from '@dev/shared-resource'
import {ApiTags} from '@nestjs/swagger'
import {
  RailDto,
  RailFacade,
  CreateRailDto,
  UpdateRailDto,
  WhereRailDto,
} from '@dev/learning-data-source'
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

@ApiTags('learning')
@Controller('learning')
export class LearningResourceController {
  constructor(private readonly railFacade: RailFacade) {}

  @Get()
  @ApiPagedResponse(RailDto)
  find(@Query() options: PageOptionsDto) {
    return this.railFacade.find({options})
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.railFacade.findOne(id)
    } catch {
      throw new NotFoundException('Conteúdo não existe')
    }
  }

  @Post('count')
  count(@Body() where: WhereRailDto) {
    return this.railFacade.count(where)
  }

  @Post('filter')
  filter(@Body() where: WhereRailDto, @Query() options: PageOptionsDto) {
    return this.railFacade.find({where, options})
  }

  @Post()
  create(@Body() createRailDto: CreateRailDto) {
    return this.railFacade.create(createRailDto)
  }

  @Put()
  update(@Body() updateRailDto: UpdateRailDto) {
    return this.railFacade.update(updateRailDto)
  }

  @Delete('bulk')
  removeBulk(@Query('ids') ids: string[]) {
    return this.railFacade.removeBulk(ids)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.railFacade.remove(id)
  }
}
