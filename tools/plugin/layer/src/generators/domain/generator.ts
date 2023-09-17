import {
  Tree,
  formatFiles,
  generateFiles,
  readProjectConfiguration,
} from '@nx/devkit'
import {libraryGenerator} from '@nx/js/src/generators/library/library'
import {normalizeSchema} from '../../utilities'
import {DomainGeneratorSchema} from './schema'
import {join} from 'node:path'

export async function domainGenerator(
  tree: Tree,
  options: DomainGeneratorSchema
) {
  const normalized = normalizeSchema(options, 'domain', 'both')

  await libraryGenerator(tree, normalized)

  const {sourceRoot} = readProjectConfiguration(tree, normalized.name)

  generateFiles(tree, join(__dirname, 'files'), sourceRoot, normalized)

  await formatFiles(tree)
}

export default domainGenerator
