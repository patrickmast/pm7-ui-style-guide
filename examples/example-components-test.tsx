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
      <PM7Card theme={theme}>
        <PM7CardHeader theme={theme}>
          <PM7CardTitle theme={theme}>PM7 Components Test Page ({theme} mode)</PM7CardTitle>
          <PM7CardSubTitle theme={theme}>Testing all PM7 components with their documented APIs</PM7CardSubTitle>
        </PM7CardHeader>
      </PM7Card>

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
          <PM7CardSubTitle theme={theme}>Menu with icon and text label</PM7CardSubTitle>
        </PM7CardHeader>
        <PM7Menu 
          menuItems={menuItems}
          menuAlignment="start"
          theme={theme}
          menuTriggerBordered={true}
        />
        <PM7Menu 
          menuItems={menuItems}
          menuAlignment="start"
          menuLabel="Menu"
          theme={theme}
          menuTriggerBordered={true}
        />
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