import {ContentService} from '@dev/content-domain'
import {ContentServiceImpl} from '../infrastructure'
import {Http} from '@dev/shared-data-access'
import {ContentFacade} from '../application'

export function provideContentService() {
  return {
    provide: ContentService,
    useFactory(http: Http) {
      return new ContentServiceImpl(http, '/api/content')
    },
    deps: [Http],
  }
}

export function provideContentFacade() {
  return {
    provide: ContentFacade,
    deps: [ContentService],
  }
}
