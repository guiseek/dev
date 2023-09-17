import {LibraryGeneratorSchema} from '@nx/js/src/utils/schema'
import {LayerSchema} from '../../interfaces'

export interface DomainGeneratorSchema
  extends LayerSchema,
    Pick<
      LibraryGeneratorSchema,
      | 'projectNameAndRootFormat'
      | 'testEnvironment'
      | 'buildable'
      | 'bundler'
      | 'minimal'
    > {
  entity: string
}
