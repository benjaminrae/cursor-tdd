export class RomanNumeralConverter {
  private static readonly romanMappings: Record<number, string> = {
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
  };

  private static getSortedDecimals(): number[] {
    return Object.keys(RomanNumeralConverter.romanMappings)
      .map(Number)
      .sort((first, second) => second - first);
  }

  public toRoman(number: number): string {
    if (number === 0) {
      return "";
    }
    
    for (const decimal of RomanNumeralConverter.getSortedDecimals()) {
      if (number >= decimal) {
        return RomanNumeralConverter.romanMappings[decimal] + this.toRoman(number - decimal);
      }
    }
    
    return "";
  }
} 
