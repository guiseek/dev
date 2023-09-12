import {Test} from '@nestjs/testing'
import {ContentResourceController} from './content-resource.controller'

describe('ContentResourceController', () => {
  let controller: ContentResourceController

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ContentResourceController],
    }).compile()

    controller = module.get(ContentResourceController)
  })

  it('should be defined', () => {
    expect(controller).toBeTruthy()
  })
})
