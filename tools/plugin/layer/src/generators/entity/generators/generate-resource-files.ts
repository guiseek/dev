import {getExtrasTo, pathShift, pluralize} from '../../../utilities'
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
  const extras = {
    ...getExtrasTo(`${scope}-${name.name}`, 'controller'),
    ...getExtrasTo(pluralize(name.name, 2), 'plural'),
  }
  const sourceFolder = join(__dirname, '..', 'files', 'resource')

  const options = {...name, ...extras, dataSource, scope}
  generateFiles(tree, sourceFolder, project.sourceRoot, options)

  return await formatFiles(tree)
}
