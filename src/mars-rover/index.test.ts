import { describe, it, expect } from 'vitest';
import { MarsRover } from './index';

describe('Mars Rover', () => {
  it('returns initial position when no commands are given', () => {
    const rover = new MarsRover();
    
    const result = rover.execute('');
    
    expect(result).toBe('0:0:N');
  });

  it('moves north when given single M command', () => {
    const rover = new MarsRover();
    
    const result = rover.execute('M');
    
    expect(result).toBe('0:1:N');
  });
});