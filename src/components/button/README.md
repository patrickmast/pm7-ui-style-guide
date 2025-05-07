# PM7 Button Component

## Overview

The PM7 Button component provides styling rules for buttons in the PM7 UI Style Guide. It ensures consistent button behavior and appearance across all PM7 applications. The component supports multiple button variants and sizes, providing a comprehensive solution for all button styling needs. This component follows the project's component directory pattern, located at `src/components/button/pm7-button.tsx`.

## Usage

### Basic Usage

```tsx
import { buttonRules } from 'pm7-ui-style-guide';
import { Button } from '@/components/ui/button'; // Your button component

function StyledButton() {
  return (
    <Button
      style={{ cursor: buttonRules.cursor }}
      // Add other styling as needed
    >
      Click Me
    </Button>
  );
}
```

### Using the PM7Button Component

For applications that don't already use ShadCN/UI, you can use the included PM7Button component:

```tsx
// For local development, use relative imports
import { PM7Button } from '../src/components/button/pm7-button';
// For production, use package imports
// import { PM7Button } from 'pm7-ui-style-guide';

function MyButtons() {
  // The theme prop can be 'light' or 'dark'
  const theme = 'light'; // or 'dark' based on your app's theme
  
  return (
    <div className="space-y-4">
      {/* Default button */}
      <PM7Button theme={theme}>Default Button</PM7Button>
      
      {/* Button variants */}
      <PM7Button theme={theme} className={buttonRules.outline}>Outline Button</PM7Button>
      <PM7Button theme={theme} className={buttonRules.secondary}>Secondary Button</PM7Button>
      <PM7Button theme={theme} className={buttonRules.ghost}>Ghost Button</PM7Button>
      <PM7Button theme={theme} className={buttonRules.link}>Link Button</PM7Button>
      
      {/* Button sizes */}
      <PM7Button theme={theme} className={buttonRules.small}>Small Button</PM7Button>
      <PM7Button theme={theme} className={buttonRules.large}>Large Button</PM7Button>
      
      {/* Disabled state */}
      <PM7Button theme={theme} disabled>Disabled Button</PM7Button>
      <PM7Button theme={theme} className={buttonRules.disabled}>Disabled via Class</PM7Button>
    </div>
  );
}
```

## Button Rules

### Props

The PM7Button component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'light' or 'dark'` | `undefined` | Sets the button's theme. In dark mode, certain button variants like outline and ghost will use white text for better visibility |
| `className` | `string` | `''` | CSS class names to apply to the button |
| `disabled` | `boolean` | `false` | Whether the button is disabled |

In addition, the PM7Button component accepts all standard HTML button attributes.

### Style Properties

The `buttonRules` object provides standardized styling properties for buttons:

| Property | Value | Description |
|----------|-------|-------------|
| `cursor` | `'pointer'` | Always displays a pointer cursor on hover to indicate clickability |
| `primaryColor` | `'#1C86EF'` | PM7 primary blue for buttons |
| `borderColor` | `'#D4D4D4'` | PM7 border color for buttons |
| `focusRingColor` | `'#1C86EF'` | Primary color for focus rings that appears when the button is focused |

**Note:** The current implementation uses inline styles for focus states rather than a focus ring.

### Button Variants

The `buttonRules` object also includes CSS class names for different button variants:

| Property | Description |
|----------|-------------|
| `button` | Default button style with primary color background |
| `outline` | Button with transparent background and border |
| `secondary` | Button with light gray background |
| `ghost` | Button with transparent background and no border |
| `link` | Button styled as a text link with underline |

### Button Sizes

The `buttonRules` object includes CSS class names for different button sizes:

| Property | Description |
|----------|-------------|
| `small` | Smaller button with reduced padding (0.25rem 0.5rem) and font size (0.75rem) |
| `large` | Larger button with increased padding (0.75rem 1.5rem) and font size (1.125rem) |

### Button States

| Property | Description |
|----------|-------------|
| `disabled` | Styling for disabled button state with light gray background (#E5E7EB) and muted text color (#9CA3AF) |

### Focus Behavior

The PM7Button component implements custom focus behavior:

- When a button receives focus, it removes the default outline
- Custom focus styles are applied using inline styles
- On blur, these styles are removed

This ensures a consistent focus appearance across all browsers while maintaining accessibility.

## Best Practices

1. **Consistent Cursor**: Always apply the `cursor: 'pointer'` style to all clickable buttons to maintain a consistent user experience.

2. **Visual Feedback**: Consider adding hover and active states to provide visual feedback to users.

3. **Accessibility**: Ensure buttons have appropriate contrast ratios and are keyboard accessible.

4. **Size Consistency**: Maintain consistent button sizes throughout your application.

## Implementation Details

The button rules are implemented as a JavaScript object that exports styling properties. These properties can be applied to any button component in your application.

```typescript
// Button rules for pm7-ui-style-guide
export const buttonRules = {
  // Colors
  primaryColor: '#1C86EF', // Winfakt primary blue for buttons
  borderColor: '#D4D4D4', // Winfakt border color

  // Behavior
  cursor: 'pointer', // Always show pointer cursor on hover

  // Focus state
  focusRingColor: '#1C86EF', // Use primary color for focus rings

  // CSS Classes for different button variants
  button: 'pm7-button',
  outline: 'pm7-button-outline',
  secondary: 'pm7-button-secondary',
  ghost: 'pm7-button-ghost',
  link: 'pm7-button-link',
  small: 'pm7-button-small',
  large: 'pm7-button-large',
  disabled: 'pm7-button-disabled'
};
```

## Integration with Other Components

The button rules can be used in conjunction with other PM7 UI Style Guide components to create a cohesive user interface. For example, you can use the button rules with the dialog component to create dialog action buttons.

```tsx
// For local development, use relative imports
import { buttonRules } from '../src/components/button/pm7-button';
import { PM7Dialog, PM7DialogFooter } from '../src/components/dialog/pm7-dialog';
// For production, use package imports
// import { buttonRules } from 'pm7-ui-style-guide';
// import { PM7Dialog, PM7DialogFooter } from 'pm7-ui-style-guide';

function DialogWithButtons() {
  return (
    <PM7Dialog>
      {/* Dialog content */}
      <PM7DialogFooter>
        <button 
          style={{ cursor: buttonRules.cursor }}
          className="cancel-button"
        >
          Cancel
        </button>
        <button 
          style={{ cursor: buttonRules.cursor }}
          className="confirm-button"
        >
          Confirm
        </button>
      </PM7DialogFooter>
    </PM7Dialog>
  );
}
