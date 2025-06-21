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

### Phase 2: Single Items (Basic Numbers 1-10)
- [x] 1 → "I"
- [x] 2 → "II"
- [ ] 3 → "III"
- [ ] 4 → "IV"
- [x] 5 → "V"
- [x] 6 → "VI"
- [ ] 7 → "VII"
- [ ] 8 → "VIII"
- [ ] 9 → "IX"
- [ ] 10 → "X"

### Phase 3: Multiple Items (Teens and Beyond)
- [ ] 11 → "XI"
- [ ] 12 → "XII"
- [ ] 13 → "XIII"
- [ ] 14 → "XIV"
- [ ] 15 → "XV"
- [ ] 16 → "XVI"
- [ ] 17 → "XVII"
- [ ] 18 → "XVIII"
- [ ] 19 → "XIX"
- [ ] 20 → "XX"
- [ ] 21 → "XXI"
- [ ] 24 → "XXIV"
- [ ] 25 → "XXV"
- [ ] 29 → "XXIX"
- [ ] 30 → "XXX"
- [ ] 40 → "XL"
- [ ] 50 → "L"
- [ ] 60 → "LX"
- [ ] 90 → "XC"
- [ ] 100 → "C"
- [ ] 400 → "CD"
- [ ] 500 → "D"
- [ ] 900 → "CM"
- [ ] 1000 → "M"

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
- Consider the subtractive principle (IV, IX, XL, XC, CD, CM)
- Handle edge cases appropriately
