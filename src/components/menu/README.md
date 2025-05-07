# PM7 Menu Component

## Overview

The PM7 Menu component provides a flexible, accessible dropdown menu system for the PM7 UI Style Guide. It can be used with fully configurable menu items, allowing for complete customization of the menu content. This component follows the project's component directory pattern, located at `src/components/menu/pm7-menu.tsx`.

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
      id: 'language',
      label: 'Set language',
      onClick: () => console.log('Language selected')
    },
    {
      id: 'theme',
      label: 'Theme: Light',
      onClick: () => toggleTheme(),
      icon: <SunIcon />
    }
  ];

  return (
    <PM7Menu 
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
  type?: string;        // Menu item type (normal, check, radio, submenu, separator, switch)
  onClick?: () => void;  // Click handler
  icon?: React.ReactNode; // Optional icon to display before the label
  rightIcon?: React.ReactNode; // Optional icon to display after the label
  disabled?: boolean;   // Whether the item is disabled
  checked?: boolean;    // For check/radio/switch items, whether it's checked
  onChange?: (checked: boolean) => void; // For check/radio/switch items
  submenuItems?: PM7MenuItem[]; // For submenu items
  // Multi-language support properties
  'label-en'?: string;   // English label
  'label-es'?: string;   // Spanish label
  'label-fr'?: string;   // French label
  'label-de'?: string;   // German label
  'label-nl'?: string;   // Dutch label
  'label-nl-be'?: string; // Belgian Dutch label
  'label-zh'?: string;   // Chinese label
  // ... add more language labels as needed
}
```

## Multi-language Support

The menu component supports multiple languages through language-specific label properties. This allows you to create menus that dynamically change their text based on the user's selected language.

### Implementation Overview

The multi-language support works by:

1. Adding language-specific labels to each menu item using the pattern `label-{languageCode}`
2. Creating a helper function to select the appropriate label based on the current language
3. Applying this function to all menu items when rendering the menu

### Language Codes

The following language codes are supported by default, but you can add any additional languages you need:

| Language Code | Language |
|---------------|----------|
| `en` | English |
| `es` | Spanish (Español) |
| `fr` | French (Français) |
| `de` | German (Deutsch) |
| `nl` | Dutch (Nederlands) |
| `nl-be` | Belgian Dutch (Nederlands - België) |
| `zh` | Chinese (中文) |

### Basic Implementation

```tsx
// For local development, use relative imports
import { PM7Menu as Menu } from '../src/components/menu/pm7-menu';
// For production, use package imports
// import { PM7Menu as Menu } from 'pm7-ui-style-guide';
import { useState, useEffect } from 'react';

function MultiLanguageMenu() {
  // State for selected language
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    // Check if user has a language preference in localStorage
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('winfakt-language');
      if (savedLanguage) {
        return savedLanguage;
      }
    }
    return 'en'; // Default to English
  });

  // Function to get label based on selected language with fallback
  const getLabel = (item) => {
    const langKey = `label-${selectedLanguage}`;
    return item[langKey] || item.label || '';
  };

  // Function to select language
  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem('winfakt-language', language);
  };

  // Define menu items with inline translations
  const menuItems = [
    {
      id: 'profile',
      label: 'Profile',      // Default fallback label
      'label-en': 'Profile', // English
      'label-es': 'Perfil',  // Spanish
      'label-fr': 'Profil',  // French
      'label-de': 'Profil',  // German
      'label-nl': 'Profiel', // Dutch
      'label-zh': '个人资料', // Chinese
      onClick: () => console.log('Profile selected')
    },
    {
      id: 'language',
      label: 'Language',
      'label-en': 'Language',
      'label-es': 'Idioma',
      'label-fr': 'Langue',
      'label-de': 'Sprache',
      'label-nl': 'Taal',
      'label-zh': '语言',
      type: 'submenu',
      submenuItems: [
        {
          id: 'en',
          label: 'English',
          type: 'check',
          checked: selectedLanguage === 'en',
          onClick: () => selectLanguage('en')
        },
        {
          id: 'es',
          label: 'Español',
          type: 'check',
          checked: selectedLanguage === 'es',
          onClick: () => selectLanguage('es')
        },
        // Other language options...
      ]
    }
  ];

  return (
    <Menu 
      menuItems={menuItems.map(item => ({
        ...item,
        label: getLabel(item),
        submenuItems: item.submenuItems?.map(subItem => ({
          ...subItem,
          label: getLabel(subItem)
        }))
      }))}
      initialTheme="light"
    />
  );
}
```

### Dynamic Theme Labels

For theme labels that need to change when the theme changes, use an effect to update the labels:

```tsx
// Update theme label when theme changes
useEffect(() => {
  menuItems.forEach(item => {
    if (item.id === 'theme') {
      item.label = `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`;
      item['label-en'] = `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`;
      item['label-es'] = `Tema: ${theme === 'dark' ? 'Oscuro' : 'Claro'}`;
      item['label-fr'] = `Thème: ${theme === 'dark' ? 'Sombre' : 'Clair'}`;
      item['label-de'] = `Design: ${theme === 'dark' ? 'Dunkel' : 'Hell'}`;
      item['label-nl'] = `Thema: ${theme === 'dark' ? 'Donker' : 'Licht'}`;
      item['label-zh'] = `主题: ${theme === 'dark' ? '深色' : '浅色'}`;
    }
  });
}, [theme]);
```

### Advanced Usage: Language Switching

Here's a complete example of a menu with a language switcher that updates all menu items in real-time:

```tsx
// For local development, use relative imports
import { PM7Menu as Menu } from '../src/components/menu/pm7-menu';
// For production, use package imports
// import { PM7Menu as Menu } from 'pm7-ui-style-guide';
import { useState, useEffect } from 'react';

