import { Grid } from "./grid";
import { Direction } from "./direction";

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
  constructor(private grid: Grid, private direction: Direction) {
  }

  execute(command: string): string {
    let totalMovement = new Movement(0, 0);

    for (const character of command) {
      if (character === "M") {
        const movement = this.direction.getMovement();
        totalMovement = totalMovement.add(movement);
      }
      if (character === "L") {
        this.direction = this.direction.rotateLeft();
      }
      if (character === "R") {
        this.direction = this.direction.rotateRight();
      }
    }

    const coordinates = this.grid.wrap(totalMovement);

    return `${coordinates.getX()}:${coordinates.getY()}:${this.direction.toString()}`;
  }

}
