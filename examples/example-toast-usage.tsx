import React from 'react';
import { PM7Card, PM7CardHeader, PM7CardTitle } from '../src/components/card';
import '../src/components/card/pm7-card.css';

const ExampleToastUsage = ({ theme }: { theme: 'light' | 'dark' }) => {
  const codeBlockStyle = {
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f5f5f5',
    color: theme === 'dark' ? '#e0e0e0' : '#333',
    padding: '0.75rem',
    borderRadius: '0.375rem',
    marginBottom: '1rem',
    fontSize: '0.875rem',
    overflow: 'auto'
  };

  return (
    <>
      <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7Toast Component</h3>
        <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
          The PM7Toast system provides temporary notifications with multiple variants, action support, and automatic dismissal.
        </p>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Installation</h4>
        <div style={codeBlockStyle}>
          <p>npm install pm7-ui-style-guide</p>
          <p>npm install @radix-ui/react-toast # peer dependency</p>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Setup</h4>
        
        <div style={{ 
          backgroundColor: theme === 'dark' ? '#4B5563' : '#FEF3C7',
          borderLeft: '4px solid',
          borderLeftColor: theme === 'dark' ? '#F59E0B' : '#F59E0B',
          padding: '1rem',
          marginBottom: '1rem',
          borderRadius: '0.375rem'
        }}>
          <p style={{ fontWeight: '600', marginBottom: '0.5rem', color: theme === 'dark' ? '#FEF3C7' : '#92400E' }}>
            ⚠️ Important: CSS Import Required
          </p>
          <p style={{ color: theme === 'dark' ? '#FEF3C7' : '#92400E', fontSize: '0.875rem' }}>
            PM7Toast requires a CSS import for animations to work properly. Without this import, toasts will appear but won't have slide animations.
          </p>
        </div>
        
        <p style={{ marginBottom: '0.75rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
          1. Import the required CSS file:
        </p>
        <div style={codeBlockStyle}>
          <p>{'import "pm7-ui-style-guide/src/components/toast/pm7-toast.css";'}</p>
        </div>
        
        <p style={{ marginBottom: '0.75rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
          2. Add the PM7Toaster component to your app root:
        </p>
        <div style={codeBlockStyle}>
          <p>{'// In your App.tsx or main layout'}</p>
          <p>{'import { PM7Toaster } from "pm7-ui-style-guide";'}</p>
          <p>{'import "pm7-ui-style-guide/src/components/toast/pm7-toast.css";'}</p>
          <p>{''}</p>
          <p>{'function App() {'}</p>
          <p>{'  return ('}</p>
          <p>{'    <>'}</p>
          <p>{'      {/* Your app content */}'}</p>
          <p>{'      <PM7Toaster theme="light" />'}</p>
          <p>{'    </>'}</p>
          <p>{'  );'}</p>
          <p>{'}'}</p>
        </div>

        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Basic Usage</h4>
        <p style={{ marginBottom: '0.75rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
          Then use the toast function anywhere in your app:
        </p>
        <div style={codeBlockStyle}>
          <p>{'import { toast } from "pm7-ui-style-guide";'}</p>
          <p>{''}</p>
          <p>{'// Show a simple toast'}</p>
          <p>{'toast({'}</p>
          <p>{'  title: "Success!",'}</p>
          <p>{'  description: "Your changes have been saved."'}</p>
          <p>{'});'}</p>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>API Reference</h4>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          
          {/* toast() function */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                toast(options)
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Shows a toast notification with the specified options.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Options:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>title</code> - string (required) - The toast title</div>
                  <div><code>description</code> - string (optional) - Additional description text</div>
                  <div><code>variant</code> - "default" | "success" | "destructive" | "warning" | "info" - Toast style</div>
                  <div><code>duration</code> - number (optional) - Auto-dismiss time in ms (default: 5000)</div>
                  <div><code>action</code> - object (optional) - Action button configuration</div>
                  <div style={{ marginLeft: '1rem' }}>
                    <div><code>action.label</code> - string - Button text</div>
                    <div><code>action.onClick</code> - function - Click handler</div>
                  </div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* PM7Toaster component */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                {'<PM7Toaster />'}
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                The toast container component. Place once in your app root.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Props:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>theme</code> - "light" | "dark" (optional) - Theme mode</div>
                  <div><code>position</code> - Position (optional) - Toast position (default: bottom-right)</div>
                  <div><code>hotkey</code> - string[] (optional) - Keyboard shortcut to focus toasts</div>
                  <div><code>className</code> - string (optional) - Additional CSS classes</div>
                </div>
              </div>
            </div>
          </PM7Card>
        </div>

        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Variants</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={codeBlockStyle}>
            <p>{'// Default variant (white/dark background)'}</p>
            <p>{'toast({ title: "Message sent", variant: "default" });'}</p>
          </div>
          <div style={codeBlockStyle}>
            <p>{'// Success variant (green)'}</p>
            <p>{'toast({ title: "Saved!", variant: "success" });'}</p>
          </div>
          <div style={codeBlockStyle}>
            <p>{'// Error variant (red)'}</p>
            <p>{'toast({ title: "Error", variant: "destructive" });'}</p>
          </div>
          <div style={codeBlockStyle}>
            <p>{'// Warning variant (yellow)'}</p>
            <p>{'toast({ title: "Warning", variant: "warning" });'}</p>
          </div>
          <div style={codeBlockStyle}>
            <p>{'// Info variant (blue)'}</p>
            <p>{'toast({ title: "Info", variant: "info" });'}</p>
          </div>
        </div>

        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Advanced Examples</h4>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h5 style={{ fontWeight: '500', marginBottom: '0.5rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Toast with Action Button:</h5>
          <div style={codeBlockStyle}>
            <p>{'toast({'}</p>
            <p>{'  title: "File deleted",'}</p>
            <p>{'  description: "report.pdf has been deleted",'}</p>
            <p>{'  action: {'}</p>
            <p>{'    label: "Undo",'}</p>
            <p>{'    onClick: () => {'}</p>
            <p>{'      // Restore the file'}</p>
            <p>{'      restoreFile();'}</p>
            <p>{'    }'}</p>
            <p>{'  }'}</p>
            <p>{'});'}</p>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h5 style={{ fontWeight: '500', marginBottom: '0.5rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Custom Duration:</h5>
          <div style={codeBlockStyle}>
            <p>{'toast({'}</p>
            <p>{'  title: "Processing...",'}</p>
            <p>{'  description: "This may take a few moments",'}</p>
            <p>{'  duration: 10000 // 10 seconds'}</p>
            <p>{'});'}</p>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h5 style={{ fontWeight: '500', marginBottom: '0.5rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Promise-based Toast (Coming Soon):</h5>
          <div style={codeBlockStyle}>
            <p>{'// Future API for async operations'}</p>
            <p>{'toast.promise(saveData(), {'}</p>
            <p>{'  loading: "Saving...",'}</p>
            <p>{'  success: "Data saved successfully!",'}</p>
            <p>{'  error: "Failed to save data"'}</p>
            <p>{'});'}</p>
          </div>
        </div>

        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Best Practices</h4>
        <ul style={{ marginLeft: '1.5rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
          <li style={{ marginBottom: '0.5rem' }}>Keep messages concise and actionable</li>
          <li style={{ marginBottom: '0.5rem' }}>Use appropriate variants for different message types</li>
          <li style={{ marginBottom: '0.5rem' }}>Provide undo actions when possible for destructive operations</li>
          <li style={{ marginBottom: '0.5rem' }}>Avoid showing too many toasts at once</li>
          <li style={{ marginBottom: '0.5rem' }}>Use longer durations for important messages</li>
          <li style={{ marginBottom: '0.5rem' }}>Test with screen readers for accessibility</li>
        </ul>
      </div>
    </>
  );
};

export default ExampleToastUsage;