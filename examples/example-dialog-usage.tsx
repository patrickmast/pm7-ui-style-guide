import React from 'react';
import { PM7Card, PM7CardHeader, PM7CardTitle } from '../src/components/card';

// Import required CSS for PM7Card
import '../src/components/card/pm7-card.css';

const ExampleDialogUsage = ({ theme }: { theme: 'light' | 'dark' }) => {
  const codeBlockStyle = {
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f5f5f5',
    color: theme === 'dark' ? '#e0e0e0' : '#333',
    padding: '0.75rem',
    borderRadius: '0.375rem',
    marginBottom: '1rem'
  };

  return (
    <>
      <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7Dialog Component</h3>
        <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>The PM7Dialog component provides PM7-branded modal dialogs with full accessibility support, theme compatibility, and configurable sizing options.</p>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Installation</h4>
        <div style={codeBlockStyle}>
          <p>npm install pm7-ui-style-guide</p>
          <p>npm install @radix-ui/react-dialog</p>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Import</h4>
        <div style={codeBlockStyle}>
          <p>import {'{ PM7Dialog, PM7DialogContent, PM7DialogHeader, PM7DialogTitle, PM7DialogDescription, PM7DialogFooter }'} from 'pm7-ui-style-guide';</p>
          <p>import 'pm7-ui-style-guide/src/components/dialog/pm7-dialog.css';</p>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Props Reference</h4>
        <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Complete overview of all PM7Dialog component props and their configuration options:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          
          {/* PM7Dialog props */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                PM7Dialog <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(root component)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Root dialog component that manages the dialog state and provides context for all child components.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Props:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>open</code> - boolean - Controls dialog visibility</div>
                  <div><code>onOpenChange</code> - function - Called when dialog open state changes</div>
                  <div><code>defaultOpen</code> - boolean - Initial open state (uncontrolled)</div>
                  <div><code>modal</code> - boolean - Whether dialog is modal (default: true)</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* PM7DialogContent props */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                PM7DialogContent <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(main content container)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Main content container with auto-close button, overlay, and configurable maximum width.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Props:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code style={{ fontWeight: 'bold' }}>maxWidth</code> - string (default: 'max-w-lg') - Maximum width CSS class</div>
                  <div><code>className</code> - string - Additional CSS classes</div>
                  <div><code>...props</code> - All standard Radix Dialog Content props</div>
                </div>
                <div style={{ marginTop: '0.75rem' }}>
                  <strong>Features:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div>• Automatic close (X) button in top-right corner</div>
                  <div>• Built-in overlay/backdrop</div>
                  <div>• Theme-aware styling</div>
                  <div>• Configurable width with Tailwind classes</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* PM7DialogHeader props */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                PM7DialogHeader <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(header section)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Header section container for dialog title and description with proper spacing.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Props:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>className</code> - string - Additional CSS classes</div>
                  <div><code>...props</code> - All standard HTMLDivElement attributes</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* PM7DialogTitle props */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                PM7DialogTitle <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(dialog title)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Main title for the dialog with proper typography and accessibility attributes.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Props:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>className</code> - string - Additional CSS classes</div>
                  <div><code>...props</code> - All standard Radix Dialog Title props</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* PM7DialogDescription props */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                PM7DialogDescription <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(dialog description)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Description or subtitle for the dialog with proper accessibility support.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Props:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>className</code> - string - Additional CSS classes</div>
                  <div><code>...props</code> - All standard Radix Dialog Description props</div>
                </div>
                <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', fontStyle: 'italic' }}>
                  Note: PM7DialogSubTitle is also available as an alias
                </div>
              </div>
            </div>
          </PM7Card>

          {/* PM7DialogFooter props */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                PM7DialogFooter <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(footer section)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Footer section container for action buttons and controls with proper alignment.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Props:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>className</code> - string - Additional CSS classes</div>
                  <div><code>...props</code> - All standard HTMLDivElement attributes</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* PM7DialogSeparator props */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                PM7DialogSeparator <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(separator line)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Horizontal separator line with configurable margins and theme-aware styling.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Props:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>marginTop</code> - string (default: '0px') - Top margin</div>
                  <div><code>marginBottom</code> - string (default: '0px') - Bottom margin</div>
                  <div><code>className</code> - string - Additional CSS classes</div>
                  <div><code>...props</code> - All standard HTMLDivElement attributes</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* Additional utility components */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                Utility Components <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(additional exports)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Additional components for advanced dialog implementations.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Available Components:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>PM7DialogPortal</code> - Portal component for custom rendering</div>
                  <div><code>PM7DialogOverlay</code> - Standalone overlay component</div>
                  <div><code>PM7DialogTrigger</code> - Trigger button component</div>
                  <div><code>PM7DialogClose</code> - Close button component</div>
                </div>
              </div>
            </div>
          </PM7Card>

        </div>

        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Usage Examples</h4>
        <div style={codeBlockStyle}>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Basic Dialog:</p>
            <code>{'<PM7Dialog open={open} onOpenChange={setOpen}><PM7DialogContent><PM7DialogTitle>Title</PM7DialogTitle></PM7DialogContent></PM7Dialog>'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Dialog with Custom Width:</p>
            <code>{'<PM7DialogContent maxWidth="max-w-2xl"><PM7DialogTitle>Wide Dialog</PM7DialogTitle></PM7DialogContent>'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Complete Dialog Structure:</p>
            <code>{'<PM7DialogHeader><PM7DialogTitle>Title</PM7DialogTitle><PM7DialogDescription>Description</PM7DialogDescription></PM7DialogHeader>'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Dialog with Footer Actions:</p>
            <code>{'<PM7DialogFooter><button>Cancel</button><button>Confirm</button></PM7DialogFooter>'}</code>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExampleDialogUsage;