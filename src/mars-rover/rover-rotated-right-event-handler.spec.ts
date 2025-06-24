import { describe, it, expect } from 'vitest';
import { RoverRotatedRightEventHandler } from './rover-rotated-right-event-handler';
import { RoverRotatedRight } from './events';
import { Compass, NorthHeading } from './compass';

describe('RoverRotatedRightEventHandler', () => {
  it('rotates compass right when handling RoverRotatedRight event', () => {
    const compass = new Compass(new NorthHeading());
    const handler = new RoverRotatedRightEventHandler(compass);
    const event = new RoverRotatedRight();

    handler.handle(event);

    expect(compass.getSymbol()).toBe('E');
  });
});