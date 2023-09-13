import {createTreeWithEmptyWorkspace} from '@nx/devkit/testing'
import {Tree, readProjectConfiguration} from '@nx/devkit'

import {featureGenerator} from './generator'
import {FeatureGeneratorSchema} from './schema'

describe('feature generator', () => {
  let tree: Tree
  const options: FeatureGeneratorSchema = {name: 'test'}

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await featureGenerator(tree, options)
    const config = readProjectConfiguration(tree, 'test')
    expect(config).toBeDefined()
  })
})
