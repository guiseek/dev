import {Book, BookService} from '@dev/content-domain'
import {MockService} from '@dev/shared-data-access'
import {Observable, of} from 'rxjs'

export class BookServiceMock extends MockService<Book> implements BookService {
  create(value: Partial<Book>): Observable<Book> {
    const entity = {
      ...value,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Book
    this.collection.push(entity)
    return of(entity)
  }
}
