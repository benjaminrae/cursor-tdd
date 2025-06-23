import { Grid } from "./grid";
import { Direction } from "./direction";


export class MarsRover {
  constructor(private grid: Grid, private direction: Direction) {
  }

  execute(command: string): string {
    let xMovement = 0;
    let yMovement = 0;
    let currentDirection = this.direction;

    for (const character of command) {
      if (character === "M") {
        if (currentDirection.toString() === "E") {
          xMovement++;
        } else if (currentDirection.toString() === "W") {
          xMovement--;
        } else {
          yMovement = this.moveForward(yMovement);
        }
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

  private moveForward(currentYMovement: number): number {
    return currentYMovement + 1;
  }
}
