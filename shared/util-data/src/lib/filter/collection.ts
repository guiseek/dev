import {Where} from '../types'

type SortOrder = 'ASC' | 'DESC'

type Order<T extends object> = {
  [K in keyof T]: SortOrder
}

export class Collection<T extends object> extends Array<T> {
  constructor(...items: T[]) {
    super(...items)
  }

  order(params: Order<T>) {
    return this.sort((a, b) => {
      return Object.entries(params)
        .map(([key, direction]) => {
          const valueA = a[key as keyof T]
          const valueB = b[key as keyof T]

          if (direction === 'ASC') {
            if (valueA < valueB) return -1
            if (valueA > valueB) return 1
            return 0
          } else {
            if (valueA > valueB) return -1
            if (valueA < valueB) return 1
            return 0
          }
        })
        .reduce((prev, curr) => (prev > curr ? 1 : -1))
    })
  }

  findOneBy<K extends keyof T>(key: K, value: T[K]) {
    return this.find((item) => item[key] === value)
  }

  where(params: Where<T>) {
    return this.filter((entity) => {
      return Object.entries(params)
        .filter(([, val]) => val)
        .some(([key, val]) => entity[key as keyof T] === val)
    })
  }
}
