# PM7 Button Component

## Overview

The PM7 Button component provides styling rules and a ready-to-use button component for the PM7 UI Style Guide. It ensures consistent button behavior and appearance across all PM7 applications with support for multiple variants, sizes, and themes.

## Installation

```bash
npm install pm7-ui-style-guide
```

## Usage

### Using PM7Button Component

```tsx
import { PM7Button, buttonRules } from 'pm7-ui-style-guide';

function MyButtons() {
  return (
    <div>
      {/* Default button */}
      <PM7Button theme="light">Default Button</PM7Button>

      {/* Button variants */}
      <PM7Button theme="light" className={buttonRules.outline}>
        Outline Button
      </PM7Button>
      <PM7Button theme="light" className={buttonRules.secondary}>
        Secondary Button
      </PM7Button>
      <PM7Button theme="light" className={buttonRules.ghost}>
        Ghost Button
      </PM7Button>
      <PM7Button theme="light" className={buttonRules.link}>
        Link Button
      </PM7Button>

      {/* Button sizes */}
      <PM7Button theme="light" className={buttonRules.small}>
        Small Button
      </PM7Button>
      <PM7Button theme="light" className={buttonRules.large}>
        Large Button
      </PM7Button>

      {/* Disabled state */}
      <PM7Button theme="light" disabled>
        Disabled Button
      </PM7Button>
    </div>
  );
}
```

### Using Button Rules with Existing Components

For applications that already use ShadCN/UI or other button components:

```tsx
import { buttonRules } from 'pm7-ui-style-guide';
import { Button } from '@/components/ui/button'; // Your existing button

function StyledButton() {
  return (
    <Button style={{ cursor: buttonRules.cursor }}>
      Click Me
    </Button>
  );
}
```

## API Reference

### PM7Button Props

The PM7Button component extends all standard HTML button attributes and adds:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'light' \| 'dark'` | `undefined` | Controls text color for certain variants in dark mode |
| `className` | `string` | `''` | CSS classes for variants (use buttonRules constants) |
| `disabled` | `boolean` | `false` | Disables the button |
| `children` | `React.ReactNode` | - | Button content |
| `...props` | `React.ButtonHTMLAttributes` | - | All standard button attributes (onClick, type, etc.) |

### Button Rules Object

The `buttonRules` object provides styling constants:

#### Colors
| Property | Value | Description |
|----------|-------|-------------|
| `primaryColor` | `'#1C86EF'` | PM7 primary blue |
| `borderColor` | `'#D4D4D4'` | PM7 border color |
| `focusRingColor` | `'#1C86EF'` | Focus color (for reference) |
| `cursor` | `'pointer'` | Cursor style for all buttons |

#### Variant Classes
| Property | Value | Description |
|----------|-------|-------------|
| `button` | `'pm7-button'` | Default button style |
| `outline` | `'pm7-button-outline'` | Transparent background with border |
| `secondary` | `'pm7-button-secondary'` | Light gray background |
| `ghost` | `'pm7-button-ghost'` | Transparent background, no border |
| `link` | `'pm7-button-link'` | Text link style with underline |

#### Size Classes
| Property | Value | Description |
|----------|-------|-------------|
| `small` | `'pm7-button-small'` | Smaller padding and font size |
| `large` | `'pm7-button-large'` | Larger padding and font size |

#### State Classes
| Property | Value | Description |
|----------|-------|-------------|
| `disabled` | `'pm7-button-disabled'` | Disabled styling |

## Button Variants

### Default Button
- Background: PM7 primary blue (#1C86EF)
- Text: White
- Border: None

### Outline Button
- Background: Transparent
- Text: Inherits from parent (white in dark theme)
- Border: 1px solid #D4D4D4

### Secondary Button
- Background: Light gray (#f3f4f6)
- Text: Dark gray (#111827)
- Border: None

### Ghost Button
- Background: Transparent
- Text: Inherits from parent (white in dark theme)
- Border: None

### Link Button
- Background: Transparent
- Text: PM7 primary blue (#1C86EF)
- Border: None
- Decoration: Underline

## Button Sizes

### Small
- Font size: 0.75rem
- Padding: 0.25rem 0.5rem

### Default
- Font size: 0.875rem
- Padding: 0.5rem 1rem

### Large
- Font size: 1.125rem
- Padding: 0.75rem 1.5rem

## Theme Support

The `theme` prop affects text color for certain variants:

- **Outline/Ghost buttons**: Use white text in dark theme for better contrast
- **Other variants**: Theme has no effect as they have explicit colors

## Focus Behavior

The PM7Button implements accessible focus handling:

- Removes default browser outline for consistent appearance
- Maintains focus functionality for keyboard navigation
- No additional visual focus indicators (relies on browser defaults internally)

## Best Practices

1. **Always use pointer cursor**: Applied automatically by the component
2. **Use theme prop**: Pass current theme for proper text contrast
3. **Use buttonRules constants**: Instead of hardcoding class names
4. **Maintain consistency**: Use the same variant patterns throughout your app

## Implementation Notes

- Variants are detected by checking if className contains specific buttonRules values
- Disabled state can be set via `disabled` prop or `buttonRules.disabled` class
- All styling is applied via inline styles for maximum compatibility
- Component maintains all standard button functionality and accessibility