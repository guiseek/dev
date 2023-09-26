import {BookServiceImpl, BookServiceMock} from '../infrastructure'
import {Http, provideServiceMock} from '@dev/shared-data-access'
import {Book, BookService} from '@dev/content-domain'
import {BookFacade} from '../application'

export function provideBookService(api: string) {
  return {
    provide: BookService,
    useFactory(http: Http) {
      return new BookServiceImpl(http, api)
    },
    deps: [Http],
  }
}

export function provideBookServiceMock(collection: Book[] = []) {
  return provideServiceMock(BookService, BookServiceMock, collection)
}

export function provideBookFacade() {
  return {
    provide: BookFacade,
    deps: [BookService],
  }
}

export function provideBook(production = false, api: string | Book[] = []) {
  const providers = []
  providers.push(
    production
      ? provideBookService(api as string)
      : provideBookServiceMock(api as Book[])
  )

  providers.push(provideBookFacade())
  return providers
}
