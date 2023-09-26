import {ToolsResourceModule} from '@dev/tools-resource'
import {SharedResourceModule} from '@dev/shared-resource'
import {getAllEntities} from '@dev/shared-data-source'
import {Module} from '@nestjs/common'
import {env} from './envs/env'

@Module({
  imports: [
    SharedResourceModule.forRoot(env(getAllEntities())),
    ToolsResourceModule.register(),
  ],
})
export class AppModule {}
