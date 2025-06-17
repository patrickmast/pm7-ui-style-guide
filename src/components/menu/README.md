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

### Menu Trigger Variants

PM7Menu supports four different trigger button styles:

#### 1. Icon Only (Default Hamburger)
```tsx
<PM7Menu 
  menuItems={menuItems}
  theme="light"
/>
```

#### 2. Icon Only (Custom Icon)
```tsx
<PM7Menu 
  menuItems={menuItems}
  menuIcon={<SettingsIcon />}
  theme="light"
/>
```

#### 3. Text Only
```tsx
<PM7Menu 
  menuItems={menuItems}
  menuLabel="File"
  theme="light"
/>
```

#### 4. Icon + Text
```tsx
<PM7Menu 
  menuItems={menuItems}
  menuIcon={<FileIcon />}
  menuLabel="File"
  theme="light"
/>
```

#### 5. Hamburger + Text
```tsx
<PM7Menu 
  menuItems={menuItems}
  menuLabel="Menu"
  theme="light"
/>
```
*Note: When menuLabel is provided without menuIcon, the default hamburger icon is displayed alongside the text.*

### Bordered Menu with Custom Alignment

```tsx
<PM7Menu 
  menuItems={menuItems}
  menuTriggerBorder={true}
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
  menuTriggerBorder={true}
  theme="light"
/>

// Show border on hover only
<PM7Menu 
  menuItems={items}
  menuTriggerOnHover={true}
  theme="light"
/>

// Custom icon
<PM7Menu 
  menuItems={items}
  menuIcon={<CustomIcon />}
  theme="light"
/>
```

### Border and Background Styling

```tsx
// Show border and background
<PM7Menu 
  menuItems={items}
  menuTriggerBorder={true}
  menuTriggerBackground={true}
  theme="light"
/>

// Show only border (no background)
<PM7Menu 
  menuItems={items}
  menuTriggerBorder={true}
  theme="light"
/>

// Show border and background only on hover
<PM7Menu 
  menuItems={items}
  menuTriggerOnHover={true}
  theme="light"
/>
```

### Color Customization

PM7Menu supports theme-aware color props with a base version (used for light mode) and optional Dark variants for dark mode.

```tsx
// Theme-aware color customization
<PM7Menu 
  menuItems={items}
  menuTriggerIconColor="#1C86EF"                    // Base color (light mode)
  menuTriggerIconColorDark="#3B9EFF"                // Dark mode override
  menuTriggerLabelColor="#111827"                   // Base label color
  menuTriggerLabelColorDark="#FFFFFF"               // Dark mode label color
  menuTriggerBackgroundColor="#F3F4F6"             // Base background
  menuTriggerBackgroundColorDark="#1F2937"         // Dark mode background
  menuTriggerBorderColor="#E5E7EB"                 // Base border
  menuTriggerBorderColorDark="#374151"             // Dark mode border
  menuTriggerHoverBackgroundColor="#E5E7EB"        // Base hover background
  menuTriggerHoverBackgroundColorDark="#374151"    // Dark mode hover background
  menuTriggerHoverBorderColor="#D1D5DB"            // Base hover border
  menuTriggerHoverBorderColorDark="#4B5563"        // Dark mode hover border
  menuBackgroundColor="#FFFFFF"                    // Base dropdown background
  menuBackgroundColorDark="#1F2937"               // Dark mode dropdown background
  theme="light"
/>

// Using base props only (will use base color in both themes)
<PM7Menu 
  menuItems={items}
  menuTriggerIconColor="#1C86EF"
  menuTriggerBackgroundColor="#F3F4F6"
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
| `menuTriggerBorder` | `boolean` | `false` | Show border on the menu trigger |
| `menuTriggerBackground` | `boolean` | `false` | Show background on the menu trigger |
| `menuTriggerOnHover` | `boolean` | `false` | Show border and background only on hover |
| `mobileBreakpoint` | `number` | `768` | Screen width for mobile layout switch |
| `menuTriggerIconColor` | `string` | - | Base icon color (used in light mode) |
| `menuTriggerIconColorDark` | `string` | - | Icon color in dark theme |
| `menuTriggerLabelColor` | `string` | - | Base label color (used in light mode) |
| `menuTriggerLabelColorDark` | `string` | - | Label color in dark theme |
| `menuTriggerBackgroundColor` | `string` | - | Trigger background color |
| `menuTriggerBackgroundColorDark` | `string` | - | Trigger background color in dark mode |
| `menuTriggerBorderColor` | `string` | - | Trigger border color |
| `menuTriggerBorderColorDark` | `string` | - | Trigger border color in dark mode |
| `menuTriggerHoverBackgroundColor` | `string` | - | Trigger hover background color |
| `menuTriggerHoverBackgroundColorDark` | `string` | - | Trigger hover background color in dark mode |
| `menuTriggerHoverBorderColor` | `string` | - | Trigger hover border color |
| `menuTriggerHoverBorderColorDark` | `string` | - | Trigger hover border color in dark mode |
| `menuBackgroundColor` | `string` | - | Dropdown background color |
| `menuBackgroundColorDark` | `string` | - | Dropdown background color in dark mode |

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
  menuTriggerBorder={true}
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
- Four flexible trigger variants for different use cases
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