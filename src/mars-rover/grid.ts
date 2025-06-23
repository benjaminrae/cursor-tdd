export class Grid {
  constructor(private size: number = 10) {}

  wrapY(yMovement: number): number {
    return yMovement % this.size;
  }
}