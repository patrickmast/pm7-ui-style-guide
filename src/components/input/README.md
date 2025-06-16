# PM7Input Configuration - Complete Integration Guide

**inputRules** is a configuration object that provides PM7-branded styling rules for input components. It defines focus border behavior and visual styling guidelines to ensure consistent input appearance across PM7 applications.

**📖 Read Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/input/README.md](https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/input/README.md)

**✏️ Edit Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/input/README.md](https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/input/README.md)

**Package**: pm7-ui-style-guide  
**Component**: inputRules (Configuration object for PM7 input styling)  
**CSS File**: No separate CSS file required - uses global PM7 styling rules  
**Dependencies**: None

## Installation

```bash
npm install pm7-ui-style-guide
```

## Import

```typescript
import { inputRules } from 'pm7-ui-style-guide';
```

## Configuration Reference

The `inputRules` object provides the following configuration options:

### focusBorderColor

- **Type**: `string`
- **Default**: `'primary'`
- **Description**: Controls the border color when an input field receives focus

**Options:**
- `'primary'` - Uses PM7 primary brand color #1C86EF (default)
- `'red'` - Red border for error states
- `'green'` - Green border for success states
- Custom hex color (e.g., `'#FF5722'`)

### alwaysShowBorder

- **Type**: `boolean`
- **Default**: `true`
- **Description**: Determines whether input fields should always display a border or only show border on focus

**Options:**
- `true` - Always show border (default, recommended for PM7 styling)
- `false` - Only show border on focus (minimal styling)

## Usage Examples

### Default Configuration

```typescript
import { inputRules } from 'pm7-ui-style-guide';

// Default configuration
console.log(inputRules);
// Output: { focusBorderColor: 'primary', alwaysShowBorder: true }
```

### Custom Border Color

```typescript
import { inputRules } from 'pm7-ui-style-guide';

// Set custom focus border color
inputRules.focusBorderColor = '#FF5722'; // Custom orange color

// For error states
inputRules.focusBorderColor = 'red';

// For success states
inputRules.focusBorderColor = 'green';
```

### Border Display Configuration

```typescript
import { inputRules } from 'pm7-ui-style-guide';

// Always show borders (recommended)
inputRules.alwaysShowBorder = true;

// Show borders only on focus (minimal styling)
inputRules.alwaysShowBorder = false;
```

### Runtime Configuration

```typescript
import { inputRules } from 'pm7-ui-style-guide';

// Dynamic configuration based on theme or state
const configureInputs = (theme: 'light' | 'dark', hasErrors: boolean) => {
  if (hasErrors) {
    inputRules.focusBorderColor = 'red';
  } else {
    inputRules.focusBorderColor = 'primary';
  }
  
  // Always show borders for better visibility
  inputRules.alwaysShowBorder = true;
};
```

## Integration with Form Libraries

### React Hook Form

```typescript
import { inputRules } from 'pm7-ui-style-guide';
import { useForm } from 'react-hook-form';

const MyForm = () => {
  const { register, formState: { errors } } = useForm();
  
  // Configure input styling based on validation state
  React.useEffect(() => {
    if (Object.keys(errors).length > 0) {
      inputRules.focusBorderColor = 'red';
    } else {
      inputRules.focusBorderColor = 'primary';
    }
  }, [errors]);

  return (
    <form>
      <input {...register('email', { required: true })} />
    </form>
  );
};
```

### Formik

```typescript
import { inputRules } from 'pm7-ui-style-guide';
import { Formik, Form, Field } from 'formik';

const MyForm = () => {
  return (
    <Formik
      initialValues={{ email: '' }}
      validate={(values) => {
        const errors = {};
        // Configure styling based on validation
        if (Object.keys(errors).length > 0) {
          inputRules.focusBorderColor = 'red';
        } else {
          inputRules.focusBorderColor = 'primary';
        }
        return errors;
      }}
    >
      <Form>
        <Field name="email" type="email" />
      </Form>
    </Formik>
  );
};
```

## PM7 Brand Guidelines

### Colors
- **Primary**: #1C86EF (PM7 blue) - Default focus border color
- **Error State**: Red border for form validation errors
- **Success State**: Green border for successful validation
- **Border**: Always visible for consistent UI appearance

### Design Principles
- Consistent input styling across all PM7 applications
- Clear visual feedback for user interactions
- Accessibility-friendly focus indicators
- Professional appearance aligned with PM7 branding

## Best Practices

**Recommended Usage:**

- Always use PM7 primary color for default focus states
- Use red color for error/validation states
- Use green color for success/validated states
- Keep `alwaysShowBorder` as `true` for consistent appearance
- Configure colors dynamically based on form state
- Test focus states with keyboard navigation

## Implementation Notes

- **Global Configuration**: The `inputRules` object affects all input styling
- **Runtime Modification**: Configuration can be changed at any time
- **No CSS Required**: Uses global PM7 styling rules
- **Framework Agnostic**: Works with any React form library
- **Accessibility**: Follows WCAG guidelines for focus indicators

## API Reference

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `focusBorderColor` | `string` | `'primary'` | Border color on focus |
| `alwaysShowBorder` | `boolean` | `true` | Always show border vs focus only |

## Browser Support

inputRules configuration supports all modern browsers:
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

*The configuration object is a simple JavaScript object and has universal browser support.*