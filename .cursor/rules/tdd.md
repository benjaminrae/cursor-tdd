# TDD Rules - Strict Test-Driven Development

## Core Principles
- **Always write tests before production code**
- **Follow the RED-GREEN-REFACTOR cycle strictly**
- **Use baby steps - make the smallest possible changes**
- **Verify tests fail for the right reason before moving on to GREEN**
- **Verify tests pass before moving onto REFACTOR**
- **Verify tests always pass during REFACTOR to make sure that refactors and safe and not changing behaviour**

## TDD Workflow

### 1. Test Planning (Before RED)
Before writing any code:
- Create a comprehensive list of test cases
- Include basic functionality, edge cases, and error conditions
- Prioritize from simple to complex
- Document test cases in a checklist format

### 2. RED Phase - Write Failing Test
- Write only enough test code to fail
- Use descriptive test names explaining expected behavior
- Follow Arrange-Act-Assert pattern
- **CRITICAL: Run the test and verify it fails for the right reason:**
  - The test should fail due to incorrect or missing behavior in the implementation (e.g., wrong return value, unimplemented logic).
  - The test should **not** fail due to compilation errors, missing imports, reference errors, or typos.
  - If a method is not yet implemented, it should explicitly throw:
    ```typescript
    throw new Error('Method not implemented');
    ```
  - This ensures the test fails for a clear, behavioral reason, not a compilation or reference error.
- The test should fail because functionality doesn't exist yet or is not implemented
- If test passes unexpectedly, investigate why

### 3. GREEN Phase - Make Test Pass
- Write the absolute minimum code to make the test pass
- Use the simplest possible implementation
- Don't worry about code quality yet
- **Do not write any production code that is not covered by tests**
- **Use "Fake It" when appropriate:**
  - Sometimes the simplest implementation is to return the exact expected value
  - This is often simpler than adding conditional logic
  - Example: For test expecting `0 → ""`, just return `""` directly
  - The next test case (via triangulation) will force you to make it more general
- Examples of minimal implementations:
  ```typescript
  // For test expecting "Hello, World!"
  function greet(name: string): string {
    return "Hello, World!"; // Hard-coded to pass
  }
  
  // For test expecting sum(2, 3) = 5
  function sum(a: number, b: number): number {
    return 5; // Hard-coded to pass
  }
  
  // For test expecting 0 → ""
  function toRoman(number: number): string {
    return ""; // Fake it - return exact expected value
  }
  ```
- Verify the test passes and no other tests break

### 4. REFACTOR Phase - Improve Code
- Clean up the code for readability and maintainability
- **Refactor both production code AND test code**
- **NEVER add new functionality during refactoring**
- **NEVER change external behavior**
- Remove duplication, improve variable names, simplify expressions
- Run tests frequently during refactoring
- If tests break, revert and try smaller steps

## Triangulation and Choosing the Next Test Case

### What is Triangulation?
Triangulation is the practice of choosing the next test case that will force you to change the production code, moving away from hard-coded implementations toward more general solutions.

### Choosing the Next Test Case
- **Select a test that will fail with the current implementation**
- **Choose the simplest test that requires a different behavior**
- **Avoid tests that would pass with the current hard-coded solution**
- **Use triangulation to drive the implementation toward generality**

### When to Remove "Method not implemented"
- Remove the error throw once you have a working implementation for the current test case
- The next test case should fail because it requires different behavior, not because of the error throw
- This ensures you're using triangulation to drive the design

### Example of Triangulation
```typescript
// Test 1: 0 → ""
// Implementation: if (number === 0) return "";

// Test 2: 1 → "I" (chosen because it will fail with current implementation)
// This forces us to handle the case where number === 1
// Implementation: if (number === 0) return ""; if (number === 1) return "I";

// Test 3: 2 → "II" (chosen because it will fail with current implementation)
// This forces us to handle repetition
// Implementation: if (number === 0) return ""; if (number === 1) return "I"; if (number === 2) return "II";
```

## Implementation Guidelines

### Test Structure
```typescript
describe('Feature', () => {
  it('should do something specific', () => {
    // Arrange - Set up test data and conditions
    const input = 'test';
    
    // Act - Execute the code under test
    const result = someFunction(input);
    
    // Assert - Verify the expected outcome
    expect(result).toBe('expected output');
  });
});
```

### Baby Steps Examples
1. **Start with empty string/zero cases**
2. **Add single item cases**
3. **Add multiple item cases**
4. **Add edge cases and error conditions**

### Anti-Patterns to Avoid
- ❌ Writing production code before tests
- ❌ Writing multiple tests at once
- ❌ Skipping RED phase verification
- ❌ Writing complex implementations in GREEN phase
- ❌ Adding new functionality during REFACTOR phase
- ❌ Ignoring failing tests
- ❌ Choosing test cases that don't force code changes (no triangulation)

### What to Do Instead
- ✅ Write one test at a time
- ✅ Always verify RED phase fails correctly
- ✅ Keep GREEN phase implementations minimal
- ✅ Focus only on refactoring in REFACTOR phase
- ✅ Fix failing tests immediately
- ✅ Write meaningful, specific tests
- ✅ Use triangulation to choose the next test case
- ✅ Remove "Method not implemented" once you have working code

## Example TDD Session

### Feature: String Calculator

**Test Cases:**
1. Empty string returns 0
2. Single number returns that number
3. Two numbers separated by comma returns sum
4. Multiple numbers separated by commas returns sum

**TDD Cycle:**
```typescript
// RED Phase - Test 1
describe('StringCalculator', () => {
  it('should return 0 for empty string', () => {
    const calculator = new StringCalculator();
    expect(calculator.add('')).toBe(0);
  });
});

// GREEN Phase - Minimal implementation
class StringCalculator {
  add(numbers: string): number {
    return 0; // Hard-coded to pass
  }
}

// REFACTOR Phase - No changes needed yet

// RED Phase - Test 2 (chosen via triangulation)
it('should return the number for single number', () => {
  const calculator = new StringCalculator();
  expect(calculator.add('1')).toBe(1);
});

// GREEN Phase - Update implementation
class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') return 0;
    return parseInt(numbers);
  }
}
```

## Remember
- **TDD is a discipline, not just a technique**
- **The goal is better code design, not just testing**
- **Baby steps lead to better understanding and fewer bugs**
- **Refactoring is where the real design happens**
- **Triangulation drives the implementation toward generality**
- **Trust the process - it works!**

## When Working Together
- Always follow this RED-GREEN-REFACTOR cycle
- Verify each phase before moving to the next
- Use baby steps and minimal implementations
- Focus on one test case at a time
- Document test cases before starting implementation
- Use triangulation to choose the next test case

## Refactoring Heuristics

### Three Strikes Rule
- Only refactor duplication after it appears three times
- This helps avoid premature abstraction and ensures refactoring is based on real, repeated patterns
- Wait for the third occurrence of similar code before extracting a method, class, or abstraction
- This gives you more context and leads to better, more stable designs

### Example
- If you see the same logic or code in three places, refactor it into a shared function or abstraction
- If you only see it in two places, wait for a third before refactoring
