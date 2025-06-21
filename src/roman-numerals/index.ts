export class RomanNumeralConverter {
  private static readonly I = "I";
  private static readonly V = "V";

  public toRoman(number: number): string {
    if (number === 0) {
      return "";
    }
    if (number === 5) {
      return RomanNumeralConverter.V;
    }
    if (number === 6) {
      return RomanNumeralConverter.V + RomanNumeralConverter.I;
    }
    return RomanNumeralConverter.I.repeat(number);
  }
} 
