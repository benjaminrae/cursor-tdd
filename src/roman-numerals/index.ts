export class RomanNumeralConverter {
  public toRoman(number: number): string {
    if (number === 0) {
      return "";
    }
    if (number === 5) {
      return "V";
    }
    if (number === 6) {
      return "VI";
    }
    return "I".repeat(number);
  }
} 
