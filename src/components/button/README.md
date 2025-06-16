# PM7Button Component - Complete Integration Guide

**PM7Button** is a React button component that provides PM7-branded styling on top of standard HTML button elements. It offers consistent styling, proper focus states, support for various button variants, and flexible spacing control while maintaining accessibility standards.

**📖 Read Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/button/README.md](https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/button/README.md)

**✏️ Edit Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/button/README.md](https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/button/README.md)

**Package**: pm7-ui-style-guide  
**Component**: PM7Button (React button component with PM7 styling)  
**CSS File**: No separate CSS file required - styles are built-in  
**Dependencies**: None - fully self-contained component

## Installation

```bash
npm install pm7-ui-style-guide

# No peer dependencies required - component is fully self-contained
```

## Import

```typescript
// Simple import - no CSS import needed
import { PM7Button } from 'pm7-ui-style-guide';

// All styling is built into the component
```

## Basic Usage

```tsx
import React from 'react';
import { PM7Button } from 'pm7-ui-style-guide';

function MyComponent() {
  return (
    <PM7Button onClick={() => alert('Clicked!')}>
      Click me
    </PM7Button>
  );
}
```

## Button Variants

```tsx
import React from 'react';
import { PM7Button } from 'pm7-ui-style-guide';

function MyComponent() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <PM7Button>Default</PM7Button>
      <PM7Button className="pm7-button-outline">Outline</PM7Button>
      <PM7Button className="pm7-button-secondary">Secondary</PM7Button>
      <PM7Button className="pm7-button-ghost">Ghost</PM7Button>
      <PM7Button className="pm7-button-link">Link</PM7Button>
    </div>
  );
}
```

## Button Sizes

```tsx
import React from 'react';
import { PM7Button } from 'pm7-ui-style-guide';

function MyComponent() {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <PM7Button className="pm7-button-small">Small</PM7Button>
      <PM7Button>Default</PM7Button>
      <PM7Button className="pm7-button-large">Large</PM7Button>
    </div>
  );
}
```

## Button Spacing

Control the margin around buttons with the `spacing` prop:

```tsx
import React from 'react';
import { PM7Button } from 'pm7-ui-style-guide';

function MyComponent() {
  return (
    <>
      {/* No spacing between buttons */}
      <PM7Button spacing="none">First</PM7Button>
      <PM7Button spacing="none">Second</PM7Button>
      
      {/* Small spacing (2px) */}
      <PM7Button spacing="sm">Small</PM7Button>
      
      {/* Medium spacing (4px) - default */}
      <PM7Button spacing="md">Medium</PM7Button>
      <PM7Button>Default is medium</PM7Button>
      
      {/* Large spacing (8px) */}
      <PM7Button spacing="lg">Large</PM7Button>
    </>
  );
}
```

## Loading State

```tsx
import React, { useState } from 'react';
import { PM7Button } from 'pm7-ui-style-guide';

function MyComponent() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <PM7Button 
      onClick={handleSubmit} 
      disabled={loading}
    >
      {loading ? 'Loading...' : 'Submit'}
    </PM7Button>
  );
}
```

## API Reference

### PM7Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | CSS classes for variants: `pm7-button-outline`, `pm7-button-secondary`, `pm7-button-ghost`, `pm7-button-link`, `pm7-button-small`, `pm7-button-large` |
| `theme` | `'light' \| 'dark'` | - | Theme for proper color rendering (optional) |
| `spacing` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Margin spacing around button: none (0), sm (2px), md (4px), lg (8px) |
| `disabled` | `boolean` | `false` | Disable button interactions |
| `onClick` | `(event: MouseEvent) => void` | - | Click handler function |
| `children` | `ReactNode` | - | Button content |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |

### HTML Attributes

PM7Button supports all standard HTML button attributes including:

- `form` - Associates button with a form
- `aria-*` - Accessibility attributes
- `data-*` - Data attributes

## Common Use Cases

### Form Submit Button

```tsx
<PM7Button type="submit">
  Submit Form
</PM7Button>
```

### Cancel/Close Action

```tsx
<PM7Button className="pm7-button-ghost" onClick={onClose}>
  Cancel
</PM7Button>
```

### Button Groups

```tsx
{/* Tight button group with no spacing */}
<PM7Button spacing="none">Save</PM7Button>
<PM7Button spacing="none" className="pm7-button-outline">Save & Continue</PM7Button>
<PM7Button spacing="none" className="pm7-button-ghost">Cancel</PM7Button>

{/* Regular button group with default spacing */}
<PM7Button>Primary</PM7Button>
<PM7Button className="pm7-button-secondary">Secondary</PM7Button>
<PM7Button className="pm7-button-ghost">Cancel</PM7Button>
```

### Secondary Action

```tsx
<PM7Button className="pm7-button-secondary" onClick={onSecondaryAction}>
  Secondary Action
</PM7Button>
```

### Link Style Button

```tsx
<PM7Button className="pm7-button-link" onClick={onLinkAction}>
  Link Action
</PM7Button>
```

## Important Notes

- **No CSS Import Required**: All styles are built into the component
- **PM7 Branding**: Uses PM7 color scheme (#1C86EF primary blue)
- **Accessibility**: Fully keyboard accessible with proper focus states
- **Responsive**: Adapts to different screen sizes
- **Dark Mode**: Automatically handles light/dark theme switching
- **Self-contained**: No external dependencies or peer dependencies required
- **Default Spacing**: Buttons have `md` (4px) margin by default for proper spacing
- **Flexible Layout**: Use `spacing="none"` for tight button groups or custom layouts

## Accessibility Features

- **Keyboard Navigation**: Fully keyboard accessible with Tab and Enter support
- **Focus Management**: Clear focus indicators and proper focus states
- **ARIA Support**: Compatible with all ARIA attributes
- **Screen Reader Support**: Proper button semantics for assistive technology
- **High Contrast**: Meets WCAG contrast requirements
- **Reduced Motion**: Respects user's motion preferences