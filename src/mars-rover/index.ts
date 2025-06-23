import { Grid } from "./grid";

export class MarsRover {
  constructor(private grid: Grid = new Grid()) {
  }

  execute(command: string): string {
    let yMovement = 0;
    let direction = "N";

    for (const character of command) {
      if (character === "M") {
        yMovement++;
      }
      if (character === "L") {
        direction = this.rotateLeft(direction);
      }
    }

    const yPosition = this.grid.wrapY(yMovement);

    return `0:${yPosition}:${direction}`;
  }

  private rotateLeft(currentDirection: string): string {
    if (currentDirection === "N") {
      return "W";
    } else if (currentDirection === "W") {
      return "S";
    } else if (currentDirection === "S") {
      return "E";
    } else if (currentDirection === "E") {
      return "N";
    }
    return currentDirection;
  }
}
