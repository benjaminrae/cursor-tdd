import { Movement } from "./movement";

export abstract class Heading {
  constructor(private symbol: string) {}

  abstract rotateLeft(): Heading;
  abstract rotateRight(): Heading;
  abstract getMovement(): Movement;

  getSymbol(): string {
    return this.symbol;
  }

  toString(): string {
    return this.getSymbol();
  }
}

export class NorthHeading extends Heading {
  constructor() {
    super("N");
  }

  rotateLeft(): Heading {
    return new WestHeading();
  }

  rotateRight(): Heading {
    return new EastHeading();
  }

  getMovement(): Movement {
    return new Movement(0, 1);
  }
}

export class EastHeading extends Heading {
  constructor() {
    super("E");
  }

  rotateLeft(): Heading {
    return new NorthHeading();
  }

  rotateRight(): Heading {
    return new SouthHeading();
  }

  getMovement(): Movement {
    return new Movement(1, 0);
  }
}

export class SouthHeading extends Heading {
  constructor() {
    super("S");
  }

  rotateLeft(): Heading {
    return new EastHeading();
  }

  rotateRight(): Heading {
    return new WestHeading();
  }

  getMovement(): Movement {
    return new Movement(0, -1);
  }
}

export class WestHeading extends Heading {
  constructor() {
    super("W");
  }

  rotateLeft(): Heading {
    return new SouthHeading();
  }

  rotateRight(): Heading {
    return new NorthHeading();
  }

  getMovement(): Movement {
    return new Movement(-1, 0);
  }
}

export class Compass {
  constructor(private heading: Heading) {}

  rotateLeft(): void {
    this.heading = this.heading.rotateLeft();
  }

  rotateRight(): void {
    this.heading = this.heading.rotateRight();
  }

  getHeading(): Heading {
    return this.heading;
  }

  getMovement(): Movement {
    return this.heading.getMovement();
  }

  read(): string {
    return this.heading.getSymbol();
  }
}