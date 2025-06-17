import React from 'react';

const ExampleToastOverview = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <>
      <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7Toast Component</h3>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            PM7Toast is a flexible notification system that provides temporary messages to users. Built on Radix UI primitives, it offers multiple variants, swipe gestures, and automatic dismissal while maintaining PM7 branding standards.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>What It Provides</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            The component handles positioning, stacking, animations, and auto-dismissal automatically. It supports action buttons, multiple variants for different message types, and is fully accessible with screen reader announcements.
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Common Use Cases</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• Success confirmations after form submissions</div>
            <div style={{ marginBottom: '0.5rem' }}>• Error messages for failed operations</div>
            <div style={{ marginBottom: '0.5rem' }}>• Information notices about system status</div>
            <div style={{ marginBottom: '0.5rem' }}>• Warning alerts for important actions</div>
            <div style={{ marginBottom: '0.5rem' }}>• Undo actions with action buttons</div>
            <div style={{ marginBottom: '0.5rem' }}>• Progress updates for long-running tasks</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Key Features</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}>• Five variants: default, success, destructive, warning, and info</div>
            <div style={{ marginBottom: '0.5rem' }}>• Swipe to dismiss on touch devices</div>
            <div style={{ marginBottom: '0.5rem' }}>• Auto-dismiss with customizable duration</div>
            <div style={{ marginBottom: '0.5rem' }}>• Support for action buttons</div>
            <div style={{ marginBottom: '0.5rem' }}>• Stacking behavior for multiple toasts</div>
            <div style={{ marginBottom: '0.5rem' }}>• Fully accessible with ARIA live regions</div>
            <div style={{ marginBottom: '0.5rem' }}>• Dark mode support</div>
            <div style={{ marginBottom: '0.5rem' }}>• Responsive positioning</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>How It Works</h4>
          <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            PM7Toast consists of two main parts:
          </p>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.75rem' }}>
              <strong>1. PM7Toaster Component:</strong> Place this once in your app root to provide the toast container
            </div>
            <div style={{ marginBottom: '0.75rem' }}>
              <strong>2. toast() Function:</strong> Call this from anywhere in your app to show notifications
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Variants</h4>
          <div style={{ marginLeft: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
            <div style={{ marginBottom: '0.5rem' }}><strong>Default:</strong> Standard white/dark toast for general messages</div>
            <div style={{ marginBottom: '0.5rem' }}><strong>Success:</strong> Green toast for positive confirmations</div>
            <div style={{ marginBottom: '0.5rem' }}><strong>Destructive:</strong> Red toast for errors and failures</div>
            <div style={{ marginBottom: '0.5rem' }}><strong>Warning:</strong> Yellow toast for caution messages</div>
            <div style={{ marginBottom: '0.5rem' }}><strong>Info:</strong> Blue toast for informational notices</div>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Installation Note</h4>
          <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', lineHeight: '1.6' }}>
            PM7Toast requires the <code>@radix-ui/react-toast</code> peer dependency. Make sure to add the PM7Toaster component to your app root for toasts to appear.
          </p>
        </div>
      </div>
    </>
  );
};

export default ExampleToastOverview;