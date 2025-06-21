# PM7 UI Style Guide

**The official source of truth for UI, styling, and branding across all PM7 applications.**

> **This package ensures consistent styling and UI components across all PM7 applications by providing pre-styled components and design tokens.**

## Table of Contents

- [PM7 UI Style Guide](#pm7-ui-style-guide)
  - [Table of Contents](#table-of-contents)
  - [Live Examples](#live-examples)
  - [Static Documentation](#static-documentation)
  - [Purpose](#purpose)
  - [Why Use This Package?](#why-use-this-package)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Important: Use This Package Instead of Direct ShadCN/UI](#important-use-this-package-instead-of-direct-shadcnui)
    - [Components](#components)
    - [Design Tokens](#design-tokens)
    - [CSS Variables](#css-variables)
  - [Component Documentation](#component-documentation)
    - [Component Organization](#component-organization)
    - [Menu Component](#menu-component)
    - [Menu Primitives](#menu-primitives)
    - [Button Component](#button-component)
    - [Dialog Component](#dialog-component)
      - [Dialog Separator](#dialog-separator)
    - [Input Component](#input-component)
  - [Integration Guide for Developers](#integration-guide-for-developers)
    - [Prerequisites](#prerequisites)
    - [Installation Steps](#installation-steps)
    - [Component Usage](#component-usage)
      - [Menu Component](#menu-component-1)
      - [Dialog Component](#dialog-component-1)
      - [Button and Input Styling](#button-and-input-styling)
    - [Styling Integration](#styling-integration)
      - [CSS Variables](#css-variables-1)
      - [Component-Specific CSS](#component-specific-css)
    - [Dark Mode Support](#dark-mode-support)
    - [TypeScript Support](#typescript-support)
    - [Troubleshooting](#troubleshooting)
      - [Common Issues](#common-issues)
      - [Getting Help](#getting-help)
    - [Version Compatibility](#version-compatibility)
    - [Best Practices](#best-practices)
  - [Brand Guidelines](#brand-guidelines)
    - [Colors](#colors)
    - [Interactive Elements](#interactive-elements)
  - [UI/Styling Rules](#uistyling-rules)
    - [Menu/Dropdown Styling](#menudropdown-styling)
    - [Menu Separator Styling](#menu-separator-styling)
    - [Input Fields](#input-fields)
    - [Buttons](#buttons)
    - [General](#general)
  - [Architecture](#architecture)
  - [Examples](#examples)
    - [Understanding the Examples App](#understanding-the-examples-app)
    - [Running Examples Locally](#running-examples-locally)
    - [Adding New Component Examples](#adding-new-component-examples)
  - [Commit \& Deploy Workflow](#commit--deploy-workflow)
  - [Contributing](#contributing)

---

## Live Examples

View the live examples and documentation at [PM7.tools](https://pm7.tools/).

The PM7.tools website features:
- **Home Page**: Overview of all components and quick start guide
- **Interactive Examples**: Live demos of each component with code samples  
- **Theme Support**: Toggle between light and dark themes
- **API Documentation**: Comprehensive documentation for each component
- **Mobile Responsive**: Optimized for all device sizes

---

## Static Documentation

The PM7 UI Style Guide now includes pre-rendered static HTML documentation that can be accessed by tools like WebFetch, AI agents, and crawlers without requiring JavaScript execution.

### Quick Access - Dialog Documentation

For immediate access to the Dialog component documentation:

```bash
npm run build:dialog-doc
```

This generates `static/dialog-doc.html` - a clean, WebFetch-friendly version of the complete Dialog integration guide.

### Full Static Documentation

To generate static HTML for all components and documentation pages:

```bash
npm run build:static
```

This creates static HTML files for all components (menu, button, input, dialog, tabselector, card, themetoggle) across all documentation tabs (demo, overview, usage, documentation) in both light and dark themes.

**Generated files include:**
- `static/dialog-doc.html` - Complete Dialog integration guide  
- `static/{component}-{tab}.html` - Light theme versions
- `static/{component}-{tab}-dark.html` - Dark theme versions
- `static/index.html` - Index of all generated pages

**Benefits:**
- **AI/Agent Accessible**: Tools like WebFetch can access documentation without JavaScript
- **SEO Friendly**: Search engines can index the documentation content
- **Fast Loading**: Static HTML loads faster than React applications
- **Offline Access**: Documentation available without the full application

For detailed information about the pre-rendering system, see [PRERENDER_README.md](./PRERENDER_README.md).

---

## Purpose

The PM7 UI Style Guide serves as the single source of truth for all PM7 applications, ensuring consistent styling, branding, and user experience. It provides:

- **Styling Rules for ShadCN/UI**: Specific overrides and customizations to make ShadCN/UI components match PM7 branding
- **Design Tokens**: Colors, spacing, typography, and other design variables
- **Styling Guidelines**: Rules for consistent implementation across applications

## Why Use This Package?

This package is designed specifically for applications that **already use ShadCN/UI components**. Rather than having each application customize ShadCN/UI components individually, this package provides the PM7-specific styling rules and overrides. This approach:

- **Ensures Consistency**: All applications use identical styling for ShadCN/UI components
- **Saves Development Time**: No need to re-implement the same customizations
- **Centralizes Updates**: Design changes can be made in one place
- **Maintains Brand Identity**: Guarantees adherence to PM7 brand guidelines
- **Minimal Overhead**: Only provides the specific styling changes needed, not complete component reimplementations

---

## Installation

Install via npm:
```sh
npm install pm7-ui-style-guide
```

Install required peer dependencies:
```sh
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu
```

Or, for direct use from GitHub (if you want the latest, unpublished code):
```sh
npm install git+https://github.com/patrickmast/pm7-ui-style-guide.git
```

---

## Usage

### Important: Use This Package Instead of Direct ShadCN/UI

Instead of adding ShadCN/UI components directly to your project and then customizing them, **use the pre-styled components from this package**. This ensures consistent styling across all PM7 applications.

### Components

```tsx
// Import specific components
// You can use either the PM7-prefixed version or the alias
import { Menu, PM7MenuComponent } from 'pm7-ui-style-guide';

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
      <h1>PM7 Application</h1>
      <Menu
        menuItems={menuItems}
        menuAlignment="start"
        menuTriggerIconColor="#1C86EF"
        menuTriggerIconColorDark="#FFDD00"
      />
    </header>
  );
}
```

### Design Tokens

```tsx
import { colors, tokens } from 'pm7-ui-style-guide';

// Use the official PM7 colors
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

### Component Organization

All components have been reorganized into a more structured directory pattern for better maintainability:

```
src/
  components/
    button/
      index.ts         # Exports from the component implementation file
      pm7-button.tsx  # Component implementation
      README.md       # Component documentation
    dialog/
      index.tsx       # Exports from the component implementation file
      pm7-dialog.tsx  # Component implementation
      pm7-dialog.css  # Component styles
      README.md       # Component documentation
    input/
      index.ts        # Exports from the component implementation file
      pm7-input.ts    # Component implementation
      README.md       # Component documentation
    menu/
      index.tsx       # Exports from the component implementation file
      pm7-menu.tsx    # Component implementation
      pm7-menu.css    # Component styles
      README.md       # Component documentation
```

This organization makes it easier to find and maintain components, with each component having its own directory containing all related files.

### Menu Component

The Menu component provides a dropdown menu with PM7 styling and fully configurable menu items:

```tsx
import { Menu } from 'pm7-ui-style-guide';
// OR import { PM7MenuComponent } from 'pm7-ui-style-guide';

export default function AppMenu() {
  // Define menu items
  const menuItems = [
    {
      id: 'language',
      label: 'Set language',
      onClick: () => console.log('Language selected')
    },
    {
      id: 'separator1',
      type: 'separator'
    },
    {
      id: 'theme',
      label: 'Theme: Light',
      onClick: () => toggleTheme(),
      rightIcon: <SunIcon />
    }
  ];

  // You can specify the menu alignment
  return <Menu
    menuItems={menuItems}
    menuAlignment="start"
    menuTriggerIconColor="#1C86EF"
    menuTriggerIconColorDark="#FFDD00"
  />;
}
```

**Features:**
- Implements PM7's exact dropdown styling
- Fully configurable menu items
- Supports icons, custom labels, and click handlers
- Follows all PM7 interaction patterns
- Supports separators with `type: 'separator'`
- Configurable menu alignment with `menuAlignment` prop (values: `start`, `center`, `end`)
- Customizable menu icon color for light and dark mode with `menuTriggerIconColor` and `menuTriggerIconColorDark` props

**AI Assistant Prompt Example:**

If you're using an AI assistant to help implement the Menu component, here's a sample prompt that will guide it to use the component correctly:

```
Add a menu to my React application using the pm7-ui-style-guide package. Specifically:

1. Use the all-in-one Menu component (not the individual PM7Menu primitives)
2. Create a menuItems array with the following items:
   - A "Dashboard" item that navigates to the dashboard page
   - A "Settings" item that navigates to the settings page
   - A separator
   - A "Dark Mode" toggle switch that changes the theme
   - A separator
   - An "About" item that shows version information

3. Set the menuAlignment to "start" so the menu aligns with the left edge of the trigger button
4. Set the menuTriggerIconColor to "#1C86EF" (PM7 Blue) and menuTriggerIconColorDark to "#FFDD00" (Yellow) to match the PM7 branding
5. Make sure the menu appears when clicking a button in the header

Please show the complete implementation including imports and the menuItems array definition.
```

Detailed documentation can be found in [pm7-menu-component Documentation](./components/menu/README.md).

### Menu Primitives

For more customized dropdown menus, you can use the primitive components:

```tsx
import {
  PM7Menu,
  PM7MenuTrigger,
  PM7MenuContent,
  PM7MenuItem
} from 'pm7-ui-style-guide';

export default function CustomMenu() {
  return (
    <PM7Menu>
      <PM7MenuTrigger asChild>
        <button>Custom Trigger</button>
      </PM7MenuTrigger>
      <PM7MenuContent align="start" alignOffset={4}>
        <PM7MenuItem onClick={() => console.log('Item 1')}>Item 1</PM7MenuItem>
        <PM7MenuItem onClick={() => console.log('Item 2')}>Item 2</PM7MenuItem>
      </PM7MenuContent>
    </PM7Menu>
  );
}
```

**Alignment Options:**
- `align="start"`: Aligns the left edge of the menu with the left edge of the trigger button
- `align="center"`: Centers the menu under the trigger button
- `align="end"`: Aligns the right edge of the menu with the right edge of the trigger button
- `alignOffset`: Controls the offset distance in pixels (default: 4)

### Button Component

The Button component provides a styled button with PM7 branding:

```tsx
import { Button } from 'pm7-ui-style-guide';
// OR import { PM7Button } from 'pm7-ui-style-guide';

export default function AppButton() {
  return (
    <Button onClick={() => console.log('Button clicked')}>Click me</Button>
  );
}
```

**Features:**
- Implements PM7's exact button styling
- Supports click handlers
- Follows all PM7 interaction patterns

Detailed documentation can be found in [pm7-button-component Documentation](./components/button/README.md).

### Dialog Component

The Dialog component provides a styled dialog with PM7 branding:

```tsx
import { Dialog } from 'pm7-ui-style-guide';
// OR import { PM7Dialog } from 'pm7-ui-style-guide';

export default function AppDialog() {
  return (
    <Dialog isOpen={true} onClose={() => console.log('Dialog closed')}>
      <Dialog.Title>Dialog Title</Dialog.Title>
      <Dialog.Description>Dialog description</Dialog.Description>
    </Dialog>
  );
}
```

**Features:**
- Implements PM7's exact dialog styling
- Supports open/closed state and close handlers
- Follows all PM7 interaction patterns

#### Dialog Separator

The Dialog component includes a separator component for creating visual divisions within dialogs:

```tsx
import {
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle,
  PM7DialogSeparator,
  PM7DialogFooter
} from 'pm7-ui-style-guide';

export default function AppDialog() {
  const [theme, setTheme] = useState('light');

  return (
    <PM7Dialog open={isOpen} onOpenChange={setIsOpen}>
      <PM7DialogContent className={theme === 'dark' ? 'dark' : ''}>
        <PM7DialogHeader>
          <PM7DialogTitle>Dialog Title</PM7DialogTitle>
        </PM7DialogHeader>

        <PM7DialogSeparator className={theme === 'dark' ? 'dark' : ''} marginTop="16px" marginBottom="16px" />

        <div>Dialog content goes here</div>

        <PM7DialogFooter>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </PM7DialogFooter>
      </PM7DialogContent>
    </PM7Dialog>
  );
}
```

**PM7DialogSeparator Props:**
- `className`: For theme styling (pass 'dark' for dark mode)
- `marginTop`: Optional top margin (default: '0px')
- `marginBottom`: Optional bottom margin (default: '0px')

The separator automatically adapts its styling based on the theme.

Detailed documentation can be found in [pm7-dialog-component Documentation](./components/dialog/README.md).

### Input Component

The Input component provides a styled input field with PM7 branding:

```tsx
import { Input } from 'pm7-ui-style-guide';
// OR import { PM7Input } from 'pm7-ui-style-guide';

export default function AppInput() {
  return (
    <Input
      type="text"
      value="Input value"
      onChange={(e) => console.log(e.target.value)}
    />
  );
}
```

**Features:**
- Implements PM7's exact input field styling
- Supports value and change handlers
- Follows all PM7 interaction patterns

Detailed documentation can be found in [pm7-input-component Documentation](./components/input/README.md).

---

## Integration Guide for Developers

This guide provides detailed instructions for third-party developers who want to integrate the PM7 UI Style Guide into their applications.

### Prerequisites

* Node.js (>=14.17.0)
* npm (>=6.14.13) or yarn (>=1.22.0)
* React (>=16.8.0) - The library uses React hooks
* A modern build system that can handle ES modules (webpack, Vite, Next.js, etc.)

### Installation Steps

1. Install the package using npm:
   ```sh
   npm install pm7-ui-style-guide
   ```

   Or using yarn:
   ```sh
   yarn add pm7-ui-style-guide
   ```

2. Install peer dependencies:
   ```sh
   npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu
   ```

3. Set up your project to handle CSS imports (if not already configured):
   - For webpack: Ensure you have css-loader and style-loader configured
   - For Next.js: No additional configuration needed
   - For Vite: No additional configuration needed

### Component Usage

The PM7 UI Style Guide provides several components that you can import and use in your application:

#### Menu Component

```tsx
import { Menu } from 'pm7-ui-style-guide';
import { useState } from 'react';

function MyApp() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const menuItems = [
    {
      id: 'theme',
      label: `Theme: ${theme === 'light' ? 'Light' : 'Dark'}`,
      onClick: toggleTheme
    },
    {
      id: 'separator1',
      type: 'separator'
    },
    {
      id: 'help',
      label: 'Help',
      onClick: () => window.open('https://help.example.com', '_blank')
    }
  ];

  return (
    <div className={theme}>
      <header>
        <h1>My Application</h1>
        <Menu
          menuItems={menuItems}
          initialTheme={theme}
          menuAlignment="start"
          menuTriggerIconColor="#1C86EF"
          menuTriggerIconColorDark="#FFDD00"
        />
      </header>
      {/* Rest of your application */}
    </div>
  );
}
```

#### Dialog Component

```tsx
import {
  PM7Dialog,
  PM7DialogTrigger,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle,
  PM7DialogFooter
} from 'pm7-ui-style-guide';
import '../node_modules/pm7-ui-style-guide/src/components/dialog/pm7-dialog.css';

function MyDialog() {
  return (
    <PM7Dialog>
      <PM7DialogTrigger asChild>
        <button>Open Settings</button>
      </PM7DialogTrigger>
      <PM7DialogContent>
        <PM7DialogHeader>
          <PM7DialogTitle>Application Settings</PM7DialogTitle>
        </PM7DialogHeader>
        <div className="py-4">
          {/* Your settings form */}
          <p>Settings content goes here</p>
        </div>
        <PM7DialogFooter>
          <button className="secondary-button">Cancel</button>
          <button className="primary-button">Save</button>
        </PM7DialogFooter>
      </PM7DialogContent>
    </PM7Dialog>
  );
}
```

#### Button and Input Styling

```tsx
import { buttonRules, inputRules } from 'pm7-ui-style-guide';

function MyForm() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          style={{
            borderColor: inputRules.alwaysShowBorder ? '#D4D4D4' : 'transparent',
          }}
          className="focus:border-primary"
        />
      </div>
      <button
        type="submit"
        style={{ cursor: buttonRules.cursor }}
      >
        Submit
      </button>
    </form>
  );
}
```

### Styling Integration

The PM7 UI Style Guide provides styling through CSS variables and utility classes. Here's how to integrate them:

#### CSS Variables

Import the CSS variables in your main CSS file:

```css
@import 'pm7-ui-style-guide/src/css/variables.css';
```

Then use the variables in your styles:

```css
.my-button {
  background-color: var(--primary);
  color: var(--white);
  border-radius: var(--border-radius);
  padding: var(--spacing-md);
}

.my-button:hover {
  background-color: var(--primary-dark);
}
```

#### Component-Specific CSS

Some components require their specific CSS files. Import them as needed:

```tsx
// For Dialog component
import 'pm7-ui-style-guide/src/components/dialog/pm7-dialog.css';

// For Menu component
import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css';
```

### Dark Mode Support

The PM7 UI Style Guide components support dark mode. To enable it:

1. Add a class to your root element based on the current theme:

```tsx
<div className={theme === 'dark' ? 'dark' : ''}>
  {/* Your application */}
</div>
```

2. Pass the theme to components that accept it:

```tsx
<Menu
  menuItems={menuItems}
  initialTheme={theme}
/>
```

### TypeScript Support

The package includes TypeScript definitions. You can import types for components and props:

```tsx
import { PM7MenuItem } from 'pm7-ui-style-guide';

const menuItems: PM7MenuItem[] = [
  {
    id: 'settings',
    label: 'Settings',
    onClick: () => console.log('Settings clicked')
  }
];
```

### Troubleshooting

#### Common Issues

1. **Components not styled correctly**
   - Make sure you've imported the component-specific CSS files
   - Check that your bundler is configured to handle CSS imports

2. **CSS variables not working**
   - Ensure you've imported the variables.css file
   - Check that your bundler is configured to handle CSS imports

3. **Component not rendering**
   - Check that you've installed all peer dependencies
   - Ensure you're using a compatible React version

4. **TypeScript errors with imports**
   - Make sure you're importing from the root package: `import { Menu } from 'pm7-ui-style-guide'`
   - If you're still having issues, try using the PM7-prefixed version: `import { PM7MenuComponent } from 'pm7-ui-style-guide'`

#### Getting Help

If you encounter issues not covered here:

- Check the [Component Documentation](#component-documentation) for specific usage details
- Look for similar issues in the [GitHub Issues](https://github.com/patrickmast/pm7-ui-style-guide/issues) page
- Open a new issue with detailed information about your problem

### Version Compatibility

| PM7 UI Style Guide | React    | Notes                               |
|--------------------|----------|-------------------------------------|
| 1.x                | >=16.8.0 | Requires React with Hooks support   |
| 2.x (future)       | >=18.0.0 | Will use React 18 features          |

### Best Practices

1. **Use components consistently** across your application to maintain a unified look and feel

2. **Follow the PM7 brand guidelines** for colors, spacing, and typography

3. **Use the provided design tokens** instead of hardcoding values

4. **Test your integration** in both light and dark modes

5. **Keep the package updated** to benefit from bug fixes and new features

---

## Brand Guidelines

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

## Architecture

The PM7 UI Style Guide is designed to work within a specific architecture:

1. **Base Layer**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
2. **Component Layer**: [ShadCN/UI](https://ui.shadcn.com/) - Unstyled, accessible components built on Tailwind
3. **Branding Layer**: PM7 UI Style Guide - PM7-specific styling rules and overrides

```
┌─────────────────────────────────┐
│ Your Application                 │
│  ┌─────────────────────────────┐ │
│  │ PM7 UI Style Guide          │ │ <- PM7 branding layer
│  │  ┌─────────────────────────┐│ │
│  │  │ ShadCN/UI Components    ││ │ <- Component layer
│  │  │  ┌─────────────────────┐│││
│  │  │  │ Tailwind CSS        ││││ <- Utility CSS layer
│  │  │  └─────────────────────┘│││
│  │  └─────────────────────────┘││
│  └─────────────────────────────┘│
└─────────────────────────────────┘
```

This architecture allows you to leverage the accessibility and functionality of ShadCN/UI components while ensuring they adhere to PM7's brand guidelines.

---

## Examples

The examples folder contains demonstrations of how to apply PM7 styling rules to ShadCN/UI components. Each component has its own example file in the `/examples/` directory.

### Understanding the Examples App

The examples app simulates a real application that uses:
1. Tailwind CSS for utility classes
2. ShadCN/UI for component structure
3. PM7 UI Style Guide for PM7 branding

For each component, we demonstrate:
- The styling rules provided by PM7 UI Style Guide
- How these rules should be applied to ShadCN/UI components
- The visual result of applying PM7 branding

### Running Examples Locally

To run the examples app locally:

1. Make sure you are in the project root directory:
   ```sh
   cd /Users/patrickmast/Dev/pm7-ui-style-guide
   ```

2. Start the development server:
   ```sh
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5174/
   ```

> **Note:** Always run the dev server from the project root, not from the `/examples` directory. The Vite configuration is set up to serve the examples app in development mode and build the library in production mode.

### Adding New Component Examples

To add a new component example:

1. Create a new file in the `/examples` directory (e.g., `your-component-example.tsx`)
2. Use relative imports to reference your component:
   ```tsx
   // Example of correct import for local development
   import { YourComponentRules } from '../src/components/your-component';
   ```
3. Update `App.tsx` in the examples directory to include your new example

---

## Commit & Deploy Workflow

When you want to release a new version:
1. Commit and push all changes to GitHub
2. Bump the npm version (`npm version patch`/`minor`/`major`)
3. Publish to npm (`npm publish --access public`)

---

## Contributing

- Open issues or pull requests on [GitHub](https://github.com/patrickmast/pm7-ui-style-guide)
