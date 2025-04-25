// Enhancement: Separated menu example into its own component file for better organization
import React, { useState, useEffect } from 'react';
import { PM7MenuComponent as Menu } from '../src/pm7-menu-component';

// Sun icon component
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

// Moon icon component
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
    className="theme-icon"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// Menu example component
const MenuExample = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('winfakt-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('winfakt-theme', theme);
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
    return 'english';
  });

  // Function to select language
  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    localStorage.setItem('winfakt-language', language);
    console.log(`${language} selected`);
  };

  // Define menu items
  const menuItems = [
    {
      id: 'profile',
      label: 'Profile',
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
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    {
      id: 'settings',
      label: 'Settings',
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
      id: 'divider-1',
      label: '',
      type: 'separator' as 'separator'
    },
    {
      id: 'language',
      label: 'Language',
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
          id: 'english',
          label: 'English',
          type: 'check' as 'check',
          checked: selectedLanguage === 'english',
          onClick: () => selectLanguage('english')
        },
        {
          id: 'espanol',
          label: 'Español',
          type: 'check' as 'check',
          checked: selectedLanguage === 'espanol',
          onClick: () => selectLanguage('espanol')
        },
        {
          id: 'francais',
          label: 'Français',
          type: 'check' as 'check',
          checked: selectedLanguage === 'francais',
          onClick: () => selectLanguage('francais')
        },
        {
          id: 'deutsch',
          label: 'Deutsch',
          type: 'check' as 'check',
          checked: selectedLanguage === 'deutsch',
          onClick: () => selectLanguage('deutsch')
        },
        {
          id: 'nederlands',
          label: 'Nederlands',
          type: 'check' as 'check',
          checked: selectedLanguage === 'nederlands',
          onClick: () => selectLanguage('nederlands')
        }
      ]
    },
    {
      id: 'theme',
      label: `Theme: ${theme === 'dark' ? 'Dark' : 'Light'}`,
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
      onClick: () => console.log('About selected'),
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
              {theme === 'light' ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>
        </div>
      </div>
      <div className="example-container">
        <div className="example-preview" style={{ background: theme === 'dark' ? '#262626' : '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
          <Menu menuItems={menuItems} initialTheme={theme} />
        </div>
      </div>
      <div className="example-code">
        <h3>Usage</h3>
        <pre>
          <code>{`import { PM7MenuComponent as Menu } from 'winfakt-ui-style-guide';

// Define menu items
const menuItems = [
  {
    id: 'language',
    label: 'Set language',
    onClick: () => console.log('Language selected')
  },
  {
    id: 'theme',
    label: 'Theme: Light',
    onClick: () => toggleTheme(),
    rightIcon: <SunIcon />
  }
];

// Use the menu with custom items
<Menu menuItems={menuItems} initialTheme="light" />`}</code>
        </pre>
      </div>
    </div>
  );
};

export default MenuExample;
