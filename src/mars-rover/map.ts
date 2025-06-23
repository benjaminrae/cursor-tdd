import { Movement } from "./movement";
import { Coordinates } from "./coordinates";

const GRID_SIZE = 10;

export class Map {
  private obstacles: Set<string> = new Set();

  constructor(obstacles: Coordinates[] = [], private size: number = GRID_SIZE) {
    obstacles.forEach(obstacle => {
      this.obstacles.add(`${obstacle.getX()},${obstacle.getY()}`);
    });
  }

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

  isMovementBlocked(from: Coordinates, movement: Movement): boolean {
    const newX = this.wrapX(from.getX() + movement.x);
    const newY = this.wrapY(from.getY() + movement.y);
    return this.obstacles.has(`${newX},${newY}`);
  }
}