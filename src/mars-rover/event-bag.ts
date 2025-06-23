import { Event } from "./event";

export class EventBag {
  private events: Event[] = [];

  record(event: Event): void {
    this.events.push(event);
  }

  release(): Event[] {
    const eventsToReturn = [...this.events];
    this.events = [];
    return eventsToReturn;
  }
}