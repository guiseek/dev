import {INestApplication} from '@nestjs/common'
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'

export const configSwagger = (
  app: INestApplication,
  name: string,
  prefix = 'api'
) => {
  const config = new DocumentBuilder()
    .setTitle(`${name}`)
    .setDescription(`${name} API docs`)
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(prefix, app, document)
}
