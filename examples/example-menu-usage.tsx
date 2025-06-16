import React from 'react';
import { PM7Card, PM7CardHeader, PM7CardTitle } from '../src/components/card';

// Import required CSS for PM7Card
import '../src/components/card/pm7-card.css';

const ExampleMenuUsage = ({ theme }: { theme: 'light' | 'dark' }) => {
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
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>PM7Menu Component</h3>
        <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>The PM7Menu component provides PM7-branded dropdown menus with full accessibility support, theme compatibility, and flexible menu item types.</p>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Installation</h4>
        <div style={codeBlockStyle}>
          <p>npm install pm7-ui-style-guide</p>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Import</h4>
        <div style={codeBlockStyle}>
          <p>import {'{ PM7Menu }'} from 'pm7-ui-style-guide';</p>
          <p>import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css';</p>
        </div>
        
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Props Reference</h4>
        <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>Complete overview of all PM7Menu props and their configuration options:</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          
          {/* menuItems prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                menuItems <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(array, required)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Array of menu items to display. Each item defines its label, icon, action, and type.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Item Structure:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>id</code> - string (required) - Unique identifier</div>
                  <div><code>label</code> - ReactNode (required) - Display text/content</div>
                  <div><code>type</code> - string (optional) - Item type: 'normal', 'check', 'radio', 'separator', etc.</div>
                  <div><code>icon</code> - ReactNode (optional) - Left icon</div>
                  <div><code>onClick</code> - function (optional) - Click handler</div>
                  <div><code>disabled</code> - boolean (optional) - Disabled state</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* theme prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                theme <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(string, default is 'light')</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Controls the visual theme of the menu for proper contrast and branding.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Options:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code style={{ fontWeight: 'bold' }}>'light'</code> - Light theme styling (default)</div>
                  <div><code>'dark'</code> - Dark theme styling</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* menuAlignment prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                menuAlignment <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(string, default is 'start')</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Controls how the dropdown menu aligns relative to the trigger button.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Options:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code style={{ fontWeight: 'bold' }}>'start'</code> - Align to start of trigger (default)</div>
                  <div><code>'center'</code> - Center align with trigger</div>
                  <div><code>'end'</code> - Align to end of trigger</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* menuLabel prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                menuLabel <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(ReactNode, optional)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Custom label to display next to the menu trigger icon. Can be text or any React element.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                Any React content: text, icons, elements
              </div>
            </div>
          </PM7Card>

          {/* menuIcon prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                menuIcon <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(ReactNode, optional)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Custom icon to use as the menu trigger. If not provided, uses default hamburger icon.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                Any React icon component or element
              </div>
            </div>
          </PM7Card>

          {/* menuTriggerBordered prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                menuTriggerBordered <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(boolean, default is false)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Whether to always show a border/background around the menu trigger.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Options:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>true</code> - Always show border/background</div>
                  <div><code style={{ fontWeight: 'bold' }}>false</code> - No border/background (default)</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* menuTriggerBorderedOnHover prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                menuTriggerBorderedOnHover <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(boolean, default is false)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Whether to show border/background only on hover over the menu trigger.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Options:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>true</code> - Show border/background on hover</div>
                  <div><code style={{ fontWeight: 'bold' }}>false</code> - No hover effect (default)</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* Color customization props */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                Color Customization <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(optional styling props)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Optional props for customizing colors of menu trigger and background.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Available Props:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>menuTriggerIconColorLight</code> - string - Icon color in light theme</div>
                  <div><code>menuTriggerIconColorDark</code> - string - Icon color in dark theme</div>
                  <div><code>menuTriggerLabelColorLight</code> - string - Label color in light theme</div>
                  <div><code>menuTriggerLabelColorDark</code> - string - Label color in dark theme</div>
                  <div><code>menuTriggerBackgroundColor</code> - string - Trigger background color</div>
                  <div><code>menuBackgroundColor</code> - string - Dropdown background color</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* mobileBreakpoint prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                mobileBreakpoint <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(number, default is 768)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Screen width (in pixels) below which mobile styling is applied.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                Default: 768px
              </div>
            </div>
          </PM7Card>

        </div>

        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Usage Examples</h4>
        <div style={codeBlockStyle}>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Basic Menu:</p>
            <code>{'<PM7Menu menuItems={items} theme="light" />'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Menu with Text Label:</p>
            <code>{'<PM7Menu menuItems={items} menuLabel="Menu" theme="light" />'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Bordered Menu with Center Alignment:</p>
            <code>{'<PM7Menu menuItems={items} menuTriggerBordered={true} menuAlignment="center" theme="light" />'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Custom Icon and Colors:</p>
            <code>{'<PM7Menu menuItems={items} menuIcon={<CustomIcon />} menuTriggerIconColorLight="#1C86EF" theme="light" />'}</code>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExampleMenuUsage;