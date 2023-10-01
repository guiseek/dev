import {AccountResourceModule} from '@dev/account-resource'
import {SharedResourceModule} from '@dev/shared-resource'
import {Module} from '@nestjs/common'
import {env} from './envs/env'

@Module({
  imports: [
    SharedResourceModule.forRoot(env()),
    AccountResourceModule.register(),
  ],
})
export class AppModule {}
