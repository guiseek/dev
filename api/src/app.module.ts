import {Module} from '@nestjs/common'

import {ContentResourceModule} from '@dev/content-resource'
import {AccountResourceModule} from '@dev/account-resource'
import {SharedResourceModule} from '@dev/shared-resource'
import {ContentImpl} from '@dev/content-data-source'
import {env} from './envs/env'
import { UserImpl } from '@dev/account-data-source'

@Module({
  imports: [
    SharedResourceModule.forRoot(env(ContentImpl, UserImpl)),
    ContentResourceModule.register(),
    AccountResourceModule.register(),
  ],
})
export class AppModule {}
