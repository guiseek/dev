import {PageOptionsDto} from '@dev/shared-data-source'
import {
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
} from '@nestjs/common'

@Controller('content')
export class ContentResourceController {
  constructor(private readonly contentFacade: ContentFacade) {}

  @Get()
  find(@Query() options: PageOptionsDto) {
    return this.contentFacade.find({options})
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentFacade.remove(id)
  }
}
