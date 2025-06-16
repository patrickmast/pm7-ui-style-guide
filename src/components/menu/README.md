# PM7Menu Component - Complete Integration Guide

**PM7Menu** is a React dropdown menu component that provides PM7-branded styling for creating accessible dropdown menus. It offers flexible menu item types, theme support, and extensive customization options while maintaining PM7's design standards.

**📖 Read Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/menu/README.md](https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/menu/README.md)

**✏️ Edit Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/menu/README.md](https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/menu/README.md)

**Package**: pm7-ui-style-guide  
**Component**: PM7Menu (React dropdown menu component)  
**CSS File**: pm7-menu.css (required)  
**Peer Dependencies**: @radix-ui/react-dropdown-menu, lucide-react

## Installation

```bash
npm install pm7-ui-style-guide

# Required peer dependencies:
npm install @radix-ui/react-dropdown-menu lucide-react
```

## Import

```typescript
// Main component
import { PM7Menu } from 'pm7-ui-style-guide';

// CSS import (required)
import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css';
```

## Basic Usage

### Simple Menu

```tsx
import React from 'react';
import { PM7Menu } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css';

const menuItems = [
  { id: 'home', label: 'Home', onClick: () => console.log('Home') },
  { id: 'about', label: 'About', onClick: () => console.log('About') },
  { id: 'separator', type: 'separator' },
  { id: 'contact', label: 'Contact', onClick: () => console.log('Contact') }
];

function MyComponent() {
  return (
    <PM7Menu 
      menuItems={menuItems}
      theme="light"
    />
  );
}
```

### Menu with Text Label

```tsx
<PM7Menu 
  menuItems={menuItems}
  menuLabel="Menu"
  theme="light"
/>
```

### Bordered Menu with Custom Alignment

```tsx
<PM7Menu 
  menuItems={menuItems}
  menuTriggerBordered={true}
  menuAlignment="center"
  theme="light"
/>
```

## Menu Item Types

PM7Menu supports various menu item types:

```tsx
const menuItems = [
  // Normal item
  { id: 'home', label: 'Home', onClick: () => {} },
  
  // Item with icon
  { id: 'settings', label: 'Settings', icon: <SettingsIcon />, onClick: () => {} },
  
  // Disabled item
  { id: 'disabled', label: 'Disabled', disabled: true },
  
  // Separator
  { id: 'sep1', type: 'separator' },
  
  // Checkbox item
  { id: 'check1', label: 'Enable notifications', type: 'check', checked: true, onChange: (checked) => {} },
  
  // Radio item
  { id: 'radio1', label: 'Option A', type: 'radio', checked: false, onChange: (checked) => {} },
  
  // Switch item
  { id: 'switch1', label: 'Dark mode', type: 'switch', checked: false, onChange: (checked) => {} }
];
```

## Theme Support

```tsx
// Light theme
<PM7Menu menuItems={items} theme="light" />

// Dark theme
<PM7Menu menuItems={items} theme="dark" />
```

## Customization Options

### Trigger Styling

```tsx
// Always show border
<PM7Menu 
  menuItems={items}
  menuTriggerBordered={true}
  theme="light"
/>

// Show border on hover only
<PM7Menu 
  menuItems={items}
  menuTriggerBorderedOnHover={true}
  theme="light"
/>

// Custom icon
<PM7Menu 
  menuItems={items}
  menuIcon={<CustomIcon />}
  theme="light"
/>
```

### Color Customization

```tsx
<PM7Menu 
  menuItems={items}
  menuTriggerIconColorLight="#1C86EF"
  menuTriggerIconColorDark="#3B9EFF"
  menuTriggerLabelColorLight="#111827"
  menuTriggerLabelColorDark="#FFFFFF"
  menuTriggerBackgroundColor="#F3F4F6"
  menuBackgroundColor="#FFFFFF"
  theme="light"
/>
```

### Responsive Behavior

```tsx
<PM7Menu 
  menuItems={items}
  mobileBreakpoint={768}  // Switch to mobile layout below 768px
  theme="light"
/>
```

## API Reference

### PM7Menu Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `menuItems` | `PM7MenuItem[]` | `[]` | Array of menu items to display |
| `theme` | `'light' \| 'dark'` | `'light'` | Theme for proper color rendering |
| `menuAlignment` | `'start' \| 'center' \| 'end'` | `'start'` | Dropdown alignment relative to trigger |
| `menuLabel` | `ReactNode` | - | Custom label next to trigger icon |
| `menuIcon` | `ReactNode` | - | Custom trigger icon (default: hamburger) |
| `menuTriggerBordered` | `boolean` | `false` | Always show border around trigger |
| `menuTriggerBorderedOnHover` | `boolean` | `false` | Show border on hover only |
| `mobileBreakpoint` | `number` | `768` | Screen width for mobile layout switch |
| `menuTriggerIconColorLight` | `string` | - | Icon color in light theme |
| `menuTriggerIconColorDark` | `string` | - | Icon color in dark theme |
| `menuTriggerLabelColorLight` | `string` | - | Label color in light theme |
| `menuTriggerLabelColorDark` | `string` | - | Label color in dark theme |
| `menuTriggerBackgroundColor` | `string` | - | Trigger background color |
| `menuBackgroundColor` | `string` | - | Dropdown background color |

