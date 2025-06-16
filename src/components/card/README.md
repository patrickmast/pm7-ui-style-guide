# PM7Card Component - Complete Integration Guide

**PM7Card** is a React card component that provides PM7-branded styling for creating structured content containers. It offers consistent styling, proper spacing, theme support, and specialized header variants while maintaining accessibility standards.

**📖 Read Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/card/README.md](https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/card/README.md)

**✏️ Edit Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/card/README.md](https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/card/README.md)

**Package**: pm7-ui-style-guide  
**Component**: PM7Card (React card container component)  
**CSS File**: pm7-card.css (required)  
**Dependencies**: None

## Installation

```bash
npm install pm7-ui-style-guide
```

## Import

```typescript
// Component import
import { PM7Card, PM7CardHeader, PM7CardTitle, PM7CardSubTitle, PM7CardFooter } from 'pm7-ui-style-guide';

// CSS import (required)
import 'pm7-ui-style-guide/src/components/card/pm7-card.css';
```

## Basic Usage

### Simple Card

```tsx
import React from 'react';
import { PM7Card, PM7CardHeader, PM7CardTitle } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/src/components/card/pm7-card.css';

function MyComponent() {
  return (
    <PM7Card theme="light">
      <PM7CardHeader theme="light">
        <PM7CardTitle theme="light">Card Title</PM7CardTitle>
      </PM7CardHeader>
      <div style={{ padding: '1rem' }}>
        This is the card content.
      </div>
    </PM7Card>
  );
}
```

### Card with Dark Header

```tsx
<PM7Card theme="light">
  <PM7CardHeader variant="dark" theme="light">
    <PM7CardTitle theme="light">Props Reference</PM7CardTitle>
  </PM7CardHeader>
  <div style={{ padding: '1rem' }}>
    Card content with dark header styling
  </div>
</PM7Card>
```

### Card with Subtitle

```tsx
<PM7Card theme="light">
  <PM7CardHeader theme="light">
    <PM7CardTitle theme="light">User Profile</PM7CardTitle>
    <PM7CardSubTitle theme="light">Manage your account settings</PM7CardSubTitle>
  </PM7CardHeader>
  <div style={{ padding: '1rem' }}>
    Profile content here
  </div>
</PM7Card>
```

## Header Variants

### Default Header

```tsx
<PM7CardHeader theme="light">
  <PM7CardTitle theme="light">Default Header</PM7CardTitle>
</PM7CardHeader>
```

### Dark Header

```tsx
<PM7CardHeader variant="dark" theme="light">
  <PM7CardTitle theme="light">Dark Header</PM7CardTitle>
</PM7CardHeader>
```

