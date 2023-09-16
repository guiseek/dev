import {RailService} from '@dev/learning-domain'
import {RailServiceImpl} from './infrastructure'
import {Http} from '@dev/shared-data-access'
import {RailFacade} from './application'

export function provideRailService() {
  return {
    provide: RailService,
    useFactory(http: Http) {
      return new RailServiceImpl(http, '/api/learning')
    },
    deps: [Http],
  }
}

export function provideRailFacade() {
  return {
    provide: RailFacade,
    deps: [RailService],
  }
}
