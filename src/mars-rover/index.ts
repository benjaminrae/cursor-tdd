import { Grid } from "./grid";
import { Direction } from "./direction";

class Movement {
  constructor(public x: number, public y: number) {}
}


export class MarsRover {
  constructor(private grid: Grid, private direction: Direction) {
  }

  execute(command: string): string {
    let xMovement = 0;
    let yMovement = 0;
    let currentDirection = this.direction;

    for (const character of command) {
      if (character === "M") {
        const movement = this.getMovement(currentDirection);
        xMovement += movement.x;
        yMovement += movement.y;
      }
      if (character === "L") {
        currentDirection = currentDirection.rotateLeft();
      }
      if (character === "R") {
        currentDirection = currentDirection.rotateRight();
      }
    }

    const yPosition = this.grid.wrapY(yMovement);
    const xPosition = this.grid.wrapX(xMovement);

    return `${xPosition}:${yPosition}:${currentDirection.toString()}`;
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
