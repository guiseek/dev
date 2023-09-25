import {Rail, RailService} from '@dev/learning-domain'
import {RailServiceImpl, RailServiceMock} from '../infrastructure'
import {Http, provideServiceMock} from '@dev/shared-data-access'
import {RailFacade} from '../application'

export function provideRailService(api: string) {
  return {
    provide: RailService,
    useFactory(http: Http) {
      return new RailServiceImpl(http, api)
    },
    deps: [Http],
  }
}

export function provideRailServiceMock(collection: Rail[] = []) {
  return provideServiceMock(RailService, RailServiceMock, collection)
}

export function provideRailFacade() {
  return {
    provide: RailFacade,
    deps: [RailService],
  }
}

export function provideRail(production = false, api: string | Rail[] = []) {
  const providers = []
  providers.push(
    production
      ? provideRailService(api as string)
      : provideRailServiceMock(api as Rail[])
  )
  providers.push(provideRailFacade())
  return providers
}
