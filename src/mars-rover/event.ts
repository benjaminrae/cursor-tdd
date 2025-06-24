export abstract class Event {
  public readonly type: string;
  
  constructor() {
    this.type = this.constructor.name;
  }
}