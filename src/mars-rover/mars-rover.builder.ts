import { MarsRover } from './mars-rover';
import { GPS } from './gps';
import { Map } from './map';
import { Compass, NorthHeading } from './compass';
import { EventBag } from './event-bag';
import { Coordinates } from './coordinates';

export class MarsRoverBuilder {
  private map: Map = new Map();
  private compass: Compass = new NorthHeading();
  private eventBag: EventBag = new EventBag();

  withObstacles(obstacles: Coordinates[]): MarsRoverBuilder {
    this.map = new Map(obstacles);
    return this;
  }

  withCompass(compass: Compass): MarsRoverBuilder {
    this.compass = compass;
    return this;
  }

  withEventBag(eventBag: EventBag): MarsRoverBuilder {
    this.eventBag = eventBag;
    return this;
  }

  build(): MarsRover {
    return new MarsRover(new GPS(this.map), this.compass, this.eventBag);
  }
}