The dark header variant provides:
- Dark background in light theme (#f3f4f6)
- Darker background in dark theme (#374151)
- Full-width header with rounded top corners
- Proper text contrast for accessibility

## Theme Support

All PM7Card components support both light and dark themes:

```tsx
// Light theme
<PM7Card theme="light">
  <PM7CardHeader variant="dark" theme="light">
    <PM7CardTitle theme="light">Light Theme</PM7CardTitle>
  </PM7CardHeader>
</PM7Card>

// Dark theme
<PM7Card theme="dark">
  <PM7CardHeader variant="dark" theme="dark">
    <PM7CardTitle theme="dark">Dark Theme</PM7CardTitle>
  </PM7CardHeader>
</PM7Card>
```

## API Reference

### PM7Card Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'light' \| 'dark'` | `'light'` | Theme for proper color rendering |
| `className` | `string` | - | Additional CSS classes |
| `...props` | `HTMLDivElement` | - | All standard div attributes |

### PM7CardHeader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'light' \| 'dark'` | `'light'` | Theme for proper color rendering |
| `variant` | `'default' \| 'dark'` | `'default'` | Header styling variant |
| `className` | `string` | - | Additional CSS classes |
| `...props` | `HTMLDivElement` | - | All standard div attributes |

### PM7CardTitle Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'light' \| 'dark'` | `'light'` | Theme for proper color rendering |
| `className` | `string` | - | Additional CSS classes |
| `...props` | `HTMLHeadingElement` | - | All standard h3 attributes |

### PM7CardSubTitle Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'light' \| 'dark'` | `'light'` | Theme for proper color rendering |
| `className` | `string` | - | Additional CSS classes |
| `...props` | `HTMLParagraphElement` | - | All standard p attributes |

### PM7CardFooter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'light' \| 'dark'` | `'light'` | Theme for proper color rendering |
| `className` | `string` | - | Additional CSS classes |
| `...props` | `HTMLDivElement` | - | All standard div attributes |

## Common Use Cases

### Props Documentation Cards

```tsx
<PM7Card theme={theme}>
  <PM7CardHeader variant="dark" theme={theme}>
    <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
      propName <span style={{ fontSize: '0.875rem', fontWeight: 'normal' }}>(type, default)</span>
    </PM7CardTitle>
  </PM7CardHeader>
  <div style={{ padding: '0 0.5rem' }}>
    <p>Description of what this prop does.</p>
    <div style={{ marginTop: '0.5rem' }}>
      <strong>Options:</strong>
      <div style={{ marginLeft: '1rem' }}>
        <div><code>'option1'</code> - Description</div>
        <div><code>'option2'</code> - Description</div>
      </div>
    </div>
  </div>
</PM7Card>
```

### Information Cards

```tsx
<PM7Card theme="light">
  <PM7CardHeader theme="light">
    <PM7CardTitle theme="light">Statistics</PM7CardTitle>
    <PM7CardSubTitle theme="light">Monthly overview</PM7CardSubTitle>
  </PM7CardHeader>
  <div style={{ padding: '1rem' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <div>Users: 1,234</div>
      <div>Revenue: $12,345</div>
    </div>
  </div>
  <PM7CardFooter theme="light">
    <button>View Details</button>
  </PM7CardFooter>
</PM7Card>
```

### Settings Cards

```tsx
<PM7Card theme="light">
  <PM7CardHeader variant="dark" theme="light">
    <PM7CardTitle theme="light">Account Settings</PM7CardTitle>
  </PM7CardHeader>
  <div style={{ padding: '1rem' }}>
    <form>
      <div style={{ marginBottom: '1rem' }}>
        <label>Email:</label>
        <input type="email" />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Password:</label>
        <input type="password" />
      </div>
    </form>
  </div>
  <PM7CardFooter theme="light">
    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
      <button>Cancel</button>
      <button>Save</button>
    </div>
  </PM7CardFooter>
</PM7Card>
```

## PM7 Brand Guidelines

### Colors
- **Card Background**: White (light mode), #262626 (dark mode)
- **Border**: #e2e8f0 (light mode), #525252 (dark mode)
- **Dark Header Background**: #f3f4f6 (light mode), #374151 (dark mode)
- **Text**: Proper contrast ratios for accessibility

### Design Principles
- Clean, minimal design with subtle shadows
- Consistent spacing and typography
- Accessible color contrasts
- Responsive and mobile-friendly
- PM7 brand color integration (#1C86EF)

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and structure
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper labeling and descriptions
- **High Contrast**: Meets WCAG contrast requirements
- **Focus Management**: Clear focus indicators
- **Responsive Design**: Works across all device sizes

## Important Notes

- **CSS Import Required**: Must import pm7-card.css for proper styling
- **Theme Consistency**: Always pass theme prop to all card components
- **Dark Headers**: Use `variant="dark"` for prominent headers
- **Responsive**: Cards adapt to container width automatically
- **Accessibility**: Built-in support for screen readers and keyboard navigation

## Browser Support

PM7Card supports all modern browsers:
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

*Ensure your build process includes appropriate polyfills for older browser support.*