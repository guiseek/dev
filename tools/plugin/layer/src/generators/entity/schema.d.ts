import {ProjectConfiguration} from '@nx/devkit'

export interface EntityGeneratorSchema {
  name: string
  domain: string
  dataSource: string
  dataAccess: string
  resource: string
  feature: string
}

type LibraryType =
  | 'domain'
  | 'dataSource'
  | 'dataAccess'
  | 'resource'
  | 'feature'

export interface NormalizedEntityGeneratorSchema {
  project: Record<LibraryType, ProjectConfiguration>
  scope: Record<LibraryType, string>
}
