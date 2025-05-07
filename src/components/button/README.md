# PM7 Button Component

## Overview

The PM7 Button component provides styling rules for buttons in the Winfakt UI Style Guide. It ensures consistent button behavior and appearance across all Winfakt applications. The component has been enhanced to support multiple button variants and sizes, providing a comprehensive solution for all button styling needs.

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
import { PM7Button } from 'pm7-ui-style-guide';

function MyButtons() {
  return (
    <div className="space-y-4">
      {/* Default button */}
      <PM7Button>Default Button</PM7Button>
      
      {/* Button variants */}
      <PM7Button className={buttonRules.outline}>Outline Button</PM7Button>
      <PM7Button className={buttonRules.secondary}>Secondary Button</PM7Button>
      <PM7Button className={buttonRules.ghost}>Ghost Button</PM7Button>
      <PM7Button className={buttonRules.link}>Link Button</PM7Button>
      
      {/* Button sizes */}
      <PM7Button className={buttonRules.small}>Small Button</PM7Button>
      <PM7Button className={buttonRules.large}>Large Button</PM7Button>
      
      {/* Disabled state */}
      <PM7Button disabled>Disabled Button</PM7Button>
      <PM7Button className={buttonRules.disabled}>Disabled via Class</PM7Button>
    </div>
  );
}
```

## Button Rules

The `buttonRules` object provides standardized styling properties for buttons:

| Property | Value | Description |
|----------|-------|-------------|
| `cursor` | `'pointer'` | Always displays a pointer cursor on hover to indicate clickability |
| `primaryColor` | `'#1C86EF'` | Winfakt primary blue for buttons |
| `borderColor` | `'#D4D4D4'` | Winfakt border color for buttons |
| `focusRingColor` | `'#1C86EF'` | Primary color for focus rings that appears when the button is focused |

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
- Instead, a custom box shadow using the `focusRingColor` is applied
- On blur, the box shadow is removed

This ensures a consistent focus appearance across all browsers while maintaining accessibility.

## Best Practices

1. **Consistent Cursor**: Always apply the `cursor: 'pointer'` style to all clickable buttons to maintain a consistent user experience.

2. **Visual Feedback**: Consider adding hover and active states to provide visual feedback to users.

3. **Accessibility**: Ensure buttons have appropriate contrast ratios and are keyboard accessible.

4. **Size Consistency**: Maintain consistent button sizes throughout your application.

## Implementation Details

The button rules are implemented as a simple JavaScript object that exports styling properties. These properties can be applied to any button component in your application.

```typescript
// Button rules for pm7-ui-style-guide
export const buttonRules = {
  cursor: 'pointer', // Always show pointer cursor on hover
};
```

## Integration with Other Components

The button rules can be used in conjunction with other Winfakt UI Style Guide components to create a cohesive user interface. For example, you can use the button rules with the dialog component to create dialog action buttons.

```tsx
import { buttonRules } from 'pm7-ui-style-guide';
import { PM7Dialog, PM7DialogFooter } from 'pm7-ui-style-guide';

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
