import { EventEmitter } from 'events'
import * as WebSocketLib from 'ws'

export type MyWebSocket = WebSocketLib & EventEmitter
