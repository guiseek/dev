import {Book, BookRepository} from '@dev/content-domain'
import {BaseRepository} from '@dev/shared-data-source'

export class BookRepositoryImpl
  extends BaseRepository<Book>
  implements BookRepository
{
  name = 'book'
}
