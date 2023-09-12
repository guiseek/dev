import {Test} from '@nestjs/testing'
import {ContentResourceController} from './content-resource.controller'
import {
  provideContentFacade,
  provideContentRepositoryMock,
} from '@dev/content-data-source'

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

describe('ContentResourceController', () => {
  let controller: ContentResourceController

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [provideContentRepositoryMock(), provideContentFacade()],
      controllers: [ContentResourceController],
    }).compile()

    controller = module.get(ContentResourceController)
  })

  it('should be defined', () => {
    expect(controller).toBeTruthy()
  })

  it('should be return content collection', async () => {
    const contents = await controller.find({page: 1, take: 10, skip: 0})
    expect(contents).toEqual(CASES.empty)
  })
})
