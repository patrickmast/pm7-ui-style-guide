import React from 'react';

const ExampleDialogOverview = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <>
      <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7Dialog Component</h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            PM7Dialog is a modal dialog component built on Radix UI primitives that provides consistent dialog behavior across React applications. It includes structured sub-components for organizing dialog content and handles overlay management automatically.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>What It Provides</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            The component handles modal state management, overlay rendering, focus trapping, and keyboard interactions. It provides a set of sub-components that work together to create well-structured dialog layouts with consistent spacing and styling.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Common Use Cases</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• Confirmation dialogs for destructive actions</div>
            <div style={{ marginBottom: '0.5rem' }}>• Form dialogs for creating or editing records</div>
            <div style={{ marginBottom: '0.5rem' }}>• Information dialogs with rich content</div>
            <div style={{ marginBottom: '0.5rem' }}>• Settings panels and configuration screens</div>
            <div style={{ marginBottom: '0.5rem' }}>• Alert messages and notifications</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Available Components</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>PM7Dialog:</strong> Root component that manages dialog state</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>PM7DialogContent:</strong> Main content container with automatic close button</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>PM7DialogHeader:</strong> Header section for titles and descriptions</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>PM7DialogTitle:</strong> Accessible dialog title</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>PM7DialogDescription:</strong> Supporting description text</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>PM7DialogFooter:</strong> Footer section for action buttons</div>
            <div style={{ marginBottom: '0.5rem' }}>• <strong>PM7DialogSeparator:</strong> Visual separator with configurable spacing</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>How It Works</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            You control the dialog's open state through the `open` and `onOpenChange` props. The dialog automatically renders an overlay and centers the content on screen. The content component includes a built-in close button and can be configured with different maximum widths.
          </p>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            The sub-components provide semantic structure and consistent styling. Headers, footers, and separators help organize content, while the title and description components ensure proper accessibility attributes are applied.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Key Features</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• Configurable maximum width with Tailwind CSS classes</div>
            <div style={{ marginBottom: '0.5rem' }}>• Automatic overlay and focus management</div>
            <div style={{ marginBottom: '0.5rem' }}>• Built-in close button with customizable positioning</div>
            <div style={{ marginBottom: '0.5rem' }}>• Theme-aware styling for light and dark modes</div>
            <div style={{ marginBottom: '0.5rem' }}>• Keyboard navigation and escape key handling</div>
            <div style={{ marginBottom: '0.5rem' }}>• Screen reader support with proper ARIA attributes</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Integration</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            PM7Dialog requires the Radix UI Dialog package as a peer dependency and includes its own CSS file for styling. It integrates with existing state management and can be controlled programmatically or through user interactions.
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
            <strong>Note:</strong> The Demo tab shows different dialog configurations and layouts, the Usage tab provides implementation examples, and the API tab documents all available props and components.
          </p>
        </div>
      </div>
    </>
  );
};

export default ExampleDialogOverview;