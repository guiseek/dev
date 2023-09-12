import {
  DataConfig,
  provideDataConfig,
  provideDataSource,
} from '@dev/shared-data-source'
import {DynamicModule, Global, Module} from '@nestjs/common'

@Global()
@Module({})
export class SharedResourceModule {
  static forRoot(config: DataConfig): DynamicModule {
    return {
      module: SharedResourceModule,
      providers: [provideDataConfig(config), provideDataSource()],
      exports: [provideDataConfig(config), provideDataSource()],
    }
  }
}
