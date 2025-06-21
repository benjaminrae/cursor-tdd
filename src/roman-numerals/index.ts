export class RomanNumeralConverter {
  public toRoman(number: number): string {
    if (number === 0) {
      return "";
    }
    return "I".repeat(number);
  }
} 
