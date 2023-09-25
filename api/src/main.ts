import {Logger, ValidationPipe} from '@nestjs/common'
import {NestFactory} from '@nestjs/core'

import {AppModule} from './app.module'
import {configSwagger} from './docs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  })

  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)
  app.useGlobalPipes(new ValidationPipe())
  configSwagger(app, 'Dev')

  await app.listen(process.env.PORT ?? 3000)

  Logger.log(`🚀 Running on: ${await app.getUrl()}/${globalPrefix}`)
}

bootstrap()
