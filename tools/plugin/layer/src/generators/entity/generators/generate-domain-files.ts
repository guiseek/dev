import {addExport} from '../../../utilities'
import {Name} from '../../../interfaces'
import {join} from 'path'
import {
  Tree,
  formatFiles,
  generateFiles,
  ProjectConfiguration,
} from '@nx/devkit'
import {NormalizedEntity} from '../schema'

export async function generateDomainFiles(
  tree: Tree,
  project: ProjectConfiguration,
  name: Name,
  entity: NormalizedEntity
) {
  const sourceFolder = join(__dirname, '..', 'files', 'domain')
  generateFiles(tree, sourceFolder, project.sourceRoot, {...name, entity})

  {
    const sourceFile = join(project.sourceRoot, 'lib', 'dtos', 'index.ts')
    const files = [`./create-${name.fileName}`, `./update-${name.fileName}`]
    addExport(tree, sourceFile, ...files)
  }

  {
    const sourceFile = join(project.sourceRoot, 'lib', 'ports', 'index.ts')
    const files = [
      `./${name.fileName}.repository`,
      `./${name.fileName}.service`,
    ]
    addExport(tree, sourceFile, ...files)
  }

  return await formatFiles(tree)
}
