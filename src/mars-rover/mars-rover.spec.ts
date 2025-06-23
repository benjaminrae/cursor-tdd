import { describe, expect, it } from 'vitest';
import { Event } from './event';
import { EventBag } from './event-bag';
import { MarsRoverBuilder } from './mars-rover.builder';

describe('Mars Rover', () => {
  describe('Movement Events', () => {
    it('emits RoverMovedForward event when move command executed successfully', () => {
      const eventBag = new EventBag();
      const rover = new MarsRoverBuilder()
        .withEventBag(eventBag)
        .build();

      rover.execute('M');

      const events = eventBag.release();
      expect(events).toHaveLength(1);
      expect(events[0].type).toBe('RoverMovedForward');
      expect(events).toContainEqual(new Event('RoverMovedForward'));
    });
  });
});
