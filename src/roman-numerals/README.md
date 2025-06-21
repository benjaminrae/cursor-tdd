# Roman Numerals Kata

## Description
Convert integers to Roman numeral strings. The function should take an integer (e.g., 1, 2, 3) and return the corresponding Roman numeral string (e.g., "I", "II", "III").

## Roman Numeral Rules
- I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
- When a smaller numeral appears before a larger one, subtract it (e.g., IV = 4, IX = 9)
- When a smaller numeral appears after a larger one, add it (e.g., VI = 6, VII = 7)

## Test Cases (Prioritized by TDD Rules)

### Phase 1: Empty/Zero Cases (Start Here)
- [x] 0 → "" (empty string for zero)

### Phase 2: Additive Principle Only (Complete This First)
#### Basic Numbers (1-10)
- [x] 1 → "I"
- [x] 2 → "II"
- [x] 3 → "III"
- [x] 5 → "V"
- [x] 6 → "VI"
- [x] 7 → "VII"
- [x] 8 → "VIII"
- [x] 10 → "X"
- [x] 11 → "XI"
- [x] 12 → "XII"
- [ ] 13 → "XIII"
- [ ] 15 → "XV"
- [ ] 16 → "XVI"
- [ ] 17 → "XVII"
- [ ] 18 → "XVIII"
- [ ] 20 → "XX"
- [ ] 21 → "XXI"
- [ ] 25 → "XXV"
- [ ] 30 → "XXX"
- [ ] 50 → "L"
- [ ] 60 → "LX"
- [ ] 100 → "C"
- [ ] 500 → "D"
- [ ] 1000 → "M"

### Phase 3: Subtractive Principle (Do After Additive)
#### Basic Subtractive Cases
- [ ] 4 → "IV" (I before V = 4)
- [ ] 9 → "IX" (I before X = 9)
- [ ] 40 → "XL" (X before L = 40)
- [ ] 90 → "XC" (X before C = 90)
- [ ] 400 → "CD" (C before D = 400)
- [ ] 900 → "CM" (C before M = 900)

#### Complex Subtractive Cases
- [ ] 14 → "XIV"
- [ ] 19 → "XIX"
- [ ] 24 → "XXIV"
- [ ] 29 → "XXIX"
- [ ] 39 → "XXXIX"
- [ ] 44 → "XLIV"
- [ ] 49 → "XLIX"
- [ ] 89 → "LXXXIX"
- [ ] 94 → "XCIV"
- [ ] 99 → "XCIX"

### Phase 4: Complex Numbers (Real-world Examples)
- [ ] 1984 → "MCMLXXXIV"
- [ ] 2023 → "MMXXIII"
- [ ] 3999 → "MMMCMXCIX"

### Phase 5: Edge Cases (Error Conditions)
- [ ] Negative numbers → throw error
- [ ] Numbers > 3999 → throw error (traditional Roman numerals limit)

## Implementation Notes
- Start with the zero case (0 → "") following TDD baby steps rules
- Use baby steps following TDD RED-GREEN-REFACTOR cycle
- Complete all additive cases before introducing subtractive principle
- Handle edge cases appropriately
