import { Grid } from "./grid";
import { Direction } from "./direction";

class Movement {
  constructor(public x: number, public y: number) {}

  add(other: Movement): Movement {
    return new Movement(this.x + other.x, this.y + other.y);
  }
}

class Coordinates {
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
    let currentDirection = this.direction;

    for (const character of command) {
      if (character === "M") {
        const movement = this.getMovement(currentDirection);
        totalMovement = totalMovement.add(movement);
      }
      if (character === "L") {
        currentDirection = currentDirection.rotateLeft();
      }
      if (character === "R") {
        currentDirection = currentDirection.rotateRight();
      }
    }

    const yPosition = this.grid.wrapY(totalMovement.y);
    const xPosition = this.grid.wrapX(totalMovement.x);
    const coordinates = new Coordinates(xPosition, yPosition);

    return `${coordinates.getX()}:${coordinates.getY()}:${currentDirection.toString()}`;
  }

  private getMovement(direction: Direction): Movement {
    if (direction.toString() === "E") {
      return new Movement(1, 0);
    } else if (direction.toString() === "W") {
      return new Movement(-1, 0);
    } else {
      return new Movement(0, 1);
    }
  }
}
