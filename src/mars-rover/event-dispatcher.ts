import { Event } from './event';
import { EventHandler } from './event-handler';

export interface EventDispatcher {
  register<T extends Event>(eventType: new() => T, handler: EventHandler<T>): void;
  dispatch(events: Event[]): void;
}