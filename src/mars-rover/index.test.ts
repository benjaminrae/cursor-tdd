import { describe, it, expect } from 'vitest';
import { MarsRover } from './index';
import { Grid } from './grid';
import { North } from './direction';

describe('Mars Rover', () => {
  describe('Move commands', () => {
    it.each([
      ['', '0:0:N'],
      ['M', '0:1:N'],
      ['MM', '0:2:N'],
      ['MMM', '0:3:N'],
      ['MMMMMMMMMM', '0:0:N']
    ])('executes "%s" and returns "%s"', (command, expected) => {
      const rover = new MarsRover(new Grid(), new North());

      const result = rover.execute(command);

      expect(result).toBe(expected);
    });
  });

  describe('Left rotation commands', () => {
    it.each([
      ['L', '0:0:W'],
      ['LL', '0:0:S'],
      ['LLL', '0:0:E'],
      ['LLLL', '0:0:N']
    ])('executes "%s" and returns "%s"', (command, expected) => {
      const rover = new MarsRover(new Grid(), new North());

      const result = rover.execute(command);

      expect(result).toBe(expected);
    });
  });

  describe('Right rotation commands', () => {
    it.each([
      ['R', '0:0:E'],
      ['RR', '0:0:S'],
      ['RRR', '0:0:W'],
      ['RRRR', '0:0:N']
    ])('executes "%s" and returns "%s"', (command, expected) => {
      const rover = new MarsRover(new Grid(), new North());

      const result = rover.execute(command);

      expect(result).toBe(expected);
    });
  });

  describe('Movement with direction changes', () => {
    it.each([
      ['RM', '1:0:E'],
      ['LM', '9:0:W'],
      ['RRM', '0:9:S']
    ])('executes "%s" and returns "%s"', (command, expected) => {
      const rover = new MarsRover(new Grid(), new North());

      const result = rover.execute(command);

      expect(result).toBe(expected);
    });
  });
});