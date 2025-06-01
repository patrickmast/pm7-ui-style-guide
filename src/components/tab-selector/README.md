# PM7 Tab Selector Component

## Overview

The PM7 Tab Selector component provides a clean, accessible interface for switching between different content sections. It supports light and dark themes with PM7 styling and follows accessibility best practices.

## Installation

```bash
npm install pm7-ui-style-guide
```

## Usage

### Basic Setup

```tsx
import { PM7TabSelector } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/src/components/tab-selector/pm7-tab-selector.css'; // Required CSS
import { useState } from 'react';

function BasicTabs() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'usage', label: 'Usage' },
    { id: 'api', label: 'API' },
    { id: 'examples', label: 'Examples' }
  ];

  return (
    <div>
      <PM7TabSelector 
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        theme="light"
      />
      
      {/* Tab content */}
      {activeTab === 'overview' && (
        <div style={{ padding: '1rem' }}>
          <h3>Overview Content</h3>
          <p>This is the overview section.</p>
        </div>
      )}
      {activeTab === 'usage' && (
        <div style={{ padding: '1rem' }}>
          <h3>Usage Content</h3>
          <p>This is the usage section.</p>
        </div>
      )}
      {activeTab === 'api' && (
        <div style={{ padding: '1rem' }}>
          <h3>API Content</h3>
          <p>This is the API section.</p>
        </div>
      )}
      {activeTab === 'examples' && (
        <div style={{ padding: '1rem' }}>
          <h3>Examples Content</h3>
          <p>This is the examples section.</p>
        </div>
      )}
    </div>
  );
}
```

### Dark Theme Usage

```tsx
function DarkTabs() {
  const [activeTab, setActiveTab] = useState('settings');
  const [theme, setTheme] = useState('dark');
  
  const tabs = [
    { id: 'settings', label: 'Settings' },
    { id: 'preferences', label: 'Preferences' },
    { id: 'security', label: 'Security' }
  ];

  return (
    <div className={theme === 'dark' ? 'dark-mode' : ''}>
      <PM7TabSelector 
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        theme={theme}
        className="mb-4"
      />
      
      <div style={{ padding: '1rem' }}>
        {activeTab === 'settings' && <p>Settings content in dark mode</p>}
        {activeTab === 'preferences' && <p>Preferences content in dark mode</p>}
        {activeTab === 'security' && <p>Security content in dark mode</p>}
      </div>
    </div>
  );
}
```

### Tabs with Disabled States

```tsx
function TabsWithDisabled() {
  const [activeTab, setActiveTab] = useState('available');
  
  const tabs = [
    { id: 'available', label: 'Available' },
    { id: 'pending', label: 'Pending' },
    { id: 'disabled', label: 'Disabled Feature', disabled: true },
    { id: 'beta', label: 'Beta Features' }
  ];

  return (
    <div>
      <PM7TabSelector 
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        theme="light"
      />
      
      <div style={{ padding: '1rem' }}>
        {activeTab === 'available' && <p>Available features content</p>}
        {activeTab === 'pending' && <p>Pending features content</p>}
        {activeTab === 'beta' && <p>Beta features content</p>}
      </div>
    </div>
  );
}
```

### Dynamic Tab Management

```tsx
function DynamicTabs() {
  const [activeTab, setActiveTab] = useState('home');
  const [tabs, setTabs] = useState([
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' }
  ]);

  const addTab = () => {
    const newTab = {
      id: `tab-${Date.now()}`,
      label: `Tab ${tabs.length + 1}`
    };
    setTabs([...tabs, newTab]);
  };

  const removeTab = (tabId: string) => {
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);
    
    // If removing active tab, switch to first available
    if (activeTab === tabId && newTabs.length > 0) {
      setActiveTab(newTabs[0].id);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={addTab}>Add Tab</button>
      </div>
      
      <PM7TabSelector 
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        theme="light"
      />
      
      <div style={{ padding: '1rem' }}>
        <p>Active tab: {activeTab}</p>
        <button onClick={() => removeTab(activeTab)}>
          Remove Active Tab
        </button>
      </div>
    </div>
  );
}
```

## API Reference

