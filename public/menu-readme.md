# PM7Menu Component

## Overview

The PM7Menu component provides a flexible, accessible dropdown menu system for the PM7 UI Style Guide. It supports fully configurable menu items, custom icons, dark/light themes, and multi-language labels. The component is located at `src/components/menu/pm7-menu.tsx`.

## Main Component vs. Primitives

- **PM7Menu**: The main, high-level component for most use cases. Handles trigger, menu, and all logic for you.
- **Primitives**: Low-level building blocks (see below) for advanced custom menus.

## Usage

### Basic Example

```tsx
import { PM7Menu } from '../src/components/menu/pm7-menu';
// For production, use:
// import { PM7Menu } from 'pm7-ui-style-guide';

function MyComponent() {
  const menuItems = [
    { id: 'language', label: 'Set language', onClick: () => console.log('Language selected') },
    { id: 'theme', label: 'Theme: Light', onClick: () => toggleTheme(), icon: <SunIcon /> }
  ];
  return (
    <PM7Menu
      menuItems={menuItems}
      theme="light"
      menuAlignment="start"
      menuTriggerIconColorLight="#000000"
      menuTriggerIconColorDark="#FFFFFF"
    />
  );
}
```

### Customizing the Menu Trigger
- Use `menuIcon` to provide a custom icon (SVG or ReactNode).
- Use `menuLabel` to provide a custom label (string or ReactNode).
- Use both for a label+icon trigger (e.g. "File" + icon).
- If neither is provided, a hamburger icon is shown by default.

## Props

| Prop                        | Type                              | Default   | Description                                                                 |
|-----------------------------|-----------------------------------|-----------|-----------------------------------------------------------------------------|
| `menuItems`                 | `PM7MenuItem[]`                   | `[]`      | Array of menu items to display                                              |
| `theme`                     | `'light' \| 'dark'`               | `'light'` | Theme for the menu                                                          |
| `mobileBreakpoint`          | `number`                          | `768`     | Pixel width at which to switch to mobile styling                            |
| `menuAlignment`             | `'start' \| 'center' \| 'end'`    | `'start'` | Alignment of the menu relative to the trigger                               |
| `menuIcon`                  | `React.ReactNode`                 | Hamburger | Custom icon for the menu trigger                                            |
| `menuTriggerIconColorLight` | `string`                          | `#000000` | Icon color for light mode                                                   |
| `menuTriggerIconColorDark`  | `string`                          | `#FAFAFA` | Icon color for dark mode                                                    |
| `menuTriggerLabelColorLight`| `string`                          | `#000000` | Label color for light mode                                                  |
| `menuTriggerLabelColorDark` | `string`                          | `#FAFAFA` | Label color for dark mode                                                   |
| `menuLabel`                 | `React.ReactNode`                 |           | Custom label (string or ReactNode) for the menu trigger                     |

### Menu Item Interface

```tsx
export type PM7MenuItem = {
  id: string;
  label: React.ReactNode;
  type?: string; // 'normal', 'check', 'radio', 'submenu', 'separator', 'switch'
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  submenuItems?: PM7MenuItem[];
  [key: string]: any; // For language-specific labels
}
```

## Multi-language Support

Add `label-{languageCode}` to each menu item and use a helper to select the correct label at runtime.

```tsx
const selectedLanguage = 'en';
const getLabel = (item) => item[`label-${selectedLanguage}`] || item.label || '';
const menuItems = [
  { id: 'profile', label: 'Profile', 'label-en': 'Profile', 'label-es': 'Perfil' },
  // ...
];
<PM7Menu menuItems={menuItems.map(item => ({ ...item, label: getLabel(item) }))} theme="light" />
```

Supported language codes: `en`, `es`, `fr`, `de`, `nl`, `nl-be`, `zh`, etc.

## Dynamic Theme Labels

For menu items whose label depends on the theme, update all language variants when the theme changes:

```tsx
useEffect(() => {
  menuItems.forEach(item => {
    if (item.id === 'theme') {
      item.label = `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`;
      item['label-en'] = `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`;
      // ...other languages
    }
  });
}, [theme]);
```

## Accessibility
- Keyboard navigation and ARIA roles are handled by Radix primitives.
- All menu items are focusable and navigable by keyboard.

## Styling & Theming
- Menu items: 16px horizontal padding (`px-4`), 8px vertical padding (`py-2`) on desktop, 12px vertical padding (`py-3`) on mobile
- 12px gap (`gap-3`) between icon and text
- Menu container: 12px padding (`py-3 px-3`), 6px border radius (`rounded-[6px]`)
- Menu hover: PM7 blue (`#1C86EF`)
- All interactive elements show pointer cursor on hover
- Dark mode is handled via the `theme` prop and CSS classes
- All styling is contained within the components; no extra CSS required

## Primitive Exports

For advanced use, you can compose your own menu using these primitives:

- `PM7MenuRoot`
- `PM7MenuTrigger`
- `PM7MenuContent`
- `PM7MenuItem`
- `PM7MenuCheckboxItem`
- `PM7MenuRadioItem`
- `PM7MenuSeparator`
- `PM7MenuSub`
- `PM7MenuSubTrigger`
- `PM7MenuSubContent`
- `PM7MenuLabel`
- `PM7MenuShortcut`
- `PM7MenuIcon`
- `PM7MenuGroup`
- `PM7MenuPortal`
- `PM7MenuRadioGroup`

**Example:**

```tsx
import {
  PM7MenuRoot,
  PM7MenuTrigger,
  PM7MenuContent,
  PM7MenuItem,
  PM7MenuSeparator
} from '../src/components/menu/pm7-menu';

function CustomButtonMenu() {
  return (
    <PM7MenuRoot>
      <PM7MenuTrigger asChild>
        <button>Custom Trigger</button>
      </PM7MenuTrigger>
      <PM7MenuContent>
        <PM7MenuItem onClick={() => console.log('Item 1 clicked')}>Menu Item 1</PM7MenuItem>
        <PM7MenuSeparator />
        <PM7MenuItem onClick={() => console.log('Item 2 clicked')}>Menu Item 2</PM7MenuItem>
      </PM7MenuContent>
    </PM7MenuRoot>
  );
}
```

## Examples

See the `/examples/` directory for more usage patterns and advanced scenarios.
