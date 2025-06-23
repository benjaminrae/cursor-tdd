import { GPS } from "./gps";
import { Compass } from "./compass";

export class Movement {
  constructor(public x: number, public y: number) {}

  add(other: Movement): Movement {
    return new Movement(this.x + other.x, this.y + other.y);
  }
}

export class Coordinates {
  constructor(private x: number, private y: number) {}

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }
}


export class MarsRover {
  constructor(private gps: GPS, private compass: Compass) {
  }

  execute(command: string): string {
    for (const character of command) {
      if (character === "M") {
        const movement = this.compass.getMovement();
        if (!this.gps.move(movement)) {
          const currentPosition = this.gps.getCurrentPosition();
          return `O:${currentPosition.getX()}:${currentPosition.getY()}:${this.compass.toString()}`;
        }
      }
      if (character === "L") {
        this.compass = this.compass.rotateLeft();
      }
      if (character === "R") {
        this.compass = this.compass.rotateRight();
      }
    }

    const currentPosition = this.gps.getCurrentPosition();
    return `${currentPosition.getX()}:${currentPosition.getY()}:${this.compass.toString()}`;
  }


}
