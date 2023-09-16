import {Test} from '@nestjs/testing'
import {LearningResourceController} from './learning-resource.controller'
import {
  provideRailFacade,
  provideRailRepositoryMock,
} from '@dev/learning-data-source'

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

describe('LearningResourceController', () => {
  let controller: LearningResourceController

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [provideRailRepositoryMock(), provideRailFacade()],
      controllers: [LearningResourceController],
    }).compile()

    controller = module.get(LearningResourceController)
  })

  it('should be defined', () => {
    expect(controller).toBeTruthy()
  })

  it('should be return rail collection', async () => {
    const rails = await controller.find({page: 1, take: 10, skip: 0})
    expect(rails).toEqual(CASES.empty)
  })
})
