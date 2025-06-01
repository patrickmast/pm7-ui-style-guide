# PM7 Card Component

## Overview

The PM7 Card component provides a flexible, theme-aware container for static content display. It includes header, footer, title, and subtitle subcomponents with automatic light and dark mode support.

## Installation

```bash
npm install pm7-ui-style-guide
```

## Usage

### Basic Usage

```tsx
import { PM7Card, PM7CardHeader, PM7CardFooter, PM7CardTitle, PM7CardSubTitle } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/src/components/card/pm7-card.css'; // Required CSS

function BasicCard() {
  return (
    <PM7Card theme="light" style={{ padding: '1.5rem', maxWidth: '400px' }}>
      <PM7CardHeader>
        <PM7CardTitle>Card Title</PM7CardTitle>
        <PM7CardSubTitle>Card subtitle or description</PM7CardSubTitle>
      </PM7CardHeader>
      <div style={{ margin: '1rem 0' }}>
        Card content goes here.
      </div>
      <PM7CardFooter>
        <button>Action</button>
      </PM7CardFooter>
    </PM7Card>
  );
}
```

### Dark Theme Usage

```tsx
function DarkCard() {
  return (
    <PM7Card theme="dark" style={{ padding: '1.5rem', maxWidth: '400px' }}>
      <PM7CardHeader theme="dark">
        <PM7CardTitle theme="dark">Dark Card Title</PM7CardTitle>
        <PM7CardSubTitle theme="dark">Dark card subtitle</PM7CardSubTitle>
      </PM7CardHeader>
      <div style={{ margin: '1rem 0' }}>
        Dark mode content with white text.
      </div>
      <PM7CardFooter theme="dark">
        <button>Dark Action</button>
      </PM7CardFooter>
    </PM7Card>
  );
}
```

### Simple Content Card

```tsx
function SimpleCard() {
  return (
    <PM7Card theme="light" style={{ padding: '2rem', textAlign: 'center' }}>
      <h4>Welcome</h4>
      <p>This is a simple card without header/footer.</p>
      <button>Get Started</button>
    </PM7Card>
  );
}
```

## API Reference

### PM7Card Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'light' \| 'dark'` | `'light'` | Controls the card's color scheme |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | - | Card content |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | - | All standard div attributes |

**Ref Support**: PM7Card is compatible with `React.forwardRef` and accepts a `ref` prop.

### PM7CardHeader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'light' \| 'dark'` | `'light'` | Controls the header's styling |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | - | Header content |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | - | All standard div attributes |

### PM7CardFooter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'light' \| 'dark'` | `'light'` | Controls the footer's styling |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | - | Footer content (typically buttons) |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | - | All standard div attributes |

### PM7CardTitle Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'light' \| 'dark'` | `'light'` | Controls the title's styling |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | - | Title content |
| `...props` | `React.HTMLAttributes<HTMLHeadingElement>` | - | All standard h3 attributes |

**Ref Support**: PM7CardTitle is compatible with `React.forwardRef` and accepts a `ref` prop.

### PM7CardSubTitle Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'light' \| 'dark'` | `'light'` | Controls the subtitle's styling |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | - | Subtitle content |
| `...props` | `React.HTMLAttributes<HTMLParagraphElement>` | - | All standard p attributes |

**Ref Support**: PM7CardSubTitle is compatible with `React.forwardRef` and accepts a `ref` prop.

## Visual Appearance

### Light Theme (default)
- Background: White
- Border: 1px solid #e2e8f0 (light gray)
- Text: Inherits from parent (typically dark)

### Dark Theme
- Background: #262626 (dark gray)
- Border: 1px solid #525252 (medium gray)
- Text: #FAFAFA (near white)

## Layout & Styling

### Default Styling
- Border radius: Handled by CSS classes
- Padding: Not included by default (add via style prop)
- Header: Flex column layout, centered on mobile, left-aligned on desktop
- Footer: Flex layout, buttons right-aligned on desktop
- Title: Large, semibold text with tight spacing
- Subtitle: Smaller, muted text

### Custom Styling
```tsx
<PM7Card 
  style={{ 
    padding: '1.5rem',
    borderRadius: '8px',
    maxWidth: '400px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}
>
  {/* content */}
</PM7Card>
```

## Theme Management

### Consistent Theming
Pass the same `theme` prop to all card components for consistent styling:

```tsx
const theme = 'dark'; // or 'light'

<PM7Card theme={theme}>
  <PM7CardHeader theme={theme}>
    <PM7CardTitle theme={theme}>Title</PM7CardTitle>
    <PM7CardSubTitle theme={theme}>Subtitle</PM7CardSubTitle>
  </PM7CardHeader>
  <PM7CardFooter theme={theme}>
    <button>Action</button>
  </PM7CardFooter>
</PM7Card>
```

### Theme Inheritance
While each component accepts its own `theme` prop, you typically want to pass the same theme value to maintain visual consistency throughout the card.

## CSS Requirements

The Card component requires its CSS file to be imported:

```tsx
import 'pm7-ui-style-guide/src/components/card/pm7-card.css';
```

This CSS file provides:
- Base card styling
- Responsive layout classes
- Typography styles for title and subtitle
- Flex layout for header and footer

## Best Practices

1. **Include padding**: Cards don't include internal padding by default
2. **Set max-width**: Prevent cards from becoming too wide on large screens
3. **Consistent theming**: Use the same theme prop across all card components
4. **Semantic structure**: Use header for titles, footer for actions
5. **Responsive design**: Cards adapt to mobile and desktop layouts automatically

## Accessibility

- Card uses semantic HTML elements (div, h3, p)
- Title component renders as h3 for proper heading hierarchy
- All components support standard ARIA attributes through props
- Focus management is handled by browser defaults
- Color contrast meets accessibility standards in both themes

## Integration with PM7 Style Guide

The Card component follows PM7 design system guidelines:
- Uses PM7 color palette for theming
- Consistent with other PM7 components
- Supports the PM7 light/dark theme system
- Compatible with PM7 Button and other components