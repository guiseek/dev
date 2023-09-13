import {createTreeWithEmptyWorkspace} from '@nx/devkit/testing'
import {Tree, readProjectConfiguration} from '@nx/devkit'

import {domainGenerator} from './generator'
import {DomainGeneratorSchema} from './schema'

describe('domain generator', () => {
  let tree: Tree
  const options: DomainGeneratorSchema = {name: 'test'}

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await domainGenerator(tree, options)
    const config = readProjectConfiguration(tree, 'test')
    expect(config).toBeDefined()
  })
})
