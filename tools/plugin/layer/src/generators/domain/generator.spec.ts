import {createTreeWithEmptyWorkspace, createTree} from '@nx/devkit/testing'
import {Tree, readProjectConfiguration} from '@nx/devkit'
import {determineProjectNameAndRootOptions} from '@nx/devkit/src/generators/project-name-and-root-utils'

import {domainGenerator} from './generator'
import {DomainGeneratorSchema} from './schema'

describe('domain generator', () => {
  let tree: Tree
  const options: DomainGeneratorSchema = {
    name: 'test-domain',
    directory: 'test/domain',
    entity: 'entity',
    tags: 'scope:test',
    projectNameAndRootFormat: 'as-provided'
  }

  let pnaro

  beforeEach(async () => {
    tree = createTreeWithEmptyWorkspace()
    pnaro = await determineProjectNameAndRootOptions(tree, {
      name: options.name,
      projectType: 'library',
      directory: options.directory,
      callingGenerator: '@nx/js:library',
    })
    // console.log(pnaro)

    // createTree()
  })

  it('should run successfully', async () => {
    // console.log(tree);
    const project = await domainGenerator(tree, options)
    console.log(project)
    // const config = readProjectConfiguration(tree, pnaro.names.)
    expect(project).toBeDefined()
  })
})
