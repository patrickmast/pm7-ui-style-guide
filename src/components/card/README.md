# PM7Card Component - Complete Integration Guide

**PM7Card** is a React container component that provides PM7-branded styling for creating card layouts. It offers consistent styling, shadows, borders, and spacing while maintaining flexibility for various content types.

**📖 Read Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/card/README.md](https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/card/README.md)

**✏️ Edit Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/card/README.md](https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/card/README.md)

**Package**: pm7-ui-style-guide  
**Component**: PM7Card (React card container component)  
**CSS File**: pm7-card.css (required)  
**Dependencies**: None

## Installation & Usage

### Basic Import

```typescript
import { PM7Card } from 'pm7-ui-style-guide';
// or
import { Card } from 'pm7-ui-style-guide';
```

### CSS Import (Required)

```typescript
import 'pm7-ui-style-guide/src/components/card/pm7-card.css';
```

## Basic Examples

### Simple Card

```tsx
import React from 'react';
import { PM7Card } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/src/components/card/pm7-card.css';

function MyComponent() {
  return (
    <PM7Card>
      <h3>Card Title</h3>
      <p>This is the card content.</p>
    </PM7Card>
  );
}
```

### Card with Header and Footer

```tsx
<PM7Card>
  <PM7Card.Header>
    <h3>Dashboard Overview</h3>
    <p>Latest statistics and metrics</p>
  </PM7Card.Header>
  
  <PM7Card.Content>
    <div className="grid grid-cols-2 gap-4">
      <div>Users: 1,234</div>
      <div>Revenue: $12,345</div>
    </div>
  </PM7Card.Content>
  
  <PM7Card.Footer>
    <button>View Details</button>
  </PM7Card.Footer>
</PM7Card>
```

### Clickable Card

```tsx
<PM7Card 
  clickable 
  onClick={() => console.log('Card clicked')}
>
  <h3>Clickable Card</h3>
  <p>This entire card is clickable</p>
</PM7Card>
```

## Card Variants

### Default Variant

```tsx
<PM7Card variant="default">
  Default card styling
</PM7Card>
```

### Outlined Variant

```tsx
<PM7Card variant="outlined">
  Card with border, no shadow
</PM7Card>
```

### Elevated Variant

```tsx
<PM7Card variant="elevated">
  Card with enhanced shadow
</PM7Card>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Card content |
| `variant` | `'default' \| 'outlined' \| 'elevated'` | `'default'` | Visual style variant |
| `clickable` | boolean | false | Makes the entire card clickable |
| `onClick` | function | - | Click handler (only when clickable=true) |
| `className` | string | - | Additional CSS classes |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Internal padding size |
| `rounded` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Border radius size |

## Compound Components

### PM7Card.Header

```tsx
<PM7Card.Header className="border-b">
  <h2>Card Title</h2>
  <p>Subtitle or description</p>
</PM7Card.Header>
```

### PM7Card.Content

```tsx
<PM7Card.Content>
  Main card content goes here
</PM7Card.Content>
```

### PM7Card.Footer

```tsx
<PM7Card.Footer className="border-t">
  <div className="flex justify-end gap-2">
    <button>Cancel</button>
    <button>Save</button>
  </div>
</PM7Card.Footer>
```

## Common Patterns

### Profile Card

```tsx
<PM7Card variant="elevated">
  <PM7Card.Header className="text-center">
    <img src="avatar.jpg" className="w-16 h-16 rounded-full mx-auto" />
    <h3>John Doe</h3>
    <p>Software Engineer</p>
  </PM7Card.Header>
  
  <PM7Card.Content>
    <div className="space-y-2">
      <div>Email: john@example.com</div>
      <div>Location: San Francisco</div>
    </div>
  </PM7Card.Content>
  
  <PM7Card.Footer>
    <button className="w-full">View Profile</button>
  </PM7Card.Footer>
</PM7Card>
```

### Statistics Card

```tsx
<PM7Card>
  <PM7Card.Header>
    <h3>Total Sales</h3>
  </PM7Card.Header>
  
  <PM7Card.Content>
    <div className="text-3xl font-bold text-green-600">
      $24,567
    </div>
    <div className="text-sm text-gray-600">
      ↑ 12% from last month
    </div>
  </PM7Card.Content>
</PM7Card>
```

### Action Card

```tsx
<PM7Card clickable onClick={handleAction}>
  <PM7Card.Content className="flex items-center">
    <div className="flex-1">
      <h3>Create New Project</h3>
      <p>Start a new project from scratch</p>
    </div>
    <div>
      <Plus className="h-6 w-6" />
    </div>
  </PM7Card.Content>
</PM7Card>
```

## PM7 Styling & Theming

### PM7 Brand Colors

- **Background**: White (light mode), Dark (dark mode)
- **Border**: #D4D4D4 (light mode), #525252 (dark mode)
- **Shadow**: Subtle gray shadows for elevation
- **Hover State**: Slight shadow increase on clickable cards

### Custom Styling

```tsx
<PM7Card className="max-w-md mx-auto bg-gradient-to-r from-blue-50 to-indigo-50">
  Custom styled card
</PM7Card>
```

## Responsive Design

### Grid Layout

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <PM7Card>Card 1</PM7Card>
  <PM7Card>Card 2</PM7Card>
  <PM7Card>Card 3</PM7Card>
</div>
```

### Responsive Padding

```tsx
<PM7Card className="p-4 md:p-6 lg:p-8">
  Responsive padding card
</PM7Card>
```

## Accessibility Features

**Built-in Accessibility:**

- Proper semantic structure
- Keyboard navigation for clickable cards
- Focus indicators
- Screen reader support
- High contrast compatibility
- Proper ARIA attributes when interactive

## Best Practices

**Recommended Usage:**

- Use cards to group related information
- Keep card content focused and scannable
- Use consistent card heights in grids
- Provide clear visual hierarchy within cards
- Use clickable cards sparingly for primary actions
- Ensure adequate spacing between cards
- Test with different content lengths

**Important**: The PM7Card component requires the PM7 CSS file to be imported for proper styling. Make sure to include `import 'pm7-ui-style-guide/src/components/card/pm7-card.css';` in your application.

## Performance Considerations

- Component is lightweight with minimal overhead
- Use CSS Grid or Flexbox for efficient card layouts
- Consider virtualization for large lists of cards
- Optimize images within cards for faster loading

## Browser Support

PM7Card supports all modern browsers including:

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

*For older browser support, ensure appropriate polyfills are included in your build process.*