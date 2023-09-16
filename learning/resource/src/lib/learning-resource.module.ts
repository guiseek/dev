import {DynamicModule, Module} from '@nestjs/common'
import {LearningResourceController} from './learning-resource.controller'
import {
  provideRailFacade,
  provideRailRepository,
} from '@dev/learning-data-source'

@Module({
  controllers: [LearningResourceController],
})
export class LearningResourceModule {
  static register(): DynamicModule {
    return {
      module: LearningResourceModule,
      providers: [provideRailRepository(), provideRailFacade()],
      exports: [provideRailFacade()],
    }
  }
}
