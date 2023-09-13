import {Schema} from '@nx/angular/src/generators/library/schema'

export interface FeatureGeneratorSchema
  extends Pick<
    Schema,
    | 'name'
    | 'directory'
    | 'projectNameAndRootFormat'
    | 'tags'
    | 'prefix'
    | 'routing'
    | 'lazy'
    | 'parent'
    | 'buildable'
    | 'changeDetection'
    | 'style'
  > {
  entity: string
  dataAccess: string
}
