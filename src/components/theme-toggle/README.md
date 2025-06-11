# PM7ThemeToggle

A theme toggle component that allows users to switch between light and dark modes. Features smooth animations, keyboard accessibility, and automatic system preference detection.

## Features

- **Automatic theme detection**: Detects system preference on first load
- **LocalStorage persistence**: Remembers user preference across sessions
- **Keyboard accessible**: Supports Enter and Space key navigation
- **Multiple sizes**: Small, medium (default), and large variants
- **Controlled/Uncontrolled**: Can be used with external state management or handle state internally
- **PM7 branded styling**: Uses PM7 color scheme with yellow/gray theme indicators

## Usage

### Basic Usage (Uncontrolled)
```tsx
import { PM7ThemeToggle } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/dist/components/theme-toggle/pm7-theme-toggle.css';

function App() {
  return <PM7ThemeToggle />;
}
```

### Controlled Usage
```tsx
import { PM7ThemeToggle, ThemeType } from 'pm7-ui-style-guide';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState<ThemeType>('light');

  return (
    <PM7ThemeToggle 
      theme={theme} 
      onThemeChange={setTheme} 
    />
  );
}
```

### Size Variants
```tsx
<PM7ThemeToggle size="small" />
<PM7ThemeToggle size="medium" /> {/* default */}
<PM7ThemeToggle size="large" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'light' \| 'dark'` | - | Controlled theme value |
| `onThemeChange` | `(theme: ThemeType) => void` | - | Callback when theme changes |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size variant |
| `className` | `string` | `''` | Additional CSS classes |
| `data-component-name` | `string` | - | Data attribute for component identification |

## CSS Custom Properties

The component uses CSS custom properties for theming:

```css
:root {
  --pm7-theme-switch-bg: white;
  --pm7-theme-switch-dark-icon: white;
  --pm7-theme-switch-dark-thumb-bg: #6E6E6E;
  --pm7-theme-switch-light-icon: black;
  --pm7-theme-switch-thumb-bg: #FFD43B;
}
```

## Behavior

- **Uncontrolled mode**: Automatically manages theme state and applies to `document.documentElement` and `document.body`
- **Controlled mode**: Calls `onThemeChange` callback without applying theme to DOM (parent component responsibility)
- **Initial state**: Checks localStorage → system preference → defaults to 'light'
- **Persistence**: Saves theme preference to localStorage as 'pm7-theme'

## Accessibility

- **Keyboard navigation**: Enter and Space keys toggle theme
- **Focus indication**: Clear focus outline following PM7 design system
- **Screen reader support**: Descriptive aria-label indicating current action
- **Semantic HTML**: Uses proper button role and tabIndex