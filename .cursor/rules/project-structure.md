# Project Structure Rules

## Kata Organization
- Each kata gets its own folder in `src/`
- Example: `src/string-calculator/`, `src/fizz-buzz/`, `src/roman-numerals/`
- Each kata folder contains:
  - Production code: `index.ts` or `[kata-name].ts`
  - Test file: `index.test.ts` or `[kata-name].test.ts`
  - README.md with kata description and test cases

## Kata Setup Process

### 1. Create Kata Folder
```bash
mkdir src/[kata-name]
```

### 2. Create Initial Files
- `src/[kata-name]/index.ts` - Production code
- `src/[kata-name]/index.test.ts` - Test file
- `src/[kata-name]/README.md` - Kata description and test cases

### 3. Document Test Cases
In the README.md, list all test cases before starting:
```markdown
# [Kata Name]

## Test Cases
- [ ] Basic case 1: [description]
- [ ] Basic case 2: [description]
- [ ] Edge case 1: [description]
- [ ] Error case 1: [description]
```

### 4. Follow TDD Cycle
- Start with the simplest test case
- Follow RED-GREEN-REFACTOR for each test
- Update the checklist as you complete each test

## Project Organization
- Keep each kata self-contained in its own folder
- Maintain consistent structure across all katas
- Use descriptive folder names that clearly indicate the kata
- Document the purpose and requirements of each kata
