import { Map } from "./map";
import { Movement, Coordinates } from "./index";

export class GPS {
  private currentPosition: Coordinates = new Coordinates(0, 0);

  constructor(private map: Map) {}

  move(movement: Movement): boolean {
    if (this.map.isMovementBlocked(this.currentPosition, movement)) {
      return false;
    }
    const newMovement = new Movement(this.currentPosition.getX() + movement.x, this.currentPosition.getY() + movement.y);
    this.currentPosition = this.map.wrap(newMovement);
    return true;
  }

  getCurrentPosition(): Coordinates {
    return this.currentPosition;
  }
}