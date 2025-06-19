import React from 'react';
import { PM7Card, PM7CardHeader, PM7CardTitle } from '../src/components/card';

// Import required CSS for PM7Card
import '../src/components/card/pm7-card.css';

const ExampleThemeToggleUsage = ({ theme }: { theme: 'light' | 'dark' }) => {
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
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7ThemeToggle Component</h3>
        <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>The PM7ThemeToggle component provides PM7-branded theme switching with automatic localStorage persistence and system preference detection.</p>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Installation</h4>
        <div style={codeBlockStyle}>
          <p>npm install pm7-ui-style-guide</p>
          <p>npm install lucide-react</p>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Import</h4>
        <div style={codeBlockStyle}>
          <p>import {'{ PM7ThemeToggle, ThemeType }'} from 'pm7-ui-style-guide';</p>
          <p>import 'pm7-ui-style-guide/src/components/theme-toggle/pm7-theme-toggle.css';</p>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Props Reference</h4>
        <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Complete overview of all PM7ThemeToggle props and their configuration options:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          
          {/* theme prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                theme <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(ThemeType, optional)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Controlled theme value. When provided, the component operates in controlled mode.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Options:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>'light'</code> - Light theme</div>
                  <div><code>'dark'</code> - Dark theme</div>
                </div>
                <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', fontStyle: 'italic' }}>
                  If not provided, component manages its own state (uncontrolled mode)
                </div>
              </div>
            </div>
          </PM7Card>

          {/* onThemeChange prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                onThemeChange <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(function, optional)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Callback function called when the theme is toggled. Used for controlled mode.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div><strong>Signature:</strong> <code>(theme: ThemeType) =&gt; void</code></div>
                <div style={{ marginTop: '0.5rem' }}>Required when using controlled mode</div>
              </div>
            </div>
          </PM7Card>

          {/* size prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                size <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(string, default is 'medium')</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Controls the size of the theme toggle switch for different UI contexts.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Options:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>'small'</code> - Compact size for tight spaces (12px icon)</div>
                  <div><code style={{ fontWeight: 'bold' }}>'medium'</code> - Standard size (16px icon, default)</div>
                  <div><code>'large'</code> - Prominent size for main headers (20px icon)</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* className prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                className <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(string, optional)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Additional CSS classes to apply to the theme toggle container for custom styling.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                Appended to default PM7 theme toggle styling classes
              </div>
            </div>
          </PM7Card>

          {/* showHover prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                showHover <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(boolean, default is true)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Controls whether hover effects are enabled on the theme toggle button.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                Set to false to disable hover styling and animations
              </div>
            </div>
          </PM7Card>

          {/* data-component-name prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                data-component-name <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(string, optional)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Data attribute for component identification and debugging purposes.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                Useful for testing and component tracking
              </div>
            </div>
          </PM7Card>

        </div>

        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Usage Examples</h4>
        <div style={codeBlockStyle}>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Basic Uncontrolled Usage:</p>
            <code>{'<PM7ThemeToggle /> // Manages its own state with localStorage'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Controlled Usage:</p>
            <code>{'<PM7ThemeToggle theme={theme} onThemeChange={setTheme} />'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Different Sizes:</p>
            <code>{'<PM7ThemeToggle size="small" /> <PM7ThemeToggle size="large" />'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Disable Hover Effects:</p>
            <code>{'<PM7ThemeToggle showHover={false} />'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>With Custom Styling:</p>
            <code>{'<PM7ThemeToggle className="my-custom-toggle" data-component-name="HeaderThemeToggle" />'}</code>
          </div>
        </div>

        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Features</h4>
        <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666', marginBottom: '1rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong>Built-in Features:</strong>
          </div>
          <div style={{ marginLeft: '1rem' }}>
            <div>• Automatic localStorage persistence in uncontrolled mode</div>
            <div>• System preference detection (prefers-color-scheme)</div>
            <div>• Sun/Moon icons from Lucide React with smooth transitions</div>
            <div>• Keyboard accessibility (Enter and Space key support)</div>
            <div>• ARIA labels for screen reader support</div>
            <div>• Automatic DOM class toggling (adds/removes 'dark' class)</div>
            <div>• Three size variants for different UI contexts</div>
            <div>• PM7 brand styling with proper animations</div>
          </div>
        </div>

        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>TypeScript Support</h4>
        <div style={codeBlockStyle}>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>ThemeType Definition:</p>
            <code>{'export type ThemeType = "light" | "dark";'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Component Props Interface:</p>
            <code>{'interface PM7ThemeToggleProps { theme?: ThemeType; onThemeChange?: (theme: ThemeType) =&gt; void; size?: "small" | "medium" | "large"; showHover?: boolean; className?: string; "data-component-name"?: string; }'}</code>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExampleThemeToggleUsage;