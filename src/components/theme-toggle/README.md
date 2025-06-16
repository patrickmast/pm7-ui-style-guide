# PM7ThemeToggle Component - Complete Integration Guide

**PM7ThemeToggle** is a React component that provides a toggle button for switching between light and dark themes. It offers smooth animations, customizable icons, and PM7-branded styling while integrating seamlessly with theme providers.

**📖 Read Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/theme-toggle/README.md](https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/theme-toggle/README.md)

**✏️ Edit Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/theme-toggle/README.md](https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/theme-toggle/README.md)

**Package**: pm7-ui-style-guide  
**Component**: PM7ThemeToggle (React theme toggle component)  
**CSS File**: pm7-theme-toggle.css (required)  
**Dependencies**: None

## Installation & Usage

### Basic Import

```typescript
import { PM7ThemeToggle } from 'pm7-ui-style-guide';
// or
import { ThemeToggle } from 'pm7-ui-style-guide';
```

### CSS Import (Required)

```typescript
import 'pm7-ui-style-guide/src/components/theme-toggle/pm7-theme-toggle.css';
```

## Basic Examples

### Simple Theme Toggle

```tsx
import React, { useState } from 'react';
import { PM7ThemeToggle } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/src/components/theme-toggle/pm7-theme-toggle.css';

function MyComponent() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    // Apply theme to your app
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <PM7ThemeToggle
      theme={theme}
      onThemeChange={handleThemeChange}
    />
  );
}
```

### With Custom Icons

```tsx
import { Sun, Moon } from 'lucide-react';

<PM7ThemeToggle
  theme={theme}
  onThemeChange={handleThemeChange}
  lightIcon={<Sun size={16} />}
  darkIcon={<Moon size={16} />}
/>
```

### Different Sizes

```tsx
// Small toggle
<PM7ThemeToggle size="sm" />

// Medium toggle (default)
<PM7ThemeToggle size="md" />

// Large toggle
<PM7ThemeToggle size="lg" />
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'light' \| 'dark'` | `'light'` | Current theme |
| `onThemeChange` | function | - | Callback when theme changes: (theme: string) => void |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the toggle button |
| `variant` | `'default' \| 'outline' \| 'ghost'` | `'default'` | Visual style variant |
| `lightIcon` | ReactNode | Default sun icon | Custom icon for light theme |
| `darkIcon` | ReactNode | Default moon icon | Custom icon for dark theme |
| `showLabel` | boolean | false | Whether to show text label |
| `className` | string | - | Additional CSS classes |
| `disabled` | boolean | false | Whether the toggle is disabled |

## Theme Integration

### With React Context

```tsx
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// Usage in component
function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header>
      <PM7ThemeToggle
        theme={theme}
        onThemeChange={toggleTheme}
      />
    </header>
  );
}
```

### With Next.js and next-themes

```tsx
import { useTheme } from 'next-themes';

function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  
  return (
    <PM7ThemeToggle
      theme={theme}
      onThemeChange={setTheme}
    />
  );
}
```

### With localStorage Persistence

```tsx
import React, { useState, useEffect } from 'react';

function ThemeToggleWithPersistence() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);
  
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  
  return (
    <PM7ThemeToggle
      theme={theme}
      onThemeChange={handleThemeChange}
    />
  );
}
```

## Styling Variants

### Default Variant

```tsx
<PM7ThemeToggle variant="default" />
```

### Outline Variant

```tsx
<PM7ThemeToggle variant="outline" />
```

### Ghost Variant

```tsx
<PM7ThemeToggle variant="ghost" />
```

### With Label

```tsx
<PM7ThemeToggle showLabel={true} />
```

## PM7 Styling & Theming

### PM7 Brand Colors

- **Primary Blue**: #1C86EF (active state)
- **Background**: Adapts to current theme
- **Border**: #D4D4D4 (light mode), #525252 (dark mode)
- **Icon Color**: High contrast for visibility

### Custom Styling

```tsx
<PM7ThemeToggle
  className="custom-theme-toggle"
  style={{ 
    borderRadius: '50%',
    padding: '12px'
  }}
/>
```

## Advanced Features

### System Theme Detection

```tsx
import React, { useState, useEffect } from 'react';

function SystemThemeToggle() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    // Detect system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemTheme = mediaQuery.matches ? 'dark' : 'light';
    
    // Use saved preference or system preference
    const savedTheme = localStorage.getItem('theme') || systemTheme;
    setTheme(savedTheme);
    
    // Listen for system changes
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return (
    <PM7ThemeToggle
      theme={theme}
      onThemeChange={setTheme}
    />
  );
}
```

### Animated Theme Transition

```tsx
/* Add to your CSS */
* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* Usage */
<PM7ThemeToggle
  theme={theme}
  onThemeChange={(newTheme) => {
    // Add transition class
    document.documentElement.classList.add('theme-transitioning');
    
    setTheme(newTheme);
    
    // Remove transition class after animation
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 300);
  }}
/>
```

## Accessibility Features

**Built-in Accessibility:**

- Keyboard navigation (Tab, Enter, Space)
- ARIA attributes for screen readers
- Focus indicators
- High contrast support
- Proper button semantics
- Theme change announcements

## Best Practices

**Recommended Usage:**

- Place theme toggle in header or navigation area
- Persist user preference in localStorage
- Respect system theme preferences initially
- Use consistent iconography (sun/moon)
- Provide smooth transitions between themes
- Test with both light and dark backgrounds
- Ensure toggle is accessible via keyboard

**Important**: The PM7ThemeToggle component requires the PM7 CSS file to be imported for proper styling. Make sure to include `import 'pm7-ui-style-guide/src/components/theme-toggle/pm7-theme-toggle.css';` in your application.

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
    <PM7ThemeToggle 
      theme={theme} 
      onThemeChange={setTheme} 
    />
  </nav>
</header>
```

### Settings Panel

```tsx
<div className="settings-panel">
  <h3>Appearance</h3>
  
  <div className="setting-item">
    <label>Theme</label>
    <PM7ThemeToggle
      theme={theme}
      onThemeChange={setTheme}
      showLabel={true}
      variant="outline"
    />
  </div>
</div>
```

## Performance Considerations

- Component is lightweight with minimal re-renders
- Theme changes are efficiently handled through CSS variables
- Icons are optimized for fast rendering
- Animations use CSS transforms for smooth performance

## Browser Support

PM7ThemeToggle supports all modern browsers including:

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

*For older browser support, ensure appropriate polyfills are included in your build process.*