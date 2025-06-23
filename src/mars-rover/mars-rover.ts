import { GPS } from "./gps";
import { Compass } from "./compass";


export class MarsRover {
  constructor(private gps: GPS, private compass: Compass) {
  }

  execute(command: string): string | null {
    if (command === "M") {
      const movement = this.compass.getMovement();
      if (!this.gps.move(movement)) {
        return this.getObstacleStatus();
      }
    }
    if (command === "L") {
      this.compass = this.compass.rotateLeft();
    }
    if (command === "R") {
      this.compass = this.compass.rotateRight();
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
