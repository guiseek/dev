import {AuthServiceImpl, AuthServiceMock} from '../infrastructure'
import {AuthService} from '@dev/account-domain'
import {Env, Http} from '@dev/shared-data-access'
import {AuthFacade} from '../application'

export function provideAuthService(url: string) {
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

function getServiceByEnv(level: Env | string, api?: string) {
  switch (level) {
    case 'staging':
    case 'production':
    case 'development':
      return provideAuthService(api as string)
    case 'testing':
    default:
      return provideAuthServiceMock()
  }
}

export function provideAuth(level: Env | string, api?: string) {
  return [getServiceByEnv(level, api), provideAuthFacade()]
}
