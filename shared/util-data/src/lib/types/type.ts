import {Fn} from './fn'

export interface Type<T = any> extends Fn<T> {
  new (...params: any[]): T
}
