import { EventHandler } from './event-handler';
import { RoverRotatedLeft } from './events';
import { Compass } from './compass';

export class RoverRotatedLeftEventHandler implements EventHandler<RoverRotatedLeft> {
  constructor(private compass: Compass) {}

  handle(event: RoverRotatedLeft): void { // eslint-disable-line @typescript-eslint/no-unused-vars
    this.compass.rotateLeft();
  }
}