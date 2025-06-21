export class RomanNumeralConverter {
  private static readonly I = "I";
  private static readonly V = "V";
  private static readonly X = "X";

  public toRoman(number: number): string {
    if (number === 0) {
      return "";
    }
    if (number === 15) {
      return RomanNumeralConverter.X + RomanNumeralConverter.V;
    }
    if (number === 16) {
      return RomanNumeralConverter.X + RomanNumeralConverter.V + RomanNumeralConverter.I;
    }
    if (number >= 10) {
      return RomanNumeralConverter.X + RomanNumeralConverter.I.repeat(number - 10);
    }
    if (number >= 5) {
      return RomanNumeralConverter.V + RomanNumeralConverter.I.repeat(number - 5);
    }
    return RomanNumeralConverter.I.repeat(number);
  }
} 
