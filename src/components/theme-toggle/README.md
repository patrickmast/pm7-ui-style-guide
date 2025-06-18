# PM7ThemeToggle Component - Complete Integration Guide

**PM7ThemeToggle** is a React component that provides a toggle switch for switching between light and dark themes. It offers automatic localStorage persistence, system preference detection, smooth animations, and PM7-branded styling with Lucide React icons.

**📖 Read Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/theme-toggle/README.md](https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/theme-toggle/README.md)

**✏️ Edit Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/theme-toggle/README.md](https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/theme-toggle/README.md)

**Package**: pm7-ui-style-guide  
**Component**: PM7ThemeToggle (React theme toggle component)  
**CSS File**: pm7-theme-toggle.css (required)  
**Dependencies**: lucide-react

## Installation

```bash
npm install pm7-ui-style-guide
npm install lucide-react
```

## Import

```typescript
import { PM7ThemeToggle, ThemeType } from 'pm7-ui-style-guide';
// or
import { ThemeToggle } from 'pm7-ui-style-guide';

// CSS import (required)
import 'pm7-ui-style-guide/src/components/theme-toggle/pm7-theme-toggle.css';
```

## Basic Usage

### Uncontrolled Mode (Recommended)

```tsx
import React from 'react';
import { PM7ThemeToggle } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/src/components/theme-toggle/pm7-theme-toggle.css';

function MyComponent() {
  return (
    <header>
      {/* Component manages its own state with localStorage persistence */}
      <PM7ThemeToggle />
    </header>
  );
}
```

### Controlled Mode

```tsx
import React, { useState } from 'react';
import { PM7ThemeToggle, ThemeType } from 'pm7-ui-style-guide';

function MyComponent() {
  const [theme, setTheme] = useState<ThemeType>('light');

  const handleThemeChange = (newTheme: ThemeType) => {
    setTheme(newTheme);
    // Apply theme to your app if needed
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <PM7ThemeToggle
      theme={theme}
      onThemeChange={handleThemeChange}
    />
  );
}
```

### Different Sizes

```tsx
// Small size - compact for tight spaces
<PM7ThemeToggle size="small" />

// Medium size (default) - standard use case  
<PM7ThemeToggle size="medium" />

// Large size - prominent placement
<PM7ThemeToggle size="large" />
```

### Custom Styling

```tsx
<PM7ThemeToggle 
  className="my-custom-toggle"
  data-component-name="HeaderThemeToggle"
/>
```

### Disable Hover Effects

```tsx
// Remove hover effects for a cleaner look
<PM7ThemeToggle 
  showHover={false}
  size="small"
/>
```

## API Reference

### PM7ThemeToggle Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `ThemeType` | - | Controlled theme value (optional) |
| `onThemeChange` | `(theme: ThemeType) => void` | - | Callback when theme changes (optional) |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the toggle switch |
| `showHover` | `boolean` | `true` | Whether to show hover effects on the toggle |
| `className` | `string` | `''` | Additional CSS classes |
| `data-component-name` | `string` | - | Data attribute for component identification |

### ThemeType

```typescript
export type ThemeType = 'light' | 'dark';
```

## Features

### Automatic Behavior (Uncontrolled Mode)

When no `theme` prop is provided, the component automatically:

1. **System Preference Detection**: Detects system color scheme preference on first load
2. **localStorage Persistence**: Saves user preference and restores it on subsequent visits
3. **DOM Class Management**: Automatically adds/removes 'dark' class to `document.documentElement` and `document.body`
4. **Smart Initialization**: Uses saved preference > system preference > 'light' as fallback

### Manual Control (Controlled Mode)

When `theme` and `onThemeChange` props are provided:

- Component operates in controlled mode
- You manage the theme state in your application
- No automatic DOM manipulation (you handle theme application)

### Visual Features

