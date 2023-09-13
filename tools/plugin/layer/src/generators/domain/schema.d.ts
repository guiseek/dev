import {LibraryGeneratorSchema} from '@nx/js/src/utils/schema'

export interface DomainGeneratorSchema
  extends Pick<
    LibraryGeneratorSchema,
    | 'name'
    | 'directory'
    | 'projectNameAndRootFormat'
    | 'tags'
    | 'testEnvironment'
    | 'buildable'
    | 'bundler'
    | 'minimal'
  > {
  entity: string
}
