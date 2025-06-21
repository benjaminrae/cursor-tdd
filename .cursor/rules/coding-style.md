# Coding Style Rules

## If Statements
- **Always use braces** for if statements, even for single-line blocks

```typescript
// ✅ Do This
if (condition) {
  return value;
}

// ❌ Don't Do This
if (condition) return value;
```

## TypeScript Privacy Modifiers
- **Always use privacy modifiers** for class methods, even if they are public

```typescript
// ✅ Do This
class Example {
  public publicMethod() {
    // implementation
  }

  private privateMethod() {
    // implementation
  }

  protected protectedMethod() {
    // implementation
  }
}

// ❌ Don't Do This
class Example {
  method() {
    // implementation
  }
}
```
