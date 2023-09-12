import {Http} from './ports'

export function provideHttp<T>(http: T) {
  return {
    provide: Http,
    useClass: http,
  }
}
