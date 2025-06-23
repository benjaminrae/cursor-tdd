import { EventHandler } from './event-handler';
import { RoverRotatedRight } from './events';
import { Compass } from './compass';

export class RoverRotatedRightEventHandler implements EventHandler<RoverRotatedRight, Compass> {
  constructor(private compass: Compass) {}

  handle(event: RoverRotatedRight): Compass { // eslint-disable-line @typescript-eslint/no-unused-vars
    return this.compass.rotateRight();
  }
}