### Menu Item Props (PM7MenuItem)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | Unique identifier (required) |
| `label` | `ReactNode` | - | Display text or content (required) |
| `type` | `string` | `'normal'` | Item type: 'normal', 'check', 'radio', 'separator', 'switch' |
| `icon` | `ReactNode` | - | Left icon |
| `rightIcon` | `ReactNode` | - | Right icon |
| `onClick` | `() => void` | - | Click handler |
| `disabled` | `boolean` | `false` | Disabled state |
| `checked` | `boolean` | - | Checked state (for check/radio/switch items) |
| `onChange` | `(checked: boolean) => void` | - | Change handler (for check/radio/switch items) |
| `submenuItems` | `PM7MenuItem[]` | - | Submenu items |

## Common Use Cases

### Navigation Menu

```tsx
const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon />, onClick: () => navigate('/dashboard') },
  { id: 'projects', label: 'Projects', icon: <ProjectsIcon />, onClick: () => navigate('/projects') },
  { id: 'settings', label: 'Settings', icon: <SettingsIcon />, onClick: () => navigate('/settings') },
  { id: 'separator', type: 'separator' },
  { id: 'logout', label: 'Logout', icon: <LogoutIcon />, onClick: handleLogout }
];

<PM7Menu 
  menuItems={navItems}
  menuLabel="Menu"
  menuTriggerBordered={true}
  theme="light"
/>
```

### Settings Menu

```tsx
const settingsItems = [
  { id: 'notifications', label: 'Enable notifications', type: 'check', checked: true, onChange: setNotifications },
  { id: 'darkmode', label: 'Dark mode', type: 'switch', checked: false, onChange: setDarkMode },
  { id: 'separator', type: 'separator' },
  { id: 'language', label: 'Language', submenuItems: [
    { id: 'en', label: 'English', type: 'radio', checked: true, onChange: () => setLang('en') },
    { id: 'es', label: 'Español', type: 'radio', checked: false, onChange: () => setLang('es') }
  ]}
];

<PM7Menu 
  menuItems={settingsItems}
  menuIcon={<SettingsIcon />}
  theme="light"
/>
```

### User Profile Menu

```tsx
const profileItems = [
  { id: 'profile', label: 'View Profile', icon: <UserIcon />, onClick: () => navigate('/profile') },
  { id: 'account', label: 'Account Settings', icon: <SettingsIcon />, onClick: () => navigate('/account') },
  { id: 'separator', type: 'separator' },
  { id: 'help', label: 'Help & Support', icon: <HelpIcon />, onClick: () => navigate('/help') },
  { id: 'logout', label: 'Sign Out', icon: <LogoutIcon />, onClick: handleLogout }
];

<PM7Menu 
  menuItems={profileItems}
  menuIcon={<Avatar />}
  menuAlignment="end"
  theme="light"
/>
```

## PM7 Brand Guidelines

### Colors
- **Primary**: #1C86EF (PM7 blue)
- **Hover Background**: #1C86EF with white text
- **Border**: #D4D4D4 (light mode), #525252 (dark mode)
- **Background**: White (light mode), #23272F (dark mode)

### Design Principles
- Clean, minimal dropdown design
- Consistent spacing and typography
- Accessible keyboard navigation
- Responsive mobile-friendly layout
- PM7 brand color integration

## Accessibility Features

- **Keyboard Navigation**: Full arrow key and Tab support
- **Screen Reader Support**: Proper ARIA labels and roles
- **Focus Management**: Clear focus indicators
- **High Contrast**: Meets WCAG contrast requirements
- **Mobile Friendly**: Touch-optimized for mobile devices

## Important Notes

- **CSS Import Required**: Must import pm7-menu.css for proper styling
- **Peer Dependencies**: Requires @radix-ui/react-dropdown-menu and lucide-react
- **Menu Items Array**: menuItems prop is required and must be an array
- **Unique IDs**: Each menu item must have a unique id
- **Theme Consistency**: Always specify theme prop for proper styling

## Browser Support

PM7Menu supports all modern browsers:
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

*Built on Radix UI primitives for maximum compatibility and accessibility.*