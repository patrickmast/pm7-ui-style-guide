# PM7 Input Component

## Overview

The PM7 Input component provides styling rules for input fields in the Winfakt UI Style Guide. It ensures consistent input behavior and appearance across all Winfakt applications.

## Usage

```tsx
import { inputRules } from 'pm7-ui-style-guide';
import { Input } from '@/components/ui/input'; // Your input component

function StyledInput() {
  return (
    <Input
      style={{
        borderColor: inputRules.alwaysShowBorder ? '#D4D4D4' : 'transparent',
      }}
      className="focus:border-primary"
      // Add other styling as needed
      placeholder="Enter text..."
    />
  );
}
```

## Input Rules

The `inputRules` object provides standardized styling properties for input fields:

| Property | Value | Description |
|----------|-------|-------------|
| `focusBorderColor` | `'primary'` | Use primary color for border on focus |
| `alwaysShowBorder` | `true` | Always display a border around input fields |

## Best Practices

1. **Consistent Borders**: Always apply borders to input fields for better visibility and user experience.

2. **Focus States**: Use the primary color for focus states to provide clear visual feedback.

3. **Accessibility**: Ensure inputs have appropriate labels and meet accessibility standards.

4. **Validation States**: Consider adding styling for different validation states (error, success, warning).

## Implementation Details

The input rules are implemented as a simple JavaScript object that exports styling properties. These properties can be applied to any input component in your application.

```typescript
// Input rules for pm7-ui-style-guide
export const inputRules = {
  focusBorderColor: 'primary', // Use primary color for border on focus
  alwaysShowBorder: true,
};
```

## Integration with Forms

The input rules can be used in conjunction with form components to create cohesive and consistent forms:

```tsx
import { inputRules } from 'pm7-ui-style-guide';

function LoginForm() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          style={{
            borderColor: inputRules.alwaysShowBorder ? '#D4D4D4' : 'transparent',
          }}
          className="w-full p-2 rounded focus:border-primary"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          style={{
            borderColor: inputRules.alwaysShowBorder ? '#D4D4D4' : 'transparent',
          }}
          className="w-full p-2 rounded focus:border-primary"
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" className="w-full p-2 bg-primary text-white rounded">
        Login
      </button>
    </form>
  );
}
```

## Customization

While the input rules provide default styling, you can customize them to fit your specific needs:

```tsx
import { inputRules } from 'pm7-ui-style-guide';

function CustomInput() {
  const customStyles = {
    ...inputRules,
    // Override or add custom properties
    borderRadius: '8px',
    padding: '12px',
  };

  return (
    <input
      style={{
        borderColor: customStyles.alwaysShowBorder ? '#D4D4D4' : 'transparent',
        borderRadius: customStyles.borderRadius,
        padding: customStyles.padding,
      }}
      className="focus:border-primary"
      placeholder="Customized input"
    />
  );
}
