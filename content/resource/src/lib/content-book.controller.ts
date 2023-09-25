import {PageOptionsDto} from '@dev/shared-data-source'
import {ApiPagedResponse} from '@dev/shared-resource'
import {
  BookDto,
  BookFacade,
  CreateBookDto,
  UpdateBookDto,
  WhereBookDto,
} from '@dev/content-data-source'
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

@ApiTags('content/books')
@Controller('content/books')
export class ContentBookController {
  constructor(private readonly bookFacade: BookFacade) {}

  @Get()
  @ApiPagedResponse(BookDto)
  find(@Query() options: PageOptionsDto) {
    return this.bookFacade.find({options})
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.bookFacade.findOne(id)
    } catch {
      throw new NotFoundException('Conteúdo não existe')
    }
  }

  @Post('count')
  count(@Body() where: WhereBookDto) {
    return this.bookFacade.count(where)
  }

  @Post('filter')
  filter(@Body() where: WhereBookDto, @Query() options: PageOptionsDto) {
    return this.bookFacade.find({where, options})
  }

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookFacade.create(createBookDto)
  }

  @Put()
  update(@Body() updateBookDto: UpdateBookDto) {
    return this.bookFacade.update(updateBookDto)
  }

  @Delete('bulk')
  removeBulk(@Query('ids') ids: string[]) {
    return this.bookFacade.removeBulk(ids)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookFacade.remove(id)
  }
}
