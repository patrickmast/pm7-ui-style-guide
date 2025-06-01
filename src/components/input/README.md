# PM7 Input Rules

## Overview

The PM7 Input rules provide styling guidelines for input fields to ensure consistent appearance across all PM7 applications. This module exports configuration rules rather than a complete input component, allowing maximum flexibility with existing input implementations.

## Installation

```bash
npm install pm7-ui-style-guide
```

## Usage

### Basic Usage with Existing Components

```tsx
import { inputRules } from 'pm7-ui-style-guide';

function StyledInput() {
  return (
    <input
      style={{
        border: inputRules.alwaysShowBorder ? '1px solid #D4D4D4' : 'none',
        borderRadius: '6px',
        padding: '0.5rem',
      }}
      className="focus:border-blue-500" // Use #1C86EF for PM7 primary
      placeholder="Enter text..."
    />
  );
}
```

### With Tailwind CSS Classes

```tsx
import { inputRules } from 'pm7-ui-style-guide';

function TailwindInput() {
  const borderClass = inputRules.alwaysShowBorder ? 'border border-gray-300' : 'border-0';
  
  return (
    <input
      className={`${borderClass} rounded-md px-3 py-2 focus:outline-none focus:border-blue-500`}
      placeholder="Enter text..."
    />
  );
}
```

### With CSS-in-JS

```tsx
import { inputRules } from 'pm7-ui-style-guide';

const inputStyles = {
  border: inputRules.alwaysShowBorder ? '1px solid #D4D4D4' : 'none',
  borderRadius: '6px',
  padding: '0.5rem 0.75rem',
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  ':focus': {
    borderColor: '#1C86EF' // PM7 primary color
  }
};

function CSSInJSInput() {
  return (
    <input
      style={inputStyles}
      placeholder="Enter text..."
    />
  );
}
```

### Form Example

```tsx
import { inputRules } from 'pm7-ui-style-guide';

function ContactForm() {
  const inputClassName = `
    w-full px-3 py-2 rounded-md
    ${inputRules.alwaysShowBorder ? 'border border-gray-300' : 'border-0'}
    focus:outline-none focus:border-blue-500
    transition-colors
  `;

  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          className={inputClassName}
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          className={inputClassName}
          placeholder="your@email.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          className={inputClassName}
          rows={4}
          placeholder="Your message"
        />
      </div>
      
      <button 
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  );
}
```

## API Reference

### inputRules Object

| Property | Type | Value | Description |
|----------|------|-------|-------------|
| `focusBorderColor` | `string` | `'primary'` | Indicates to use PM7 primary color (#1C86EF) for focus border |
| `alwaysShowBorder` | `boolean` | `true` | Input fields should always have a visible border |

### Color Values

When `focusBorderColor` is `'primary'`, use the PM7 primary color:
- **PM7 Primary**: `#1C86EF` (bright blue)
- **Border Default**: `#D4D4D4` (light gray)

## Implementation Guidelines

### Border Styling
```tsx
// Always show border according to PM7 rules
const borderStyle = inputRules.alwaysShowBorder 
  ? '1px solid #D4D4D4' 
  : 'none';
```

### Focus States
```tsx
// Use PM7 primary color for focus
const focusStyle = {
  borderColor: '#1C86EF' // PM7 primary when focusBorderColor is 'primary'
};
```

### Complete Input Styling
```tsx
const pm7InputStyle = {
  // Base styling
  border: inputRules.alwaysShowBorder ? '1px solid #D4D4D4' : 'none',
  borderRadius: '6px',
  padding: '0.5rem 0.75rem',
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'border-color 0.2s ease-in-out',
  
  // Focus state
  ':focus': {
    borderColor: '#1C86EF' // PM7 primary
  }
};
```

## Dark Mode Support

For dark mode implementations, adjust colors accordingly:

```tsx
import { inputRules } from 'pm7-ui-style-guide';

function DarkModeInput({ isDark }) {
  const borderColor = isDark ? '#525252' : '#D4D4D4';
  const backgroundColor = isDark ? '#262626' : 'white';
  const textColor = isDark ? '#FAFAFA' : 'inherit';
  
  return (
    <input
      style={{
        border: inputRules.alwaysShowBorder ? `1px solid ${borderColor}` : 'none',
        backgroundColor,
        color: textColor,
        borderRadius: '6px',
        padding: '0.5rem 0.75rem',
      }}
      className="focus:border-blue-500" // #1C86EF primary remains the same
      placeholder="Enter text..."
    />
  );
}
```

## Validation States

Extend the base rules for validation feedback:

```tsx
import { inputRules } from 'pm7-ui-style-guide';

function ValidatedInput({ error, success }) {
  let borderColor = '#D4D4D4'; // Default
  
  if (error) borderColor = '#EF4444'; // Red
  if (success) borderColor = '#10B981'; // Green
  
  return (
    <input
      style={{
        border: inputRules.alwaysShowBorder ? `1px solid ${borderColor}` : 'none',
        borderRadius: '6px',
        padding: '0.5rem 0.75rem',
      }}
      className="focus:border-blue-500"
      placeholder="Enter text..."
    />
  );
}
```

## Best Practices

1. **Always show borders**: Follow the `alwaysShowBorder` rule for consistency
2. **Use PM7 primary for focus**: Apply #1C86EF for focus states
3. **Consistent spacing**: Use standard padding (0.5rem 0.75rem)
4. **Smooth transitions**: Add transition effects for better UX
5. **Proper labeling**: Always include labels for accessibility
6. **Validation feedback**: Provide clear visual feedback for form states

## Integration with PM7 Style Guide

The input rules integrate seamlessly with other PM7 components:

- **Colors**: Use the same primary color (#1C86EF) as PM7 buttons and other components
- **Border radius**: 6px matches PM7 component styling
- **Typography**: Use PM7 font sizing and spacing standards
- **Theme support**: Compatible with PM7 light/dark theme system

## Why Rules Instead of Components?

The PM7 Input module provides rules rather than complete components because:

1. **Flexibility**: Works with any existing input library or custom implementation
2. **Framework agnostic**: Can be used with React, Vue, Angular, or vanilla JavaScript
3. **Minimal overhead**: Only includes essential styling guidelines
4. **Easy integration**: Doesn't interfere with existing form logic or validation

This approach allows teams to maintain their current input implementations while ensuring PM7 design consistency.