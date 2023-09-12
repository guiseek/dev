import {Module} from '@nestjs/common'

import {ContentResourceModule} from '@dev/content-resource'
import {SharedResourceModule} from '@dev/shared-resource'
import {ContentImpl} from '@dev/content-data-source'
import {env} from './envs/env'

@Module({
  imports: [
    SharedResourceModule.forRoot(env(ContentImpl)),
    ContentResourceModule.register(),
  ],
})
export class AppModule {}
