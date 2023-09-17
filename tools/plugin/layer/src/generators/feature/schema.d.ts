import {Schema} from '@nx/angular/src/generators/library/schema'
import {LayerSchema} from '../../interfaces'

export interface FeatureGeneratorSchema
  extends LayerSchema,
    Pick<
      Schema,
      | 'name'
      | 'projectNameAndRootFormat'
      | 'prefix'
      | 'routing'
      | 'lazy'
      | 'parent'
      | 'buildable'
      | 'changeDetection'
      | 'style'
    > {
  dataAccess: string
}
