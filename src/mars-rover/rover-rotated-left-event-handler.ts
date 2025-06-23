import { EventHandler } from './event-handler';
import { RoverRotatedLeft } from './events';
import { Compass } from './compass';

export class RoverRotatedLeftEventHandler implements EventHandler<RoverRotatedLeft, Compass> {
  constructor(private compass: Compass) {}

  handle(event: RoverRotatedLeft): Compass { // eslint-disable-line @typescript-eslint/no-unused-vars
    return this.compass.rotateLeft();
  }
}