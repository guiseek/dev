import {AuthServiceImpl, AuthServiceMock} from '../infrastructure'
import {Http, provideByEnv} from '@dev/shared-data-access'
import {AuthService} from '@dev/account-domain'
import {AuthFacade} from '../application'

export function provideAuthService(url = '/api') {
  return {
    provide: AuthService,
    useFactory(http: Http) {
      return new AuthServiceImpl(http, url)
    },
    deps: [Http],
  }
}

export function provideAuthServiceMock() {
  return {
    provide: AuthService,
    useClass: AuthServiceMock,
  }
}

export function provideAuthFacade() {
  return {
    provide: AuthFacade,
    deps: [AuthService],
  }
}

export const provideAuth = provideByEnv(
  provideAuthService,
  provideAuthServiceMock,
  provideAuthFacade()
)
