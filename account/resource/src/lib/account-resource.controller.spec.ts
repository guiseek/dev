import {Test} from '@nestjs/testing'
import {AccountResourceController} from './account-resource.controller'
import {
  provideCreateUserUseCases,
  provideCryptoService,
  provideGroupFacade,
  provideGroupRepositoryMock,
  provideUserFacade,
  provideUserRepositoryMock,
} from '@dev/account-data-source'

const CASES = {
  empty: {
    data: [],
    meta: {
      hasNextPage: false,
      hasPreviousPage: false,
      itemCount: 0,
      page: 1,
      pageCount: 0,
      take: 10,
    },
  },
}

describe('AccountResourceController', () => {
  let controller: AccountResourceController

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        provideUserRepositoryMock(),
        provideGroupRepositoryMock(),
        provideUserFacade(),
        provideCreateUserUseCases(),
        provideUserFacade(),
        provideGroupFacade(),
        provideCryptoService(),
      ],
      controllers: [AccountResourceController],
    }).compile()

    controller = module.get(AccountResourceController)
  })

  it('should be defined', () => {
    expect(controller).toBeTruthy()
  })

  it('should be return user collection', async () => {
    const users = await controller.find({page: 1, take: 10, skip: 0})
    expect(users).toEqual(CASES.empty)
  })
})
