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

          {/* menuTriggerBorder prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                menuTriggerBorder <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(boolean, default is false)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Whether to show a border around the menu trigger.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Options:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>true</code> - Show border</div>
                  <div><code style={{ fontWeight: 'bold' }}>false</code> - No border (default)</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* menuTriggerBackground prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                menuTriggerBackground <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(boolean, default is false)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Whether to show a background on the menu trigger.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Options:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>true</code> - Show background</div>
                  <div><code style={{ fontWeight: 'bold' }}>false</code> - No background (default)</div>
                </div>
              </div>
            </div>
          </PM7Card>

          {/* menuTriggerOnHover prop */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                menuTriggerOnHover <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(boolean, default is false)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Whether to show border and background only on hover over the menu trigger.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Options:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>true</code> - Show border/background on hover</div>
                  <div><code style={{ fontWeight: 'bold' }}>false</code> - No hover effect (default)</div>
                </div>
                <div style={{ marginTop: '0.75rem', padding: '0.5rem', backgroundColor: theme === 'dark' ? '#1F2937' : '#F3F4F6', borderRadius: '0.375rem' }}>
                  <strong>Behavior:</strong> When enabled, the hover state automatically persists while the menu is open, providing visual feedback about the active menu.
                </div>
              </div>
            </div>
          </PM7Card>

          {/* Color customization props */}
          <PM7Card theme={theme}>
            <PM7CardHeader variant="dark" theme={theme}>
              <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
                Color Customization <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontWeight: 'normal' }}>(theme-aware styling props)</span>
              </PM7CardTitle>
            </PM7CardHeader>
            <div style={{ padding: '0 0.5rem' }}>
              <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginBottom: '0.75rem' }}>
                Theme-aware color props for menu trigger and dropdown. Each prop has base and Dark variants for consistent theming.
              </p>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666', marginBottom: '1rem', padding: '0.75rem', backgroundColor: theme === 'dark' ? '#1F2937' : '#F3F4F6', borderRadius: '0.375rem' }}>
                <strong>Remark:</strong> All color customization props are of type <code>string</code> and accept CSS color values (hex, rgb, hsl, named colors, etc.).
              </div>
              <div style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Icon Colors:</strong>
                </div>
                <div style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                  <div><code>menuTriggerIconColor</code> - Base icon color (used in light mode)</div>
                  <div><code>menuTriggerIconColorDark</code> - Icon color in dark theme</div>
                  <div style={{ fontSize: '0.75rem', color: theme === 'dark' ? '#9CA3AF' : '#6B7280', marginTop: '0.25rem', fontStyle: 'italic' }}>
                    Note: These props now correctly apply to both the default hamburger icon and custom icons
                  </div>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Label Colors:</strong>
                </div>
                <div style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                  <div><code>menuTriggerLabelColor</code> - Base label color (used in light mode)</div>
                  <div><code>menuTriggerLabelColorDark</code> - Label color in dark theme</div>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Background Colors:</strong>
                </div>
                <div style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                  <div><code>menuTriggerBackgroundColor</code> - Trigger background color</div>
                  <div><code>menuTriggerBackgroundColorDark</code> - Trigger background color in dark mode</div>
                  <div><code>menuBackgroundColor</code> - Dropdown background color</div>
                  <div><code>menuBackgroundColorDark</code> - Dropdown background color in dark mode</div>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Border Colors:</strong>
                </div>
                <div style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                  <div><code>menuTriggerBorderColor</code> - Trigger border color</div>
                  <div><code>menuTriggerBorderColorDark</code> - Trigger border color in dark mode</div>
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Hover Colors:</strong>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                  <div><code>menuTriggerHoverBackgroundColor</code> - Trigger hover background color</div>
                  <div><code>menuTriggerHoverBackgroundColorDark</code> - Trigger hover background color in dark mode</div>
                  <div><code>menuTriggerHoverBorderColor</code> - Trigger hover border color</div>
                  <div><code>menuTriggerHoverBorderColorDark</code> - Trigger hover border color in dark mode</div>
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

        {/* Common Styling Patterns Section */}
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '2rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Common Styling Patterns</h4>
        <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
          Ready-to-use examples for common trigger button designs:
        </p>
        
        <div style={codeBlockStyle}>
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>White Trigger Button (works in both light and dark mode):</p>
            <code style={{ display: 'block', whiteSpace: 'pre-wrap' }}>{`<PM7Menu 
  menuItems={items}
  menuTriggerBackground={true}
  menuTriggerBackgroundColor="#FFFFFF"
  menuTriggerBackgroundColorDark="#FFFFFF"
  menuTriggerBorder={true}
  menuTriggerBorderColor="#E5E7EB"
  menuTriggerBorderColorDark="#E5E7EB"
  menuTriggerIconColor="#000000"
  menuTriggerIconColorDark="#000000"
  menuTriggerOnHover={false}
  theme={theme}
/>`}</code>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Transparent Icon-Only Button (minimal style):</p>
            <code style={{ display: 'block', whiteSpace: 'pre-wrap' }}>{`<PM7Menu 
  menuItems={items}
  menuTriggerBorder={false}
  menuTriggerBackground={false}
  menuTriggerOnHover={true}
  theme={theme}
/>`}</code>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Primary Brand Color Button:</p>
            <code style={{ display: 'block', whiteSpace: 'pre-wrap' }}>{`<PM7Menu 
  menuItems={items}
  menuTriggerBackground={true}
  menuTriggerBackgroundColor="#1C86EF"
  menuTriggerBackgroundColorDark="#3B9EFF"
  menuTriggerBorder={false}
  menuTriggerIconColor="#FFFFFF"
  menuTriggerIconColorDark="#FFFFFF"
  theme={theme}
/>`}</code>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Outlined Button (border only, no background):</p>
            <code style={{ display: 'block', whiteSpace: 'pre-wrap' }}>{`<PM7Menu 
  menuItems={items}
  menuTriggerBorder={true}
  menuTriggerBorderColor="#1C86EF"
  menuTriggerBorderColorDark="#3B9EFF"
  menuTriggerBackground={false}
  menuTriggerIconColor="#1C86EF"
  menuTriggerIconColorDark="#3B9EFF"
  theme={theme}
/>`}</code>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Material Design Flat Button:</p>
            <code style={{ display: 'block', whiteSpace: 'pre-wrap' }}>{`<PM7Menu 
  menuItems={items}
  menuLabel="OPTIONS"
  menuTriggerBorder={false}
  menuTriggerBackground={false}
  menuTriggerOnHover={true}
  menuTriggerLabelColor="#1C86EF"
  menuTriggerLabelColorDark="#3B9EFF"
  theme={theme}
/>`}</code>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '1rem', 
          padding: '1rem', 
          backgroundColor: theme === 'dark' ? '#1F2937' : '#E0F2FE', 
          borderRadius: '0.375rem',
          border: `1px solid ${theme === 'dark' ? '#374151' : '#7DD3FC'}`
        }}>
          <p style={{ color: theme === 'dark' ? '#e0e0e0' : '#0369A1', fontWeight: '500', marginBottom: '0.5rem' }}>
            💡 Pro Tip: Understanding Trigger Styling Props
          </p>
          <ul style={{ color: theme === 'dark' ? '#e0e0e0' : '#0369A1', marginLeft: '1.5rem', fontSize: '0.875rem' }}>
            <li><code>menuTriggerBackground</code> must be <code>true</code> to show background colors</li>
            <li><code>menuTriggerBorder</code> must be <code>true</code> to show borders</li>
            <li>Use matching dark mode colors for consistent appearance across themes</li>
            <li>Set <code>menuTriggerOnHover={false}</code> for static designs</li>
          </ul>
        </div>

        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Menu Trigger Variants</h4>
        <div style={codeBlockStyle}>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>1. Icon Only (Default Hamburger):</p>
            <code>{'<PM7Menu menuItems={items} theme="light" />'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>2. Icon Only (Custom Icon):</p>
            <code>{'<PM7Menu menuItems={items} menuIcon={<CustomIcon />} theme="light" />'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>3. Text Only:</p>
            <code>{'<PM7Menu menuItems={items} menuLabel="File" theme="light" />'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>4. Icon + Text:</p>
            <code>{'<PM7Menu menuItems={items} menuIcon={<FileIcon />} menuLabel="File" theme="light" />'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>5. Hamburger + Text:</p>
            <code>{'<PM7Menu menuItems={items} menuLabel="Menu" theme="light" />'}</code>
            <p style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666', marginTop: '0.25rem' }}>Note: When menuLabel is provided without menuIcon, the default hamburger icon is used.</p>
          </div>
        </div>

        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Additional Examples</h4>
        <div style={codeBlockStyle}>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Border and Background with Center Alignment:</p>
            <code>{'<PM7Menu menuItems={items} menuTriggerBorder={true} menuTriggerBackground={true} menuAlignment="center" theme="light" />'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Border Only (No Background):</p>
            <code>{'<PM7Menu menuItems={items} menuTriggerBorder={true} theme="light" />'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Show Border and Background on Hover:</p>
            <code>{'<PM7Menu menuItems={items} menuTriggerOnHover={true} theme="light" />'}</code>
            <p style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666', marginTop: '0.25rem' }}>Note: Hover state persists while menu is open for better UX.</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Theme-Aware Colors:</p>
            <code>{'<PM7Menu menuItems={items} menuTriggerIconColor="#1C86EF" menuTriggerIconColorDark="#3B9EFF" theme="light" />'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Full Theme-Aware Customization:</p>
            <code>{'<PM7Menu menuItems={items} menuTriggerBackgroundColor="#F3F4F6" menuTriggerBackgroundColorDark="#1F2937" menuTriggerBorderColor="#E5E7EB" menuTriggerBorderColorDark="#374151" theme="light" />'}</code>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Base Props Only (same color in both themes):</p>
            <code>{'<PM7Menu menuItems={items} menuTriggerIconColor="#1C86EF" menuTriggerBackgroundColor="#F3F4F6" theme="light" />'}</code>
          </div>
        </div>

        {/* Disabled States Section */}
        <h4 style={{ fontSize: '1.125rem', fontWeight: '500', marginTop: '2rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Disabled States</h4>
        <p style={{ marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333' }}>
          All menu item types support the <code>disabled</code> property for conditional availability:
        </p>
        
        <PM7Card theme={theme} style={{ marginBottom: '1.5rem' }}>
          <PM7CardHeader variant="dark" theme={theme}>
            <PM7CardTitle theme={theme} style={{ margin: '0', fontSize: '1rem' }}>
              Disabled State Behavior
            </PM7CardTitle>
          </PM7CardHeader>
          <div style={{ padding: '0.5rem' }}>
            <ul style={{ color: theme === 'dark' ? '#e0e0e0' : '#333', marginLeft: '1.5rem' }}>
              <li>Shows at 50% opacity for visual indication</li>
              <li>Displays "not-allowed" cursor on hover</li>
              <li>Prevents all click and interaction events</li>
              <li>Removes hover effects (no blue background)</li>
              <li>Works with all item types: normal, check, radio, switch, and submenu</li>
            </ul>
          </div>
        </PM7Card>

        <h4 style={{ fontSize: '1rem', fontWeight: '500', marginTop: '1.5rem', marginBottom: '0.75rem', color: theme === 'dark' ? '#ffffff' : '#000000' }}>Common Use Cases</h4>
        <div style={codeBlockStyle}>
          <p style={{ marginBottom: '0.75rem' }}>{`const menuItems = [`}</p>
          <p style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>{`  // Disable save when no changes`}</p>
          <p style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>{`  { id: 'save', label: 'Save', onClick: handleSave, disabled: !hasChanges },`}</p>
          <p style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}></p>
          <p style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>{`  // Disable based on permissions`}</p>
          <p style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>{`  { id: 'delete', label: 'Delete', onClick: handleDelete, disabled: !canDelete },`}</p>
          <p style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}></p>
          <p style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>{`  // Disable switch when feature unavailable`}</p>
          <p style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>{`  { id: 'feature', label: 'Beta Feature', type: 'switch', `}</p>
          <p style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>{`    checked: betaEnabled, onChange: setBetaEnabled, `}</p>
          <p style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>{`    disabled: !isBetaUser },`}</p>
          <p style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}></p>
          <p style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>{`  // Disable during loading states`}</p>
          <p style={{ marginLeft: '1rem', marginBottom: '0.5rem' }}>{`  { id: 'refresh', label: 'Refresh', onClick: handleRefresh, disabled: isLoading }`}</p>
          <p>{`];`}</p>
        </div>

        <p style={{ marginTop: '1rem', marginBottom: '1rem', color: theme === 'dark' ? '#e0e0e0' : '#333', fontSize: '0.875rem' }}>
          <strong>Note:</strong> The disabled state is particularly useful for context-sensitive menus where certain actions 
          should only be available under specific conditions.
        </p>
      </div>
    </>
  );
};

export default ExampleMenuUsage;