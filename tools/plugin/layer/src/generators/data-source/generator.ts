import {
  Tree,
  names,
  formatFiles,
  generateFiles,
  readProjectConfiguration,
} from '@nx/devkit'
import {libraryGenerator} from '@nx/js/src/generators/library/library'
import {join} from 'node:path'
import {DataSourceGeneratorSchema} from './schema'
import {getProjectImportPath} from '../../utilities'

function normalizeSchema(schema: DataSourceGeneratorSchema) {
  const tags = (schema.tags ?? '').split(',').map((t) => t.trim())
  if (!tags.includes('type:data-source')) {
    tags.push('type:data-source')
  }
  return {...schema, tags: tags.join(',')}
}

export async function dataSourceGenerator(
  tree: Tree,
  options: DataSourceGeneratorSchema
) {
  const normalized = normalizeSchema(options)
  await libraryGenerator(tree, normalized)

  const project = readProjectConfiguration(tree, normalized.name)
  const domain = getProjectImportPath(
    readProjectConfiguration(tree, normalized.domain)
  )
  const entity = names(normalized.entity)
  const scope = normalized.directory.split('/').shift() ?? entity.fileName
  const template = {...entity, scope, domain}

  generateFiles(tree, join(__dirname, 'files'), project.sourceRoot, template)
  await formatFiles(tree)
}

export default dataSourceGenerator
