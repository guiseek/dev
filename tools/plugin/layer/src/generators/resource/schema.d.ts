import {LibraryGeneratorOptions} from '@nx/nest/src/generators/library/schema'
import {LayerSchema} from '../../interfaces'

export interface ResourceGeneratorSchema
  extends LayerSchema,
    Pick<
      LibraryGeneratorOptions,
      'projectNameAndRootFormat' | 'buildable' | 'global' | 'target'
    > {
  dataSource: string
}
