import {INestApplication} from '@nestjs/common'
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'

export const configSwagger = (
  app: INestApplication,
  name: string,
  prefix = 'api'
) => {
  const config = new DocumentBuilder()
    .setTitle(`${name} API`)
    .setDescription(`Helps devs use the ${name} API in their applications`)
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(prefix, app, document)
}
