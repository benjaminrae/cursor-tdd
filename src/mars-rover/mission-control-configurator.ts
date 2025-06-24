import { MissionControl } from './mission-control';
import { MarsRoverBuilder } from './mars-rover.builder';
import { InMemoryEventDispatcher } from './in-memory-event-dispatcher';
import { RoverRotatedLeftEventHandler } from './rover-rotated-left-event-handler';
import { RoverRotatedRightEventHandler } from './rover-rotated-right-event-handler';
import { RoverRotatedLeft, RoverRotatedRight } from './events';
import { Compass, NorthHeading } from './compass';

export class MissionControlConfigurator {
  static create(): MissionControl {
    const compass = new Compass(new NorthHeading());
    const rover = new MarsRoverBuilder().withCompass(compass).build();
    const eventDispatcher = new InMemoryEventDispatcher();
    
    const leftHandler = new RoverRotatedLeftEventHandler(compass);
    const rightHandler = new RoverRotatedRightEventHandler(compass);
    eventDispatcher.register(RoverRotatedLeft, leftHandler);
    eventDispatcher.register(RoverRotatedRight, rightHandler);
    
    return new MissionControl(rover, eventDispatcher);
  }
}