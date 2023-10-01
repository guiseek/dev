import {addExport} from '../../../utilities'
import {NormalizedEntity} from '../schema'
import {Name} from '../../../interfaces'
import {join} from 'path'
import {
  Tree,
  formatFiles,
  generateFiles,
  ProjectConfiguration,
} from '@nx/devkit'

export async function generateDataSourceFiles(
  tree: Tree,
  project: ProjectConfiguration,
  name: Name,
  domain: string,
  entity: NormalizedEntity
) {
  const sourceFolder = join(__dirname, '..', 'files', 'data-source')

  generateFiles(tree, sourceFolder, project.sourceRoot, {
    ...name,
    entity,
    domain,
  })

  {
    const sourceFile = join(
      project.sourceRoot,
      'lib',
      'application',
      'index.ts'
    )
    addExport(tree, sourceFile, `./${name.fileName}.facade`)
  }

  {
    const sourceFile = join(project.sourceRoot, 'lib', 'dtos', 'index.ts')
    const files = [
      `./${name.fileName}`,
      `./create-${name.fileName}`,
      `./update-${name.fileName}`,
      `./where-${name.fileName}`,
    ]
    addExport(tree, sourceFile, ...files)
  }

  {
    const sourceFile = join(project.sourceRoot, 'lib', 'entities', 'index.ts')
    addExport(tree, sourceFile, `./${name.fileName}.impl`)
  }

  {
    const sourceFile = join(
      project.sourceRoot,
      'lib',
      'infrastructure',
      'index.ts'
    )
    const files = [
      `./${name.fileName}.repository.impl`,
      `./${name.fileName}.repository.mock`,
    ]
    addExport(tree, sourceFile, ...files)
  }

  {
    const sourceFile = join(project.sourceRoot, 'lib', 'providers', 'index.ts')
    addExport(tree, sourceFile, `./${name.fileName}`)
  }

  return await formatFiles(tree)
}
