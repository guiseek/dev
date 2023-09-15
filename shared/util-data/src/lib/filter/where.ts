import {Where} from '../types'

export function where<T>(where: Where<T>) {
  return (entity: T) => {
    Object.entries(where)
      .filter(([, val]) => val)
      .some(([key, val]) => entity[key as keyof T] === val)
  }
}
