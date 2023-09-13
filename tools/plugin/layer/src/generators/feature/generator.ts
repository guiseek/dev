import {
  Tree,
  names,
  formatFiles,
  generateFiles,
  readProjectConfiguration,
  readJsonFile,
  writeJsonFile,
} from '@nx/devkit'
import {libraryGenerator} from '@nx/angular/generators'
import {FeatureGeneratorSchema} from './schema'
import {getProjectImportPath} from '../../utilities'
import {join} from 'node:path'
import {ESLint} from 'eslint'
import {existsSync} from 'node:fs'

function normalizeSchema(schema: FeatureGeneratorSchema) {
  const tags = (schema.tags ?? '').split(',').map((t) => t.trim())
  if (!tags.includes('type:feature')) {
    tags.push('type:feature')
  }
  return {...schema, tags: tags.join(',')}
}

export async function featureGenerator(
  tree: Tree,
  options: FeatureGeneratorSchema
) {
  const normalized = normalizeSchema(options)
  await libraryGenerator(tree, normalized)

  const project = readProjectConfiguration(tree, normalized.name)
  const dataAccess = getProjectImportPath(
    readProjectConfiguration(tree, normalized.dataAccess)
  )

  const eslintPath = join(project.sourceRoot, '.eslintrc.json')
  if (existsSync(eslintPath)) {
    const eslint = readJsonFile(eslintPath)

    if ('overrides' in eslint) {
      eslint.overrides[0].rules['@angular-eslint/component-class-suffix'] = [
        'error',
        {
          suffixes: ['Container', 'Component', 'Dialog'],
        },
      ]
    }

    writeJsonFile(eslintPath, eslint)
  }

  const name = names(normalized.name)
  const feature = name.fileName
  const featureName = name.className
  const featureProp = name.propertyName
  const entity = names(normalized.entity)
  const scope = normalized.directory.split('/').shift() ?? entity.fileName
  const template = {
    ...entity,
    scope,
    featureProp,
    feature,
    featureName,
    dataAccess,
  }

  console.log(template)

  generateFiles(tree, join(__dirname, 'files'), project.sourceRoot, template)
  await formatFiles(tree)
}

export default featureGenerator
