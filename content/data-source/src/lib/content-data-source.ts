import {
  addEntity,
  provideFacade,
  provideRepository,
  provideRepositoryMock,
} from '@dev/shared-data-source'
import {ContentRepository} from '@dev/content-domain'
import {ContentRepositoryImpl, ContentRepositoryMock} from './infrastructure'
import {ContentFacade} from './application'
import {ContentImpl} from './entities'

addEntity(ContentImpl)

export function provideContentRepository() {
  return provideRepository(
    ContentImpl,
    ContentRepository,
    ContentRepositoryImpl
  )
}

export function provideContentRepositoryMock() {
  return provideRepositoryMock(ContentRepository, ContentRepositoryMock, [])
}

export function provideContentFacade() {
  return provideFacade(ContentFacade, ContentRepository)
}
