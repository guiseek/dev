import {
  addEntity,
  provideFacade,
  provideRepository,
  provideRepositoryMock,
} from '@dev/shared-data-source'
import {GroupRepository} from '@dev/account-domain'
import {GroupRepositoryImpl, GroupRepositoryMock} from '../infrastructure'
import {GroupFacade} from '../application'
import {GroupImpl} from '../entities'

addEntity(GroupImpl)

export function provideGroupRepository() {
  return provideRepository(GroupImpl, GroupRepository, GroupRepositoryImpl)
}

export function provideGroupRepositoryMock() {
  return provideRepositoryMock(GroupRepository, GroupRepositoryMock, [])
}

export function provideGroupFacade() {
  return provideFacade(GroupFacade, GroupRepository)
}
