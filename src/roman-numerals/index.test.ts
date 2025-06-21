import { beforeEach, describe, expect, it } from 'vitest';
import { RomanNumeralConverter } from './index';

describe('RomanNumeralConverter', () => {
  let converter: RomanNumeralConverter;

  beforeEach(() => {
    converter = new RomanNumeralConverter();
  });

  it('should return empty string for zero', () => {
    // Arrange
    const input = 0;
    const expected = "";
    
    // Act
    const result = converter.toRoman(input);
    
    // Assert
    expect(result).toBe(expected);
  });

  it('should return "I" for one', () => {
    // Arrange
    const input = 1;
    const expected = "I";
    
    // Act
    const result = converter.toRoman(input);
    
    // Assert
    expect(result).toBe(expected);
  });

  it('should return "II" for two', () => {
    // Arrange
    const input = 2;
    const expected = "II";
    
    // Act
    const result = converter.toRoman(input);
    
    // Assert
    expect(result).toBe(expected);
  });
}); 
