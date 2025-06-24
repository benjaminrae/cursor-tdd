import { describe, it, expect } from 'vitest';
import { RoverRotatedLeftEventHandler } from './rover-rotated-left-event-handler';
import { RoverRotatedLeft } from './events';
import { Compass, NorthHeading } from './compass';

describe('RoverRotatedLeftEventHandler', () => {
  it('rotates compass left when handling RoverRotatedLeft event', () => {
    const compass = new Compass(new NorthHeading());
    const handler = new RoverRotatedLeftEventHandler(compass);
    const event = new RoverRotatedLeft();

    handler.handle(event);

    expect(compass.read()).toBe('W');
  });
});