import { EventEmitter } from './event-emitter';

describe('EventEmitter', () => {
  it('should create an instance', () => {
    expect(new EventEmitter()).toBeTruthy();
  });
});
