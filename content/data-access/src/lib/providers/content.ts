import {ContentServiceImpl, ContentServiceMock} from '../infrastructure'
import {Http, provideServiceMock} from '@dev/shared-data-access'
import {Content, ContentService} from '@dev/content-domain'
import {ContentFacade} from '../application'

export function provideContentService(api: string) {
  return {
    provide: ContentService,
    useFactory(http: Http) {
      return new ContentServiceImpl(http, api)
    },
    deps: [Http],
  }
}

export function provideContentServiceMock(collection: Content[] = []) {
  return provideServiceMock(ContentService, ContentServiceMock, collection)
}

export function provideContentFacade() {
  return {
    provide: ContentFacade,
    deps: [ContentService],
  }
}

export function provideContent(
  production = false,
  api: string | Content[] = []
) {
  const providers = []
  providers.push(
    production
      ? provideContentService(api as string)
      : provideContentServiceMock(api as Content[])
  )

  providers.push(provideContentFacade())
  return providers
}
