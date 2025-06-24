import { EventHandler } from './event-handler';
import { RoverRotatedRight } from './events';
import { Compass } from './compass';

export class RoverRotatedRightEventHandler implements EventHandler<RoverRotatedRight> {
  constructor(private compass: Compass) {}

  handle(event: RoverRotatedRight): void { // eslint-disable-line @typescript-eslint/no-unused-vars
    this.compass.rotateRight();
  }
}