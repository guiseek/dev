import {ToolsResourceController} from './tools-resource.controller'
import {ToolsResourceService} from './tools-resource.service'
import {Test} from '@nestjs/testing'

describe('ToolsResourceController', () => {
  let controller: ToolsResourceController

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ToolsResourceController],
      providers: [ToolsResourceService],
    }).compile()

    controller = module.get(ToolsResourceController)
  })

  it('should be defined', () => {
    expect(controller).toBeTruthy()
  })
})
