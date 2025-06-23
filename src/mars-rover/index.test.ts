import { describe, it, expect } from 'vitest';
import { MarsRover } from './index';

describe('Mars Rover', () => {
  it.each([
    ['', '0:0:N'],
    ['M', '0:1:N'],
    ['MM', '0:2:N']
  ])('executes command "%s" and returns "%s"', (command, expected) => {
    const rover = new MarsRover();

    const result = rover.execute(command);

    expect(result).toBe(expected);
  });
});