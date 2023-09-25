import {
  Tree,
  formatFiles,
  generateFiles,
  readProjectConfiguration,
} from '@nx/devkit'
import {libraryGenerator} from '@nx/js/src/generators/library/library'
import {getProjectImportPath, normalizeSchema} from '../../utilities'
import {DataSourceGeneratorSchema} from './schema'
import {join} from 'node:path'

export async function dataSourceGenerator(
  tree: Tree,
  options: DataSourceGeneratorSchema
) {
  const normalized = normalizeSchema(options, 'data-source', 'server')
  await libraryGenerator(tree, normalized)

  const project = readProjectConfiguration(tree, normalized.name)
  const domain = getProjectImportPath(
    readProjectConfiguration(tree, normalized.domain)
  )
  const template = {...normalized, domain}

  generateFiles(tree, join(__dirname, 'files'), project.sourceRoot, template)

  await formatFiles(tree)
}

export default dataSourceGenerator
