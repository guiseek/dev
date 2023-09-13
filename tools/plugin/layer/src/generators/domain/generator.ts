import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  readProjectConfiguration,
} from '@nx/devkit'
import {libraryGenerator} from '@nx/js/src/generators/library/library'
import {join} from 'node:path'
import {DomainGeneratorSchema} from './schema'

function normalizeSchema(schema: DomainGeneratorSchema) {
  const tags = (schema.tags ?? '').split(',').map((t) => t.trim())
  if (!tags.includes('type:domain')) {
    tags.push('type:domain')
  }
  return {...schema, tags: tags.join(',')}
}

export async function domainGenerator(
  tree: Tree,
  options: DomainGeneratorSchema
) {
  const normalized = normalizeSchema(options)
  await libraryGenerator(tree, normalized)

  const {sourceRoot} = readProjectConfiguration(tree, normalized.name)

  const entity = names(normalized.entity)

  generateFiles(tree, join(__dirname, 'files'), sourceRoot, entity)

  await formatFiles(tree)
}

export default domainGenerator
