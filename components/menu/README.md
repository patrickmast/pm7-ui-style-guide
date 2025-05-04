# PM7 Menu Component Documentation

## Overview

The PM7 Menu Component provides a fully-styled dropdown menu that follows Winfakt's design system. It includes a trigger button with a hamburger icon and a dropdown content area with configurable menu items.

## Import

```tsx
import { PM7MenuComponent } from 'pm7-ui-style-guide';

// Or with alias
import { PM7MenuComponent as Menu } from 'pm7-ui-style-guide';
```

## Basic Usage

```tsx
import { PM7MenuComponent } from 'pm7-ui-style-guide';
import { useState } from 'react';

function MyComponent() {
  const menuItems = [
    {
      id: 'item1',
      label: 'Settings',
      onClick: () => console.log('Settings clicked')
    },
    {
      id: 'separator1',
      type: 'separator'
    },
    {
      id: 'item2',
      label: 'Help',
      onClick: () => console.log('Help clicked')
    }
  ];

  return (
    <div className="flex items-center justify-end">
      <PM7MenuComponent menuItems={menuItems} />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `menuItems` | `PM7MenuItem[]` | `[]` | Array of menu items to display |
| `initialTheme` | `'light' \| 'dark'` | `'light'` | Initial theme for the menu |
| `mobileBreakpoint` | `number` | `768` | Pixel width at which to switch to mobile styling |

## Menu Item Properties

Each menu item in the `menuItems` array can have the following properties:

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `string` | Yes | Unique identifier for the menu item |
| `label` | `string` | No | Text to display for the menu item |
| `type` | `'item' \| 'submenu' \| 'separator' \| 'check' \| 'radio' \| 'switch'` | No | Type of menu item (defaults to `'item'`) |
| `icon` | `React.ReactNode` | No | Icon to display before the label |
| `disabled` | `boolean` | No | Whether the item is disabled |
| `onClick` | `() => void` | No | Function to call when the item is clicked |
| `onChange` | `(checked: boolean) => void` | No | Function to call when a checkbox or radio item changes state |
| `checked` | `boolean` | No | Whether a checkbox or radio item is checked |
| `submenuItems` | `PM7MenuItem[]` | No | Array of submenu items (only used when `type` is `'submenu'`) |

## Examples

### Menu with Icons

```tsx
import { PM7MenuComponent } from 'pm7-ui-style-guide';

function MenuWithIcons() {
  const menuItems = [
    {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
      onClick: () => console.log('Settings clicked')
    },
    {
      id: 'help',
      label: 'Help',
      icon: <HelpIcon />,
      onClick: () => console.log('Help clicked')
    }
  ];

  return <PM7MenuComponent menuItems={menuItems} />;
}
```

### Menu with Submenu

```tsx
import { PM7MenuComponent } from 'pm7-ui-style-guide';

function MenuWithSubmenu() {
  const menuItems = [
    {
      id: 'file',
      label: 'File',
      type: 'submenu',
      submenuItems: [
        {
          id: 'new',
          label: 'New',
          onClick: () => console.log('New clicked')
        },
        {
          id: 'open',
          label: 'Open',
          onClick: () => console.log('Open clicked')
        }
      ]
    },
    {
      id: 'edit',
      label: 'Edit',
      type: 'submenu',
      submenuItems: [
        {
          id: 'cut',
          label: 'Cut',
          onClick: () => console.log('Cut clicked')
        },
        {
          id: 'copy',
          label: 'Copy',
          onClick: () => console.log('Copy clicked')
        },
        {
          id: 'paste',
          label: 'Paste',
          onClick: () => console.log('Paste clicked')
        }
      ]
    }
  ];

  return <PM7MenuComponent menuItems={menuItems} />;
}
```

### Menu with Checkboxes

```tsx
import { PM7MenuComponent } from 'pm7-ui-style-guide';
import { useState } from 'react';

function MenuWithCheckboxes() {
  const [showToolbar, setShowToolbar] = useState(true);
  const [showStatusBar, setShowStatusBar] = useState(false);

  const menuItems = [
    {
      id: 'view',
      label: 'View',
      type: 'submenu',
      submenuItems: [
        {
          id: 'toolbar',
          label: 'Show Toolbar',
          type: 'check',
          checked: showToolbar,
          onChange: (checked) => setShowToolbar(checked)
        },
        {
          id: 'statusbar',
          label: 'Show Status Bar',
          type: 'check',
          checked: showStatusBar,
          onChange: (checked) => setShowStatusBar(checked)
        }
      ]
    }
  ];

  return <PM7MenuComponent menuItems={menuItems} />;
}
```

### Dark Mode Support

```tsx
import { PM7MenuComponent } from 'pm7-ui-style-guide';
import { useState } from 'react';

function DarkModeMenu() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const menuItems = [
    {
      id: 'theme',
      label: `Theme: ${theme === 'light' ? 'Light' : 'Dark'}`,
      onClick: toggleTheme
    }
  ];

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <PM7MenuComponent 
        menuItems={menuItems} 
        initialTheme={theme} 
      />
    </div>
  );
}
```

## Using Menu Primitives

For more advanced customization, you can use the primitive components directly:

```tsx
import {
  PM7Menu,
  PM7MenuTrigger,
  PM7MenuContent,
  PM7MenuItem,
  PM7MenuSeparator
} from 'pm7-ui-style-guide';

function CustomMenu() {
  return (
    <PM7Menu>
      <PM7MenuTrigger asChild>
        <button className="custom-trigger">Custom Menu</button>
      </PM7MenuTrigger>
      <PM7MenuContent className="custom-content">
        <PM7MenuItem onClick={() => console.log('Item 1')}>Item 1</PM7MenuItem>
        <PM7MenuSeparator />
        <PM7MenuItem onClick={() => console.log('Item 2')}>Item 2</PM7MenuItem>
      </PM7MenuContent>
    </PM7Menu>
  );
}
```

## Styling

The menu component comes pre-styled with Winfakt's design system. The styling includes:

- Light and dark mode support
- Responsive design (different styling for mobile and desktop)
- Hover effects with the Winfakt primary color (#1C86EF)
- Proper spacing and alignment
- Accessibility features

## TypeScript Support

The package includes full TypeScript definitions for all components and props:

```tsx
import { PM7MenuItem, PM7MenuProps } from 'pm7-ui-style-guide';

// Define menu items with type checking
const menuItems: PM7MenuItem[] = [
  {
    id: 'settings',
    label: 'Settings',
    onClick: () => console.log('Settings clicked')
  }
];

// Define props with type checking
const menuProps: PM7MenuProps = {
  menuItems,
  initialTheme: 'light',
  mobileBreakpoint: 768
};
```
