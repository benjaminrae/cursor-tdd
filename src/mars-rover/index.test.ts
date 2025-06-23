import { describe, it, expect } from 'vitest';
import { MarsRover } from './index';

describe('Mars Rover', () => {
  describe('Move commands', () => {
    it.each([
      ['', '0:0:N'],
      ['M', '0:1:N'],
      ['MM', '0:2:N'],
      ['MMM', '0:3:N'],
      ['MMMMMMMMMM', '0:0:N']
    ])('executes "%s" and returns "%s"', (command, expected) => {
      const rover = new MarsRover();

      const result = rover.execute(command);

      expect(result).toBe(expected);
    });
  });

  describe('Left rotation commands', () => {
    it.each([
      ['L', '0:0:W'],
      ['LL', '0:0:S'],
      ['LLL', '0:0:E']
    ])('executes "%s" and returns "%s"', (command, expected) => {
      const rover = new MarsRover();

      const result = rover.execute(command);

      expect(result).toBe(expected);
    });
  });
});