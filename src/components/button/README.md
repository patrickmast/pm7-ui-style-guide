# PM7Button Component - Complete Integration Guide

**PM7Button** is a React button component that provides PM7-branded styling on top of standard HTML button elements. It offers consistent styling, proper focus states, support for various button variants, and flexible spacing control while maintaining accessibility standards.

**📖 Read Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/button/README.md](https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/button/README.md)

**✏️ Edit Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/button/README.md](https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/button/README.md)

**Package**: pm7-ui-style-guide  
**Component**: PM7Button (React button component with PM7 styling)  
**CSS File**: `pm7-button.css` (optional - only needed for effect prop)  
**Dependencies**: None - fully self-contained component

## Installation

```bash
npm install pm7-ui-style-guide

# No peer dependencies required - component is fully self-contained
```

## Import

```typescript
// Simple import - no CSS import needed for basic functionality
import { PM7Button } from 'pm7-ui-style-guide';

// Optional: Import button configuration rules
import { PM7Button, buttonRules } from 'pm7-ui-style-guide';

// Only needed if using effect prop
import 'pm7-ui-style-guide/src/components/button/pm7-button.css';
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
      {/* Default: Primary blue button with white text */}
      <PM7Button>Default</PM7Button>
      
      {/* Variants - override default styling */}
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

## Icons

Add icons to buttons with the `icon` prop:

```tsx
import React from 'react';
import { PM7Button } from 'pm7-ui-style-guide';
import { Download, Upload, Settings, ArrowRight } from 'lucide-react';

function MyComponent() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {/* Icon on the left (default) */}
      <PM7Button icon={<Download />}>
        Download File
      </PM7Button>
      
      {/* Icon on the right */}
      <PM7Button icon={<ArrowRight />} iconPosition="right">
        Continue
      </PM7Button>
      
      {/* Icon only button */}
      <PM7Button icon={<Settings />} />
      
      {/* Icon with outline variant */}
      <PM7Button 
        icon={<Upload />} 
        className="pm7-button-outline"
      >
        Upload
      </PM7Button>
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

## Visual Effects

Add hover effects to buttons with the `effect` prop:

```tsx
import React from 'react';
import { PM7Button } from 'pm7-ui-style-guide';
import { Download } from 'lucide-react';
// Required when using effect prop
import 'pm7-ui-style-guide/src/components/button/pm7-button.css';

function MyComponent() {
  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      {/* 6stars effect - animated stars on hover */}
      <PM7Button effect="6stars" onClick={() => alert('Export!')}>
        Export Data
      </PM7Button>
      
      {/* 6stars effect with icon */}
      <PM7Button 
        effect="6stars" 
        icon={<Download />}
        onClick={() => alert('Download!')}
      >
        Download CSV
      </PM7Button>
      
      {/* Effect is disabled when button is disabled */}
      <PM7Button effect="6stars" disabled>
        Disabled (no effect)
      </PM7Button>
    </div>
  );
}
```

The `6stars` effect adds six animated stars that expand outward on hover, creating a dynamic and engaging interaction. The effect includes:
- Blue glow shadow on hover
- Transparent background on hover
- Six stars that animate to different positions
- Smooth transitions for all animations

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
| `icon` | `ReactNode` | - | Icon element to display in the button (typically from lucide-react or similar) |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Position of the icon relative to the button text |
| `effect` | `'6stars' \| 'none'` | `'none'` | Visual effect on hover. '6stars' adds animated stars that expand on hover |
| `disabled` | `boolean` | `false` | Disable button interactions |
| `onClick` | `(event: MouseEvent) => void` | - | Click handler function |
| `children` | `ReactNode` | - | Button content |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type attribute (passed through to HTML button) |
| `style` | `CSSProperties` | - | Custom inline styles (will override component styles) |

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

### Icon Buttons

```tsx
import { Download, Upload, Settings, Save } from 'lucide-react';

{/* Action buttons with icons */}
<PM7Button icon={<Download />}>Download</PM7Button>
<PM7Button icon={<Upload />} className="pm7-button-outline">Upload</PM7Button>

{/* Icon-only buttons for toolbars */}
<PM7Button icon={<Settings />} className="pm7-button-ghost" />
<PM7Button icon={<Save />} />

{/* Right-aligned icon for navigation */}
<PM7Button icon={<ArrowRight />} iconPosition="right">
  Continue
</PM7Button>
```

## Configuration Export (buttonRules)

PM7Button exports a `buttonRules` object containing all styling configuration:

```tsx
import { buttonRules } from 'pm7-ui-style-guide';

// Available configuration:
buttonRules.primary         // "pm7-button-primary"
buttonRules.outline         // "pm7-button-outline"
buttonRules.secondary       // "pm7-button-secondary"
buttonRules.ghost           // "pm7-button-ghost"
buttonRules.link            // "pm7-button-link"
buttonRules.small           // "pm7-button-small"
buttonRules.large           // "pm7-button-large"
buttonRules.disabled        // "pm7-button-disabled"
buttonRules.disabledOpacity // "0.5"
buttonRules.spacingClasses  // { none: 0, sm: "0.125rem", md: "0.25rem", lg: "0.5rem" }
buttonRules.focusBorderColor // "primary" (PM7 blue #1C86EF)
```

This is useful for programmatically generating class names or understanding the component's configuration.

## Important Notes

- **CSS Import**: Only required when using the `effect` prop. Basic button functionality works without CSS import
- **PM7 Branding**: Uses PM7 color scheme (#1C86EF primary blue)
- **Accessibility**: Fully keyboard accessible with proper focus states
- **Responsive**: Adapts to different screen sizes
- **Dark Mode**: Automatically handles light/dark theme switching
- **Self-contained**: No external dependencies or peer dependencies required
- **Default Spacing**: Buttons have `md` (4px) margin by default for proper spacing
- **Flexible Layout**: Use `spacing="none"` for tight button groups or custom layouts
- **Style Override**: Use the `style` prop to apply custom inline styles that will override component styles

## Accessibility Features

- **Keyboard Navigation**: Fully keyboard accessible with Tab and Enter support
- **Focus Management**: Clear focus indicators and proper focus states
- **ARIA Support**: Compatible with all ARIA attributes
- **Screen Reader Support**: Proper button semantics for assistive technology
- **High Contrast**: Meets WCAG contrast requirements
- **Reduced Motion**: Respects user's motion preferences