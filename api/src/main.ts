import {Logger} from '@nestjs/common'
import {NestFactory} from '@nestjs/core'

import {AppModule} from './app.module'
import {config} from './docs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)

  config(app, 'Dev')

  await app.listen(process.env.PORT ?? 3000)

  Logger.log(`🚀 Running on: ${await app.getUrl()}/${globalPrefix}`)
}

bootstrap()
