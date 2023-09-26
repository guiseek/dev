import {CreateBook, UpdateBook} from '../dtos'
import {Repository} from '@dev/shared-util-data'
import {Book} from '../entities'

export abstract class BookRepository extends Repository<Book> {
  abstract override create(value: CreateBook): Promise<Book>
  abstract override update(value: UpdateBook): Promise<Book>
}
