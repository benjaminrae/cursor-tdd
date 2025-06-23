import { describe, it, expect } from 'vitest';
import { EventBag } from './event-bag';
import { Event } from './event';

describe('EventBag', () => {
  it('records and releases a single event', () => {
    const eventBag = new EventBag();
    const event = new Event('test-event');

    eventBag.record(event);
    const events = eventBag.release();

    expect(events).toEqual([event]);
  });

  it('releases nothing when no events recorded', () => {
    const eventBag = new EventBag();

    const events = eventBag.release();

    expect(events).toEqual([]);
  });

  it('records multiple events in order', () => {
    const eventBag = new EventBag();
    const event1 = new Event('first-event');
    const event2 = new Event('second-event');

    eventBag.record(event1);
    eventBag.record(event2);
    const events = eventBag.release();

    expect(events).toEqual([event1, event2]);
  });

  it('clears events after release', () => {
    const eventBag = new EventBag();
    const event = new Event('test-event');

    eventBag.record(event);
    eventBag.release();
    const secondRelease = eventBag.release();

    expect(secondRelease).toEqual([]);
  });

  it('records different event types', () => {
    const eventBag = new EventBag();
    const moveEvent = new Event('movement');
    const rotateEvent = new Event('rotation');

    eventBag.record(moveEvent);
    eventBag.record(rotateEvent);
    const events = eventBag.release();

    expect(events).toEqual([moveEvent, rotateEvent]);
  });
});