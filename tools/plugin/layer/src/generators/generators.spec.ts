import {createTreeWithEmptyWorkspace} from '@nx/devkit/testing'
import {Tree, formatFiles, readProjectConfiguration} from '@nx/devkit'
import {DomainGeneratorSchema} from './domain/schema'
import {DataSourceGeneratorSchema} from './data-source/schema'
import {ResourceGeneratorSchema} from './resource/schema'
import {DataAccessGeneratorSchema} from './data-access/schema'
import {FeatureGeneratorSchema} from './feature/schema'
import domainGenerator from './domain/generator'
import dataSourceGenerator from './data-source/generator'
import resourceGenerator from './resource/generator'
import dataAccessGenerator from './data-access/generator'
import featureGenerator from './feature/generator'

interface Options {
  domain: DomainGeneratorSchema
  dataSource: DataSourceGeneratorSchema
  resource: ResourceGeneratorSchema
  dataAccess: DataAccessGeneratorSchema
  feature: FeatureGeneratorSchema
}

describe('feature generator', () => {
  let tree: Tree

  const options: Options = {
    domain: {
      projectNameAndRootFormat: 'as-provided',
      tags: '',
      name: 'test-domain',
      directory: 'test/domain',
      entity: 'test',
    },
    dataSource: {
      name: 'test-data-source',
      projectNameAndRootFormat: 'as-provided',
      tags: '',
      directory: 'test/data-source',
      entity: 'test',
      domain: 'test-domain',
    },
    dataAccess: {
      name: 'test-data-access',
      projectNameAndRootFormat: 'as-provided',
      tags: '',
      directory: 'test/data-access',
      entity: 'test',
      domain: 'test-domain',
    },
    resource: {
      name: 'test-resource',
      projectNameAndRootFormat: 'as-provided',
      tags: '',
      directory: 'test/resource',
      entity: 'test',
      dataSource: 'test-data-source',
    },
    feature: {
      name: 'test-feature',
      projectNameAndRootFormat: 'as-provided',
      tags: '',
      directory: 'test/feature',
      entity: 'test',
      dataAccess: 'test-data-access',
    },
  }

  beforeAll(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should generate domain library', async () => {
    await domainGenerator(tree, options.domain)
    const config = readProjectConfiguration(tree, options.domain.name)
    expect(config).toBeDefined()
  })

  it('should generate data-source library', async () => {
    await dataSourceGenerator(tree, options.dataSource)
    const config = readProjectConfiguration(tree, options.dataSource.name)
    expect(config).toBeDefined()
  })

  it('should generate data-access library', async () => {
    await dataAccessGenerator(tree, options.dataAccess)
    const config = readProjectConfiguration(tree, options.dataAccess.name)
    expect(config).toBeDefined()
  })

  it('should generate resource library', async () => {
    await resourceGenerator(tree, options.resource)
    const config = readProjectConfiguration(tree, options.resource.name)
    expect(config).toBeDefined()
  })

  it('should generate feature library', async () => {
    await featureGenerator(tree, options.feature)
    const config = readProjectConfiguration(tree, options.feature.name)
    expect(config).toBeDefined()
  })

  it('should format without errors', async () => {
    expect(await formatFiles(tree)).toBeUndefined()
  })
})
