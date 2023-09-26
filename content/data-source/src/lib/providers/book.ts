import {
  addEntity,
  provideFacade,
  provideRepository,
  provideRepositoryMock,
} from '@dev/shared-data-source'
import {BookRepository} from '@dev/content-domain'
import {BookRepositoryImpl, BookRepositoryMock} from '../infrastructure'
import {BookFacade} from '../application'
import {BookImpl} from '../entities'

addEntity(BookImpl)

export function provideBookRepository() {
  return provideRepository(BookImpl, BookRepository, BookRepositoryImpl)
}

export function provideBookRepositoryMock() {
  return provideRepositoryMock(BookRepository, BookRepositoryMock, [])
}

export function provideBookFacade() {
  return provideFacade(BookFacade, BookRepository)
}
