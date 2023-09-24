import {
  addEntity,
  provideFacade,
  provideRepository,
  provideRepositoryMock,
} from '@dev/shared-data-source'
import {RailRepository} from '@dev/learning-domain'
import {RailRepositoryImpl, RailRepositoryMock} from '../infrastructure'
import {RailFacade} from '../application'
import {RailImpl} from '../entities'

addEntity(RailImpl)

export function provideRailRepository() {
  return provideRepository(RailImpl, RailRepository, RailRepositoryImpl)
}

export function provideRailRepositoryMock() {
  return provideRepositoryMock(RailRepository, RailRepositoryMock, [])
}

export function provideRailFacade() {
  return provideFacade(RailFacade, RailRepository)
}
