import { Grid } from "./grid";
import { Direction } from "./direction";

export class MarsRover {
  constructor(private grid: Grid = new Grid(), private direction: Direction = new Direction()) {
  }

  execute(command: string): string {
    let yMovement = 0;
    let currentDirection = this.direction;

    for (const character of command) {
      if (character === "M") {
        yMovement++;
      }
      if (character === "L") {
        currentDirection = currentDirection.rotateLeft();
      }
      if (character === "R") {
        currentDirection = currentDirection.rotateRight();
      }
    }

    const yPosition = this.grid.wrapY(yMovement);

    return `0:${yPosition}:${currentDirection.toString()}`;
  }

}
