import { Grid } from "./grid";
import { Direction } from "./direction";

export class MarsRover {
  constructor(private grid: Grid = new Grid(), private direction: Direction = new Direction()) {
  }

  execute(command: string): string {
    let yMovement = 0;
    let direction = "N";

    for (const character of command) {
      if (character === "M") {
        yMovement++;
      }
      if (character === "L") {
        direction = this.direction.rotateLeft(direction);
      }
      if (character === "R") {
        direction = this.direction.rotateRight(direction);
      }
    }

    const yPosition = this.grid.wrapY(yMovement);

    return `0:${yPosition}:${direction}`;
  }

}
