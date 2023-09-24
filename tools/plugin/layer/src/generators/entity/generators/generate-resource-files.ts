import {getExtrasTo, pathShift} from '../../../utilities'
import {Name} from '../../../interfaces'
import {join} from 'path'
import {
  Tree,
  formatFiles,
  generateFiles,
  ProjectConfiguration,
} from '@nx/devkit'

export async function generateResourceFiles(
  tree: Tree,
  project: ProjectConfiguration,
  name: Name,
  dataSource: string
) {
  const scope = pathShift(project.sourceRoot)
  const extras = getExtrasTo(`${scope}-${name.name}`, 'controller')
  const sourceFolder = join(__dirname, '..', 'files', 'resource')

  generateFiles(tree, sourceFolder, project.sourceRoot, {
    ...name,
    ...extras,
    dataSource,
    scope,
  })

  return await formatFiles(tree)
}
