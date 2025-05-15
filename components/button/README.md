# PM7 Button Component Documentation

## Overview

The PM7 Button Component provides a fully-styled button that follows PM7's design system. It includes proper styling, hover effects, and focus states that match the PM7 brand guidelines.

## Import

```tsx
import { PM7Button } from 'pm7-ui-style-guide';

// Or with alias
import { PM7Button as Button } from 'pm7-ui-style-guide';
```

## Basic Usage

```tsx
import { PM7Button } from 'pm7-ui-style-guide';

function MyComponent() {
  return (
    <PM7Button onClick={() => console.log('Button clicked')}>
      Click Me
    </PM7Button>
  );
}
```

## Props

The PM7Button component accepts all standard button props plus the following:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'link'` | `'default'` | Button style variant |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'default'` | Button size |
| `asChild` | `boolean` | `false` | Whether to render as a child component |

## Examples

### Button Variants

```tsx
import { PM7Button } from 'pm7-ui-style-guide';

function ButtonVariants() {
  return (
    <div className="flex space-x-2">
      <PM7Button variant="default">Default</PM7Button>
      <PM7Button variant="primary">Primary</PM7Button>
      <PM7Button variant="secondary">Secondary</PM7Button>
      <PM7Button variant="outline">Outline</PM7Button>
      <PM7Button variant="ghost">Ghost</PM7Button>
      <PM7Button variant="link">Link</PM7Button>
    </div>
  );
}
```

### Button Sizes

```tsx
import { PM7Button } from 'pm7-ui-style-guide';

function ButtonSizes() {
  return (
    <div className="flex items-center space-x-2">
      <PM7Button size="sm">Small</PM7Button>
      <PM7Button size="default">Default</PM7Button>
      <PM7Button size="lg">Large</PM7Button>
      <PM7Button size="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </PM7Button>
    </div>
  );
}
```

### Button with Icon

```tsx
import { PM7Button } from 'pm7-ui-style-guide';

function ButtonWithIcon() {
  return (
    <PM7Button>
      <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
      Add Item
    </PM7Button>
  );
}
```

### Disabled Button

```tsx
import { PM7Button } from 'pm7-ui-style-guide';

function DisabledButton() {
  return (
    <PM7Button disabled>
      Cannot Click
    </PM7Button>
  );
}
```

### Button as Link

```tsx
import { PM7Button } from 'pm7-ui-style-guide';

function ButtonAsLink() {
  return (
    <PM7Button asChild>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </PM7Button>
  );
}
```

## Styling

The button component comes pre-styled with PM7's design system. The styling includes:

- Consistent border radius
- Proper padding based on size
- Hover and focus states
- Disabled state styling
- Pointer cursor on hover (as per PM7 guidelines)

## TypeScript Support

The package includes full TypeScript definitions for the button component:

```tsx
import { PM7ButtonProps } from 'pm7-ui-style-guide';

// Define button props with type checking
const buttonProps: PM7ButtonProps = {
  variant: 'primary',
  size: 'default',
  onClick: () => console.log('Button clicked'),
  disabled: false
};
```
