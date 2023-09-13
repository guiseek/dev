import {createTreeWithEmptyWorkspace} from '@nx/devkit/testing'
import {Tree, readProjectConfiguration} from '@nx/devkit'

import {dataSourceGenerator} from './generator'
import {DataSourceGeneratorSchema} from './schema'

describe('data-source generator', () => {
  let tree: Tree
  const options: DataSourceGeneratorSchema = {name: 'test'}

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await dataSourceGenerator(tree, options)
    const config = readProjectConfiguration(tree, 'test')
    expect(config).toBeDefined()
  })
})
