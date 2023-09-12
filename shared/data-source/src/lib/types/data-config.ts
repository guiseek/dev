import {DataSourceOptions} from 'typeorm'

export type DataConfig = DataSourceOptions & {
  type: string
}
