# pm7-menu-component

The pm7-menu-component provides a flexible, accessible dropdown menu system for the Winfakt UI Style Guide. It can be used with fully configurable menu items, allowing for complete customization of the menu content.

## Usage

### Complete Menu Component

For a standard menu with hamburger icon and custom menu items:

```tsx
import { PM7MenuComponent } from 'winfakt-ui-style-guide';

function MyComponent() {
  // Define your custom menu items
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

  return (
    <PM7MenuComponent 
      menuItems={menuItems}
      initialTheme="light"
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `menuItems` | `PM7MenuItem[]` | `[]` | Array of menu items to display |
| `initialTheme` | `'light' \| 'dark'` | System preference | Initial theme for the menu |
| `mobileBreakpoint` | `number` | `768` | Pixel width at which to switch to mobile styling |

### Menu Item Interface

```tsx
interface PM7MenuItem {
  id: string;            // Unique identifier for the menu item
  label: React.ReactNode; // Text or component to display
  onClick?: () => void;  // Click handler
  icon?: React.ReactNode; // Optional icon to display before the label
  rightIcon?: React.ReactNode; // Optional icon to display after the label
}
```

## Primitive Components

For custom menu implementations, you can use the individual primitives:

```tsx
import { 
  PM7Menu, 
  PM7MenuTrigger, 
  PM7MenuContent, 
  PM7MenuItem 
} from 'winfakt-ui-style-guide';

function CustomButtonMenu() {
  return (
    <PM7Menu>
      <PM7MenuTrigger asChild>
        <button className="your-button-styles">
          Custom Trigger
        </button>
      </PM7MenuTrigger>
      <PM7MenuContent>
        <PM7MenuItem onClick={() => console.log('Item 1 clicked')}>
          Menu Item 1
        </PM7MenuItem>
        <PM7MenuItem onClick={() => console.log('Item 2 clicked')}>
          Menu Item 2
        </PM7MenuItem>
      </PM7MenuContent>
    </PM7Menu>
  );
}
```

### Primitive Components API

#### PM7Menu

Root component that manages the state of the menu.

```tsx
<PM7Menu open={boolean} onOpenChange={(open: boolean) => void}>
  {/* children */}
</PM7Menu>
```

#### PM7MenuTrigger

The button that toggles the menu. Use `asChild` to use a custom element as the trigger.

```tsx
<PM7MenuTrigger asChild>
  <button>Custom Trigger</button>
</PM7MenuTrigger>
```

#### PM7MenuContent

The dropdown content container.

```tsx
<PM7MenuContent 
  align="end" 
  alignOffset={0} 
  sideOffset={4}
  className="optional-extra-classes"
>
  {/* menu items */}
</PM7MenuContent>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `align` | `'start' \| 'center' \| 'end'` | `'end'` | Alignment relative to trigger |
| `alignOffset` | `number` | `0` | Offset in pixels from alignment edge |
| `sideOffset` | `number` | `4` | Offset in pixels from trigger |

#### PM7MenuItem

Individual menu items.

```tsx
<PM7MenuItem 
  onClick={() => {}} 
  className="optional-extra-classes"
>
  Item Text
</PM7MenuItem>
```

## Styling

The menu components follow the Winfakt UI Style Guide specifications:

- Menu items have 16px horizontal padding (`px-4`) and 8px vertical padding (`py-2`) on desktop
- Menu items have 12px vertical padding (`py-3`) on mobile
- Menu items have a 12px gap (`gap-3`) between icon and text
- Menu container has 12px padding (`py-3 px-3`) on all sides
- Menu container has a 6px border radius (`rounded-[6px]`)
- Menu items have rounded corners (`rounded-md`)
- Menu hover state uses Winfakt blue (#1C86EF)
- Menu is positioned below the trigger with right edges aligned (`align="end"`)
- All interactive elements show pointer cursor on hover

All styling is contained within the components themselves, so no additional CSS is required.

## Examples

The examples folder contains demonstrations of the menu component. Each component has its own example file (e.g., `menu-example.tsx`) in the `/examples/` directory, making it easy to add new component examples without cluttering the main App.tsx file.

To add a new component example:

1. Create a new example file in `/examples/` (e.g., `button-example.tsx`)
2. Add a new entry in the sidebar navigation in `App.tsx`
3. Add a new case in the `renderComponent` function
