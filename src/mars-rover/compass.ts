import { Movement } from "./index";

export abstract class Compass {
  constructor(private symbol: string) {}

  abstract rotateLeft(): Compass;
  abstract rotateRight(): Compass;
  abstract getMovement(): Movement;

  getSymbol(): string {
    return this.symbol;
  }

  toString(): string {
    return this.getSymbol();
  }
}

export class NorthHeading extends Compass {
  constructor() {
    super("N");
  }

  rotateLeft(): Compass {
    return new WestHeading();
  }

  rotateRight(): Compass {
    return new EastHeading();
  }

  getMovement(): Movement {
    return new Movement(0, 1);
  }
}

export class EastHeading extends Compass {
  constructor() {
    super("E");
  }

  rotateLeft(): Compass {
    return new NorthHeading();
  }

  rotateRight(): Compass {
    return new SouthHeading();
  }

  getMovement(): Movement {
    return new Movement(1, 0);
  }
}

export class SouthHeading extends Compass {
  constructor() {
    super("S");
  }

  rotateLeft(): Compass {
    return new EastHeading();
  }

  rotateRight(): Compass {
    return new WestHeading();
  }

  getMovement(): Movement {
    return new Movement(0, -1);
  }
}

export class WestHeading extends Compass {
  constructor() {
    super("W");
  }

  rotateLeft(): Compass {
    return new SouthHeading();
  }

  rotateRight(): Compass {
    return new NorthHeading();
  }

  getMovement(): Movement {
    return new Movement(-1, 0);
  }
}