import {DataConfig, getAllEntities} from '@dev/shared-data-source'
import {Type} from '@dev/shared-util-data'
import {config} from 'dotenv'

config()

export const data = (entities: Type<unknown>[] = []): DataConfig => ({
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

export const env = () => ({
  data: data(getAllEntities()),
  jwt: {
    secret: process.env.JWT_SECRET ?? '',
    expiresIn: 3600 * 24, // 24h
  },
})
