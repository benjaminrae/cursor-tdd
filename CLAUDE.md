# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development Commands
- `npm run build` - Compile TypeScript to JavaScript
- `npm run lint` - Run ESLint and TypeScript type checking (must pass with 0 warnings)
- `npm run test` - Run all tests once
- `npm run test:watch` - Run tests in watch mode for TDD workflow
- `npm run test:coverage` - Run tests with coverage report
- `npm run clean` - Clean build artifacts

### Running a Single Test
To run a specific test file:
```bash
npm run test -- src/kata-name/index.test.ts
```

To run tests matching a pattern:
```bash
npm run test -- -t "pattern"
```

## Architecture

This is a TypeScript kata bootstrap project designed for practicing Test-Driven Development (TDD). Each kata lives in its own directory under `src/` with the following structure:

```
src/kata-name/
├── README.md      # Kata specification and requirements
├── index.ts       # Production code (create only after writing tests)
└── index.test.ts  # Test file (create first, following TDD)
```

## Critical TDD Rules

This project enforces STRICT TDD methodology. The `.cursor/rules/tdd.md` file contains comprehensive guidelines that MUST be followed:

1. **RED-GREEN-REFACTOR Cycle**: 
   - RED: Write a failing test first (test must fail for the RIGHT reason - runtime errors, not compilation errors)
   - GREEN: Write minimal code to make it pass
   - REFACTOR: Improve code while keeping tests green

2. **Baby Steps**: Make the smallest possible changes at each step

3. **Triangulation**: Use multiple test cases to drive the general implementation

4. **No Production Code Without Tests**: NEVER write production code before having a failing test

5. **Proper Test Failures**: When writing initial tests, create empty implementations with `throw new Error('Not implemented')` to ensure tests fail for the right reason (not due to compilation errors)

## Testing Framework

- **Vitest** is used for testing with global test functions enabled
- Tests use the Arrange-Act-Assert pattern
- Parameterized tests with `it.each()` are preferred for multiple test cases
- Tests must be in `*.test.ts` files

## Code Style

- TypeScript with strict mode enabled
- ESLint must pass with 0 warnings before committing
- Follow naming conventions in `.cursor/rules/naming-conventions.md`
- Each kata should be self-contained and independent
- **NEVER write comments** - Always prefer clear naming to comments (exception: JSDoc is allowed but only when explicitly requested)

## Current Katas

1. **roman-numerals**: Converts integers to Roman numerals (partially implemented)
2. **mars-rover**: Robot navigation simulation (not yet implemented)

Each kata has its own README with detailed specifications and test checklists.