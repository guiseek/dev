import {names} from '@nx/devkit'
import {LayerSchema} from '../interfaces'

export function getTemplateExtras<T extends LayerSchema>(
  schema: T,
  key: string
) {
  const name = names(schema.name)
  return {
    [`${key}Prop`]: name.propertyName,
    [`${key}Name`]: name.className,
    [key]: name.fileName,
  }
}
