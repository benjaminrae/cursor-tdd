import { GPS } from "./gps";
import { Compass } from "./compass";
import { EventBag } from "./event-bag";
import { Event } from "./event";


export class MarsRover {
  constructor(private gps: GPS, private compass: Compass, private eventBag: EventBag) {
  }

  execute(command: string): string | null {
    if (command === "M") {
      const movement = this.compass.getMovement();
      if (!this.gps.move(movement)) {
        return this.getObstacleStatus();
      }
      this.eventBag.record(new Event('RoverMovedForward'));
    }
    if (command === "L") {
      this.compass = this.compass.rotateLeft();
      this.eventBag.record(new Event('RoverRotatedLeft'));
    }
    if (command === "R") {
      this.compass = this.compass.rotateRight();
      this.eventBag.record(new Event('RoverRotatedRight'));
    }
    return null;
  }

  getStatus(): string {
    const currentPosition = this.gps.getCurrentPosition();
    return `${currentPosition.getX()}:${currentPosition.getY()}:${this.compass.toString()}`;
  }

  private getObstacleStatus(): string {
    const currentPosition = this.gps.getCurrentPosition();
    return `O:${currentPosition.getX()}:${currentPosition.getY()}:${this.compass.toString()}`;
  }


}
