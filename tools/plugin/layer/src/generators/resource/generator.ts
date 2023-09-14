import {
  Tree,
  names,
  formatFiles,
  generateFiles,
  readProjectConfiguration,
} from '@nx/devkit'
import {libraryGenerator} from '@nx/nest/src/generators/library/library'
import {ResourceGeneratorSchema} from './schema'
import {getProjectImportPath} from '../../utilities'
import {join} from 'node:path'

function normalizeSchema(schema: ResourceGeneratorSchema) {
  const tags = (schema.tags ?? '').split(',').map((t) => t.trim())
  if (!tags.includes('type:resource')) {
    tags.push('type:resource')
  }
  return {...schema, controller: false, tags: tags.join(',')}
}

export async function resourceGenerator(
  tree: Tree,
  options: ResourceGeneratorSchema
) {
  const normalized = normalizeSchema(options)
  await libraryGenerator(tree, normalized)

  const project = readProjectConfiguration(tree, normalized.name)
  const dataSource = getProjectImportPath(
    readProjectConfiguration(tree, normalized.dataSource)
  )
  const name = names(normalized.name)
  const controller = name.fileName
  const controllerName = name.className
  const entity = names(normalized.entity)
  const scope = normalized.directory.split('/').shift() ?? entity.fileName
  const template = {...entity, scope, controller, controllerName, dataSource}
  console.log(template)

  generateFiles(tree, join(__dirname, 'files'), project.sourceRoot, template)

  await formatFiles(tree)
}

export default resourceGenerator
