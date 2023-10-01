import {Fn} from '@dev/shared-util-data'
import {Env, ProvideSvc} from './types'
import {Loader} from './application'
import {Http} from './ports'

export function provideHttp<T>(http: T) {
  return {
    provide: Http,
    useClass: http,
  }
}

export function provideLoader() {
  return {
    provide: Loader,
  }
}

export function provideByEnv<T>(
  prod: ProvideSvc<T | unknown>,
  dev: ProvideSvc<T> | Fn,
  ...others: ReturnType<ProvideSvc<unknown>>[]
) {
  return (level: Env | string, api: string | unknown[]) => {
    switch (level) {
      case 'staging':
      case 'production':
      case 'development':
        return [prod(api as string), ...others]
      case 'testing':
      default:
        return [dev(api as T[] | void), ...others]
    }
  }
}
