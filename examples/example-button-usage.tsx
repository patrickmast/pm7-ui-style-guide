import React from 'react';
import { PM7Card, PM7CardHeader, PM7CardTitle } from '../src/components/card';

// Import required CSS for PM7Card
import '../src/components/card/pm7-card.css';

const ExampleButtonUsage = ({ theme }: { theme: 'light' | 'dark' }) => {
  const codeBlockStyle = {
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f5f5f5',
    color: theme === 'dark' ? '#e0e0e0' : '#333',
    padding: '0.75rem',
    borderRadius: '0.375rem',
    marginBottom: '1rem'
  };

  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f5f5f5',
    color: theme === 'dark' ? '#e0e0e0' : '#333',
    padding: '0.75rem',
    borderRadius: '0.375rem'
  };


  const tableStyle = {
    width: '100%',
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#ffffff',
    border: `1px solid ${theme === 'dark' ? '#525252' : '#ddd'}`,
    borderCollapse: 'collapse' as const
  };

  const thStyle = {
    padding: '0.5rem 1rem',
    borderBottom: `1px solid ${theme === 'dark' ? '#525252' : '#ddd'}`,
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f5f5f5',
    color: theme === 'dark' ? '#ffffff' : '#000000',
    textAlign: 'left' as const
  };

  const tdStyle = {
    padding: '0.5rem 1rem',
    borderBottom: `1px solid ${theme === 'dark' ? '#525252' : '#ddd'}`,
    color: theme === 'dark' ? '#e0e0e0' : '#333'
  };

  return (
    <>
      <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7Button Component</h3>
        <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>The PM7Button component is a customizable button that supports various styles, sizes, and states with automatic theme detection.</p>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Installation</h4>
        <div style={codeBlockStyle}>
          <p>npm install pm7-ui-style-guide</p>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Import</h4>
        <div style={codeBlockStyle}>
          <p>import {'{ PM7Button as Button, buttonRules }'} from 'pm7-ui-style-guide';</p>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Props Reference</h4>
        <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Complete overview of all PM7Button props and their configuration options:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          
          {/* theme prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                theme <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(string, optional)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Controls the visual theme of the button for proper contrast and branding.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Options:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>'light'</code> - Light theme styling</div>
                  <div><code>'dark'</code> - Dark theme styling</div>
                  <div><em style={{ fontSize: '0.8rem', color: theme === 'dark' ? '#999' : '#777' }}>Note: If not provided, component uses default styling</em></div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* spacing prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                spacing <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(string, default is 'md')</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Sets the margin spacing around the button for layout control.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Options:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>'none'</code> - 0px margin</div>
                  <div><code>'sm'</code> - 2px margin</div>
                  <div><code style={{ fontWeight: 'bold' }}>'md'</code> - 4px margin (default)</div>
                  <div><code>'lg'</code> - 8px margin</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* className prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                className <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(string, default is '')</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                CSS classes for button variants and sizes. Can combine multiple classes.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Variants:</strong>
                </div>
                <div style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>
                  <div><code>'pm7-button-outline'</code></div>
                  <div><code>'pm7-button-secondary'</code></div>
                  <div><code>'pm7-button-ghost'</code></div>
                  <div><code>'pm7-button-link'</code></div>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Sizes:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>'pm7-button-small'</code></div>
                  <div><code>'pm7-button-large'</code></div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* disabled prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                disabled <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(boolean, default is false)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Disables button interactions and applies disabled styling.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Options:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>true</code> - Button disabled</div>
                  <div><code style={{ fontWeight: 'bold' }}>false</code> - Button enabled (default)</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* onClick prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                onClick <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(MouseEventHandler, optional)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Callback function executed when button is clicked.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                Function that handles click events
              </div>
            </div>
          </PM7Card>

          {/* type prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                type <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(string, default is 'button')</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                HTML button type for form handling.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Options:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code style={{ fontWeight: 'bold' }}>'button'</code> - Regular button (default)</div>
                  <div><code>'submit'</code> - Form submit</div>
                  <div><code>'reset'</code> - Form reset</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* children prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                children <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(ReactNode, required)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Content displayed inside the button.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                Any React content: text, icons, elements
              </div>
            </div>
          </PM7Card>

          {/* ...props */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                ...props <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(ButtonHTMLAttributes, optional)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Supports all native button element properties for accessibility and functionality.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                All standard HTML button attributes: aria-*, data-*, id, className, style, etc.
              </div>
            </div>
          </PM7Card>

        </div>

        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Usage Examples</h4>
        <div style={codeBlockStyle}>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Basic Button:</p>
            <code>{'<PM7Button onClick={() => alert("Clicked!")}>Click Me</PM7Button>'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Outline Button with Dark Theme:</p>
            <code>{'<PM7Button className="pm7-button-outline" theme="dark">Outline</PM7Button>'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Large Secondary Button with No Spacing:</p>
            <code>{'<PM7Button className="pm7-button-secondary pm7-button-large" spacing="none">Large Secondary</PM7Button>'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Form Submit Button:</p>
            <code>{'<PM7Button type="submit" disabled={isLoading}>Submit Form</PM7Button>'}</code>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExampleButtonUsage;