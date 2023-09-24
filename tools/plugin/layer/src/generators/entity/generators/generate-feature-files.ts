import {addExport, getExtrasTo, pathShift, pluralize} from '../../../utilities'
import {Name} from '../../../interfaces'
import {join} from 'path'
import {
  Tree,
  formatFiles,
  generateFiles,
  ProjectConfiguration,
} from '@nx/devkit'

export async function generateFeatureFiles(
  tree: Tree,
  project: ProjectConfiguration,
  name: Name,
  dataAccess: string
) {
  const extras = {
    ...getExtrasTo(name.name, 'feature'),
    ...getExtrasTo(pluralize(name.name, 2), 'plural'),
  }
  const sourceFolder = join(__dirname, '..', 'files', 'feature')

  generateFiles(tree, sourceFolder, project.sourceRoot, {
    ...name,
    ...extras,
    dataAccess,
  })

  /* Components */
  {
    const sourceFile = join(project.sourceRoot, 'lib', 'components', 'index.ts')
    const files = [
      `./create-${name.fileName}/create-${name.fileName}.dialog`,
      `./update-${name.fileName}/update-${name.fileName}.dialog`,
    ]
    addExport(tree, sourceFile, ...files)
  }

  /* Containers */
  {
    const sourceFile = join(project.sourceRoot, 'lib', 'containers', 'index.ts')
    const files = [`./${extras.plural}/${extras.plural}.container`]
    addExport(tree, sourceFile, ...files)
  }

  /* Forms */
  {
    const sourceFile = join(project.sourceRoot, 'lib', 'forms', 'index.ts')
    const files = [`./create-${name.fileName}`, `./update-${name.fileName}`]
    addExport(tree, sourceFile, ...files)
  }

  return await formatFiles(tree)
}
