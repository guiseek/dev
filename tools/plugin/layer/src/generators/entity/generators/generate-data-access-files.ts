import {addExport, pathShift} from '../../../utilities'
import {Name} from '../../../interfaces'
import {join} from 'path'
import {
  Tree,
  formatFiles,
  generateFiles,
  ProjectConfiguration,
} from '@nx/devkit'

export async function generateDataAccessFiles(
  tree: Tree,
  project: ProjectConfiguration,
  name: Name,
  domain: string
) {
  const sourceFolder = join(__dirname, '..', 'files', 'data-access')
  const scope = pathShift(project.sourceRoot)
  generateFiles(tree, sourceFolder, project.sourceRoot, {
    ...name,
    scope,
    domain,
  })

  /* Application */
  {
    const sourceFile = join(
      project.sourceRoot,
      'lib',
      'application',
      'index.ts'
    )
    addExport(tree, sourceFile, `./${name.fileName}.facade`)
  }

  /* DTOs */
  {
    const sourceFile = join(project.sourceRoot, 'lib', 'dtos', 'index.ts')
    const files = [
      `./${name.fileName}`,
      `./create-${name.fileName}`,
      `./update-${name.fileName}`,
    ]
    addExport(tree, sourceFile, ...files)
  }

  /* Infrastructure */
  {
    const sourceFile = join(
      project.sourceRoot,
      'lib',
      'infrastructure',
      'index.ts'
    )
    const files = [`./${name.fileName}.service.impl`]
    addExport(tree, sourceFile, ...files)
  }

  /* Providers */
  {
    const sourceFile = join(project.sourceRoot, 'lib', 'providers', 'index.ts')
    addExport(tree, sourceFile, `./${name.fileName}`)
  }

  return await formatFiles(tree)
}
