# PM7Input Component - Complete Integration Guide

**PM7Input** is a React input component that provides PM7-branded styling on top of standard HTML input elements. It offers consistent styling, proper focus states, and support for various input types while maintaining accessibility standards.

**📖 Read Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/input/README.md](https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/input/README.md)

**✏️ Edit Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/input/README.md](https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/input/README.md)

**Package**: pm7-ui-style-guide  
**Component**: PM7Input (React input component with PM7 styling)  
**CSS File**: No separate CSS file required - uses global PM7 styling rules  
**Dependencies**: None

## Installation & Usage

### Basic Import

```typescript
import { PM7Input } from 'pm7-ui-style-guide';
// or
import { Input } from 'pm7-ui-style-guide';
```

### CSS Import (Required)

*Note: The PM7Input component does not require a separate CSS import as it uses the global PM7 styling rules.*

## Basic Examples

### Text Input

```tsx
<PM7Input
  type="text"
  placeholder="Enter your name"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### Email Input

```tsx
<PM7Input
  type="email"
  placeholder="Enter your email"
  required
/>
```

### Password Input

```tsx
<PM7Input
  type="password"
  placeholder="Enter password"
  minLength={8}
/>
```

### Number Input

```tsx
<PM7Input
  type="number"
  placeholder="Enter amount"
  min={0}
  max={1000}
  step={0.01}
/>
```

## Input Types

**Supported Input Types:**

- `text` - Standard text input
- `email` - Email input with validation
- `password` - Password input (masked)
- `number` - Numeric input
- `tel` - Telephone number input
- `url` - URL input
- `search` - Search input
- `date` - Date picker input
- `time` - Time picker input
- `datetime-local` - Date and time input

## Form Integration

### With Form Labels

```tsx
<div>
  <label htmlFor="username">Username</label>
  <PM7Input
    id="username"
    type="text"
    placeholder="Enter username"
    required
  />
</div>
```

### With Error States

```tsx
<PM7Input
  type="email"
  placeholder="Enter email"
  className={hasError ? 'border-red-500' : ''}
  aria-invalid={hasError}
  aria-describedby={hasError ? 'email-error' : undefined}
/>
{hasError && (
  <p id="email-error" className="text-red-500 text-sm mt-1">
    Please enter a valid email address
  </p>
)}
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | "text" | HTML input type (text, email, password, etc.) |
| `placeholder` | string | - | Placeholder text |
| `value` | string | - | Input value (for controlled components) |
| `defaultValue` | string | - | Default value (for uncontrolled components) |
| `onChange` | function | - | Change event handler |
| `onFocus` | function | - | Focus event handler |
| `onBlur` | function | - | Blur event handler |
| `disabled` | boolean | false | Whether the input is disabled |
| `required` | boolean | false | Whether the input is required |
| `readOnly` | boolean | false | Whether the input is read-only |
| `autoComplete` | string | - | Autocomplete hint for the input |
| `autoFocus` | boolean | false | Whether to auto-focus the input |
| `maxLength` | number | - | Maximum number of characters |
| `minLength` | number | - | Minimum number of characters |
| `min` | number/string | - | Minimum value (for number/date inputs) |
| `max` | number/string | - | Maximum value (for number/date inputs) |
| `step` | number/string | - | Step value (for number inputs) |
| `pattern` | string | - | Regex pattern for validation |
| `className` | string | - | Additional CSS classes |
| `style` | object | - | Inline styles |

## Styling & Theming

### PM7 Brand Colors

- **Primary Blue**: #1C86EF (focus border)
- **Border Color**: #D4D4D4 (light mode), #525252 (dark mode)
- **Background**: White (light mode), Dark (dark mode)

### Custom Styling

```tsx
<PM7Input
  className="w-full bg-gray-50 border-2"
  style={{ minHeight: '48px' }}
/>
```

## Accessibility Features

**Built-in Accessibility:**

- Proper keyboard navigation
- Screen reader support
- ARIA attributes support
- Focus management
- High contrast support
- Label association

## Form Validation

### HTML5 Validation

```tsx
<PM7Input
  type="email"
  required
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
  title="Please enter a valid email address"
/>
```

### Custom Validation

```tsx
const [value, setValue] = useState('');
const [error, setError] = useState('');

const validateInput = (inputValue) => {
  if (inputValue.length < 3) {
    setError('Input must be at least 3 characters');
    return false;
  }
  setError('');
  return true;
};

<PM7Input
  value={value}
  onChange={(e) => {
    setValue(e.target.value);
    validateInput(e.target.value);
  }}
  className={error ? 'border-red-500' : ''}
/>
```

## Best Practices

**Recommended Usage:**

- Always provide meaningful placeholder text
- Use appropriate input types for better UX
- Include proper labels for accessibility
- Implement proper error handling and validation
- Use autocomplete attributes when appropriate
- Test with keyboard navigation
- Ensure sufficient color contrast

**Note**: The PM7Input component uses global PM7 styling rules and does not require a separate CSS import.

## Performance Considerations

- Component is lightweight and optimized for performance
- Use controlled components only when necessary
- Debounce onChange handlers for expensive operations
- Consider using React.memo for static inputs

## Browser Support

PM7Input supports all modern browsers including:

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

*For older browser support, ensure appropriate polyfills are included in your build process.*