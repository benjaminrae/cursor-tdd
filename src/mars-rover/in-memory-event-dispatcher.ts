import { Event } from './event';
import { EventHandler } from './event-handler';
import { EventDispatcher } from './event-dispatcher';

export class InMemoryEventDispatcher implements EventDispatcher {
  private handlers = new Map<string, EventHandler<any>>();

  register<T extends Event>(eventType: new() => T, handler: EventHandler<T>): void {
    const eventName = eventType.name;
    this.handlers.set(eventName, handler);
  }

  dispatch(events: Event[]): void {
    for (const event of events) {
      const handler = this.handlers.get(event.constructor.name);
      if (handler) {
        handler.handle(event);
      }
    }
  }
}