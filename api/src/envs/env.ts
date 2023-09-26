import {DataConfig} from '@dev/shared-data-source'
import {Type} from '@dev/shared-util-data'
import {config} from 'dotenv'

config()

export const env = (entities: Type<unknown>[] = []): DataConfig => ({
  type: 'postgres',
  port: +(process.env.DB_PORT ?? '5432'),
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities,
})