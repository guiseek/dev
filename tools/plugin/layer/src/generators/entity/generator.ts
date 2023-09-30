import {EntityGeneratorSchema, NormalizedEntityGeneratorSchema} from './schema'
import {Tree, names, readProjectConfiguration} from '@nx/devkit'
import {getProjectImportPath} from '../../utilities'
import {
  generateDataAccessFiles,
  generateDataSourceFiles,
  generateDomainFiles,
  generateFeatureFiles,
  generateResourceFiles,
} from './generators'
import {readEntity} from './utilities'

function normalizeSchema(
  tree: Tree,
  options: EntityGeneratorSchema
): NormalizedEntityGeneratorSchema {
  const project = {
    domain: readProjectConfiguration(tree, options.domain),
    dataSource: readProjectConfiguration(tree, options.dataSource),
    dataAccess: readProjectConfiguration(tree, options.dataAccess),
    resource: readProjectConfiguration(tree, options.resource),
    feature: readProjectConfiguration(tree, options.feature),
  }

  const scope = {
    domain: getProjectImportPath(project.domain),
    dataSource: getProjectImportPath(project.dataSource),
    dataAccess: getProjectImportPath(project.dataAccess),
    resource: getProjectImportPath(project.resource),
    feature: getProjectImportPath(project.feature),
  }

  const entity = readEntity(tree, options.entity)

  return {project, entity, scope}
}

export async function entityGenerator(
  tree: Tree,
  options: EntityGeneratorSchema
) {
  const name = names(options.name)

  const {project, entity, scope} = normalizeSchema(tree, options)
  await generateDomainFiles(tree, project.domain, name, entity)
  await generateDataSourceFiles(
    tree,
    project.dataSource,
    name,
    scope.domain,
    entity
  )
  await generateDataAccessFiles(
    tree,
    project.dataAccess,
    name,
    scope.domain,
    entity
  )
  await generateResourceFiles(tree, project.resource, name, scope.dataSource)
  await generateFeatureFiles(
    tree,
    project.feature,
    name,
    scope.dataAccess,
    entity
  )
}

export default entityGenerator
