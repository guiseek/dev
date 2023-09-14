import {Type} from '../types'
import {token} from './token'

const container = new Map<symbol, Type<unknown>[]>()

export function create<N extends string, T>(name: N, ...values: Type<T>[]) {
  const uniqueToken = token(name)
  container.set(uniqueToken, values)
  return {
    token: uniqueToken,
    container,
    add<T>(value: Type<T>) {
      const values = container.get(uniqueToken) ?? []
      container.set(uniqueToken, [...values, value])
    },
    getAll() {
      return container.get(uniqueToken) ?? []
    },
  }
}
