import {ContentBookController} from './content-book.controller'
import {DynamicModule, Module} from '@nestjs/common'
import {ContentResourceController} from './content-resource.controller'
import {
  provideBookFacade,
  provideContentFacade,
  provideBookRepository,
  provideContentRepository,
} from '@dev/content-data-source'

@Module({
  controllers: [ContentBookController, ContentResourceController],
})
export class ContentResourceModule {
  static register(): DynamicModule {
    return {
      module: ContentResourceModule,
      providers: [
        provideContentRepository(),
        provideBookRepository(),
        provideContentFacade(),
        provideBookFacade(),
      ],
      exports: [provideContentFacade()],
    }
  }
}
