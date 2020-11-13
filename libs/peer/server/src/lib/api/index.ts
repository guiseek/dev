import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
// import * as publicContent from "../../app.json";
import { IConfig } from '../config'
import { IMessageHandler } from '../messageHandler'
import { IRealm } from '../models/realm'
import { AuthMiddleware } from './middleware/auth'
import CallsApi from './v1/calls'
import PublicApi from './v1/public'

const publicContent = {
  name: 'NxPeer Server',
  description:
    'A server side element to broker connections between NxPeer clients.',
  website: 'http://nx-peer.com/',
}

export const Api = ({
  config,
  realm,
  messageHandler,
}: {
  config: IConfig
  realm: IRealm
  messageHandler: IMessageHandler
}): express.Router => {
  const authMiddleware = new AuthMiddleware(config, realm)

  const app = express.Router()

  const jsonParser = bodyParser.json()

  app.use(cors())

  app.get('/', (_, res) => {
    res.send(publicContent)
  })

  app.use('/:key', PublicApi({ config, realm }))
  app.use(
    '/:key/:id/:token',
    authMiddleware.handle,
    jsonParser,
    CallsApi({ realm, messageHandler })
  )

  return app
}
