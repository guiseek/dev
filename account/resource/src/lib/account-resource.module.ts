import {DynamicModule, Module} from '@nestjs/common'
import {JwtModule, JwtService} from '@nestjs/jwt'
import {APP_GUARD} from '@nestjs/core'
import {getJwtConfigToken, JwtConfig} from '@dev/shared-data-source'
import {AccountResourceController} from './account-resource.controller'
import {AccountGroupController} from './account-group.controller'
import {AccountAuthController} from './account-auth.controller'
import {AccountAuthGuard} from './account-auth.guard'
import {
  provideUserFacade,
  provideGroupFacade,
  provideJwtService,
  provideAuthFacade,
  provideCryptoService,
  provideUserRepository,
  provideGroupRepository,
  provideCreateUserUseCases,
  provideSignInUserAccountUseCase,
  provideActivateUserAuthUseCase,
} from '@dev/account-data-source'

@Module({
  controllers: [
    AccountAuthController,
    AccountGroupController,
    AccountResourceController,
  ],
})
export class AccountResourceModule {
  static register(): DynamicModule {
    return {
      module: AccountResourceModule,
      imports: [
        JwtModule.registerAsync({
          useFactory({secret, expiresIn}: JwtConfig) {
            return {global: true, secret, signOptions: {expiresIn}}
          },
          inject: [getJwtConfigToken()],
        }),
      ],
      providers: [
        provideUserRepository(),
        provideGroupRepository(),
        provideCreateUserUseCases(),
        provideUserFacade(),
        provideGroupFacade(),
        provideCryptoService(),
        provideJwtService(JwtService),
        provideSignInUserAccountUseCase(),
        provideActivateUserAuthUseCase(),
        provideAuthFacade(),
        {
          provide: APP_GUARD,
          useClass: AccountAuthGuard,
        },
      ],
      exports: [provideUserFacade(), provideGroupFacade()],
    }
  }
}
