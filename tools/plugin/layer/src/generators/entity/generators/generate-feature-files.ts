import {addExport, getExtrasTo, pluralize} from '../../../utilities'
import {componentGenerator} from '@nx/angular/generators'
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

  componentGenerator(tree, {
    name: join('containers', extras.plural),
    project: project.name,
    type: 'container',
    skipTests: true,
    style: 'scss'
  })

  componentGenerator(tree, {
    name: join('components', `create-${name.fileName}`),
    project: project.name,
    skipTests: true,
    type: 'dialog',
    style: 'scss'
  })

  componentGenerator(tree, {
    name: join('components', `update-${name.fileName}`),
    project: project.name,
    skipTests: true,
    type: 'dialog',
    style: 'scss'
  })

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
