# PM7Menu Component

## Overview
The Menu component provides a dropdown menu with PM7 styling and fully configurable menu items. It's built on top of Radix UI's dropdown menu primitives but pre-styled according to the PM7 design system.

## Installation

```bash
npm install pm7-ui-style-guide
```

Make sure to also install the required peer dependencies:

```bash
npm install @radix-ui/react-dropdown-menu
```

## Basic Usage

```jsx
import { Menu } from 'pm7-ui-style-guide';
// OR import { PM7MenuComponent } from 'pm7-ui-style-guide';

const MyMenu = () => {
  const menuItems = [
    {
      id: 'item1',
      label: 'Item 1',
      onClick: () => console.log('Item 1 clicked')
    },
    {
      id: 'separator1',
      type: 'separator'
    },
    {
      id: 'item2',
      label: 'Item 2',
      onClick: () => console.log('Item 2 clicked')
    }
  ];

  return <Menu menuItems={menuItems} />;
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `menuItems` | `PM7MenuItem[]` | `[]` | Array of menu items to display |
| `initialTheme` | `'light' \| 'dark'` | `'light'` | Initial theme for the menu |
| `mobileBreakpoint` | `number` | `768` | Breakpoint for mobile styling |

## Menu Item Structure

```typescript
type PM7MenuItem = {
  id: string;              // Unique identifier for the item
  label?: string;         // Text to display for the item
  type?: PM7MenuItemType; // Type of menu item (default: 'item')
  icon?: React.ReactNode; // Optional icon to display
  disabled?: boolean;     // Whether the item is disabled
  onClick?: () => void;   // Click handler for the item
  onChange?: (checked: boolean) => void; // For checkable items
  checked?: boolean;      // For checkable items
  submenuItems?: PM7MenuItem[]; // For submenu items
};

type PM7MenuItemType = 'item' | 'submenu' | 'separator' | 'check' | 'radio' | 'switch';
```

## Common Examples

### Navigation Menu

```jsx
import { Menu } from 'pm7-ui-style-guide';
import { useNavigate } from 'react-router-dom';

const NavigationMenu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      onClick: () => navigate('/')
    },
    {
      id: 'about',
      label: 'About',
      onClick: () => navigate('/about')
    },
    {
      id: 'separator',
      type: 'separator'
    },
    {
      id: 'contact',
      label: 'Contact',
      onClick: () => navigate('/contact')
    }
  ];

  return <Menu menuItems={menuItems} />;
};
```

### Menu with Icons

```jsx
import { Menu } from 'pm7-ui-style-guide';
import { Home, Info, Mail, LogOut } from 'lucide-react';

const IconMenu = () => {
  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: <Home size={16} />,
      onClick: () => console.log('Home clicked')
    },
    {
      id: 'about',
      label: 'About',
      icon: <Info size={16} />,
      onClick: () => console.log('About clicked')
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <Mail size={16} />,
      onClick: () => console.log('Contact clicked')
    },
    {
      id: 'separator',
      type: 'separator'
    },
    {
      id: 'logout',
      label: 'Logout',
      icon: <LogOut size={16} />,
      onClick: () => console.log('Logout clicked')
    }
  ];

  return <Menu menuItems={menuItems} />;
};
```

### Dark Mode Menu

```jsx
import { Menu } from 'pm7-ui-style-guide';

const DarkModeMenu = () => {
  const menuItems = [
    {
      id: 'item1',
      label: 'Item 1',
      onClick: () => console.log('Item 1 clicked')
    },
    {
      id: 'item2',
      label: 'Item 2',
      onClick: () => console.log('Item 2 clicked')
    }
  ];

  return <Menu menuItems={menuItems} initialTheme="dark" />;
};
```

## Styling

The Menu component is pre-styled according to the PM7 design system. The styling follows these rules:

- Background: White (#FFFFFF) in light mode, Dark (#23272F) in dark mode
- Border: 1px solid #D4D4D4 in light mode, #525252 in dark mode
- Border Radius: 6px
- Shadow: rgba(0,0,0,0.08) 0px 5px 15px 0px, rgba(25,28,33,0.2) 0px 15px 35px -5px
- Menu Items:
  - Default: Black text/icons in light mode, White (#FAFAFA) in dark mode
  - Hover: White text/icons on #1C86EF background
- Padding: 16px horizontal (px-4), 8px vertical (py-2) on desktop, 12px vertical (py-3) on mobile

## Advanced Usage

If you need more control over the menu, you can use the primitive components directly:

```jsx
import {
  PM7Menu,
  PM7MenuTrigger,
  PM7MenuContent,
  PM7MenuItem,
  PM7MenuSeparator
} from 'pm7-ui-style-guide';

const CustomMenu = () => {
  return (
    <PM7Menu>
      <PM7MenuTrigger asChild>
        <button>Open Menu</button>
      </PM7MenuTrigger>
      <PM7MenuContent>
        <PM7MenuItem onClick={() => console.log('Item 1')}>Item 1</PM7MenuItem>
        <PM7MenuSeparator />
        <PM7MenuItem onClick={() => console.log('Item 2')}>Item 2</PM7MenuItem>
      </PM7MenuContent>
    </PM7Menu>
  );
};
