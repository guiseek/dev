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

  return {project, scope}
}

export async function entityGenerator(
  tree: Tree,
  options: EntityGeneratorSchema
) {
  const name = names(options.name)

  const {project, scope} = normalizeSchema(tree, options)

  await generateDomainFiles(tree, project.domain, name)
  await generateDataSourceFiles(tree, project.dataSource, name, scope.domain)
  await generateDataAccessFiles(tree, project.dataAccess, name, scope.domain)
  await generateResourceFiles(tree, project.resource, name, scope.dataSource)
  await generateFeatureFiles(tree, project.feature, name, scope.dataAccess)
}

export default entityGenerator
