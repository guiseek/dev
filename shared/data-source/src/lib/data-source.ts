import {DataSource, EntityTarget} from 'typeorm'
import {DataConfig, RepoOf} from './types'
import {Facade, token} from '@dev/shared-util-data'
import {MockRepository} from './infrastructure'

const DATA_CONFIG_TOKEN = token('data-config')

export function getDataConfigToken() {
  return DATA_CONFIG_TOKEN
}

export function provideDataConfig(dataConfig: DataConfig) {
  return {
    provide: getDataConfigToken(),
    useValue: dataConfig,
  }
}

const DATA_SOURCE_TOKEN = token('data-source')

export function getDataSourceToken() {
  return DATA_SOURCE_TOKEN
}

export function provideDataSource() {
  return {
    provide: getDataSourceToken(),
    useFactory(config: DataConfig) {
      return new DataSource(config).initialize()
    },
    inject: [getDataConfigToken()],
  }
}

export function provideRepository<E extends object, B>(
  entity: EntityTarget<E>,
  base: B,
  impl: RepoOf<E>
) {
  return {
    provide: base,
    useFactory(dataSource: DataSource) {
      return new impl(dataSource.getRepository(entity))
    },
    inject: [getDataSourceToken()],
  }
}

export function provideFacade<F, T>(provide: F, ...inject: T[]) {
  return {
    provide,
    useFactory(repo: T) {
      return new (provide as Facade<T>)(repo)
    },
    inject,
  }
}
