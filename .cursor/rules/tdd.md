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
- **CRITICAL**: Run the test and verify it fails for the right reason
- The test should fail because functionality doesn't exist yet
- If test passes unexpectedly, investigate why

### 3. GREEN Phase - Make Test Pass
- Write the absolute minimum code to make the test pass
- Use the simplest possible implementation
- Don't worry about code quality yet
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
  ```
- Verify the test passes and no other tests break

### 4. REFACTOR Phase - Improve Code
- Clean up the code for readability and maintainability
- **NEVER add new functionality during refactoring**
- **NEVER change external behavior**
- Remove duplication, improve variable names, simplify expressions
- Run tests frequently during refactoring
- If tests break, revert and try smaller steps

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

### What to Do Instead
- ✅ Write one test at a time
- ✅ Always verify RED phase fails correctly
- ✅ Keep GREEN phase implementations minimal
- ✅ Focus only on refactoring in REFACTOR phase
- ✅ Fix failing tests immediately
- ✅ Write meaningful, specific tests

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

// RED Phase - Test 2
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
- **Trust the process - it works!**

## When Working Together
- Always follow this RED-GREEN-REFACTOR cycle
- Verify each phase before moving to the next
- Use baby steps and minimal implementations
- Focus on one test case at a time
- Document test cases before starting implementation 
