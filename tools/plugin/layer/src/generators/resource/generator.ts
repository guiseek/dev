import {
  Tree,
  formatFiles,
  generateFiles,
  readProjectConfiguration,
} from '@nx/devkit'
import {libraryGenerator} from '@nx/nest/src/generators/library/library'
import {
  getProjectImportPath,
  getTemplateExtras,
  normalizeSchema,
} from '../../utilities'
import {ResourceGeneratorSchema} from './schema'
import {join} from 'node:path'

export async function resourceGenerator(
  tree: Tree,
  options: ResourceGeneratorSchema
) {
  const normalized = normalizeSchema(options, 'resource', 'server')

  await libraryGenerator(tree, normalized)

  const project = readProjectConfiguration(tree, normalized.name)

  const extras = getTemplateExtras(options, 'controller')

  const dataSource = getProjectImportPath(
    readProjectConfiguration(tree, normalized.dataSource)
  )

  const template = {...normalized, ...extras, dataSource}

  generateFiles(tree, join(__dirname, 'files'), project.sourceRoot, template)

  await formatFiles(tree)
}

export default resourceGenerator