### PM7TabSelector Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `PM7TabItem[]` | - | Array of tab items to display (required) |
| `activeTab` | `string` | - | ID of the currently active tab (required) |
| `onTabChange` | `(tabId: string) => void` | - | Callback when a tab is clicked (required) |
| `theme` | `'light' \| 'dark'` | `'light'` | Current theme for styling |
| `className` | `string` | `''` | Additional CSS classes for the container |

### PM7TabItem Interface

```tsx
interface PM7TabItem {
  id: string;              // Unique identifier for the tab (required)
  label: React.ReactNode;  // Tab label - can be text or JSX (required)  
  disabled?: boolean;      // Whether the tab is disabled (optional)
}
```

### Tab Label Examples

```tsx
// Text labels
{ id: 'text', label: 'Simple Text' }

// JSX labels with icons
{ id: 'icon', label: <><FileIcon /> Documents</> }

// Complex JSX labels
{ 
  id: 'complex', 
  label: (
    <div className="flex items-center gap-2">
      <span>Advanced</span>
      <span className="badge">New</span>
    </div>
  )
}
```

## Visual Appearance

### Light Theme (default)
- Background: Transparent
- Active tab: PM7 primary blue (#1C86EF) background with white text
- Inactive tabs: Transparent background with dark text
- Border: Bottom border on active tab

### Dark Theme
- Background: Transparent  
- Active tab: PM7 primary blue (#1C86EF) background with white text
- Inactive tabs: Transparent background with light text (#FAFAFA)
- Border: Bottom border on active tab

### States
- **Normal**: Standard appearance with hover effects
- **Active**: Highlighted with PM7 primary color
- **Disabled**: Reduced opacity, no hover effects, not clickable
- **Hover**: Subtle background change on interactive tabs

## CSS Requirements

Import the required CSS file:

```tsx
import 'pm7-ui-style-guide/src/components/tab-selector/pm7-tab-selector.css';
```

This provides:
- Base tab styling
- Theme-specific colors
- Active and hover states
- Disabled state styling
- Responsive behavior

## Theme Management

The component accepts a `theme` prop that should be managed by your application:

```tsx
const [theme, setTheme] = useState('light');

// Update theme based on user preference or system setting
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  setTheme(mediaQuery.matches ? 'dark' : 'light');
}, []);

<PM7TabSelector 
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={setActiveTab}
  theme={theme}
/>
```

## Accessibility Features

- **Keyboard Navigation**: Tabs are focusable and can be activated with Enter/Space
- **ARIA Attributes**: Proper `role="tab"` and `aria-selected` attributes
- **Screen Readers**: Clear labeling and state announcements
- **Focus Management**: Visible focus indicators and logical tab order
- **Disabled State**: Properly marked disabled tabs that can't be activated

## Best Practices

1. **Unique Tab IDs**: Always provide unique `id` values for each tab
2. **Clear Labels**: Use descriptive labels that clearly indicate tab content
3. **Consistent Theming**: Use the same theme across your entire application
4. **State Management**: Properly manage `activeTab` state in parent component
5. **Content Association**: Clearly associate tab content with selected tab
6. **Responsive Design**: Test tabs on different screen sizes

## Integration with PM7 Style Guide

- Uses PM7 primary color (#1C86EF) for active tab highlighting
- Follows PM7 typography and spacing standards
- Compatible with PM7 theme system
- Consistent with other PM7 component styling
- Integrates seamlessly with PM7 Cards, Dialogs, and other components

## Common Use Cases

### Documentation Pages
```tsx
const docTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'api', label: 'API Reference' },
  { id: 'examples', label: 'Examples' },
  { id: 'changelog', label: 'Changelog' }
];
```

### Settings Interfaces  
```tsx
const settingsTabs = [
  { id: 'general', label: 'General' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'advanced', label: 'Advanced' }
];
```

### Dashboard Views
```tsx
const dashboardTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'reports', label: 'Reports' },
  { id: 'export', label: 'Export', disabled: !hasExportPermission }
];
```

The PM7 Tab Selector component provides a flexible, accessible solution for organizing content into tabbed interfaces while maintaining consistency with the PM7 design system.