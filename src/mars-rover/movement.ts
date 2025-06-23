export class Movement {
  constructor(public x: number, public y: number) {}

  add(other: Movement): Movement {
    return new Movement(this.x + other.x, this.y + other.y);
  }
}