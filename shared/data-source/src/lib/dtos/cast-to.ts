import {Type} from '@dev/shared-util-data'
import {plainToClass} from 'class-transformer'

export const castTo =
  <T>(typeOf: Type<T>) =>
  (value: Partial<T> | null) =>
    plainToClass(typeOf, value)
