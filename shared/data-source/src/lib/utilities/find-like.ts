import {Where} from '@dev/shared-util-data'
import {ILike} from 'typeorm'

export const findLike = <T>(where: Where<T>) =>
  Object.entries(where)
    .filter(([, val]) => val)
    .reduce(
      (prev, [key, val]) => ({...prev, ...{[key]: ILike(`%${val}%`)}}),
      {}
    )