function LanguageSwitchableMenu() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('pm7-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Language state
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('winfakt-language');
      if (savedLanguage) {
        return savedLanguage;
      }
    }
    return 'en';
  });

  // Helper function to get the appropriate label
  const getLabel = (item) => {
    const langKey = `label-${selectedLanguage}`;
    return item[langKey] || item.label || '';
  };

  // Language selection function
  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    localStorage.setItem('winfakt-language', language);
  };

  // Theme toggle function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('pm7-theme', newTheme);
  };

  // Define menu items with translations for all supported languages
  const menuItems = [
    {
      id: 'profile',
      label: 'Profile',
      'label-en': 'Profile',
      'label-es': 'Perfil',
      'label-fr': 'Profil',
      'label-de': 'Profil',
      'label-nl': 'Profiel',
      'label-nl-be': 'Profiel',
      'label-zh': '个人资料',
      onClick: () => console.log('Profile selected'),
      icon: ProfileIcon
    },
    {
      id: 'language',
      label: 'Language',
      'label-en': 'Language',
      'label-es': 'Idioma',
      'label-fr': 'Langue',
      'label-de': 'Sprache',
      'label-nl': 'Taal',
      'label-nl-be': 'Taal',
      'label-zh': '语言',
      type: 'submenu',
      icon: LanguageIcon,
      submenuItems: [
        {
          id: 'en',
          label: 'English',
          type: 'check',
          checked: selectedLanguage === 'en',
          onClick: () => selectLanguage('en')
        },
        {
          id: 'es',
          label: 'Español',
          type: 'check',
          checked: selectedLanguage === 'es',
          onClick: () => selectLanguage('es')
        },
        {
          id: 'fr',
          label: 'Français',
          type: 'check',
          checked: selectedLanguage === 'fr',
          onClick: () => selectLanguage('fr')
        },
        {
          id: 'de',
          label: 'Deutsch',
          type: 'check',
          checked: selectedLanguage === 'de',
          onClick: () => selectLanguage('de')
        },
        {
          id: 'nl',
          label: 'Nederlands',
          type: 'check',
          checked: selectedLanguage === 'nl',
          onClick: () => selectLanguage('nl')
        },
        {
          id: 'nl-be',
          label: 'Nederlands (België)',
          type: 'check',
          checked: selectedLanguage === 'nl-be',
          onClick: () => selectLanguage('nl-be')
        },
        {
          id: 'zh',
          label: '中文',
          type: 'check',
          checked: selectedLanguage === 'zh',
          onClick: () => selectLanguage('zh')
        }
      ]
    },
    {
      id: 'theme',
      label: `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`,
      'label-en': `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`,
      'label-es': `Tema: ${theme === 'dark' ? 'Oscuro' : 'Claro'}`,
      'label-fr': `Thème: ${theme === 'dark' ? 'Sombre' : 'Clair'}`,
      'label-de': `Design: ${theme === 'dark' ? 'Dunkel' : 'Hell'}`,
      'label-nl': `Thema: ${theme === 'dark' ? 'Donker' : 'Licht'}`,
      'label-nl-be': `Thema: ${theme === 'dark' ? 'Donker' : 'Licht'}`,
      'label-zh': `主题: ${theme === 'dark' ? '深色' : '浅色'}`,
      type: 'switch',
      icon: theme === 'dark' ? MoonIcon : SunIcon,
      checked: theme === 'dark',
      onChange: toggleTheme
    }
  ];

  // Update theme labels when theme changes
  useEffect(() => {
    menuItems.forEach(item => {
      if (item.id === 'theme') {
        item.label = `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`;
        item['label-en'] = `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`;
        item['label-es'] = `Tema: ${theme === 'dark' ? 'Oscuro' : 'Claro'}`;
        item['label-fr'] = `Thème: ${theme === 'dark' ? 'Sombre' : 'Clair'}`;
        item['label-de'] = `Design: ${theme === 'dark' ? 'Dunkel' : 'Hell'}`;
        item['label-nl'] = `Thema: ${theme === 'dark' ? 'Donker' : 'Licht'}`;
        item['label-nl-be'] = `Thema: ${theme === 'dark' ? 'Donker' : 'Licht'}`;
        item['label-zh'] = `主题: ${theme === 'dark' ? '深色' : '浅色'}`;
      }
    });
  }, [theme]);

  return (
    <Menu 
      menuItems={menuItems.map(item => ({
        ...item,
        label: getLabel(item),
        submenuItems: item.submenuItems?.map(subItem => ({
          ...subItem,
          label: getLabel(subItem)
        }))
      }))}
      initialTheme={theme}
    />
  );
}
```

### Best Practices

1. **Consistent Keys**: Use consistent language code keys across your application (e.g., always use 'en' for English, not mixing 'en' and 'english').

2. **Fallback Labels**: Always provide a default `label` property as a fallback for languages that aren't explicitly supported.

3. **Language Persistence**: Store the selected language in localStorage or another persistent storage to maintain the user's language preference across sessions.

4. **Dynamic Content**: For content that changes based on state (like theme labels), update all language variants when the state changes.

5. **Accessibility**: Ensure that language selection is accessible to all users, including those using screen readers.

6. **Consistent Naming**: Use ISO language codes where possible (e.g., 'en', 'es', 'fr') for better internationalization support.

### Adding New Languages

To add support for a new language:

1. Add the new language option to your language selection menu
2. Add the corresponding language-specific label properties to all menu items
3. Update any dynamic content to include the new language

Example for adding Italian support:

```tsx
// Add to language submenu
{
  id: 'it',
  label: 'Italiano',
  type: 'check',
  checked: selectedLanguage === 'it',
  onClick: () => selectLanguage('it')
}

