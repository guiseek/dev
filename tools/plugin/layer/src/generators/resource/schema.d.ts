import {LibraryGeneratorOptions} from '@nx/nest/src/generators/library/schema'

export interface ResourceGeneratorSchema
  extends Pick<
    LibraryGeneratorOptions,
    | 'name'
    | 'directory'
    | 'projectNameAndRootFormat'
    | 'tags'
    | 'buildable'
    | 'global'
    | 'target'
  > {
  entity: string
  dataSource: string
}
