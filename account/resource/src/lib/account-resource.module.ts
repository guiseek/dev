import {DynamicModule, Module} from '@nestjs/common'
import {AccountResourceController} from './account-resource.controller'
import {
  provideUserFacade,
  provideUserRepository,
} from '@dev/account-data-source'

@Module({
  controllers: [AccountResourceController],
})
export class AccountResourceModule {
  static register(): DynamicModule {
    return {
      module: AccountResourceModule,
      providers: [provideUserRepository(), provideUserFacade()],
      exports: [provideUserFacade()],
    }
  }
}
