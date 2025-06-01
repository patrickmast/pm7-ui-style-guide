# PM7 Menu Component

## Overview

The PM7 Menu component provides a comprehensive, accessible dropdown menu system built on Radix UI primitives with PM7 styling. It supports multiple menu item types, themes, multi-language functionality, and extensive customization options.

## Installation

```bash
npm install pm7-ui-style-guide
```

## Required Dependencies

The Menu component depends on Radix UI and Lucide React. Install the peer dependencies:

```bash
npm install @radix-ui/react-dropdown-menu lucide-react
```

## Usage

### Basic Setup

```tsx
import { PM7Menu } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css'; // Required CSS

function BasicMenu() {
  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      onClick: () => console.log('Home clicked')
    },
    {
      id: 'settings',
      label: 'Settings',
      onClick: () => console.log('Settings clicked')
    },
    {
      id: 'separator1',
      type: 'separator'
    },
    {
      id: 'logout',
      label: 'Logout',
      onClick: () => console.log('Logout clicked')
    }
  ];

  return (
    <PM7Menu
      menuItems={menuItems}
      theme="light"
      menuAlignment="start"
    />
  );
}
```

### Advanced Menu with Custom Trigger

```tsx
import { PM7Menu, PM7MenuIcon } from 'pm7-ui-style-guide';

function AdvancedMenu() {
  const menuItems = [
    {
      id: 'new',
      label: 'New File',
      onClick: () => console.log('New file'),
      icon: <PM7MenuIcon size={16} />
    },
    {
      id: 'check-item',
      type: 'check',
      label: 'Auto Save',
      checked: true,
      onChange: (checked) => console.log('Auto save:', checked)
    },
    {
      id: 'submenu',
      type: 'submenu',
      label: 'Recent Files',
      submenuItems: [
        { id: 'file1', label: 'Document1.txt', onClick: () => {} },
        { id: 'file2', label: 'Document2.txt', onClick: () => {} }
      ]
    }
  ];

  return (
    <PM7Menu
      menuItems={menuItems}
      theme="dark"
      menuLabel="File"
      menuIcon={<PM7MenuIcon size={20} />}
      menuTriggerIconColorLight="#1C86EF"
      menuTriggerIconColorDark="#FFDD00"
      menuTriggerBorderedOnHover={true}
    />
  );
}
```

### Multi-Language Menu

```tsx
import { PM7Menu } from 'pm7-ui-style-guide';
import { useState } from 'react';

function MultiLanguageMenu() {
  const [language, setLanguage] = useState('en');
  
  const menuItems = [
    {
      id: 'home',
      label: 'Home', // Fallback
      'label-en': 'Home',
      'label-es': 'Inicio',
      'label-fr': 'Accueil',
      'label-de': 'Startseite',
      onClick: () => console.log('Home clicked')
    },
    {
      id: 'settings',
      label: 'Settings',
      'label-en': 'Settings',
      'label-es': 'Configuración',
      'label-fr': 'Paramètres', 
      'label-de': 'Einstellungen',
      onClick: () => console.log('Settings clicked')
    }
  ];

  return (
    <PM7Menu
      menuItems={menuItems}
      theme="light"
      selectedLanguage={language}
    />
  );
}
```

## API Reference

### PM7Menu Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `menuItems` | `PM7MenuItem[]` | `[]` | Array of menu items (required) |
| `theme` | `'light' \| 'dark'` | `'light'` | Current theme |
| `menuAlignment` | `'start' \| 'center' \| 'end'` | `'start'` | Menu alignment relative to trigger |
| `menuIcon` | `React.ReactNode` | `undefined` | Custom trigger icon |
| `menuLabel` | `React.ReactNode` | `undefined` | Custom trigger label |
| `menuTriggerIconColorLight` | `string` | `'#000000'` | Icon color in light mode |
| `menuTriggerIconColorDark` | `string` | `'#FAFAFA'` | Icon color in dark mode |
| `menuTriggerLabelColorLight` | `string` | `'#000000'` | Label color in light mode |
| `menuTriggerLabelColorDark` | `string` | `'#FAFAFA'` | Label color in dark mode |
| `menuTriggerBordered` | `boolean` | `false` | Always show trigger border/background |
| `menuTriggerBorderedOnHover` | `boolean` | `false` | Show trigger border/background on hover |
| `mobileBreakpoint` | `number` | `768` | Breakpoint for mobile styling (px) |
| `showUncheckedIcon` | `boolean` | `false` | Show icon for unchecked items |
| `selectedLanguage` | `string` | `'en'` | Current language for multi-language support |

### PM7MenuItem Interface

```tsx
interface PM7MenuItem {
  id: string;                    // Unique identifier (required)
  label: React.ReactNode;        // Display text/content (required)
  type?: 'normal' | 'check' | 'radio' | 'submenu' | 'separator' | 'switch';
  onClick?: () => void;          // Click handler
  icon?: React.ReactNode;        // Left icon
  rightIcon?: React.ReactNode;   // Right icon
  disabled?: boolean;            // Disabled state
  checked?: boolean;             // For check/radio/switch items
  onChange?: (checked: boolean) => void; // For interactive items
  submenuItems?: PM7MenuItem[];  // For submenu type
  
  // Multi-language support
  'label-en'?: string;           // English label
  'label-es'?: string;           // Spanish label
  'label-fr'?: string;           // French label
  'label-de'?: string;           // German label
  'label-nl'?: string;           // Dutch label
  'label-nl-be'?: string;        // Belgian Dutch label
  'label-zh'?: string;           // Chinese label
  [key: string]: any;            // Additional language labels
}
```

## Menu Item Types

