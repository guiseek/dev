import {PageOptionsDto} from '@dev/shared-data-source'
import {ApiPagedResponse} from '@dev/shared-resource'
import {
  ContentDto,
  ContentFacade,
  CreateContentDto,
  UpdateContentDto,
  WhereContentDto,
} from '@dev/content-data-source'
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

@Controller('content')
export class ContentResourceController {
  constructor(private readonly contentFacade: ContentFacade) {
    console.log(contentFacade)
  }

  @Get()
  @ApiPagedResponse(ContentDto)
  find(@Query() options: PageOptionsDto) {
    return this.contentFacade.find({options})
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.contentFacade.findOne(id)
    } catch {
      throw new NotFoundException('Conteúdo não existe')
    }
  }

  @Post('filter')
  filter(@Body() where: WhereContentDto, @Query() options: PageOptionsDto) {
    return this.contentFacade.find({where, options})
  }

  @Post()
  create(@Body() createContentDto: CreateContentDto) {
    return this.contentFacade.create(createContentDto)
  }

  @Put()
  update(@Body() updateContentDto: UpdateContentDto) {
    return this.contentFacade.update(updateContentDto)
  }

  @Delete('bulk')
  removeBulk(@Query('ids') ids: string[]) {
    return this.contentFacade.removeBulk(ids)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentFacade.remove(id)
  }
}
