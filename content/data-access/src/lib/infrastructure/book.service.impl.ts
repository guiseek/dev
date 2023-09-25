import {Book, BookService} from '@dev/content-domain'
import {BaseService} from '@dev/shared-data-access'

export class BookServiceImpl extends BaseService<Book> implements BookService {}
