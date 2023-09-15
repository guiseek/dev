import {
  DataToken,
  DataConfig,
  provideDataConfig,
  provideDataSource,
} from '@dev/shared-data-source'
import {DynamicModule, Global, Module} from '@nestjs/common'

@Global()
@Module({})
export class TypeOrmModule {
  static forRoot(config: DataConfig, db?: DataToken): DynamicModule {
    return {
      module: TypeOrmModule,
      providers: [provideDataConfig(config, db), provideDataSource(db)],
      exports: [provideDataConfig(config, db), provideDataSource(db)],
    }
  }
}
