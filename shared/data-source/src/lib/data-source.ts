import {Type, create, token} from '@dev/shared-util-data'
import {DataSource, EntityTarget} from 'typeorm'
import {DataConfig, RepoOf} from './types'

export const {
  container,
  add: addEntity,
  token: entitiesToken,
  getAll: getAllEntities,
} = create('entitiesToken')

const DATA_CONFIG_TOKEN = token('data-config')
const POSTGRES_CONFIG_TOKEN = token('postgres-config')
const MONGO_DB_CONFIG_TOKEN = token('mongo-db-config')

export type DataToken = 'postgres' | 'mongo-db'

export function getDataConfigToken(db?: DataToken) {
  switch (db) {
    case 'mongo-db':
      return MONGO_DB_CONFIG_TOKEN
    case 'postgres':
      return POSTGRES_CONFIG_TOKEN
    default:
      return DATA_CONFIG_TOKEN
  }
}

export function provideDataConfig(dataConfig: DataConfig, db?: DataToken) {
  return {
    provide: getDataConfigToken(db),
    useValue: dataConfig,
  }
}

const DATA_SOURCE_TOKEN = token('data-source')
const POSTGRES_SOURCE_TOKEN = token('postgres-data-source')
const MONGO_DB_SOURCE_TOKEN = token('mongo-db-data-source')

export function getDataSourceToken(db?: DataToken) {
  switch (db) {
    case 'mongo-db':
      return MONGO_DB_SOURCE_TOKEN
    case 'postgres':
      return POSTGRES_SOURCE_TOKEN
    default:
      return DATA_SOURCE_TOKEN
  }
}

export function provideDataSource(db?: DataToken) {
  return {
    provide: getDataSourceToken(db),
    useFactory(config: DataConfig) {
      return new DataSource(config).initialize()
    },
    inject: [getDataConfigToken(db)],
  }
}

export function provideRepository<E extends object, B>(
  entity: EntityTarget<E>,
  base: B,
  impl: RepoOf<E>,
  db?: DataToken
) {
  return {
    provide: base,
    useFactory(dataSource: DataSource) {
      return new impl(dataSource.getRepository(entity))
    },
    inject: [getDataSourceToken(db)],
  }
}

export function provideFacade<F, T>(provide: F, ...inject: T[]) {
  return {
    provide,
    useFactory(repo: T) {
      return new (provide as Type<T>)(repo)
    },
    inject,
  }
}
