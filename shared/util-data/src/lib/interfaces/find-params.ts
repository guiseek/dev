import {Where} from '../types'
import {PageOptions} from './page-options'

export interface FindParams<T> {
  options?: PageOptions
  where?: Where<T>
}
