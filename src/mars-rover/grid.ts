import { Movement, Coordinates } from "./index";

const GRID_SIZE = 10;

export class Grid {
  constructor(private size: number = GRID_SIZE) {}

  private wrapY(yMovement: number): number {
    return (yMovement + this.size) % this.size;
  }

  private wrapX(xMovement: number): number {
    return (xMovement + this.size) % this.size;
  }

  wrap(movement: Movement): Coordinates {
    const xPosition = this.wrapX(movement.x);
    const yPosition = this.wrapY(movement.y);
    return new Coordinates(xPosition, yPosition);
  }
}