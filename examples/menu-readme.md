# PM7 Menu Component

## Overview

The PM7Menu component provides a flexible, accessible dropdown menu system for the PM7 UI Style Guide. It can be used with fully configurable menu items, allowing for complete customization of the menu content. This component follows the project's component directory pattern, located at `src/components/menu/pm7-menu.tsx`.

## Usage

### Complete Menu Component

For a standard menu with hamburger icon and custom menu items:

```tsx
// For local development, use relative imports
import { PM7Menu } from '../src/components/menu/pm7-menu';
// For production, use package imports
// import { PM7Menu } from 'pm7-ui-style-guide';

function MyComponent() {
  // Define your custom menu items
  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: <HomeIcon size={16} />,
      onClick: () => console.log('Home clicked')
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon size={16} />,
      onClick: () => console.log('Settings clicked')
    },
    {
      id: 'separator',
      type: 'separator'
    },
    {
      id: 'theme',
      label: 'Dark Mode',
      type: 'switch',
      checked: isDarkMode,
      onChange: (checked) => setIsDarkMode(checked)
    }
  ];

  return (
    <PM7Menu
      menuItems={menuItems}
      initialTheme="light"
      menuAlignment="start"
    />
  );
}
```

### Multi-Language Support

The menu component supports multiple languages through language-specific label properties:

```tsx
const menuItems = [
  {
    id: 'home',
    label: 'Home', // Default label
    'label-en': 'Home',
    'label-es': 'Inicio',
    'label-fr': 'Accueil',
    onClick: () => console.log('Home clicked')
  }
];

// Pass the current language to the menu
<PM7Menu
  menuItems={menuItems}
  language="en"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `menuItems` | `MenuItemType[]` | `[]` | Array of menu items to display |
| `language` | `string` | `'en'` | Current language code |
| `icon` | `ReactNode` | `null` | Custom icon for the menu button |
| `label` | `string` | `'Menu'` | Accessible label for the menu |
| `position` | `'left' | 'right'` | `'right'` | Position of the dropdown menu |
| `menuAlignment` | `'start' | 'center' | 'end'` | `'end'` | Alignment of the dropdown menu |
| `menuIconColor` | `string` | `null` | Custom color for the menu icon |
| `initialTheme` | `'light' | 'dark'` | `'light'` | Initial theme for the menu |

## Menu Item Types

The `menuItems` prop accepts an array of objects with the following structure:

```tsx
interface MenuItemType {
  id: string;
  label: string;
  [key: string]: any; // For label-xx properties
  type?: 'separator' | 'submenu' | 'check' | 'switch';
  icon?: React.ReactNode;
  onClick?: () => void;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  submenuItems?: MenuItemType[];
}
```

### Item Types

- **Normal**: Regular clickable menu item (default)
- **Separator**: Horizontal line to separate menu sections
- **Submenu**: Contains nested menu items
- **Check**: Checkable menu item with checkmark icon
- **Switch**: Toggle switch menu item

## Accessibility

The PM7Menu component is built with accessibility in mind:

- Fully keyboard navigable (Arrow keys, Enter, Escape)
- Proper ARIA attributes for screen readers
- Focus management for keyboard users
- High contrast mode support

## Internationalization

The PM7Menu component supports internationalization through language-specific label properties. For each menu item, you can provide labels for different languages.
