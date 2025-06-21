import { describe, expect, it } from 'vitest';
import { RomanNumeralConverter } from './index';

describe('RomanNumeralConverter', () => {
  it('should return empty string for zero', () => {
    // Arrange - Set up test data and conditions
    const converter = new RomanNumeralConverter();
    const input = 0;
    
    // Act - Execute the code under test
    const result = converter.toRoman(input);
    
    // Assert - Verify the expected outcome
    expect(result).toBe("");
  });

  it('should return "I" for one', () => {
    // Arrange - Set up test data and conditions
    const converter = new RomanNumeralConverter();
    const input = 1;
    
    // Act - Execute the code under test
    const result = converter.toRoman(input);
    
    // Assert - Verify the expected outcome
    expect(result).toBe("I");
  });

  it('should return "II" for two', () => {
    // Arrange - Set up test data and conditions
    const converter = new RomanNumeralConverter();
    const input = 2;
    
    // Act - Execute the code under test
    const result = converter.toRoman(input);
    
    // Assert - Verify the expected outcome
    expect(result).toBe("II");
  });
}); 
