import {ContentService} from '@dev/content-domain'
import {ContentServiceImpl} from './infrastructure'
import {Http} from '@dev/shared-data-access'
import {ContentFacade} from './application'

export function provideContentService() {
  return {
    provide: ContentService,
    useClass: ContentServiceImpl,
    deps: [Http],
  }
}

export function provideContentFacade() {
  return {
    provide: ContentFacade,
    deps: [ContentService],
  }
}
