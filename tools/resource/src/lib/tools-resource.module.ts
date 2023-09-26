import {DynamicModule, Module} from '@nestjs/common'
import {ToolsResourceController} from './tools-resource.controller'
import {ToolsResourceService} from './tools-resource.service'

@Module({
  controllers: [ToolsResourceController],
  providers: [ToolsResourceService],
})
export class ToolsResourceModule {
  static register(): DynamicModule {
    return {
      module: ToolsResourceModule,
    }
  }
}
