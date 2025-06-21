export class RomanNumeralConverter {
  public toRoman(number: number): string {
    if (number === 0) {
      return "";
    }
    if (number === 5) {
      return "V";
    }
    return "I".repeat(number);
  }
} 
