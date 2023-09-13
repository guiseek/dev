import {
  DataConfig,
  provideDataConfig,
  provideDataSource,
} from '@dev/shared-data-source'
import {DynamicModule, Global, Module} from '@nestjs/common'
import {HttpExceptionFilter} from './exceptions/http'
import {APP_FILTER} from '@nestjs/core'

@Global()
@Module({})
export class SharedResourceModule {
  static forRoot(config: DataConfig): DynamicModule {
    return {
      module: SharedResourceModule,
      providers: [
        provideDataConfig(config),
        provideDataSource(),
        {
          provide: APP_FILTER,
          useClass: HttpExceptionFilter,
        },
      ],
      exports: [provideDataConfig(config), provideDataSource()],
    }
  }
}
