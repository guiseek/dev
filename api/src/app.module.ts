import {Module} from '@nestjs/common'

import {ContentResourceModule} from '@dev/content-resource'
import {SharedResourceModule} from '@dev/shared-resource'
import {ContentImpl} from '@dev/content-data-source'

@Module({
  imports: [
    SharedResourceModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: 'localhost',
      username: 'postgres',
      password: 'postgres',
      database: 'database',
      synchronize: true,
      entities: [ContentImpl],
      logging: true
    }),
    ContentResourceModule.register(),
  ],
})
export class AppModule {}
