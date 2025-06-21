# Refactoring Rules

## Core Principles
- **Refactor only when all tests are GREEN**
- **Never add new functionality during refactoring**
- **Never change external behavior**
- **Run tests frequently during refactoring**
- **Make small, incremental changes**
- **If tests break, revert and try smaller steps**

## Code Clarity Principles
- **Prefer improving naming** over adding comments
- **Make code self-documenting** through clear method and variable names
- **Avoid comments** - they often indicate unclear code
- **Don't add comments** as a substitute for better code structure

```typescript
// ✅ Do This
const isUserEligibleForDiscount = user.age >= 18 && user.purchaseHistory.length > 0;
const hasValidMembership = user.membershipStatus === 'active' && !user.membershipExpired;

if (isUserEligibleForDiscount && hasValidMembership) {
  applyDiscount(user);
}

// ❌ Don't Do This
// Check if user is eligible for discount based on age, purchase history, and membership status
if (user.age >= 18 && user.purchaseHistory.length > 0 && 
    user.membershipStatus === 'active' && !user.membershipExpired) {
  applyDiscount(user);
}
```

## Refactoring Patterns

### Extract Method
- **When**: A block of code has a clear, single purpose
- **How**: Move the code to a new method with a descriptive name
- **Why**: Improves readability and reusability
- **Guidelines**: Keep methods small and focused on a single responsibility

### Rename
- **When**: A name doesn't clearly describe its purpose
- **How**: Change the name to be more descriptive
- **Why**: Makes code self-documenting

### Extract Variable
- **When**: A complex expression is hard to understand
- **How**: Assign the expression to a well-named variable
- **Why**: Improves readability and debugging

### Simplify Conditional
- **When**: A conditional expression is complex
- **How**: Extract to a method or use early returns
- **Why**: Makes logic easier to follow

### Three Strikes Rule
- **When**: You see the same logic or code pattern repeated
- **How**: Wait for the third occurrence before refactoring
- **Why**: Avoids premature abstraction and ensures refactoring is based on real, repeated patterns
- **Example**: If you see similar code in three places, extract it into a shared function or abstraction
- **Note**: If you only see it in two places, wait for a third before refactoring

## Anti-Patterns to Avoid
- ❌ Adding new functionality during refactoring
- ❌ Changing external behavior
- ❌ Making large, sweeping changes
- ❌ Adding comments instead of improving code
- ❌ Refactoring without running tests
- ❌ Ignoring failing tests during refactoring

## When to Stop Refactoring
- **When the code is clear and readable**
- **When all tests pass consistently**
- **When the next change would be a new feature**
- **When the refactoring doesn't improve clarity**

## Refactoring Checklist
- [ ] All tests are passing
- [ ] No new functionality added
- [ ] External behavior unchanged
- [ ] Code is more readable
- [ ] Names are descriptive
- [ ] Methods have single responsibilities
- [ ] No comments needed to explain code
- [ ] Tests still pass after refactoring

## Remember
- **Refactoring is about improving code quality**
- **Good code is self-documenting**
- **Small changes are safer than large ones**
- **Tests are your safety net**
- **When in doubt, make the code clearer**
