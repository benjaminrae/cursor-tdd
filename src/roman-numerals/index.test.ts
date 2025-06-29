import { beforeEach, describe, expect, it } from 'vitest';
import { RomanNumeralConverter } from './index';

describe('RomanNumeralConverter', () => {
  let converter: RomanNumeralConverter;

  beforeEach(() => {
    converter = new RomanNumeralConverter();
  });

  it.each([
    [0, ""],
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [5, "V"],
    [6, "VI"],
    [7, "VII"],
    [8, "VIII"],
    [10, "X"],
    [11, "XI"],
    [12, "XII"],
    [13, "XIII"],
    [15, "XV"],
    [16, "XVI"],
    [17, "XVII"],
    [18, "XVIII"],
    [20, "XX"],
    [4, "IV"],
    [9, "IX"]
  ])('should return "%s" for %i', (input, expected) => {
    // Act
    const result = converter.toRoman(input);
    
    // Assert
    expect(result).toBe(expected);
  });
}); 
