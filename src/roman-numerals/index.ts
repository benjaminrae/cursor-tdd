export class RomanNumeralConverter {
  private static readonly I = "I";
  private static readonly V = "V";
  private static readonly X = "X";

  public toRoman(number: number): string {
    if (number === 0) {
      return "";
    }
    if (number >= 10) {
      return RomanNumeralConverter.X + this.toRoman(number - 10);
    }
    if (number >= 5) {
      return RomanNumeralConverter.V + this.toRoman(number - 5);
    }
    if (number === 4) {
      return "IV";
    }
    return RomanNumeralConverter.I.repeat(number);
  }
} 
