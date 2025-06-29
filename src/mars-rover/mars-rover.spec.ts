import { describe, expect, it } from 'vitest';
import { EventBag } from './event-bag';
import { MarsRoverBuilder } from './mars-rover.builder';
import { Coordinates } from './coordinates';
import { RoverMovedForward, RoverRotatedLeft, RoverRotatedRight } from './events';

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
      expect(events).toContainEqual(new RoverMovedForward());
    });

    it('does not emit RoverMovedForward event when movement is blocked', () => {
      const eventBag = new EventBag();
      const rover = new MarsRoverBuilder()
        .withObstacles([new Coordinates(0, 1)])
        .withEventBag(eventBag)
        .build();

      rover.execute('M');

      const events = eventBag.release();
      expect(events).toHaveLength(0);
    });
  });

  describe('Rotation Events', () => {
    it('emits RoverRotatedLeft event when left rotation command executed', () => {
      const eventBag = new EventBag();
      const rover = new MarsRoverBuilder()
        .withEventBag(eventBag)
        .build();

      rover.execute('L');

      const events = eventBag.release();
      expect(events).toHaveLength(1);
      expect(events).toContainEqual(new RoverRotatedLeft());
    });

    it('emits RoverRotatedRight event when right rotation command executed', () => {
      const eventBag = new EventBag();
      const rover = new MarsRoverBuilder()
        .withEventBag(eventBag)
        .build();

      rover.execute('R');

      const events = eventBag.release();
      expect(events).toHaveLength(1);
      expect(events).toContainEqual(new RoverRotatedRight());
    });
  });

  describe('Edge Cases', () => {
    it('does not emit any event when unknown command is executed', () => {
      const eventBag = new EventBag();
      const rover = new MarsRoverBuilder()
        .withEventBag(eventBag)
        .build();

      rover.execute('X');

      const events = eventBag.release();
      expect(events).toHaveLength(0);
    });

    it('does not emit any event when empty command is executed', () => {
      const eventBag = new EventBag();
      const rover = new MarsRoverBuilder()
        .withEventBag(eventBag)
        .build();

      rover.execute('');

      const events = eventBag.release();
      expect(events).toHaveLength(0);
    });
  });
});
