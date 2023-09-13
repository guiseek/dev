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
