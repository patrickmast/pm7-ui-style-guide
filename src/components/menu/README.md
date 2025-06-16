# PM7Menu Component - Complete Integration Guide

**PM7Menu** is a React dropdown menu component based on Radix UI that provides PM7-branded styling for creating dropdown menus. It offers horizontal menu navigation with PM7's signature styling, icons, and accessibility features.

**📖 Read Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/menu/README.md](https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/menu/README.md)

**✏️ Edit Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/menu/README.md](https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/menu/README.md)

**Package**: pm7-ui-style-guide  
**Component**: PM7Menu (React dropdown menu component based on Radix UI)  
**CSS File**: pm7-menu.css (required)  
**Peer Dependencies**: @radix-ui/react-dropdown-menu, lucide-react

## Installation

```bash
npm install pm7-ui-style-guide

# Required peer dependencies:
npm install @radix-ui/react-dropdown-menu@^2.0.6 lucide-react@^0.501.0
```

## Import

```typescript
// All-in-one Menu Component
import { PM7Menu } from 'pm7-ui-style-guide';

// Compound Components (Recommended)
import { 
  PM7Menu,
  PM7MenuContent,
  PM7MenuItem,
  PM7MenuSeparator,
  PM7MenuTrigger,
  PM7MenuLabel 
} from 'pm7-ui-style-guide';

// CRITICAL: Import CSS for proper styling
import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css';
```

## Basic Usage - All-in-One Component

```tsx
import React from 'react';
import { PM7Menu } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css';

function MyComponent() {
  const menuItems = [
    { 
      id: 'profile', 
      label: 'Profile', 
      onClick: () => console.log('Profile clicked') 
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      onClick: () => console.log('Settings clicked') 
    },
    { 
      id: 'sep1', 
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
      menuAlignment="start"
      menuTriggerIconColorLight="#1C86EF"
      menuTriggerIconColorDark="#FFDD00"
    />
  );
}
```

## Compound Components Pattern (Recommended)

```tsx
import React from 'react';
import { PM7Menu } from 'pm7-ui-style-guide';
import { Menu, Plus, Save, Trash2 } from 'lucide-react';
import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css';

function MyComponent() {
  return (
    <PM7Menu>
      <PM7Menu.Trigger className="h-9 w-9">
        <Menu className="h-5 w-5" />
      </PM7Menu.Trigger>
      
      <PM7Menu.Content>
        <PM7Menu.Item onClick={() => console.log('New')}>
          <Plus className="mr-2 h-4 w-4" />
          New
        </PM7Menu.Item>
        <PM7Menu.Item onClick={() => console.log('Save')} disabled={false}>
          <Save className="mr-2 h-4 w-4" />
          Save
        </PM7Menu.Item>
        <PM7Menu.Separator />
        <PM7Menu.Item onClick={() => console.log('Delete')}>
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </PM7Menu.Item>
      </PM7Menu.Content>
    </PM7Menu>
  );
}
```

## Menu with Icons and Custom Trigger

```tsx
import React from 'react';
import { PM7Menu } from 'pm7-ui-style-guide';
import { User, Settings, LogOut } from 'lucide-react';

function UserAccountMenu() {
  const menuItems = [
    { 
      id: 'profile', 
      label: 'My Profile', 
      icon: <User size={16} />,
      onClick: () => navigate('/profile') 
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: <Settings size={16} />,
      onClick: () => navigate('/settings') 
    },
    { 
      id: 'sep1', 
      type: 'separator' 
    },
    { 
      id: 'logout', 
      label: 'Sign Out', 
      icon: <LogOut size={16} />,
      onClick: () => handleLogout() 
    }
  ];

  return (
    <PM7Menu 
      menuItems={menuItems}
      menuAlignment="end"
      menuTriggerIconColorLight="#1C86EF"
      menuTriggerIconColorDark="#FFDD00"
      menuLabel="Account"
    />
  );
}
```

## Context Menu / Right-Click Menu

```tsx
import React, { useState } from 'react';
import { PM7Menu, PM7MenuContent, PM7MenuItem } from 'pm7-ui-style-guide';

function ContextMenuExample() {
  const [contextMenuOpen, setContextMenuOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setContextMenuOpen(true);
  };

  return (
    <div onContextMenu={handleContextMenu} className="w-full h-64 bg-gray-100 dark:bg-gray-800">
      <p>Right-click anywhere in this area</p>
      
      <PM7Menu open={contextMenuOpen} onOpenChange={setContextMenuOpen}>
        <PM7MenuContent 
          style={{ 
            position: 'fixed', 
            left: position.x, 
            top: position.y 
          }}
        >
          <PM7MenuItem onClick={() => console.log('Copy')}>
            Copy
          </PM7MenuItem>
          <PM7MenuItem onClick={() => console.log('Paste')}>
            Paste
          </PM7MenuItem>
          <PM7MenuItem onClick={() => console.log('Delete')}>
            Delete
          </PM7MenuItem>
        </PM7MenuContent>
      </PM7Menu>
    </div>
  );
}
```

## 🔧 Critical Styling Requirements

### PM7Menu Automatic Styling

