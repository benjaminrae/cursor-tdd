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

    return `${xMovement}:${yPosition}:${currentDirection.toString()}`;
  }

  private moveForward(currentYMovement: number): number {
    return currentYMovement + 1;
  }
}
