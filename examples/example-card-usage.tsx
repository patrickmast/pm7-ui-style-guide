import React from 'react';
import { PM7Card, PM7CardHeader, PM7CardTitle } from '../src/components/card';

// Import required CSS for PM7Card
import '../src/components/card/pm7-card.css';

const ExampleCardUsage = ({ theme }: { theme: 'light' | 'dark' }) => {
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

  return (
    <>
      <div style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7Card Component</h3>
        <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>The PM7Card component provides PM7-branded styling for creating structured content containers with theme support and specialized header variants.</p>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Installation</h4>
        <div style={codeBlockStyle}>
          <p>npm install pm7-ui-style-guide</p>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Import</h4>
        <div style={codeBlockStyle}>
          <p>import {'{ PM7Card, PM7CardHeader, PM7CardTitle, PM7CardSubTitle, PM7CardFooter }'} from 'pm7-ui-style-guide';</p>
          <p>import 'pm7-ui-style-guide/src/components/card/pm7-card.css';</p>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Props Reference</h4>
        <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Complete overview of all PM7Card component props and their configuration options:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          
          {/* PM7Card props */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                PM7Card <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(main container)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Main card container component that provides PM7-branded styling and theme support.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Props:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>theme</code> - 'light' | 'dark' (default: 'light')</div>
                  <div><code>className</code> - string (optional)</div>
                  <div><code>...props</code> - All standard HTMLDivElement attributes</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* PM7CardHeader props */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                PM7CardHeader <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(card header)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Header section of the card with support for default and dark variants.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Props:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>theme</code> - 'light' | 'dark' (default: 'light')</div>
                  <div><code style={{ fontWeight: 'bold' }}>variant</code> - 'default' | 'dark' (default: 'default')</div>
                  <div><code>className</code> - string (optional)</div>
                  <div><code>...props</code> - All standard HTMLDivElement attributes</div>
                </div>
                <div style={{ marginTop: '0.75rem' }}>
                  <strong>Variant Options:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code style={{ fontWeight: 'bold' }}>'default'</code> - Standard header styling (default)</div>
                  <div><code>'dark'</code> - Dark background header with rounded top corners</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* PM7CardTitle props */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                PM7CardTitle <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(card title)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Main title element for card headers with proper typography and theme support.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Props:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>theme</code> - 'light' | 'dark' (default: 'light')</div>
                  <div><code>className</code> - string (optional)</div>
                  <div><code>...props</code> - All standard HTMLHeadingElement attributes</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* PM7CardSubTitle props */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                PM7CardSubTitle <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(card subtitle)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Subtitle or description element for additional context in card headers.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Props:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>theme</code> - 'light' | 'dark' (default: 'light')</div>
                  <div><code>className</code> - string (optional)</div>
                  <div><code>...props</code> - All standard HTMLParagraphElement attributes</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* PM7CardFooter props */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                PM7CardFooter <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(card footer)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Footer section for actions, buttons, or additional information.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Props:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>theme</code> - 'light' | 'dark' (default: 'light')</div>
                  <div><code>className</code> - string (optional)</div>
                  <div><code>...props</code> - All standard HTMLDivElement attributes</div>
                </div>
              </div>
            </div>
          </PM7Card>

        </div>

        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Usage Examples</h4>
        <div style={codeBlockStyle}>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Basic Card:</p>
            <code>{'<PM7Card theme="light"><PM7CardHeader theme="light"><PM7CardTitle theme="light">Title</PM7CardTitle></PM7CardHeader></PM7Card>'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Card with Dark Header:</p>
            <code>{'<PM7CardHeader variant="dark" theme="light"><PM7CardTitle theme="light">Dark Header</PM7CardTitle></PM7CardHeader>'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Card with Subtitle:</p>
            <code>{'<PM7CardHeader theme="light"><PM7CardTitle theme="light">Title</PM7CardTitle><PM7CardSubTitle theme="light">Subtitle</PM7CardSubTitle></PM7CardHeader>'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Complete Card Structure:</p>
            <code>{'<PM7Card theme="light"><PM7CardHeader variant="dark" theme="light">...</PM7CardHeader><div>Content</div><PM7CardFooter theme="light">...</PM7CardFooter></PM7Card>'}</code>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExampleCardUsage;