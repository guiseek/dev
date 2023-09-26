import {Test} from '@nestjs/testing'
import {DashboardResourceController} from './dashboard-resource.controller'

describe('DashboardResourceController', () => {
  let controller: DashboardResourceController

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [DashboardResourceController],
    }).compile()

    controller = module.get(DashboardResourceController)
  })

  it('should be defined', () => {
    expect(controller).toBeTruthy()
  })
})
