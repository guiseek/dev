import {Module} from '@nestjs/common'
import {SharedResourceModule} from '@dev/shared-resource'
import {getAllEntities} from '@dev/shared-data-source'
import {env} from './envs/env'

@Module({
  imports: [
    SharedResourceModule.forRoot(env(getAllEntities())),
  ],
})
export class AppModule {}
