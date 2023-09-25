import {CreateBook, UpdateBook} from '../dtos'
import {Service} from '@dev/shared-util-data'
import {Book} from '../entities'
import {Observable} from 'rxjs'

export abstract class BookService extends Service<Book> {
  abstract override create(value: CreateBook): Observable<Book>
  abstract override update(value: UpdateBook): Observable<Book>
}
