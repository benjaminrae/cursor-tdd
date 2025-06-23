import { describe, it, expect } from 'vitest';
import { RoverRotatedLeftEventHandler } from './rover-rotated-left-event-handler';
import { RoverRotatedLeft } from './events';
import { NorthHeading, WestHeading } from './compass';

describe('RoverRotatedLeftEventHandler', () => {
  it('rotates compass left when handling RoverRotatedLeft event', () => {
    const compass = new NorthHeading();
    const handler = new RoverRotatedLeftEventHandler(compass);
    const event = new RoverRotatedLeft();

    const result = handler.handle(event);

    expect(result).toBeInstanceOf(WestHeading);
  });
});