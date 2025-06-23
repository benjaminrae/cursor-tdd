const GRID_SIZE = 10;

export class Grid {
  constructor(private size: number = GRID_SIZE) {}

  wrapY(yMovement: number): number {
    return yMovement % this.size;
  }

  wrapX(xMovement: number): number {
    return (xMovement + this.size) % this.size;
  }
}