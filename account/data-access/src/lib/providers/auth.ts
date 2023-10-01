import {AuthService} from '@dev/account-domain'
import {AuthServiceImpl} from '../infrastructure'
import {Http} from '@dev/shared-data-access'
import {AuthFacade} from '../application'

export function getAuthService() {
  return AuthService
}

export function provideAuthService(url: string) {
  return {
    provide: getAuthService(),
    useFactory(http: Http) {
      return new AuthServiceImpl(http, url)
    },
    deps: [Http],
  }
}

export function provideAuthFacade() {
  return {
    provide: AuthFacade,
    deps: [getAuthService()],
  }
}

export function provideAuth(url: string) {
  return [provideAuthService(url), provideAuthFacade()]
}
