import {
  addEntity,
  provideImpl,
  provideDeps,
  provideRepository,
  provideRepositoryMock,
} from '@dev/shared-data-source'
import {
  CryptoService,
  UserRepository,
  CreateUserAccountUseCase,
  JwtService,
} from '@dev/account-domain'
import {
  CryptoServiceImpl,
  UserRepositoryImpl,
  UserRepositoryMock,
} from '../infrastructure'
import {UserFacade} from '../application'
import {UserImpl} from '../entities'
import {Type} from '@dev/shared-util-data'

addEntity(UserImpl)

export function provideUserRepository() {
  return provideRepository(UserImpl, UserRepository, UserRepositoryImpl)
}

export function provideUserRepositoryMock() {
  return provideRepositoryMock(UserRepository, UserRepositoryMock, [])
}

export function provideUserFacade<P>() {
  return provideDeps(UserFacade, UserRepository, CreateUserAccountUseCase) as P
}

export function provideCryptoService<P>() {
  return provideImpl(CryptoService, CryptoServiceImpl) as P
}

export function provideJwtService<S extends JwtService, P>(service: Type<S>) {
  return provideImpl(JwtService, service) as P
}
