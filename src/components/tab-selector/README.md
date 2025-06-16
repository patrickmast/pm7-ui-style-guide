# PM7TabSelector Component - Complete Integration Guide

**PM7TabSelector** is a React tab navigation component that provides PM7-branded styling for creating tabbed interfaces. It offers horizontal tab navigation with active states, keyboard support, and PM7's signature styling.

**📖 Read Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/tab-selector/README.md](https://github.com/patrickmast/pm7-ui-style-guide/blob/main/src/components/tab-selector/README.md)

**✏️ Edit Documentation**: [https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/tab-selector/README.md](https://github.com/patrickmast/pm7-ui-style-guide/edit/main/src/components/tab-selector/README.md)

**Package**: pm7-ui-style-guide  
**Component**: PM7TabSelector (React tab selector component)  
**CSS File**: pm7-tab-selector.css (required)  
**Dependencies**: None

## Installation & Usage

### Basic Import

```typescript
import { PM7TabSelector } from 'pm7-ui-style-guide';
// or
import { TabSelector } from 'pm7-ui-style-guide';
```

### CSS Import (Required)

```typescript
import 'pm7-ui-style-guide/src/components/tab-selector/pm7-tab-selector.css';
```

## Basic Examples

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
    />
  );
}
```

### Tabs with Icons

```tsx
import React, { useState } from 'react';
import { PM7TabSelector } from 'pm7-ui-style-guide';
import { Home, Settings, User } from 'lucide-react';

function TabsWithIcons() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { 
      id: 'home', 
      label: 'Home', 
      icon: <Home size={16} /> 
    },
    { 
      id: 'profile', 
      label: 'Profile', 
      icon: <User size={16} /> 
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: <Settings size={16} /> 
    }
  ];

  return (
    <PM7TabSelector
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
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
/>
```

## Tab Content Integration

### Complete Tabbed Interface

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
      />
      
      <div className="tab-content mt-4">
        {renderTabContent()}
      </div>
    </div>
  );
}
```

## API Reference

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `tabs` | Tab[] | Yes | Array of tab objects |
| `activeTab` | string | Yes | ID of the currently active tab |
| `onTabChange` | function | Yes | Callback when tab is changed: (tabId: string) => void |
| `className` | string | No | Additional CSS classes for the container |
| `variant` | `'default' \| 'pills'` | No | Visual style variant (default: 'default') |
| `size` | `'sm' \| 'md' \| 'lg'` | No | Size of the tabs (default: 'md') |

### Tab Object Interface

```typescript
interface Tab {
  id: string;           // Unique identifier for the tab
  label: string;        // Display text for the tab
  icon?: ReactNode;     // Optional icon to display
  disabled?: boolean;   // Whether the tab is disabled
  badge?: string;       // Optional badge/count to display
}
```

## Styling Variants

### Default Variant

```tsx
<PM7TabSelector
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  variant="default"
/>
```

### Pills Variant

```tsx
<PM7TabSelector
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  variant="pills"
/>
```

### Different Sizes

```tsx
// Small tabs
<PM7TabSelector size="sm" />

// Medium tabs (default)
<PM7TabSelector size="md" />

// Large tabs
<PM7TabSelector size="lg" />
```

## PM7 Styling & Theming

### PM7 Brand Colors

- **Active Tab**: #1C86EF (PM7 primary blue)
- **Hover State**: Light blue background
- **Border**: #D4D4D4 (light mode), #525252 (dark mode)
- **Text**: High contrast for accessibility

### Custom Styling

```tsx
<PM7TabSelector
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  className="custom-tabs shadow-lg"
/>
```

## Advanced Features

### Tabs with Badges

```tsx
const tabs = [
  { id: 'inbox', label: 'Inbox', badge: '12' },
  { id: 'sent', label: 'Sent' },
  { id: 'drafts', label: 'Drafts', badge: '3' }
];

<PM7TabSelector
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>
```

### Responsive Tab Behavior

```tsx
// Tabs automatically stack on mobile
<PM7TabSelector
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  className="responsive-tabs"
/>
```

## Accessibility Features

**Built-in Accessibility:**

- Full keyboard navigation (Tab, Arrow keys, Enter, Space)
- ARIA attributes for screen readers
- Focus management and visible focus indicators
- Proper role and state announcements
- High contrast support
- Disabled state handling

## Keyboard Navigation

- **Tab**: Move focus to tab selector
- **Arrow Keys**: Navigate between tabs
- **Enter/Space**: Activate focused tab
- **Home**: Go to first tab
- **End**: Go to last tab

## Best Practices

**Recommended Usage:**

- Keep tab labels concise and descriptive
- Use icons consistently across all tabs or none
- Limit the number of tabs to 5-7 for optimal UX
- Provide clear visual feedback for active states
- Consider mobile responsiveness in your layout
- Use badges sparingly for important notifications
- Test keyboard navigation thoroughly

**Important**: The PM7TabSelector component requires the PM7 CSS file to be imported for proper styling. Make sure to include `import 'pm7-ui-style-guide/src/components/tab-selector/pm7-tab-selector.css';` in your application.

## Common Patterns

### Router Integration

```tsx
import { useSearchParams } from 'react-router-dom';

function RoutedTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'overview';

  const handleTabChange = (tabId) => {
    setSearchParams({ tab: tabId });
  };

  return (
    <PM7TabSelector
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={handleTabChange}
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
    />
  );
}
```

## Performance Considerations

- Component is lightweight with minimal re-renders
- Use React.memo for tab content components when needed
- Consider lazy loading tab content for complex interfaces
- Debounce rapid tab switching if content is expensive to render

## Browser Support

PM7TabSelector supports all modern browsers including:

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

*For older browser support, ensure appropriate polyfills are included in your build process.*