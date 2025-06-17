import React from 'react';

const ExampleMenuOverview = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <>
      <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7Menu Component</h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            PM7Menu is a flexible dropdown menu component that provides a consistent way to create navigation menus, context menus, and action dropdowns in React applications. It comes with PM7 branding and handles common menu requirements out of the box.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>What It Provides</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            The component handles accessibility, keyboard navigation, positioning, and theme compatibility automatically, so you can focus on defining your menu structure and functionality.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Common Use Cases</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• User profile menus and account settings</div>
            <div style={{ marginBottom: '0.5rem' }}>• Context menus for table rows or content items</div>
            <div style={{ marginBottom: '0.5rem' }}>• Navigation dropdowns in headers and sidebars</div>
            <div style={{ marginBottom: '0.5rem' }}>• Settings panels with toggleable options</div>
            <div style={{ marginBottom: '0.5rem' }}>• Action menus for bulk operations</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Key Features</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• Four trigger variants: icon only, text only, icon + text, or hamburger + text</div>
            <div style={{ marginBottom: '0.5rem' }}>• Multiple item types: regular items, checkboxes, radio buttons, and separators</div>
            <div style={{ marginBottom: '0.5rem' }}>• Flexible trigger styling: bordered, border-only, or clean appearance</div>
            <div style={{ marginBottom: '0.5rem' }}>• Full color customization for icons, labels, borders, and backgrounds</div>
            <div style={{ marginBottom: '0.5rem' }}>• Automatic positioning to stay within viewport</div>
            <div style={{ marginBottom: '0.5rem' }}>• Built-in light and dark theme support</div>
            <div style={{ marginBottom: '0.5rem' }}>• Responsive design for mobile and desktop</div>
            <div style={{ marginBottom: '0.5rem' }}>• Full keyboard navigation and screen reader support</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>How It Works</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            You provide an array of menu items with their labels, actions, and types. The component renders a trigger button that opens a dropdown menu when clicked. The trigger can be customized in four ways:
          </p>
          <ul style={{ marginBottom: '1rem', marginLeft: '1.5rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            <li style={{ marginBottom: '0.25rem' }}><strong>Icon only:</strong> Default hamburger menu or custom icon</li>
            <li style={{ marginBottom: '0.25rem' }}><strong>Text only:</strong> Just a text label (like "File" or "Menu")</li>
            <li style={{ marginBottom: '0.25rem' }}><strong>Icon + Text:</strong> Custom icon with a text label</li>
            <li style={{ marginBottom: '0.25rem' }}><strong>Hamburger + Text:</strong> Default hamburger icon with a text label</li>
          </ul>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            Each menu item can have click handlers, be disabled, or include sub-items for nested menus. The menu automatically positions itself to stay visible on screen and provides smooth animations and hover states. All interaction patterns follow standard conventions that users expect from dropdown menus.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Integration</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            PM7Menu integrates with existing React applications without additional dependencies beyond the PM7 UI Style Guide package. It works with any icon library and can be styled to match your application's design system while maintaining PM7's consistent look and feel.
          </p>
        </div>

        <div style={{ 
          backgroundColor: theme === 'dark' ? '#374151' : '#f3f4f6', 
          padding: '1rem', 
          borderRadius: '0.5rem',
          border: `1px solid ${theme === 'dark' ? '#525252' : '#e5e7eb'}`
        }}>
          <p style={{ 
            margin: '0', 
            color: theme === 'dark' ? '#d1d5db' : '#374151', 
            fontSize: '0.875rem'
          }}>
            <strong>Note:</strong> Check the Demo tab to see different menu configurations in action, the Usage tab for implementation details, and the API tab for complete prop documentation.
          </p>
        </div>
      </div>
    </>
  );
};

export default ExampleMenuOverview;