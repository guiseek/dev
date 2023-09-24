import {addExport} from '../../../utilities'
import {Name} from '../../../interfaces'
import {join} from 'path'
import {
  Tree,
  formatFiles,
  generateFiles,
  ProjectConfiguration,
} from '@nx/devkit'

export async function generateDomainFiles(
  tree: Tree,
  project: ProjectConfiguration,
  name: Name
) {
  const sourceFolder = join(__dirname, '..', 'files', 'domain')
  generateFiles(tree, sourceFolder, project.sourceRoot, name)

  {
    const sourceFile = join(project.sourceRoot, 'lib', 'entities', 'index.ts')
    addExport(tree, sourceFile, `./${name.fileName}`)
  }

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
