# PM7TabSelector Component - Complete Integration Guide

**PM7TabSelector** is a React tab navigation component that provides PM7-branded styling for creating tabbed interfaces. It offers horizontal tab navigation with active states, theme support, and accessibility features.

**📖 Read Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/tab-selector/README.md](https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/tab-selector/README.md)

**✏️ Edit Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/tab-selector/README.md](https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/tab-selector/README.md)

**Package**: pm7-ui-style-guide  
**Component**: PM7TabSelector (React tab selector component)  
**CSS File**: pm7-tab-selector.css (required)  
**Dependencies**: None

## Installation

```bash
npm install pm7-ui-style-guide
```

## Import

```typescript
import { PM7TabSelector } from 'pm7-ui-style-guide';
// or
import { TabSelector } from 'pm7-ui-style-guide';

// CSS import (required)
import 'pm7-ui-style-guide/src/components/tab-selector/pm7-tab-selector.css';
```

## Basic Usage

### Simple Tab Selector

```tsx
import React, { useState } from 'react';
import { PM7TabSelector } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/src/components/tab-selector/pm7-tab-selector.css';

function MyComponent() {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'Overview' },
    { id: 'tab2', label: 'Details' },
    { id: 'tab3', label: 'Settings' }
  ];

  return (
    <PM7TabSelector
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      theme="light"
    />
  );
}
```

### Tabs with Icons or Complex Content

```tsx
import React, { useState } from 'react';
import { PM7TabSelector } from 'pm7-ui-style-guide';
import { Home, Settings, User } from 'lucide-react';

function TabsWithIcons() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { 
      id: 'home', 
      label: (
        <span>
          <Home size={16} style={{ marginRight: '8px' }} />
          Home
        </span>
      )
    },
    { 
      id: 'profile', 
      label: (
        <span>
          <User size={16} style={{ marginRight: '8px' }} />
          Profile
        </span>
      )
    },
    { 
      id: 'settings', 
      label: (
        <span>
          <Settings size={16} style={{ marginRight: '8px' }} />
          Settings
        </span>
      )
    }
  ];

  return (
    <PM7TabSelector
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      theme="light"
    />
  );
}
```

### Disabled Tabs

```tsx
const tabs = [
  { id: 'available', label: 'Available' },
  { id: 'pending', label: 'Pending', disabled: true },
  { id: 'archived', label: 'Archived' }
];

<PM7TabSelector
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  theme="light"
/>
```

### Dark Theme

```tsx
<PM7TabSelector
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  theme="dark"
/>
```

## Complete Tabbed Interface

```tsx
import React, { useState } from 'react';
import { PM7TabSelector } from 'pm7-ui-style-guide';

function TabbedInterface() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'reports', label: 'Reports' },
    { id: 'settings', label: 'Settings' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <div>Overview content here</div>;
      case 'analytics':
        return <div>Analytics dashboard</div>;
      case 'reports':
        return <div>Reports and data</div>;
      case 'settings':
        return <div>Settings panel</div>;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div>
      <PM7TabSelector
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        theme="light"
      />
      
      <div style={{ marginTop: '1rem' }}>
        {renderTabContent()}
      </div>
    </div>
  );
}
```

## API Reference

### PM7TabSelector Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `PM7TabItem[]` | - | Array of tab objects (required) |
| `activeTab` | `string` | - | ID of the currently active tab (required) |
| `onTabChange` | `(tabId: string) => void` | - | Callback when tab is changed (required) |
| `className` | `string` | `''` | Additional CSS classes for the container |
| `theme` | `'light' \| 'dark'` | `'light'` | Visual theme for proper styling |

### PM7TabItem Interface

```typescript
export type PM7TabItem = {
  id: string;           // Unique identifier for the tab (required)
  label: React.ReactNode; // Display text or content (required)
  disabled?: boolean;   // Whether the tab is disabled (optional)
};
```

## Theme Support

The component supports both light and dark themes:

```tsx
// Light theme (default)
<PM7TabSelector theme="light" />

// Dark theme
<PM7TabSelector theme="dark" />
```

## Styling & Customization

### Custom CSS Classes

```tsx
<PM7TabSelector
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  className="my-custom-tabs"
  theme="light"
/>
```

### PM7 Brand Colors

- **Active Tab**: PM7 primary blue (#1C86EF)
- **Hover State**: Light blue background
- **Border**: Theme-aware border colors
- **Text**: High contrast for accessibility

## Accessibility Features

**Built-in Accessibility:**

- Full keyboard navigation (Tab, Enter, Space)
- ARIA attributes for screen readers (`role="tab"`, `aria-selected`)
- Focus management and visible focus indicators
- Proper role and state announcements
- Disabled state handling
- Component name attribute for debugging

## Best Practices

**Recommended Usage:**

- Keep tab labels concise and descriptive
- Use ReactNode for labels to include icons or complex content
- Limit the number of tabs to 5-7 for optimal UX
- Always provide an onTabChange handler
- Test keyboard navigation thoroughly
- Use theme prop for consistent styling

## Common Patterns

### Router Integration

```tsx
import { useSearchParams } from 'react-router-dom';

function RoutedTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'overview';

  const handleTabChange = (tabId: string) => {
    setSearchParams({ tab: tabId });
  };

  return (
    <PM7TabSelector
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={handleTabChange}
      theme="light"
    />
  );
}
```

### State Persistence

```tsx
import { useState, useEffect } from 'react';

function PersistentTabs() {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem('activeTab') || 'overview';
  });

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  return (
    <PM7TabSelector
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      theme="light"
    />
  );
}
```

## Important Notes

- **CSS Import Required**: Must import pm7-tab-selector.css for proper styling
- **Unique IDs**: Each tab must have a unique ID
- **Theme Consistency**: Always specify theme prop for proper styling
- **ReactNode Labels**: Labels can be strings or complex React elements
- **Disabled Tabs**: Disabled tabs cannot be clicked and have visual indication

## Performance Considerations

- Component is lightweight with minimal re-renders
- Use React.memo for tab content components when needed
- Consider lazy loading tab content for complex interfaces

## Browser Support

PM7TabSelector supports all modern browsers:
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

*Built with modern React and CSS for maximum compatibility.*