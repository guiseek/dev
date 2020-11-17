import { util } from './util'
import { Peer } from './peer'

export const peerClient = {
  Peer,
  util: !!util ?? '',
}

export default Peer
;(<any>window).peerClient = peerClient
/** @deprecated Should use peerjs namespace */
;(<any>window).Peer = Peer

// export function peerClient(): string {
//   return 'peer-client'
// }

// export * from './adapter';
// export * from './api';
// export * from './baseconnection';
// export * from './dataconnection';
// export * from './encodingQueue';
// export * from './enums';
// export * from './exports';
// export * from './logger';
// export * from './mediaconnection';
// export * from './negotiator';
// export * from './peer-client';
// export * from './peer';
// export * from './servermessage';
// export * from './socket';
// export * from './supports';
// export * from './util';
