# Naming Conventions Rules

## NO ABBREVIATIONS
Use full, descriptive names instead of abbreviations:

### Variables and Parameters
- ✅ `number` instead of `num`
- ✅ `string` instead of `str`
- ✅ `index` instead of `idx`
- ✅ `result` instead of `res`
- ✅ `value` instead of `val`
- ✅ `array` instead of `arr`
- ✅ `object` instead of `obj`
- ✅ `function` instead of `func`
- ✅ `parameter` instead of `param`
- ✅ `variable` instead of `var`
- ✅ `count` instead of `cnt`
- ✅ `length` instead of `len`
- ✅ `position` instead of `pos`
- ✅ `temporary` instead of `temp`
- ✅ `maximum` instead of `max`
- ✅ `minimum` instead of `min`
- ✅ `average` instead of `avg`
- ✅ `total` instead of `tot`
- ✅ `current` instead of `cur`
- ✅ `previous` instead of `prev`
- ✅ `next` instead of `nxt`
- ✅ `message` instead of `msg`
- ✅ `error` instead of `err`
- ✅ `response` instead of `resp`
- ✅ `request` instead of `req`
- ✅ `configuration` instead of `config`
- ✅ `dictionary` instead of `dict`
- ✅ `iterator` instead of `iter`
- ✅ `callback` instead of `cb`

### Function and Method Names
- ✅ `calculateTotal` instead of `calcTot`
- ✅ `validateInput` instead of `valInp`
- ✅ `processData` instead of `procData`
- ✅ `convertToString` instead of `convToStr`
- ✅ `findElement` instead of `findElem`
- ✅ `getUserData` instead of `getUsrData`
- ✅ `setConfiguration` instead of `setConfig`

### Class Names
- ✅ `UserManager` instead of `UsrMgr`
- ✅ `DataProcessor` instead of `DataProc`
- ✅ `ConfigurationManager` instead of `ConfigMgr`
- ✅ `StringConverter` instead of `StrConv`

## File and Folder Naming
- Use kebab-case for folder names: `string-calculator`, `fizz-buzz`
- Use `index.ts` for main production code files
- Use `index.test.ts` for test files
- Use `README.md` for documentation

## Examples

### ❌ Don't Do This
```typescript
function calcTot(nums: number[]): number {
  let tot = 0;
  for (let i = 0; i < nums.length; i++) {
    tot += nums[i];
  }
  return tot;
}

class UsrMgr {
  private usrData: any;
  
  getUsrData(): any {
    return this.usrData;
  }
}
```

### ✅ Do This Instead
```typescript
function calculateTotal(numbers: number[]): number {
  let total = 0;
  for (let index = 0; index < numbers.length; index++) {
    total += numbers[index];
  }
  return total;
}

class UserManager {
  private userData: any;
  
  getUserData(): any {
    return this.userData;
  }
}
```

## Benefits
- **Readability**: Code is self-documenting
- **Maintainability**: Easier for new developers to understand
- **Consistency**: Uniform naming across the codebase
- **Professional**: Shows attention to code quality
- **Accessibility**: Helps developers with different language backgrounds 
