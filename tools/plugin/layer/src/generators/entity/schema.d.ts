import {ProjectConfiguration} from '@nx/devkit'

export interface EntityGeneratorSchema {
  name: string
  entity: string
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

interface NormalizedEntityProps {
  name: string
  type: string
}
interface NormalizedEntity {
  name: string
  props: NormalizedEntityProps[]
}

export interface NormalizedEntityGeneratorSchema {
  project: Record<LibraryType, ProjectConfiguration>
  scope: Record<LibraryType, string>
  entity: NormalizedEntity
}