### Normal Items
```tsx
{
  id: 'item1',
  label: 'Normal Item',
  onClick: () => console.log('clicked'),
  icon: <MyIcon />
}
```

### Checkbox Items
```tsx
{
  id: 'checkbox1',
  type: 'check',
  label: 'Enable Feature',
  checked: true,
  onChange: (checked) => setFeatureEnabled(checked)
}
```

### Radio Items
```tsx
{
  id: 'radio1',
  type: 'radio',
  label: 'Option A',
  checked: selectedOption === 'A',
  onChange: (checked) => checked && setSelectedOption('A')
}
```

### Switch Items
```tsx
{
  id: 'switch1',
  type: 'switch',
  label: 'Dark Mode',
  checked: isDarkMode,
  onChange: (checked) => setIsDarkMode(checked)
}
```

### Submenu Items
```tsx
{
  id: 'submenu1',
  type: 'submenu',
  label: 'More Options',
  submenuItems: [
    { id: 'sub1', label: 'Suboption 1', onClick: () => {} },
    { id: 'sub2', label: 'Suboption 2', onClick: () => {} }
  ]
}
```

### Separator Items
```tsx
{
  id: 'separator1',
  type: 'separator'
}
```

## Menu Trigger Configurations

### Default Hamburger Icon
```tsx
<PM7Menu menuItems={items} />
```

### Custom Icon Only
```tsx
<PM7Menu 
  menuItems={items}
  menuIcon={<MyIcon />}
  menuTriggerIconColorLight="#1C86EF"
/>
```

### Label Only
```tsx
<PM7Menu 
  menuItems={items}
  menuLabel="File"
  menuTriggerLabelColorLight="#1C86EF"
/>
```

### Icon + Label
```tsx
<PM7Menu 
  menuItems={items}
  menuIcon={<FileIcon />}
  menuLabel="File"
  menuTriggerIconColorLight="#1C86EF"
  menuTriggerLabelColorLight="#1C86EF"
/>
```

### Bordered Trigger
```tsx
<PM7Menu 
  menuItems={items}
  menuTriggerBordered={true}
/>

// Or hover effect only
<PM7Menu 
  menuItems={items}
  menuTriggerBorderedOnHover={true}
/>
```

## Theme Support

### Light Theme (default)
- Background: White
- Border: #D4D4D4
- Text: Black
- Hover: White text on #1C86EF background

### Dark Theme
- Background: #262626
- Border: #525252  
- Text: #FAFAFA
- Hover: White text on #1C86EF background

### Theme Usage
```tsx
const [theme, setTheme] = useState('light');

<PM7Menu 
  menuItems={items}
  theme={theme}
/>
```

## Multi-Language Support

### Language Code Support
- `en` - English
- `es` - Spanish
- `fr` - French
- `de` - German
- `nl` - Dutch
- `nl-be` - Belgian Dutch
- `zh` - Chinese

### Implementation Pattern
```tsx
const menuItems = [
  {
    id: 'file',
    label: 'File',              // Fallback
    'label-en': 'File',
    'label-es': 'Archivo',
    'label-fr': 'Fichier',
    'label-de': 'Datei',
    onClick: () => {}
  }
];

<PM7Menu 
  menuItems={menuItems}
  selectedLanguage="es"  // Will show "Archivo"
/>
```

## PM7MenuIcon Component

The included `PM7MenuIcon` provides the official PM7 hamburger menu icon:

```tsx
import { PM7MenuIcon } from 'pm7-ui-style-guide';

// Use in menu items
{
  id: 'item',
  label: 'Menu Item',
  icon: <PM7MenuIcon size={16} />
}

// Use as custom trigger
<PM7Menu 
  menuItems={items}
  menuIcon={<PM7MenuIcon size={20} />}
/>
```

### PM7MenuIcon Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Icon size in pixels |
| `color` | `string` | `'currentColor'` | Icon color |

## Primitive Components

For advanced customization, you can use the primitive components directly:

```tsx
import {
  PM7MenuRoot as PM7Menu,
  PM7MenuTrigger,
  PM7MenuContent,
  PM7MenuItem,
  PM7MenuCheckboxItem,
  PM7MenuRadioGroup,
  PM7MenuRadioItem,
  PM7MenuSeparator,
  PM7MenuSub,
  PM7MenuSubTrigger,
  PM7MenuSubContent
} from 'pm7-ui-style-guide';
```

## CSS Requirements

Import the required CSS file:

```tsx
import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css';
```

This provides:
- Menu styling and animations
- Theme-specific colors
- Responsive behavior
- Hover and focus states

## Responsive Design

- **Mobile** (≤768px): Larger padding, minimum width 16rem
- **Desktop** (>768px): Standard padding, minimum width 12rem
- **Maximum width**: 18.8rem on all devices

## Accessibility Features

- **Keyboard Navigation**: Arrow keys, Enter, Escape
- **Focus Management**: Proper focus trapping and restoration  
- **Screen Readers**: ARIA attributes and roles
- **High Contrast**: Works with system high contrast modes

## Best Practices

1. **Unique IDs**: Always provide unique `id` for each menu item
2. **Fallback Labels**: Include base `label` for multi-language items
3. **Consistent Theming**: Use same theme throughout your app
4. **Meaningful Icons**: Use icons that clearly represent actions
5. **Logical Grouping**: Use separators to group related items
6. **Responsive Testing**: Test on mobile and desktop breakpoints

## Integration with PM7 Style Guide

- Uses PM7 primary color (#1C86EF) for highlights
- Follows PM7 spacing and typography standards
- Compatible with PM7 theme system
- Integrates with other PM7 components