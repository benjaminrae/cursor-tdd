# CLAUDE.md

This file provides guidance to Claude Code when working with this TypeScript TDD kata repository.

## Project Overview

TypeScript kata bootstrap project for practicing Test-Driven Development (TDD). Each kata lives in its own directory under `src/` with this structure:

```
src/kata-name/
├── README.md      # Kata specification and requirements
├── index.ts       # Production code (create only after writing tests)
└── index.test.ts  # Test file (create first, following TDD)
```

## TDD Workflow

### Strict RED-GREEN-REFACTOR Cycle
1. **RED**: Write a failing test first
   - Test must fail for the RIGHT reason (runtime errors, not compilation errors)
   - Create empty implementations with `throw new Error('Not implemented')`
2. **GREEN**: Write minimal code to make it pass
3. **REFACTOR**: Improve code while keeping tests green
   - Only refactor when you see enough repetition (Rule of Three)
   - Commit after each small refactor

### Implementation Guidelines
- **Baby Steps**: Make the smallest possible changes at each step
- **Triangulation**: Use multiple test cases to drive general implementation
- **No Production Code Without Tests**: NEVER write production code before having a failing test
- **Test Organization**: Group related tests with `describe()` blocks and use parameterized tests with `it.each()`

## Commands

### Essential Commands
- `npm run test` - Run all tests once
- `npm run test:watch` - Run tests in watch mode for TDD workflow
- `npm run lint` - Run ESLint and TypeScript type checking (must pass with 0 warnings)

### Test Commands
```bash
# Run specific test file
npm run test -- src/kata-name/index.test.ts

# Run tests matching a pattern
npm run test -- -t "pattern"
```

## Code Standards

### Code Style
- TypeScript with strict mode enabled
- ESLint must pass with 0 warnings before committing
- **NEVER write comments** - Always prefer clear naming (exception: JSDoc only when explicitly requested)
- Each kata should be self-contained and independent

### Testing Standards
- **Vitest** with global test functions enabled
- Maintain clear arrange-act-assert separation with blank lines
- Parameterized tests with `it.each()` are preferred for multiple test cases

## Commit Guidelines

### When to Commit
- After test passes and case is marked complete in README
- After each small refactor while tests stay green
- Use conventional commits format

### Current Katas
1. **roman-numerals**: Converts integers to Roman numerals
2. **mars-rover**: Robot navigation simulation