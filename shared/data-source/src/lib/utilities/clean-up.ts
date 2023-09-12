import {Where} from '@dev/shared-util-data'

export const cleanUp = <T>(where: Where<T>): Where<T> =>
  Object.entries(where)
    .filter(([, val]) => val)
    .reduce((prev, [key, val]) => ({...prev, ...{[key]: val}}), {})
