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
    
    // Act
    const result = converter.toRoman(input);
    
    // Assert
    expect(result).toBe("");
  });

  it('should return "I" for one', () => {
    // Arrange
    const input = 1;
    
    // Act
    const result = converter.toRoman(input);
    
    // Assert
    expect(result).toBe("I");
  });

  it('should return "II" for two', () => {
    // Arrange
    const input = 2;
    
    // Act
    const result = converter.toRoman(input);
    
    // Assert
    expect(result).toBe("II");
  });
}); 
