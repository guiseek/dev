import {Module} from '@nestjs/common'

import {ContentResourceModule} from '@dev/content-resource'
import {AccountResourceModule} from '@dev/account-resource'
import {SharedResourceModule} from '@dev/shared-resource'
import {getAllEntities} from '@dev/shared-data-source'
import {env} from './envs/env'

@Module({
  imports: [
    SharedResourceModule.forRoot(env(getAllEntities())),
    ContentResourceModule.register(),
    AccountResourceModule.register(),
  ],
})
export class AppModule {}
