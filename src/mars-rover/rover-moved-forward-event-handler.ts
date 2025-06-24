import { EventHandler } from './event-handler';
import { RoverMovedForward } from './events';
import { GPS } from './gps';
import { Compass } from './compass';

export class RoverMovedForwardEventHandler implements EventHandler<RoverMovedForward> {
  constructor(private gps: GPS, private compass: Compass) {}

  handle(event: RoverMovedForward): void { // eslint-disable-line @typescript-eslint/no-unused-vars
    const movement = this.compass.getMovement();
    this.gps.move(movement);
  }
}