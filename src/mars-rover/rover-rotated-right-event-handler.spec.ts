import { describe, it, expect } from 'vitest';
import { RoverRotatedRightEventHandler } from './rover-rotated-right-event-handler';
import { RoverRotatedRight } from './events';
import { NorthHeading, EastHeading } from './compass';

describe('RoverRotatedRightEventHandler', () => {
  it('rotates compass right when handling RoverRotatedRight event', () => {
    const compass = new NorthHeading();
    const handler = new RoverRotatedRightEventHandler(compass);
    const event = new RoverRotatedRight();

    const result = handler.handle(event);

    expect(result).toBeInstanceOf(EastHeading);
  });
});