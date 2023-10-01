import {
  provideDataConfig,
  provideDataSource,
  provideJwtConfig,
} from '@dev/shared-data-source'
import {DynamicModule, Global, Module} from '@nestjs/common'
import {HttpExceptionFilter} from './exceptions/http'
import {APP_FILTER} from '@nestjs/core'
import {SharedResourceConfig} from './shared-resource.config'

@Global()
@Module({})
export class SharedResourceModule {
  static forRoot(config: SharedResourceConfig): DynamicModule {
    return {
      module: SharedResourceModule,
      providers: [
        provideDataConfig(config.data),
        provideDataSource(),
        provideJwtConfig(config.jwt),
        {
          provide: APP_FILTER,
          useClass: HttpExceptionFilter,
        },
      ],
      exports: [
        provideDataConfig(config.data),
        provideDataSource(),
        provideJwtConfig(config.jwt),
      ],
    }
  }
}
