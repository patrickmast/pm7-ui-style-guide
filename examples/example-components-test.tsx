import React from 'react';
import { PM7Card, PM7CardHeader, PM7CardTitle, PM7CardSubTitle } from '../src/components/card';
import { PM7Button } from '../src/components/button';
import { PM7Menu } from '../src/components/menu';
import { PM7Dialog, PM7DialogContent, PM7DialogHeader, PM7DialogTitle, PM7DialogDescription, PM7DialogFooter } from '../src/components/dialog';
import { PM7TabSelector } from '../src/components/tab-selector';
import { PM7ThemeToggle } from '../src/components/theme-toggle';
import { HomeIcon, SettingsIcon, UserIcon } from 'lucide-react';

// CSS imports as required by component documentation
import '../src/components/card/pm7-card.css';
import '../src/components/menu/pm7-menu.css';
import '../src/components/dialog/pm7-dialog.css';
import '../src/components/tab-selector/pm7-tab-selector.css';
import '../src/components/theme-toggle/pm7-theme-toggle.css';

const ExampleComponentsTest = ({ theme }: { theme: 'light' | 'dark' }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('overview');
  const [showMenuBorder, setShowMenuBorder] = React.useState(true);
  const [showMenuBackground, setShowMenuBackground] = React.useState(true);
  const [showMenuOnHover, setShowMenuOnHover] = React.useState(false);

  // Sample menu items
  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: <HomeIcon size={16} />,
      onClick: () => console.log('Home clicked')
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon size={16} />,
      onClick: () => console.log('Settings clicked')
    },
    {
      id: 'separator',
      type: 'separator' as const
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <UserIcon size={16} />,
      onClick: () => console.log('Profile clicked')
    }
  ];

  // Sample tabs
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'details', label: 'Details' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <div className="components-test-container">
      <div style={{ marginBottom: '2rem', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
        <h1 style={{ 
          fontSize: '1.875rem', 
          fontWeight: '700', 
          marginBottom: '0.5rem',
          color: theme === 'dark' ? '#ffffff' : '#000000'
        }}>
          PM7 Components Test Page ({theme} mode)
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          opacity: 0.8,
          color: theme === 'dark' ? '#e0e0e0' : '#64748b'
        }}>
          Testing all PM7 components with their documented APIs
        </p>
      </div>

      <PM7Card theme={theme}>
        <PM7CardHeader theme={theme}>
          <PM7CardTitle theme={theme}>PM7Card Component</PM7CardTitle>
          <PM7CardSubTitle theme={theme}>Card with header, title and subtitle</PM7CardSubTitle>
        </PM7CardHeader>
      </PM7Card>

      <PM7Card theme={theme} padding="lg">
        <PM7CardHeader theme={theme}>
          <PM7CardTitle theme={theme}>PM7Button Component</PM7CardTitle>
          <PM7CardSubTitle theme={theme}>All button variants and states</PM7CardSubTitle>
        </PM7CardHeader>
        <PM7Button>Default Button</PM7Button>
        <PM7Button className="pm7-button-outline">Outline Button</PM7Button>
        <PM7Button className="pm7-button-secondary">Secondary Button</PM7Button>
        <PM7Button className="pm7-button-ghost">Ghost Button</PM7Button>
        <PM7Button className="pm7-button-link">Link Button</PM7Button>
        <PM7Button disabled>Disabled Button</PM7Button>
      </PM7Card>

      <PM7Card theme={theme}>
        <PM7CardHeader theme={theme}>
          <PM7CardTitle theme={theme}>PM7Menu Component</PM7CardTitle>
          <PM7CardSubTitle theme={theme}>Four trigger variants for different use cases</PM7CardSubTitle>
        </PM7CardHeader>
        <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ 
            marginBottom: '0.5rem', 
            paddingBottom: '0.75rem', 
            borderBottom: `1px solid ${theme === 'dark' ? '#525252' : '#e5e7eb'}` 
          }}>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <label style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                color: theme === 'dark' ? '#e0e0e0' : '#333'
              }}>
                <input 
                  type="checkbox" 
                  checked={showMenuBorder}
                  onChange={(e) => setShowMenuBorder(e.target.checked)}
                  style={{ cursor: 'pointer' }}
                />
                Show border
              </label>
              <label style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                color: theme === 'dark' ? '#e0e0e0' : '#333'
              }}>
                <input 
                  type="checkbox" 
                  checked={showMenuBackground}
                  onChange={(e) => setShowMenuBackground(e.target.checked)}
                  style={{ cursor: 'pointer' }}
                />
                Show background
              </label>
              <label style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                color: theme === 'dark' ? '#e0e0e0' : '#333'
              }}>
                <input 
                  type="checkbox" 
                  checked={showMenuOnHover}
                  onChange={(e) => setShowMenuOnHover(e.target.checked)}
                  style={{ cursor: 'pointer' }}
                />
                Show on hover
              </label>
            </div>
          </div>
          <div>
            <p style={{ 
              fontSize: '0.875rem', 
              marginBottom: '0.5rem',
              color: theme === 'dark' ? '#a0a0a0' : '#666',
              fontWeight: '500'
            }}>
              1. Icon only (default hamburger):
            </p>
            <PM7Menu 
              menuItems={menuItems}
              menuAlignment="start"
              theme={theme}
              menuTriggerBorder={showMenuBorder}
              menuTriggerBackground={showMenuBackground}
              menuTriggerOnHover={showMenuOnHover}
            />
          </div>
          <div>
            <p style={{ 
              fontSize: '0.875rem', 
              marginBottom: '0.5rem',
              color: theme === 'dark' ? '#a0a0a0' : '#666',
              fontWeight: '500'
            }}>
              2. Icon only (custom icon):
            </p>
            <PM7Menu 
              menuItems={menuItems}
              menuAlignment="start"
              menuIcon={<SettingsIcon size={16} />}
              theme={theme}
              menuTriggerBorder={showMenuBorder}
              menuTriggerBackground={showMenuBackground}
              menuTriggerOnHover={showMenuOnHover}
            />
          </div>
          <div>
            <p style={{ 
              fontSize: '0.875rem', 
              marginBottom: '0.5rem',
              color: theme === 'dark' ? '#a0a0a0' : '#666',
              fontWeight: '500'
            }}>
              3. Text only:
            </p>
            <PM7Menu 
              menuItems={menuItems}
              menuAlignment="start"
              menuLabel="File"
              theme={theme}
              menuTriggerBorder={showMenuBorder}
              menuTriggerBackground={showMenuBackground}
              menuTriggerOnHover={showMenuOnHover}
            />
          </div>
          <div>
            <p style={{ 
              fontSize: '0.875rem', 
              marginBottom: '0.5rem',
              color: theme === 'dark' ? '#a0a0a0' : '#666',
              fontWeight: '500'
            }}>
              4. Icon + Text:
            </p>
            <PM7Menu 
              menuItems={menuItems}
              menuAlignment="start"
              menuIcon={<HomeIcon size={16} />}
              menuLabel="Menu"
              theme={theme}
              menuTriggerBorder={showMenuBorder}
              menuTriggerBackground={showMenuBackground}
              menuTriggerOnHover={showMenuOnHover}
            />
          </div>
        </div>
      </PM7Card>

      <PM7Card theme={theme}>
        <PM7CardHeader theme={theme}>
          <PM7CardTitle theme={theme}>PM7Dialog Component</PM7CardTitle>
          <PM7CardSubTitle theme={theme}>Modal dialog with proper styling</PM7CardSubTitle>
        </PM7CardHeader>
        <PM7Button onClick={() => setDialogOpen(true)}>
          Open Dialog
        </PM7Button>
        
        <PM7Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <PM7DialogContent className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-background shadow-lg sm:rounded-lg p-0 overflow-hidden">
            <PM7DialogHeader className="p-6 pb-4">
              <PM7DialogTitle className="text-lg font-semibold">Sample Dialog</PM7DialogTitle>
              <PM7DialogDescription className="mt-2 text-sm text-muted-foreground">
                This is a sample dialog to test the PM7Dialog component styling in {theme} mode.
              </PM7DialogDescription>
            </PM7DialogHeader>
            
            <PM7DialogFooter className="flex flex-row justify-end space-x-2 bg-gray-50 px-6 py-4 border-t">
              <PM7Button 
                onClick={() => setDialogOpen(false)}
                className="pm7-button-ghost"
              >
                Cancel
              </PM7Button>
              <PM7Button 
                onClick={() => setDialogOpen(false)}
              >
                Confirm
              </PM7Button>
            </PM7DialogFooter>
          </PM7DialogContent>
        </PM7Dialog>
      </PM7Card>

      <PM7Card theme={theme}>
        <PM7CardHeader theme={theme}>
          <PM7CardTitle theme={theme}>PM7TabSelector Component</PM7CardTitle>
          <PM7CardSubTitle theme={theme}>Tabbed navigation interface</PM7CardSubTitle>
        </PM7CardHeader>
        <PM7TabSelector
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </PM7Card>

      <PM7Card theme={theme}>
        <PM7CardHeader theme={theme}>
          <PM7CardTitle theme={theme}>PM7ThemeToggle Component</PM7CardTitle>
          <PM7CardSubTitle theme={theme}>Theme switching buttons in different sizes</PM7CardSubTitle>
        </PM7CardHeader>
        <PM7ThemeToggle 
          size="sm" 
          theme={theme}
          onThemeChange={(newTheme) => console.log('Theme changed to:', newTheme)}
        />
        <PM7ThemeToggle 
          size="md" 
          theme={theme}
          onThemeChange={(newTheme) => console.log('Theme changed to:', newTheme)}
        />
        <PM7ThemeToggle 
          size="lg" 
          theme={theme}
          onThemeChange={(newTheme) => console.log('Theme changed to:', newTheme)}
        />
      </PM7Card>
    </div>
  );
};

export default ExampleComponentsTest;