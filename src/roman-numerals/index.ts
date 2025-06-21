export class RomanNumeralConverter {
  private static readonly I = "I";
  private static readonly V = "V";
  private static readonly X = "X";

  private static readonly romanMappings: Record<number, string> = {
    10: "X",
    5: "V",
    4: "IV",
    1: "I"
  };

  public toRoman(number: number): string {
    if (number === 0) {
      return "";
    }
    
    for (const decimal of Object.keys(RomanNumeralConverter.romanMappings).map(Number).sort((a, b) => b - a)) {
      if (number >= decimal) {
        return RomanNumeralConverter.romanMappings[decimal] + this.toRoman(number - decimal);
      }
    }
    
    return "";
  }
} 
