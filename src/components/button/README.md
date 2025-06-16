# PM7Button Component - Complete Integration Guide

**PM7Button** is a React button component that provides PM7-branded styling on top of standard HTML button elements. It offers consistent styling, proper focus states, and support for various button variants while maintaining accessibility standards.

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
      <PM7Button variant="default">Default</PM7Button>
      <PM7Button variant="destructive">Destructive</PM7Button>
      <PM7Button variant="outline">Outline</PM7Button>
      <PM7Button variant="secondary">Secondary</PM7Button>
      <PM7Button variant="ghost">Ghost</PM7Button>
      <PM7Button variant="link">Link</PM7Button>
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
      <PM7Button size="sm">Small</PM7Button>
      <PM7Button size="default">Default</PM7Button>
      <PM7Button size="lg">Large</PM7Button>
      <PM7Button size="icon">🎯</PM7Button>
    </div>
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
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | Button style variant |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'default'` | Button size |
| `disabled` | `boolean` | `false` | Disable button interactions |
| `onClick` | `(event: MouseEvent) => void` | - | Click handler function |
| `className` | `string` | - | Additional CSS classes |
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
<PM7Button type="submit" variant="default">
  Submit Form
</PM7Button>
```

### Cancel/Close Action

```tsx
<PM7Button variant="ghost" onClick={onClose}>
  Cancel
</PM7Button>
```

### Delete/Destructive Action

```tsx
<PM7Button variant="destructive" onClick={onDelete}>
  Delete Item
</PM7Button>
```

### Icon Button

```tsx
<PM7Button size="icon" variant="outline">
  ⚙️
</PM7Button>
```

## Important Notes

- **No CSS Import Required**: All styles are built into the component
- **PM7 Branding**: Uses PM7 color scheme (#1C86EF primary blue)
- **Accessibility**: Fully keyboard accessible with proper focus states
- **Responsive**: Adapts to different screen sizes
- **Dark Mode**: Automatically handles light/dark theme switching
- **Self-contained**: No external dependencies or peer dependencies required

## Accessibility Features

- **Keyboard Navigation**: Fully keyboard accessible with Tab and Enter support
- **Focus Management**: Clear focus indicators and proper focus states
- **ARIA Support**: Compatible with all ARIA attributes
- **Screen Reader Support**: Proper button semantics for assistive technology
- **High Contrast**: Meets WCAG contrast requirements
- **Reduced Motion**: Respects user's motion preferences