import { Movement } from "./index";

export abstract class Direction {
  constructor(private symbol: string) {}

  abstract rotateLeft(): Direction;
  abstract rotateRight(): Direction;
  abstract getMovement(): Movement;

  getSymbol(): string {
    return this.symbol;
  }

  toString(): string {
    return this.getSymbol();
  }
}

export class North extends Direction {
  constructor() {
    super("N");
  }

  rotateLeft(): Direction {
    return new West();
  }

  rotateRight(): Direction {
    return new East();
  }

  getMovement(): Movement {
    return new Movement(0, 1);
  }
}

export class East extends Direction {
  constructor() {
    super("E");
  }

  rotateLeft(): Direction {
    return new North();
  }

  rotateRight(): Direction {
    return new South();
  }

  getMovement(): Movement {
    return new Movement(1, 0);
  }
}

export class South extends Direction {
  constructor() {
    super("S");
  }

  rotateLeft(): Direction {
    return new East();
  }

  rotateRight(): Direction {
    return new West();
  }

  getMovement(): Movement {
    return new Movement(0, -1);
  }
}

export class West extends Direction {
  constructor() {
    super("W");
  }

  rotateLeft(): Direction {
    return new South();
  }

  rotateRight(): Direction {
    return new North();
  }

  getMovement(): Movement {
    return new Movement(-1, 0);
  }
}