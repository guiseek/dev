import {
  Tree,
  formatFiles,
  generateFiles,
  readProjectConfiguration,
} from '@nx/devkit'
import {libraryGenerator} from '@nx/js/src/generators/library/library'
import {getProjectImportPath, normalizeSchema} from '../../utilities'
import {DataAccessGeneratorSchema} from './schema'
import {join} from 'node:path'

export async function dataAccessGenerator(
  tree: Tree,
  options: DataAccessGeneratorSchema
) {
  const normalized = normalizeSchema(options, 'data-access', 'client')

  await libraryGenerator(tree, normalized)

  const project = readProjectConfiguration(tree, normalized.name)
  const domain = getProjectImportPath(
    readProjectConfiguration(tree, normalized.domain)
  )

  const template = {...normalized, domain}

  generateFiles(tree, join(__dirname, 'files'), project.sourceRoot, template)

  await formatFiles(tree)
}

export default dataAccessGenerator
