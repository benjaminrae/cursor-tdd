export class Direction {
  rotateLeft(currentDirection: string): string {
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

  rotateRight(currentDirection: string): string {
    if (currentDirection === "N") {
      return "E";
    } else if (currentDirection === "E") {
      return "S";
    } else if (currentDirection === "S") {
      return "W";
    } else if (currentDirection === "W") {
      return "N";
    }
    return currentDirection;
  }
}