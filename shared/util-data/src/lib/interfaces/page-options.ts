import {Order, OrderLiteral} from '../sort/order'

export interface PageOptions {
  readonly order?: Order | OrderLiteral
  readonly sort?: string
  readonly page?: number
  readonly take?: number
  readonly skip?: number
}
