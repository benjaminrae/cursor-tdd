import { MissionControl } from './mission-control';
import { MarsRover } from './mars-rover';
import { InMemoryEventDispatcher } from './in-memory-event-dispatcher';
import { RoverRotatedLeftEventHandler } from './rover-rotated-left-event-handler';
import { RoverRotatedRightEventHandler } from './rover-rotated-right-event-handler';
import { RoverMovedForwardEventHandler } from './rover-moved-forward-event-handler';
import { RoverRotatedLeft, RoverRotatedRight, RoverMovedForward } from './events';
import { Compass, NorthHeading } from './compass';
import { GPS } from './gps';
import { Map } from './map';
import { EventBag } from './event-bag';

export class MissionControlConfigurator {
  static create(gps?: GPS): MissionControl {
    const compass = new Compass(new NorthHeading());
    const defaultGps = gps || new GPS(new Map());
    const rover = new MarsRover(defaultGps, compass, new EventBag());
    const eventDispatcher = new InMemoryEventDispatcher();
    
    const leftHandler = new RoverRotatedLeftEventHandler(compass);
    const rightHandler = new RoverRotatedRightEventHandler(compass);
    const moveHandler = new RoverMovedForwardEventHandler(defaultGps, compass);
    eventDispatcher.register(RoverRotatedLeft, leftHandler);
    eventDispatcher.register(RoverRotatedRight, rightHandler);
    eventDispatcher.register(RoverMovedForward, moveHandler);
    
    return new MissionControl(rover, eventDispatcher);
  }
}