import {createTreeWithEmptyWorkspace} from '@nx/devkit/testing'
import {Tree, readProjectConfiguration} from '@nx/devkit'

import {dataAccessGenerator} from './generator'
import {DataAccessGeneratorSchema} from './schema'

describe('data-access generator', () => {
  let tree: Tree
  const options: DataAccessGeneratorSchema = {name: 'test'}

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await dataAccessGenerator(tree, options)
    const config = readProjectConfiguration(tree, 'test')
    expect(config).toBeDefined()
  })
})
