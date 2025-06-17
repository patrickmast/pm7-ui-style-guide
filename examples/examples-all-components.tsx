import React from 'react';
import { PM7Card, PM7CardHeader, PM7CardTitle, PM7CardSubTitle } from '../src/components/card';
import { PM7Button } from '../src/components/button';
import { PM7Menu } from '../src/components/menu';
import { PM7Dialog, PM7DialogContent, PM7DialogHeader, PM7DialogTitle, PM7DialogDescription, PM7DialogFooter } from '../src/components/dialog';
import { PM7TabSelector } from '../src/components/tab-selector';
import { PM7ThemeToggle } from '../src/components/theme-toggle';
import { PM7Toaster, toast } from '../src/components/toast';
import { HomeIcon, SettingsIcon, UserIcon } from 'lucide-react';
import { inputRules } from '../src/components/input/pm7-input';

// CSS imports as required by component documentation
import '../src/components/card/pm7-card.css';
import '../src/components/menu/pm7-menu.css';
import '../src/components/dialog/pm7-dialog.css';
import '../src/components/tab-selector/pm7-tab-selector.css';
import '../src/components/theme-toggle/pm7-theme-toggle.css';

// Custom styled input component
const PM7Input = ({
  theme,
  placeholder = '',
  disabled = false,
  readOnly = false,
  type = 'text',
  className = '',
  value,
  onChange,
  ...props
}: {
  theme: 'light' | 'dark';
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}) => {
  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '0.5rem 0.75rem',
    borderRadius: '0.375rem',
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#ffffff',
    color: theme === 'dark' ? '#ffffff' : '#111827',
    border: `1px solid ${theme === 'dark' ? '#525252' : '#d1d5db'}`,
    outline: 'none',
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : readOnly ? 'default' : 'text',
    transition: 'border-color 0.2s',
    ...props.style
  };

  return (
    <input
      type={type}
      className={className}
      style={inputStyle}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      value={value}
      onChange={onChange}
      onFocus={(e) => {
        e.target.style.borderColor = inputRules.focusBorderColor === 'primary' ? '#1C86EF' : inputRules.focusBorderColor;
      }}
      onBlur={(e) => {
        e.target.style.borderColor = theme === 'dark' ? '#525252' : '#d1d5db';
      }}
      {...props}
    />
  );
};

const ExampleComponentsTest = ({ theme, onThemeChange }: { theme: 'light' | 'dark', onThemeChange?: (theme: 'light' | 'dark') => void }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('overview');
  const [showMenuBorder, setShowMenuBorder] = React.useState(true);
  const [showMenuBackground, setShowMenuBackground] = React.useState(true);
  const [showMenuOnHover, setShowMenuOnHover] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

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
          <PM7CardTitle theme={theme}>PM7Input Component</PM7CardTitle>
          <PM7CardSubTitle theme={theme}>Form inputs with PM7 styling and focus states</PM7CardSubTitle>
        </PM7CardHeader>
        <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontSize: '0.875rem', 
              fontWeight: '500',
              color: theme === 'dark' ? '#e0e0e0' : '#333'
            }}>
              Normal Input
            </label>
            <PM7Input
              theme={theme}
              placeholder="Enter text here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontSize: '0.875rem', 
              fontWeight: '500',
              color: theme === 'dark' ? '#e0e0e0' : '#333'
            }}>
              Disabled Input
            </label>
            <PM7Input
              theme={theme}
              placeholder="This input is disabled"
              disabled={true}
            />
          </div>
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontSize: '0.875rem', 
              fontWeight: '500',
              color: theme === 'dark' ? '#e0e0e0' : '#333'
            }}>
              Read-only Input
            </label>
            <PM7Input
              theme={theme}
              value="This is read-only content"
              readOnly={true}
            />
          </div>
        </div>
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
              }} title="menuTriggerBorder">
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
              }} title="menuTriggerBackground">
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
              }} title="menuTriggerOnHover">
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
        <div style={{ padding: '1rem' }}>
          <PM7Button onClick={() => setDialogOpen(true)}>
            Open Dialog
          </PM7Button>
        </div>
        
        <PM7Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <PM7DialogContent className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-background shadow-lg sm:rounded-lg p-0 overflow-hidden">
            <PM7DialogHeader>
              <PM7DialogTitle>Sample Dialog</PM7DialogTitle>
              <PM7DialogDescription>
                This is a sample dialog to test the PM7Dialog component styling in {theme} mode.
              </PM7DialogDescription>
            </PM7DialogHeader>
            <div className="p-2">
              <p className="text-sm">Dialog content goes here.</p>
            </div>
            
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
        <div style={{ padding: '1rem' }}>
          <PM7TabSelector
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </PM7Card>

      <PM7Card theme={theme}>
        <PM7CardHeader theme={theme}>
          <PM7CardTitle theme={theme}>PM7ThemeToggle Component</PM7CardTitle>
          <PM7CardSubTitle theme={theme}>Theme switching buttons in different sizes</PM7CardSubTitle>
        </PM7CardHeader>
        <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <PM7ThemeToggle 
              size="small" 
              theme={theme}
              onThemeChange={onThemeChange}
            />
            <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>Small</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <PM7ThemeToggle 
              size="medium" 
              theme={theme}
              onThemeChange={onThemeChange}
            />
            <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>Medium (default)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <PM7ThemeToggle 
              size="large" 
              theme={theme}
              onThemeChange={onThemeChange}
            />
            <span style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666' }}>Large</span>
          </div>
        </div>
      </PM7Card>

      <PM7Card theme={theme}>
        <PM7CardHeader theme={theme}>
          <PM7CardTitle theme={theme}>PM7Toast Component</PM7CardTitle>
          <PM7CardSubTitle theme={theme}>Notification system with multiple variants</PM7CardSubTitle>
        </PM7CardHeader>
        <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p style={{ fontSize: '0.875rem', color: theme === 'dark' ? '#a0a0a0' : '#666', marginBottom: '0.5rem' }}>
            Click buttons below to show different toast variants:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <PM7Button
              onClick={() => toast({
                title: "Default Toast",
                description: "This is a default notification"
              })}
              variant="outline"
              theme={theme}
            >
              Default
            </PM7Button>
            <PM7Button
              onClick={() => toast({
                title: "Success!",
                description: "Your changes have been saved",
                variant: "success"
              })}
              variant="outline"
              theme={theme}
            >
              Success
            </PM7Button>
            <PM7Button
              onClick={() => toast({
                title: "Error",
                description: "Something went wrong",
                variant: "destructive"
              })}
              variant="outline"
              theme={theme}
            >
              Error
            </PM7Button>
            <PM7Button
              onClick={() => toast({
                title: "Warning",
                description: "Please review your input",
                variant: "warning"
              })}
              variant="outline"
              theme={theme}
            >
              Warning
            </PM7Button>
            <PM7Button
              onClick={() => toast({
                title: "Info",
                description: "New updates available",
                variant: "info"
              })}
              variant="outline"
              theme={theme}
            >
              Info
            </PM7Button>
            <PM7Button
              onClick={() => toast({
                title: "With Action",
                description: "Click undo to revert",
                action: {
                  label: "Undo",
                  onClick: () => toast({ title: "Undone!", variant: "success" })
                }
              })}
              variant="outline"
              theme={theme}
            >
              With Action
            </PM7Button>
          </div>
        </div>
      </PM7Card>
      
      {/* PM7Toaster must be included at the root level */}
      <PM7Toaster theme={theme} />
    </div>
  );
};

export default ExampleComponentsTest;