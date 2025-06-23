import { Event } from './event';

export class RoverMovedForward extends Event {
  constructor() {
    super('RoverMovedForward');
  }
}

export class RoverRotatedLeft extends Event {
  constructor() {
    super('RoverRotatedLeft');
  }
}

export class RoverRotatedRight extends Event {
  constructor() {
    super('RoverRotatedRight');
  }
}