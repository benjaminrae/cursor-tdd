export abstract class Direction {
  abstract rotateLeft(): Direction;
  abstract rotateRight(): Direction;
  abstract toString(): string;
}

export class North extends Direction {
  rotateLeft(): Direction {
    return new West();
  }

  rotateRight(): Direction {
    return new East();
  }

  toString(): string {
    return "N";
  }
}

export class East extends Direction {
  rotateLeft(): Direction {
    return new North();
  }

  rotateRight(): Direction {
    return new South();
  }

  toString(): string {
    return "E";
  }
}

export class South extends Direction {
  rotateLeft(): Direction {
    return new East();
  }

  rotateRight(): Direction {
    return new West();
  }

  toString(): string {
    return "S";
  }
}

export class West extends Direction {
  rotateLeft(): Direction {
    return new South();
  }

  rotateRight(): Direction {
    return new North();
  }

  toString(): string {
    return "W";
  }
}