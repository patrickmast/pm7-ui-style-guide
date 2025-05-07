// Bug Fix: Fixed dialog border color to #525252 in dark mode
import React, { useState, useEffect, useRef } from 'react';
import { PM7MenuComponent as Menu } from '../src/components/menu';
import {
  PM7Dialog,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogTitle,
  PM7DialogSubTitle,
  PM7DialogFooter,
} from '../src/components/dialog';
import '../src/components/dialog/pm7-dialog.css';

// Sun icon component for theme switch (fixed black color)
const SunIconSwitch = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="theme-icon"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

// Moon icon component for theme switch (fixed white color in dark mode)
const MoonIconSwitch = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="theme-icon"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// Sun icon component for menu items (uses currentColor)
const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

// Moon icon component for menu items (uses currentColor)
const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// Menu example component
const MenuExample = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('menu-component-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('menu-component-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // State for selected language
  const [selectedLanguage, setSelectedLanguage] = useState<string>(() => {
    // Check if user has a language preference in localStorage
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('winfakt-language');
      if (savedLanguage) {
        return savedLanguage;
      }
    }
    return 'en';
  });

  // Function to get label based on selected language with fallback
  const getLabel = (item: any): string => {
    const langKey = `label-${selectedLanguage}`;
    return item[langKey] || item.label || '';
  };

  // Function to select language
  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    localStorage.setItem('winfakt-language', language);
    console.log(`${language} selected`);
  };

  // State for showing the about dialog
  const [showAboutDialog, setShowAboutDialog] = useState(false);

  // Function to show about dialog
  const showAbout = () => {
    setShowAboutDialog(true);
  };

  // Define menu items with inline translations
  const menuItems = [
    {
      id: 'profile',
      label: 'Profile',
      'label-en': 'Profile',
      'label-es': 'Perfil',
      'label-fr': 'Profil',
      'label-de': 'Profil',
      'label-nl': 'Profiel',
      'label-nl-be': 'Profiel',
      'label-zh': '个人资料',
      onClick: () => console.log('Profile selected'),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    {
      id: 'settings',
      label: 'Settings',
      'label-en': 'Settings',
      'label-es': 'Ajustes',
      'label-fr': 'Paramètres',
      'label-de': 'Einstellungen',
      'label-nl': 'Instellingen',
      'label-nl-be': 'Instellingen',
      'label-zh': '设置',
      onClick: () => console.log('Settings selected'),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      id: 'notifications',
      label: 'Notifications',
      'label-en': 'Notifications',
      'label-es': 'Notificaciones',
      'label-fr': 'Notifications',
      'label-de': 'Benachrichtigungen',
      'label-nl': 'Meldingen',
      'label-nl-be': 'Meldingen',
      'label-zh': '通知',
      onClick: () => console.log('Notifications selected'),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      )
    },
    {
      id: 'help',
      label: 'Help',
      'label-en': 'Help',
      'label-es': 'Ayuda',
      'label-fr': 'Aide',
      'label-de': 'Hilfe',
      'label-nl': 'Hulp',
      'label-nl-be': 'Hulp',
      'label-zh': '帮助',
      onClick: () => console.log('Help selected'),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
      )
    },
    {
      id: 'divider-1',
      label: '',
      type: 'separator' as 'separator'
    },
    {
      id: 'language',
      label: 'Language',
      'label-en': 'Language',
      'label-es': 'Idioma',
      'label-fr': 'Langue',
      'label-de': 'Sprache',
      'label-nl': 'Taal',
      'label-nl-be': 'Taal',
      'label-zh': '语言',
      type: 'submenu' as 'submenu',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m5 8 6 6" />
          <path d="m4 14 6-6 2-3" />
          <path d="M2 5h12" />
          <path d="M7 2h1" />
          <path d="m22 22-5-10-5 10" />
          <path d="M14 18h6" />
        </svg>
      ),
      submenuItems: [
        {
          id: 'en',
          label: 'English',
          'label-en': 'English',
          'label-es': 'English',
          'label-fr': 'English',
          'label-de': 'English',
          'label-nl': 'English',
          'label-nl-be': 'English',
          'label-zh': 'English',
          type: 'check' as 'check',
          checked: selectedLanguage === 'en',
          onClick: () => selectLanguage('en')
        },
        {
          id: 'es',
          label: 'Español',
          'label-en': 'Español',
          'label-es': 'Español',
          'label-fr': 'Español',
          'label-de': 'Español',
          'label-nl': 'Español',
          'label-nl-be': 'Español',
          'label-zh': 'Español',
          type: 'check' as 'check',
          checked: selectedLanguage === 'es',
          onClick: () => selectLanguage('es')
        },
        {
          id: 'fr',
          label: 'Français',
          'label-en': 'Français',
          'label-es': 'Français',
          'label-fr': 'Français',
          'label-de': 'Français',
          'label-nl': 'Français',
          'label-nl-be': 'Français',
          'label-zh': 'Français',
          type: 'check' as 'check',
          checked: selectedLanguage === 'fr',
          onClick: () => selectLanguage('fr')
        },
        {
          id: 'de',
          label: 'Deutsch',
          'label-en': 'Deutsch',
          'label-es': 'Deutsch',
          'label-fr': 'Deutsch',
          'label-de': 'Deutsch',
          'label-nl': 'Deutsch',
          'label-nl-be': 'Deutsch',
          'label-zh': 'Deutsch',
          type: 'check' as 'check',
          checked: selectedLanguage === 'de',
          onClick: () => selectLanguage('de')
        },
        {
          id: 'nl',
          label: 'Nederlands',
          'label-en': 'Nederlands',
          'label-es': 'Nederlands',
          'label-fr': 'Nederlands',
          'label-de': 'Nederlands',
          'label-nl': 'Nederlands',
          'label-nl-be': 'Nederlands',
          'label-zh': 'Nederlands',
          type: 'check' as 'check',
          checked: selectedLanguage === 'nl',
          onClick: () => selectLanguage('nl')
        },
        {
          id: 'nl-be',
          label: 'Nederlands (België)',
          'label-en': 'Nederlands (België)',
          'label-es': 'Nederlands (België)',
          'label-fr': 'Nederlands (België)',
          'label-de': 'Nederlands (België)',
          'label-nl': 'Nederlands (België)',
          'label-nl-be': 'Nederlands (België)',
          'label-zh': 'Nederlands (België)',
          type: 'check' as 'check',
          checked: selectedLanguage === 'nl-be',
          onClick: () => selectLanguage('nl-be')
        },
        {
          id: 'zh',
          label: '中文',
          'label-en': '中文',
          'label-es': '中文',
          'label-fr': '中文',
          'label-de': '中文',
          'label-nl': '中文',
          'label-nl-be': '中文',
          'label-zh': '中文',
          type: 'check' as 'check',
          checked: selectedLanguage === 'zh',
          onClick: () => selectLanguage('zh')
        }
      ]
    },
    {
      id: 'theme',
      label: `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`,
      'label-en': `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`,
      'label-es': `Tema: ${theme === 'dark' ? 'Oscuro' : 'Claro'}`,
      'label-fr': `Thème: ${theme === 'dark' ? 'Sombre' : 'Clair'}`,
      'label-de': `Design: ${theme === 'dark' ? 'Dunkel' : 'Hell'}`,
      'label-nl': `Thema: ${theme === 'dark' ? 'Donker' : 'Licht'}`,
      'label-nl-be': `Thema: ${theme === 'dark' ? 'Donker' : 'Licht'}`,
      'label-zh': `主题: ${theme === 'dark' ? '深色' : '浅色'}`,
      type: 'switch' as 'switch',
      icon: theme === 'dark' ? <MoonIcon /> : <SunIcon />,
      checked: theme === 'dark',
      onChange: toggleTheme
    },
    {
      id: 'divider-2',
      label: '',
      type: 'separator' as 'separator'
    },
    {
      id: 'about',
      label: 'About',
      'label-en': 'About',
      'label-es': 'Acerca de',
      'label-fr': 'à propos',
      'label-de': 'Über',
      'label-nl': 'Over',
      'label-nl-be': 'Over',
      'label-zh': '关于',
      onClick: () => showAbout(),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      )
    }
  ];

  // Update theme label when theme changes
  useEffect(() => {
    menuItems.forEach(item => {
      if (item.id === 'theme') {
        item.label = `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`;
        item['label-en'] = `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`;
        item['label-es'] = `Tema: ${theme === 'dark' ? 'Oscuro' : 'Claro'}`;
        item['label-fr'] = `Thème: ${theme === 'dark' ? 'Sombre' : 'Clair'}`;
        item['label-de'] = `Design: ${theme === 'dark' ? 'Dunkel' : 'Hell'}`;
        item['label-nl'] = `Thema: ${theme === 'dark' ? 'Donker' : 'Licht'}`;
        item['label-nl-be'] = `Thema: ${theme === 'dark' ? 'Donker' : 'Licht'}`;
        item['label-zh'] = `主题: ${theme === 'dark' ? '深色' : '浅色'}`;
      }
    });
  }, [theme]);

  return (
    <div className="component-example">
      <div className="component-header">
        <h2>Menu Component</h2>
        <div className="theme-toggle">
          <button
            className={`theme-switch ${theme === 'dark' ? 'dark' : ''}`}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span className="theme-switch-thumb">
              {theme === 'light' ? <SunIconSwitch /> : <MoonIconSwitch />}
            </span>
          </button>
        </div>
      </div>
      <div className="example-container">
        <div className="example-preview" style={{ background: theme === 'dark' ? '#262626' : '#f5f5f5', padding: '20px', borderRadius: '8px', position: 'relative' }}>
          <Menu 
            menuItems={menuItems.map(item => ({
              ...item,
              label: getLabel(item),
              submenuItems: item.submenuItems?.map(subItem => ({
                ...subItem,
                label: getLabel(subItem)
              }))
            }))} 
            initialTheme={theme}
          />
          
          {/* About dialog */}
          <PM7Dialog open={showAboutDialog} onOpenChange={setShowAboutDialog}>
            <PM7DialogContent 
              className={theme === 'dark' ? 'dark' : ''}
              style={{ 
                backgroundColor: theme === 'dark' ? '#262626' : 'white',
                color: theme === 'dark' ? 'white' : 'inherit',
                border: `1px solid ${theme === 'dark' ? '#525252' : '#e2e8f0'}`
              }}
            >
              <PM7DialogHeader>
                <PM7DialogTitle>PM7 UI Style Guide</PM7DialogTitle>
                <PM7DialogSubTitle>
                  A comprehensive UI component library for Winfakt applications.
                </PM7DialogSubTitle>
              </PM7DialogHeader>
              <div style={{ margin: '16px 0', borderTop: `1px solid ${theme === 'dark' ? '#525252' : '#e2e8f0'}`, paddingTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontWeight: '500', minWidth: '100px', color: theme === 'dark' ? '#a1a1aa' : '#64748b' }}>Version:</span>
                  <span>1.0.8</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontWeight: '500', minWidth: '100px', color: theme === 'dark' ? '#a1a1aa' : '#64748b' }}>Author:</span>
                  <span>hi@pm7.ink</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontWeight: '500', minWidth: '100px', color: theme === 'dark' ? '#a1a1aa' : '#64748b' }}>License:</span>
                  <span>ISC</span>
                </div>
              </div>
              <PM7DialogFooter>
                <button 
                  onClick={() => setShowAboutDialog(false)}
                  className="pm7-dialog-button"
                >
                  Close
                </button>
              </PM7DialogFooter>
            </PM7DialogContent>
          </PM7Dialog>
        </div>
        <div className="example-code">
          <h3>Usage</h3>
          <pre>
            <code>{`import { PM7MenuComponent as Menu } from 'pm7-ui-style-guide';

// Function to get label based on selected language
const getLabel = (item) => {
  const langKey = \`label-\${selectedLanguage}\`;
  return item[langKey] || item.label || '';
};

// Define menu items with inline translations
const menuItems = [
  {
    id: 'profile',
    label: 'Profile',
    'label-en': 'Profile',
    'label-es': 'Perfil',
    'label-nl': 'Profiel',
    onClick: () => console.log('Profile selected')
  },
  {
    id: 'language',
    label: 'Language',
    'label-en': 'Language',
    'label-es': 'Idioma',
    'label-nl': 'Taal',
    type: 'submenu',
    submenuItems: [
      // language options...
    ]
  }
];

// Use the menu with translations
<Menu 
  menuItems={menuItems.map(item => ({
    ...item,
    label: getLabel(item),
    submenuItems: item.submenuItems?.map(subItem => ({
      ...subItem,
      label: getLabel(subItem)
    }))
  }))} 
  initialTheme="light" 
/>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default MenuExample;
