import React from 'react';

const ExampleButtonOverview = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <>
      <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7Button Component</h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            PM7Button is a versatile button component that provides consistent styling and behavior across React applications. It offers multiple visual variants, size options, and states while maintaining PM7 branding and accessibility standards.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>What It Provides</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            The component handles button states, hover effects, and click interactions automatically. It provides a unified API for different button styles and ensures consistent spacing, typography, and visual feedback across your application.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Common Use Cases</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• Primary actions in forms and dialogs</div>
            <div style={{ marginBottom: '0.5rem' }}>• Secondary actions and alternative choices</div>
            <div style={{ marginBottom: '0.5rem' }}>• Navigation buttons and menu triggers</div>
            <div style={{ marginBottom: '0.5rem' }}>• Call-to-action buttons in landing pages</div>
            <div style={{ marginBottom: '0.5rem' }}>• Icon buttons for toolbars and interfaces</div>
            <div style={{ marginBottom: '0.5rem' }}>• Link-style buttons for subtle actions</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Available Variants</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Default:</strong> Primary button with PM7 brand colors and solid background</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Secondary:</strong> Alternative styling for secondary actions</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Outline:</strong> Border-only styling for subtle emphasis</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Ghost:</strong> Minimal styling with hover effects</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Link:</strong> Text-only appearance for navigation actions</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Destructive:</strong> Red styling for delete or warning actions</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Size Options</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Small (sm):</strong> Compact buttons for tight spaces and secondary actions</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Default:</strong> Standard size for most button use cases</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Large (lg):</strong> Prominent buttons for primary actions and calls-to-action</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Icon:</strong> Square format optimized for icon-only buttons</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>How It Works</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            You specify the variant, size, optional icon, and any additional props like onClick handlers or disabled state. The component automatically applies appropriate styling, hover effects, and accessibility attributes. Icons can be positioned left (default) or right of the text, with automatic sizing (1rem) and spacing (0.5rem gap).
          </p>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            The button adapts to the current theme and provides visual feedback for user interactions. It can be used as a standard button, link, or form submit button depending on your needs.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Key Features</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• Theme-aware styling with automatic light and dark mode support</div>
            <div style={{ marginBottom: '0.5rem' }}>• Consistent hover, focus, and active states across all variants</div>
            <div style={{ marginBottom: '0.5rem' }}>• Built-in loading state support with spinner integration</div>
            <div style={{ marginBottom: '0.5rem' }}>• Disabled state with proper visual indication and accessibility</div>
            <div style={{ marginBottom: '0.5rem' }}>• Icon support with automatic spacing, sizing, and left/right positioning</div>
            <div style={{ marginBottom: '0.5rem' }}>• Keyboard navigation and screen reader compatibility</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Integration</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            PM7Button works with form libraries, routing systems, and any click handler functions. It can be used as a regular button, submit button, or styled link depending on the HTML element you need. The component is fully compatible with React event handling and state management.
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
            <strong>Note:</strong> The Demo tab shows all button variants and sizes in action, the Usage tab provides implementation examples with different configurations, and the API tab documents all available props and styling options.
          </p>
        </div>
      </div>
    </>
  );
};

export default ExampleButtonOverview;