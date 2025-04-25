# Winfakt UI Style Guide

**The official source of truth for UI, styling, and branding across all Winfakt applications.**

> **This package ensures consistent styling and UI components across all Winfakt applications by providing pre-styled components and design tokens.**

---

## Live Examples

View the live examples of all components at our [Vercel deployment](https://pm7-ui-style-guide-mqrvlm8a9-pm7-projects.vercel.app/).

---

## Purpose

The Winfakt UI Style Guide serves as the single source of truth for all Winfakt applications, ensuring consistent styling, branding, and user experience. It provides:

- **Pre-styled UI Components**: Built on ShadCN/UI primitives but customized with Winfakt branding
- **Design Tokens**: Colors, spacing, typography, and other design variables
- **Styling Rules**: Guidelines for consistent implementation

## Why Use This Package?

Rather than having each application implement ShadCN/UI components and then customize them, this package provides already-customized components that match Winfakt's design system. This approach:

- **Ensures Consistency**: All applications use identical styling
- **Saves Development Time**: No need to re-implement the same customizations
- **Centralizes Updates**: Design changes can be made in one place
- **Maintains Brand Identity**: Guarantees adherence to Winfakt brand guidelines

---

## Installation

Install via npm:
```sh
npm install pm7-ui-style-guide
```

Or, for direct use from GitHub (if you want the latest, unpublished code):
```sh
npm install git+https://github.com/patrickmast/pm7-ui-style-guide.git
```

---

## Usage

### Important: Use This Package Instead of Direct ShadCN/UI

Instead of adding ShadCN/UI components directly to your project and then customizing them, **use the pre-styled components from this package**. This ensures consistent styling across all Winfakt applications.

### Components

```tsx
// Import specific components
import { PM7MenuComponent as Menu } from 'winfakt-ui-style-guide';

// Define menu items
const menuItems = [
  {
    id: 'language',
    label: 'Set language',
    onClick: () => console.log('Language selected')
  },
  {
    id: 'theme',
    label: 'Theme: Light',
    onClick: () => toggleTheme(),
    rightIcon: <SunIcon />
  }
];

// Use them in your application
export default function AppHeader() {
  return (
    <header>
      <h1>Winfakt Application</h1>
      <Menu menuItems={menuItems} /> {/* Pre-styled with Winfakt branding */}
    </header>
  );
}
```

### Design Tokens

```tsx
import { colors, tokens } from 'pm7-ui-style-guide';

// Use the official Winfakt colors
const primaryColor = colors.primary; // #1C86EF
```

### CSS Variables

```css
/* Import CSS variables */
@import 'pm7-ui-style-guide/src/css/variables.css';

/* Use them in your styles */
.my-element {
  color: var(--primary);
}
```

---

## Component Documentation

### Menu Component

The Menu component provides a dropdown menu with Winfakt styling and fully configurable menu items:

```tsx
import { PM7MenuComponent as Menu } from 'winfakt-ui-style-guide';

export default function AppMenu() {
  // Define menu items
  const menuItems = [
    {
      id: 'language',
      label: 'Set language',
      onClick: () => console.log('Language selected')
    },
    {
      id: 'theme',
      label: 'Theme: Light',
      onClick: () => toggleTheme(),
      rightIcon: <SunIcon />
    }
  ];

  return <Menu menuItems={menuItems} />;
}
```

**Features:**
- Implements Winfakt's exact dropdown styling
- Fully configurable menu items
- Supports icons, custom labels, and click handlers
- Follows all Winfakt interaction patterns

Detailed documentation can be found in [pm7-menu-component Documentation](./src/docs/pm7-menu-component.md).

### Menu Primitives

For more customized dropdown menus, you can use the primitive components:

```tsx
import {
  PM7Menu,
  PM7MenuTrigger,
  PM7MenuContent,
  PM7MenuItem
} from 'winfakt-ui-style-guide';

export default function CustomMenu() {
  return (
    <PM7Menu>
      <PM7MenuTrigger asChild>
        <button>Custom Trigger</button>
      </PM7MenuTrigger>
      <PM7MenuContent>
        <PM7MenuItem onClick={() => console.log('Item 1')}>Item 1</PM7MenuItem>
        <PM7MenuItem onClick={() => console.log('Item 2')}>Item 2</PM7MenuItem>
      </PM7MenuContent>
    </PM7Menu>
  );
}
```

---

## Brand Guidelines

### Brand Name

- The brand name is "Winfakt" (not "WinFakt")
- Only the first letter 'W' is uppercase, and the 'k' is lowercase

### Colors

- **Primary Brand Color:** #1C86EF (bright blue)
- **Menu Hover Color:** #1C86EF
- **Border Color:** #D4D4D4

### Interactive Elements

- All buttons, links, and menu items must display the pointer (hand) cursor on hover
- This ensures a consistent and user-friendly experience

---

## UI/Styling Rules

### Menu/Dropdown Styling

- Background: White (#FFFFFF) in light mode, Dark (#23272F) in dark mode
- Border: 1px solid #D4D4D4 in light mode, #525252 in dark mode
- Border Radius: 6px
- Shadow: rgba(0,0,0,0.08) 0px 5px 15px 0px, rgba(25,28,33,0.2) 0px 15px 35px -5px
- Menu Items: 
  - Default: Black text/icons in light mode, White (#FAFAFA) in dark mode
  - Hover: White text/icons on #1C86EF background
- Padding: 16px horizontal (px-4), 8px vertical (py-2) on desktop, 12px vertical (py-3) on mobile
- Gap between icon and text: 12px (gap-3)
- Min-width: 12rem on desktop, 16rem on mobile
- Max-width: 18.8rem

### Menu Separator Styling

- Height: 1px
- Background: #D4D4D4 in light mode, #525252 in dark mode
- Margin: 8px 0 (my-2)

### Input Fields

- No focus ring
- On focus: border color = primary (#1C86EF)
- Always show a border (never borderless)

### Buttons

- Always use pointer cursor on hover

### General

- Use design tokens (not hardcoded colors) where possible
- All components should use shadcn/ui primitives for consistency

---

## Examples

The examples folder contains demonstrations of all components. Each component has its own example file in the `/examples/` directory, making it easy to add new component examples without cluttering the main App.tsx file.

To run the examples:

```sh
npm run dev
```

---

## Commit & Deploy Workflow

When you want to release a new version:
1. Commit and push all changes to GitHub
2. Bump the npm version (`npm version patch`/`minor`/`major`)
3. Publish to npm (`npm publish --access public`)

---

## Contributing

- Open issues or pull requests on [GitHub](https://github.com/patrickmast/pm7-ui-style-guide)