// Add to each menu item
const menuItems = [
  {
    id: 'profile',
    label: 'Profile',
    'label-en': 'Profile',
    'label-es': 'Perfil',
    // ... existing languages
    'label-it': 'Profilo', // New Italian translation
    onClick: () => console.log('Profile selected')
  },
  // ... other menu items
];
```

## Primitive Components

For custom menu implementations, you can use the individual primitives:

```tsx
// For local development, use relative imports
import { 
  PM7MenuRoot, 
  PM7MenuTrigger, 
  PM7MenuContent, 
  PM7MenuItem,
  PM7MenuSeparator
} from '../src/components/menu/pm7-menu';
// For production, use package imports
// import { 
//   PM7MenuRoot, 
//   PM7MenuTrigger, 
//   PM7MenuContent, 
//   PM7MenuItem,
//   PM7MenuSeparator
// } from 'pm7-ui-style-guide';

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
        <PM7MenuSeparator />
        <PM7MenuItem onClick={() => console.log('Item 3 clicked')}>
          Menu Item 3
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

#### PM7MenuSeparator

A horizontal separator line for visually dividing menu sections.

```tsx
<PM7MenuSeparator />
```

The separator is styled with:
- 1-pixel height line
- 95% width (centered)
- Proper vertical padding (py-2) to match menu items
- Light gray (#D5D5D5) in light mode, darker gray (#525252) in dark mode

Example usage:

```tsx
<PM7MenuContent>
  <PM7MenuItem>Profile</PM7MenuItem>
  <PM7MenuItem>Settings</PM7MenuItem>
  <PM7MenuSeparator /> {/* Adds a visual separator */}
  <PM7MenuItem>Language</PM7MenuItem>
  <PM7MenuItem>Theme</PM7MenuItem>
  <PM7MenuSeparator />
  <PM7MenuItem>About</PM7MenuItem>
</PM7MenuContent>
```

## Styling

The menu components follow the Winfakt UI Style Guide specifications:

- Menu items have 16px horizontal padding (`px-4`) and 8px vertical padding (`py-2`) on desktop
- Menu items have 12px vertical padding (`py-3`) on mobile
- Menu items have a 12px gap (`gap-3`) between icon and text
- Menu container has 12px padding (`py-3 px-3`) on all sides
- Menu container has a 6px border radius (`rounded-[6px]`)
- Menu items have rounded corners (`rounded-md`)
- Menu hover state uses PM7 blue (#1C86EF)
- Menu is positioned below the trigger with right edges aligned (`align="end"`)
- All interactive elements show pointer cursor on hover

All styling is contained within the components themselves, so no additional CSS is required.

## Examples

The examples folder contains demonstrations of the menu component. Each component has its own example file (e.g., `menu-example.tsx`) in the `/examples/` directory, making it easy to add new component examples without cluttering the main App.tsx file.

To add a new component example:

1. Create a new example file in `/examples/` (e.g., `button-example.tsx`)
2. Add a new entry in the sidebar navigation in `App.tsx`
3. Add a new case in the `renderComponent` function
