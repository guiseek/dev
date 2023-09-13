import {LibraryGeneratorSchema} from '@nx/js/src/utils/schema'

export interface DataSourceGeneratorSchema
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
  domain: string
}
