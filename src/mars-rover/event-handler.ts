import { Event } from './event';

export interface EventHandler<T extends Event, R = void> {
  handle(event: T): R;
}