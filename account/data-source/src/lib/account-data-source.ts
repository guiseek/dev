import {
  addEntity,
  provideFacade,
  provideRepository,
  provideRepositoryMock,
} from '@dev/shared-data-source'
import {UserRepository} from '@dev/account-domain'
import {UserRepositoryImpl, UserRepositoryMock} from './infrastructure'
import {UserFacade} from './application'
import {UserImpl} from './entities'

addEntity(UserImpl)

export function provideUserRepository() {
  return provideRepository(UserImpl, UserRepository, UserRepositoryImpl)
}

export function provideUserRepositoryMock() {
  return provideRepositoryMock(UserRepository, UserRepositoryMock, [])
}

export function provideUserFacade() {
  return provideFacade(UserFacade, UserRepository)
}
