import {DynamicModule, Module} from '@nestjs/common'
import {DashboardResourceController} from './dashboard-resource.controller'
import {
  provideContentFacade,
  provideContentRepository,
} from '@dev/content-data-source'

@Module({
  controllers: [DashboardResourceController],
})
export class DashboardResourceModule {
  static register(): DynamicModule {
    return {
      module: DashboardResourceModule,
      providers: [provideContentRepository(), provideContentFacade()],
      exports: [provideContentFacade()],
    }
  }
}
