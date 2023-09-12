import {provideFacade, provideRepository} from '@dev/shared-data-source'
import {ContentRepository} from '@dev/content-domain'
import {ContentRepositoryImpl} from './infrastructure'
import {ContentFacade} from './application'
import {ContentImpl} from './entities'

export function provideContentRepository() {
  return provideRepository(
    ContentImpl,
    ContentRepository,
    ContentRepositoryImpl
  )
}
export function provideContentFacade() {
  return provideFacade(ContentFacade, ContentRepository)
}
