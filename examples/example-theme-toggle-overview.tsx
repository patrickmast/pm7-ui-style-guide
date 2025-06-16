import React from 'react';

const ExampleThemeToggleOverview = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <>
      <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7ThemeToggle Component</h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            PM7ThemeToggle is a theme switching component that allows users to toggle between light and dark modes. It provides automatic system preference detection, localStorage persistence, and smooth animated transitions with PM7 branding.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>What It Provides</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            The component can operate in controlled or uncontrolled mode, automatically managing theme state and DOM classes when uncontrolled, or integrating with your application's state management when controlled. It handles user preferences, system detection, and persistence automatically.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Common Use Cases</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• Application headers and navigation bars</div>
            <div style={{ marginBottom: '0.5rem' }}>• Settings panels and user preference screens</div>
            <div style={{ marginBottom: '0.5rem' }}>• Mobile app toolbars and menu systems</div>
            <div style={{ marginBottom: '0.5rem' }}>• Dashboard controls and admin interfaces</div>
            <div style={{ marginBottom: '0.5rem' }}>• Accessibility-focused applications</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Operating Modes</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Uncontrolled Mode:</strong> Manages its own state, applies theme to DOM automatically</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Controlled Mode:</strong> Integrates with your state management system</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Smart Initialization:</strong> localStorage → system preference → light fallback</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>Persistence:</strong> Automatically saves user choice across sessions</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Key Features</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• Three size variants: small, medium, and large</div>
            <div style={{ marginBottom: '0.5rem' }}>• System color scheme preference detection</div>
            <div style={{ marginBottom: '0.5rem' }}>• Sun and moon icons from Lucide React</div>
            <div style={{ marginBottom: '0.5rem' }}>• Smooth toggle animation with thumb movement</div>
            <div style={{ marginBottom: '0.5rem' }}>• Keyboard navigation (Enter and Space keys)</div>
            <div style={{ marginBottom: '0.5rem' }}>• Screen reader support with dynamic ARIA labels</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>How It Works</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            When uncontrolled, the component initializes by checking localStorage for a saved preference, then falls back to system color scheme detection, and finally defaults to light mode. It automatically applies 'dark' classes to document elements and saves changes to localStorage.
          </p>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            In controlled mode, you provide the current theme and handle the state changes yourself, giving you full control over how themes are applied and managed in your application.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Integration</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            PM7ThemeToggle requires the Lucide React package for icons and includes its own CSS file for styling. It works with React Context, Redux, Zustand, or any state management solution, and can be used standalone without any additional setup.
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
            <strong>Note:</strong> The Demo tab shows the theme toggle in different sizes and configurations, the Usage tab provides implementation examples for both controlled and uncontrolled modes, and the API tab documents all available props.
          </p>
        </div>
      </div>
    </>
  );
};

export default ExampleThemeToggleOverview;