- **Smooth Toggle Animation**: Animated switch with thumb that slides between positions
- **Dynamic Icons**: Sun icon (☀️) for light theme, Moon icon (🌙) for dark theme from Lucide React
- **Size Variants**: Three sizes with appropriately scaled icons (12px, 16px, 20px)
- **PM7 Branding**: Consistent styling that matches PM7 design system

### Accessibility Features

- **Keyboard Navigation**: Full support for Tab, Enter, and Space key interactions
- **ARIA Labels**: Dynamic aria-label that announces current action ("Switch to dark mode")
- **Focus Indicators**: Clear visual focus states for keyboard users
- **Screen Reader Support**: Proper button semantics and role attributes

## Advanced Usage

### Integration with React Context

```tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext<{
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}>({
  theme: 'light',
  setTheme: () => {}
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  
  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// Usage in component
function Header() {
  const { theme, setTheme } = useTheme();
  
  return (
    <header>
      <PM7ThemeToggle
        theme={theme}
        onThemeChange={setTheme}
      />
    </header>
  );
}
```

### Integration with Next.js and next-themes

```tsx
import { useTheme } from 'next-themes';

function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  
  return (
    <PM7ThemeToggle
      theme={theme as ThemeType}
      onThemeChange={setTheme}
    />
  );
}
```

### Integration with Redux

```tsx
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from './themeSlice';

function ThemeToggleWrapper() {
  const theme = useSelector((state: RootState) => state.theme.current);
  const dispatch = useDispatch();
  
  return (
    <PM7ThemeToggle 
      theme={theme}
      onThemeChange={(newTheme) => dispatch(setTheme(newTheme))}
    />
  );
}
```

## Styling & Customization

### PM7 Brand Colors

The toggle uses PM7's design system colors and follows the brand guidelines for consistent appearance across all PM7 applications.

### Custom CSS Classes

```tsx
<PM7ThemeToggle
  className="my-custom-toggle border-2 border-gray-300"
  size="large"
/>
```

### CSS Variables and Customization

The component uses CSS custom properties that can be overridden:

```css
.pm7-theme-toggle {
  /* Override PM7 defaults if needed */
  --toggle-background: #your-color;
  --toggle-thumb: #your-thumb-color;
}
```

## Common Patterns

### Header Integration

```tsx
<header className="flex justify-between items-center p-4">
  <div className="logo">
    <img src="logo.svg" alt="Logo" />
  </div>
  
  <nav className="flex items-center space-x-4">
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    <PM7ThemeToggle size="medium" />
  </nav>
</header>
```

### Settings Panel

```tsx
<div className="settings-panel">
  <h3>Appearance</h3>
  
  <div className="setting-item flex justify-between items-center">
    <label>Dark Mode</label>
    <PM7ThemeToggle size="small" />
  </div>
</div>
```

### Mobile Navigation

```tsx
<div className="mobile-nav">
  <button>Menu</button>
  <PM7ThemeToggle size="small" />
</div>
```

## Best Practices

**Recommended Usage:**

- Use uncontrolled mode for simple implementations (no props needed)
- Use controlled mode when integrating with global state management
- Place in header, navigation, or settings areas for discoverability
- Choose appropriate size for the UI context
- Test with both keyboard and mouse interactions
- Ensure toggle remains accessible in both light and dark themes

**Performance Tips:**

- Component is lightweight and optimized for frequent theme changes
- Uses CSS transforms for smooth animations
- Minimal re-renders in both controlled and uncontrolled modes

## Browser Support

PM7ThemeToggle supports all modern browsers:
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

*Requires modern browser support for CSS custom properties and prefer-color-scheme media query.*

## Important Notes

- **CSS Import Required**: Must import pm7-theme-toggle.css for proper styling
- **Lucide React Dependency**: Icons are provided by lucide-react package
- **Automatic Persistence**: Uncontrolled mode automatically saves preference to localStorage
- **System Preference**: Respects user's system color scheme preference initially
- **DOM Management**: Uncontrolled mode automatically manages 'dark' class on document elements

*Built with modern React patterns and PM7 design system for consistent, accessible theme switching.*