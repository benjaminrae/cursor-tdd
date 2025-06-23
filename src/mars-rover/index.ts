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
        if (direction === "N") {
          direction = "W";
        } else if (direction === "W") {
          direction = "S";
        }
      }
    }

    const yPosition = this.grid.wrapY(yMovement);

    return `0:${yPosition}:${direction}`;
  }
}
