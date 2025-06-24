import { describe, it, expect } from 'vitest';
import { RoverMovedForwardEventHandler } from './rover-moved-forward-event-handler';
import { RoverMovedForward } from './events';
import { GPS } from './gps';
import { Map } from './map';
import { Compass, NorthHeading } from './compass';
import { Coordinates } from './coordinates';

describe('RoverMovedForwardEventHandler', () => {
  it('moves GPS forward when handling RoverMovedForward event', () => {
    const gps = new GPS(new Map());
    const compass = new Compass(new NorthHeading());
    const handler = new RoverMovedForwardEventHandler(gps, compass);
    const event = new RoverMovedForward();

    handler.handle(event);

    expect(gps.getCurrentPosition().getY()).toBe(1);
    expect(gps.getCurrentPosition().getX()).toBe(0);
  });

  it('does not move GPS when movement is blocked by obstacle', () => {
    const obstacleMap = new Map([new Coordinates(0, 1)]);
    const gps = new GPS(obstacleMap);
    const compass = new Compass(new NorthHeading());
    const handler = new RoverMovedForwardEventHandler(gps, compass);
    const event = new RoverMovedForward();

    handler.handle(event);

    expect(gps.getCurrentPosition().getY()).toBe(0);
    expect(gps.getCurrentPosition().getX()).toBe(0);
  });
});