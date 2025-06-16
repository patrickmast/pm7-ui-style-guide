import React from 'react';

const ExampleTabSelectorOverview = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <>
      <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7TabSelector Component</h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            PM7TabSelector is a tab navigation component that provides a clean interface for switching between different content sections. It handles tab state management and provides consistent styling with PM7 branding and theme support.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>What It Provides</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            The component manages active tab state and provides visual feedback for selected tabs. It handles keyboard navigation, accessibility attributes, and disabled tab states automatically, while allowing you to focus on organizing your content.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Common Use Cases</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• Settings panels with different configuration sections</div>
            <div style={{ marginBottom: '0.5rem' }}>• Documentation pages with multiple topics</div>
            <div style={{ marginBottom: '0.5rem' }}>• Dashboard sections for different data views</div>
            <div style={{ marginBottom: '0.5rem' }}>• Form wizards with step-by-step navigation</div>
            <div style={{ marginBottom: '0.5rem' }}>• Profile pages with multiple information categories</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>How It Works</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            You provide an array of tab objects with IDs and labels, along with the currently active tab ID and a callback function for tab changes. The component renders clickable tab buttons with the active state highlighted and calls your callback when users click different tabs.
          </p>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            Tab labels can be simple strings or complex React elements, allowing you to include icons, badges, or other custom content. You handle the content switching logic in your application based on the active tab ID.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Key Features</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• Light and dark theme support with consistent styling</div>
            <div style={{ marginBottom: '0.5rem' }}>• Keyboard navigation with Tab, Enter, and Space key support</div>
            <div style={{ marginBottom: '0.5rem' }}>• ARIA attributes for screen reader accessibility</div>
            <div style={{ marginBottom: '0.5rem' }}>• Disabled tab state with visual indication</div>
            <div style={{ marginBottom: '0.5rem' }}>• Flexible label content with ReactNode support</div>
            <div style={{ marginBottom: '0.5rem' }}>• Responsive design for mobile and desktop</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Live Example</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            This documentation interface uses PM7TabSelector for navigation between the Overview, Demo, Usage, and API sections. The tabs above this content demonstrate the component's behavior, styling, and responsive design.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Integration</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            PM7TabSelector requires its CSS file for proper styling and works with standard React state management. It integrates easily with routing libraries and can be controlled programmatically or through user interactions.
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
            <strong>Note:</strong> The Demo tab shows interactive examples with different configurations, the Usage tab provides implementation details, and the API tab documents all available props and interfaces.
          </p>
        </div>
      </div>
    </>
  );
};

export default ExampleTabSelectorOverview;