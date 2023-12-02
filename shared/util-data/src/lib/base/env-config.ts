import {Type} from '../types'

export type EnvInject<Scope extends object> = {
  [K in keyof Scope]: Type<Scope[K]>
}

export interface EnvConfig<T extends object = object> {
  production: boolean
  level: string
  inject: EnvInject<T>
  api: {
    account: string | unknown[]
    accountAuth: string | unknown[]
    accountGroups: string | unknown[]
  }
}
