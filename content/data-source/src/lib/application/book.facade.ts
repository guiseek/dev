import {Book, BookRepository} from '@dev/content-domain'
import {DataSourceFacade} from '@dev/shared-data-source'
import {CreateBookDto, UpdateBookDto} from '../dtos'

export class BookFacade extends DataSourceFacade<Book> {
  constructor(repository: BookRepository) {
    super(repository)
  }

  create(value: CreateBookDto) {
    return this.repository.create(value)
  }

  update(value: UpdateBookDto) {
    return this.repository.update(value)
  }
}
