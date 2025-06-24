import { describe, it, expect } from 'vitest';
import { MissionControl } from './mission-control';
import { Coordinates } from './coordinates';
import { MarsRoverBuilder } from './mars-rover.builder';
import { InMemoryEventDispatcher } from './in-memory-event-dispatcher';
import { RoverRotatedLeftEventHandler } from './rover-rotated-left-event-handler';
import { RoverRotatedRightEventHandler } from './rover-rotated-right-event-handler';
import { RoverRotatedLeft, RoverRotatedRight } from './events';
import { Compass, NorthHeading } from './compass';

describe('Mission Control', () => {
  describe('Move commands', () => {
    it.each([
      ['', '0:0:N'],
      ['M', '0:1:N'],
      ['MM', '0:2:N'],
      ['MMM', '0:3:N'],
      ['MMMMMMMMMM', '0:0:N']
    ])('sends command "%s" and returns "%s"', (command, expected) => {
      const rover = new MarsRoverBuilder().build();
      const eventDispatcher = new InMemoryEventDispatcher();
      const missionControl = new MissionControl(rover, eventDispatcher);

      const result = missionControl.sendCommand(command);

      expect(result).toBe(expected);
    });
  });

  describe('Left rotation commands', () => {
    it.each([
      ['L', '0:0:W'],
      ['LL', '0:0:S'],
      ['LLL', '0:0:E'],
      ['LLLL', '0:0:N']
    ])('sends command "%s" and returns "%s"', (command, expected) => {
      const rover = new MarsRoverBuilder().build();
      const eventDispatcher = new InMemoryEventDispatcher();
      const missionControl = new MissionControl(rover, eventDispatcher);

      const result = missionControl.sendCommand(command);

      expect(result).toBe(expected);
    });
  });

  describe('Right rotation commands', () => {
    it.each([
      ['R', '0:0:E'],
      ['RR', '0:0:S'],
      ['RRR', '0:0:W'],
      ['RRRR', '0:0:N']
    ])('sends command "%s" and returns "%s"', (command, expected) => {
      const rover = new MarsRoverBuilder().build();
      const eventDispatcher = new InMemoryEventDispatcher();
      const missionControl = new MissionControl(rover, eventDispatcher);

      const result = missionControl.sendCommand(command);

      expect(result).toBe(expected);
    });
  });

  describe('Movement with direction changes', () => {
    it.each([
      ['RM', '1:0:E'],
      ['LM', '9:0:W'],
      ['RRM', '0:9:S'],
      ['LLM', '0:9:S']
    ])('sends command "%s" and returns "%s"', (command, expected) => {
      const rover = new MarsRoverBuilder().build();
      const eventDispatcher = new InMemoryEventDispatcher();
      const missionControl = new MissionControl(rover, eventDispatcher);

      const result = missionControl.sendCommand(command);

      expect(result).toBe(expected);
    });
  });

  describe('Complex patterns', () => {
    it.each([
      ['MMRMMLM', '2:3:N'],
      ['RMMLM', '2:1:N']
    ])('sends command "%s" and returns "%s"', (command, expected) => {
      const rover = new MarsRoverBuilder().build();
      const eventDispatcher = new InMemoryEventDispatcher();
      const missionControl = new MissionControl(rover, eventDispatcher);

      const result = missionControl.sendCommand(command);

      expect(result).toBe(expected);
    });
  });

  describe('Obstacles', () => {
    it('sends command "MMMM" and returns "O:0:2:N" when obstacle at (0,3)', () => {
      const rover = new MarsRoverBuilder()
        .withObstacles([new Coordinates(0, 3)])
        .build();
      const eventDispatcher = new InMemoryEventDispatcher();
      const missionControl = new MissionControl(rover, eventDispatcher);

      const result = missionControl.sendCommand('MMMM');

      expect(result).toBe('O:0:2:N');
    });

    it('sends command "RM" and returns "O:0:0:E" when obstacle at (1,0)', () => {
      const rover = new MarsRoverBuilder()
        .withObstacles([new Coordinates(1, 0)])
        .build();
      const eventDispatcher = new InMemoryEventDispatcher();
      const missionControl = new MissionControl(rover, eventDispatcher);

      const result = missionControl.sendCommand('RM');

      expect(result).toBe('O:0:0:E');
    });
  });
});