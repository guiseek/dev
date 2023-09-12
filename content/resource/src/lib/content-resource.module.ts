import {DynamicModule, Module} from '@nestjs/common'
import {ContentResourceController} from './content-resource.controller'
import {
  provideContentFacade,
  provideContentRepository,
} from '@dev/content-data-source'

@Module({
  controllers: [ContentResourceController],
})
export class ContentResourceModule {
  static register(): DynamicModule {
    return {
      module: ContentResourceModule,
      providers: [provideContentRepository(), provideContentFacade()],
      exports: [provideContentFacade()],
    }
  }
}
