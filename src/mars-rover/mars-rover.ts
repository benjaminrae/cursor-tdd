import { GPS } from "./gps";
import { Compass } from "./compass";
import { EventBag } from "./event-bag";
import { Event } from "./event";
import { RoverMovedForward, RoverRotatedLeft, RoverRotatedRight } from "./events";
import { COMMANDS } from "./commands";


export class MarsRover {
  constructor(private gps: GPS, private compass: Compass, private eventBag: EventBag) {
  }

  execute(command: string): string | null {
    if (command === COMMANDS.MOVE) {
      const movement = this.compass.getMovement();
      if (this.isMovementBlocked(movement)) {
        return this.getObstacleStatus();
      }
      this.eventBag.record(new RoverMovedForward());
    }
    if (command === COMMANDS.ROTATE_LEFT) {
      this.eventBag.record(new RoverRotatedLeft());
    }
    if (command === COMMANDS.ROTATE_RIGHT) {
      this.eventBag.record(new RoverRotatedRight());
    }
    return null;
  }

  getStatus(): string {
    const currentPosition = this.gps.getCurrentPosition();
    return `${currentPosition.getX()}:${currentPosition.getY()}:${this.compass.read()}`;
  }

  private getObstacleStatus(): string {
    return `O:${this.getStatus()}`;
  }

  private isMovementBlocked(movement: Movement): boolean {
    const currentPosition = this.gps.getCurrentPosition();
    return this.gps.isBlocked(currentPosition, movement);
  }

  releaseEvents(): Event[] {
    return this.eventBag.release();
  }

}
