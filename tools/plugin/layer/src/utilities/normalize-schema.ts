import {LayerSchema} from '../interfaces'
import {LibLayer, LibSide} from '../types'
import {startsWithFn} from './starts-with'
import {pathShift} from './path-shift'
import {splitTags} from './split-tags'
import {names} from '@nx/devkit'

export function normalizeSchema<T extends LayerSchema>(
  schema: T,
  layer: LibLayer,
  side: LibSide
) {
  const name = schema.name
  const entity = names(schema.entity)
  const scope = pathShift(schema.directory, entity.fileName)

  const tags = splitTags(schema.tags)

  const hasType = tags.some(startsWithFn('type'))
  if (!hasType) tags.push(`type:${layer}`)

  const hasScope = tags.some(startsWithFn('scope'))
  if (!hasScope) tags.push(`scope:${scope}`)

  const hasSide = tags.some(startsWithFn('side'))
  if (!hasSide) tags.push(`side:${side}`)

  return {...schema, ...entity, name, scope, tags: tags.join(',')}
}
