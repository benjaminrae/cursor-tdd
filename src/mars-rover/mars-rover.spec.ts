import { describe, expect, it } from 'vitest';
import { NorthHeading } from './compass';
import { Event } from './event';
import { EventBag } from './event-bag';
import { GPS } from './gps';
import { Map } from './map';
import { MarsRover } from './mars-rover';

describe('Mars Rover', () => {
  describe('Movement Events', () => {
    it('emits RoverMovedForward event when move command executed successfully', () => {
      const eventBag = new EventBag();
      const rover = new MarsRover(new GPS(new Map()), new NorthHeading(), eventBag);

      rover.execute('M');

      const events = eventBag.release();
      expect(events).toHaveLength(1);
      expect(events[0].type).toBe('RoverMovedForward');
      expect(events).toContainEqual(new Event('RoverMovedForward'));
    });
  });
});
