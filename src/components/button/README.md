# PM7 Button Component

## Overview

The PM7 Button component provides styling rules for buttons in the Winfakt UI Style Guide. It ensures consistent button behavior and appearance across all Winfakt applications.

## Usage

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

## Button Rules

The `buttonRules` object provides standardized styling properties for buttons:

| Property | Value | Description |
|----------|-------|-------------|
| `cursor` | `'pointer'` | Always displays a pointer cursor on hover to indicate clickability |

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
