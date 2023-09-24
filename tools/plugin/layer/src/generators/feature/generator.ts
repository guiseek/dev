import {
  Tree,
  formatFiles,
  generateFiles,
  readProjectConfiguration,
} from '@nx/devkit'
import {join} from 'node:path'
import {libraryGenerator} from '@nx/angular/generators'
import {FeatureGeneratorSchema} from './schema'
import {
  getProjectImportPath,
  getTemplateExtras,
  normalizeSchema,
  getExtrasTo,
  pluralize,
} from '../../utilities'

export async function featureGenerator(
  tree: Tree,
  options: FeatureGeneratorSchema
) {
  const normalized = normalizeSchema(options, 'feature', 'client')
  await libraryGenerator(tree, normalized)

  const project = readProjectConfiguration(tree, normalized.name)

  const extras = {
    ...getTemplateExtras(options, 'feature'),
    ...getExtrasTo(pluralize(options.entity, 2), 'plural'),
  }

  const dataAccess = getProjectImportPath(
    readProjectConfiguration(tree, normalized.dataAccess)
  )

  const template = {...normalized, ...extras, dataAccess}

  generateFiles(tree, join(__dirname, 'files'), project.sourceRoot, template)

  tree.delete(join(project.sourceRoot, 'lib', 'lib.routes.ts'))

  const indexPath = join(project.sourceRoot, 'index.ts')
  const indexContent = tree.read(indexPath, 'utf8')

  if (indexContent) {
    const indexFile = indexContent.split('\n')
    tree.write(indexPath, indexFile[0])
  }

  const eslintPath = join(project.root, '.eslintrc.json')

  if (tree.exists(eslintPath)) {
    const eslint = JSON.parse(tree.read(eslintPath, 'utf8'))

    if ('overrides' in eslint) {
      eslint.overrides[0].rules['@angular-eslint/component-class-suffix'] = [
        'error',
        {
          suffixes: ['Container', 'Component', 'Dialog'],
        },
      ]
    }

    tree.write(eslintPath, JSON.stringify(eslint))
  }

  await formatFiles(tree)
}

export default featureGenerator