- All PM7Menu styles are now bundled automatically - no manual CSS injection needed!
- PM7 styling follows PM7 design system with hover states (#1C86EF blue)
- Beautiful menu item shadows and stable container shadows work perfectly
- Separators are properly styled and spaced

### Menu Trigger Styling

- Use `className="h-9 w-9"` for standard trigger button size
- Icon should be `className="h-5 w-5"` for proper proportions
- Trigger automatically gets pointer cursor and focus states

### Menu Content Behavior

- Content automatically positions relative to trigger
- Portal rendering ensures menu appears above other content
- Min-width: 12rem desktop, 16rem mobile; Max-width: 18.8rem
- Background: White (light mode), #262626 (dark mode)
- Border: 1px solid with rounded corners (6px)

## API Reference

### PM7Menu (All-in-One) Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `menuItems` | `MenuItem[]` | - | Array of menu items |
| `menuAlignment` | `'start' \| 'center' \| 'end'` | `'end'` | Menu content alignment |
| `menuLabel` | string | - | Custom trigger text |
| `menuIcon` | ReactNode | - | Custom trigger icon |
| `menuTriggerIconColorLight` | string | `'#1C86EF'` | Trigger icon color in light mode |
| `menuTriggerIconColorDark` | string | `'#FFDD00'` | Trigger icon color in dark mode |
| `theme` | `'light' \| 'dark'` | - | Theme mode |
| `mobileBreakpoint` | number | `768` | Mobile breakpoint in pixels |

### MenuItem Interface

```typescript
interface MenuItem {
  id: string;
  label?: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: 'item' | 'separator' | 'check' | 'switch' | 'submenu';
  disabled?: boolean;
  checked?: boolean; // For type: 'check' or 'switch'
  onChange?: (checked: boolean) => void; // For type: 'check' or 'switch'
  submenuItems?: MenuItem[]; // For type: 'submenu'
}
```

### Compound Components

- **PM7Menu** - Root menu container
- **PM7Menu.Trigger** - Button that opens the menu (accepts className prop)
- **PM7Menu.Content** - Menu content container
- **PM7Menu.Item** - Individual menu item (accepts onClick and disabled props)
- **PM7Menu.Separator** - Visual separator between items
- **PM7Menu.Label** - Section label for grouping items

## Advanced Patterns

### Checkbox Menu Items

```tsx
const menuItems = [
  {
    id: 'notifications',
    label: 'Enable Notifications',
    type: 'check',
    checked: true,
    onChange: (checked) => setNotificationsEnabled(checked)
  },
  {
    id: 'darkmode',
    label: 'Dark Mode',
    type: 'check',
    checked: false,
    onChange: (checked) => setDarkMode(checked)
  }
];
```

### Submenu Pattern

```tsx
const menuItems = [
  {
    id: 'file',
    label: 'File',
    type: 'submenu',
    submenuItems: [
      { id: 'new', label: 'New', onClick: () => console.log('New') },
      { id: 'open', label: 'Open', onClick: () => console.log('Open') },
      { id: 'sep1', type: 'separator' },
      { id: 'save', label: 'Save', onClick: () => console.log('Save') }
    ]
  }
];
```

### Navigation Menu

```tsx
import { useNavigate } from 'react-router-dom';

function NavigationMenu() {
  const navigate = useNavigate();

  const navigationItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      onClick: () => navigate('/dashboard') 
    },
    { 
      id: 'projects', 
      label: 'Projects', 
      onClick: () => navigate('/projects') 
    },
    { 
      id: 'reports', 
      label: 'Reports', 
      onClick: () => navigate('/reports') 
    },
    { 
      id: 'sep1', 
      type: 'separator' 
    },
    { 
      id: 'help', 
      label: 'Help & Support', 
      onClick: () => navigate('/help') 
    }
  ];

  return (
    <PM7Menu 
      menuItems={navigationItems}
      menuLabel="Navigation"
      menuAlignment="center"
    />
  );
}
```

## ❌ Common Mistakes to Avoid

- ❌ Forgetting to import pm7-menu.css
- ❌ Not installing required peer dependencies (@radix-ui/react-dropdown-menu, lucide-react)
- ❌ Using incorrect trigger button sizing (use h-9 w-9 for trigger, h-5 w-5 for icon)
- ❌ Not providing unique id props for menu items
- ❌ Missing onClick handlers for menu items
- ❌ Using complex JSX in menuItems array (use compound components instead)
- ❌ Forgetting to handle menu state for context menus

## Complete Production Example

```tsx
import React, { useState } from 'react';
import { PM7Menu } from 'pm7-ui-style-guide';
import { MoreVertical, Edit, Copy, Trash2, Archive } from 'lucide-react';
import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css';

const TableRowActions = ({ item, onEdit, onCopy, onArchive, onDelete }) => {
  const [isArchived, setIsArchived] = useState(item.archived);

  const menuItems = [
    {
      id: 'edit',
      label: 'Edit',
      icon: <Edit size={16} />,
      onClick: () => onEdit(item.id)
    },
    {
      id: 'copy',
      label: 'Duplicate',
      icon: <Copy size={16} />,
      onClick: () => onCopy(item.id)
    },
    {
      id: 'sep1',
      type: 'separator'
    },
    {
      id: 'archive',
      label: isArchived ? 'Unarchive' : 'Archive',
      icon: <Archive size={16} />,
      type: 'check',
      checked: isArchived,
      onChange: (checked) => {
        setIsArchived(checked);
        onArchive(item.id, checked);
      }
    },
    {
      id: 'sep2',
      type: 'separator'
    },
    {
      id: 'delete',
      label: 'Delete',
      icon: <Trash2 size={16} />,
      onClick: () => onDelete(item.id),
      disabled: !item.canDelete
    }
  ];

  return (
    <PM7Menu 
      menuItems={menuItems}
      menuAlignment="end"
      menuIcon={<MoreVertical size={16} />}
      menuTriggerIconColorLight="#666"
      menuTriggerIconColorDark="#a0a0a0"
    />
  );
};
```

## Accessibility Features

- **Keyboard Navigation**: Arrow keys, Enter, ESC navigation
- **Focus Management**: Proper focus trapping and restoration
- **ARIA Labels**: Built-in accessibility attributes from Radix UI
- **Screen Reader Support**: Proper announcement of menu items and states
- **High Contrast**: Meets WCAG contrast requirements
- **Reduced Motion**: Respects user's motion preferences