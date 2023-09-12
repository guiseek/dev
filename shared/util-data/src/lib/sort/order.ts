import {enumOptions} from '../mapper'

export enum Order {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type OrderLiteral = `${Order}`

export const orderOptions = enumOptions(Order)
