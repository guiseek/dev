import {DynamicModule, Module} from '@nestjs/common'
import {DashboardResourceController} from './dashboard-resource.controller'


@Module({
  controllers: [DashboardResourceController],
})
export class DashboardResourceModule {
  static register(): DynamicModule {
    return {
      module: DashboardResourceModule,
    }
  }
}
