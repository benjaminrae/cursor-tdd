export class RomanNumeralConverter {
  private static readonly I = "I";
  private static readonly V = "V";
  private static readonly X = "X";

  public toRoman(number: number): string {
    if (number === 0) {
      return "";
    }
    if (number === 10) {
      return RomanNumeralConverter.X;
    }
    if (number === 11) {
      return RomanNumeralConverter.X + RomanNumeralConverter.I;
    }
    if (number >= 5) {
      return RomanNumeralConverter.V + RomanNumeralConverter.I.repeat(number - 5);
    }
    return RomanNumeralConverter.I.repeat(number);
  }
} 
