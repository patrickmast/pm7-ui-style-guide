import React from 'react';

interface Descriptions {
  [key: string]: {
    heading: string;
    intro: string;
    multiLanguage: string;
    themeSwitching: string;
    submenu: string;
    icons: string;
    separators: string;
    checkboxes: string;
    alignment: string;
    customIconColor: string;
    gettingStarted: string;
    usage: string;
    props: string;
    mainComponent: string;
  };
}

type LanguageType = 'en' | 'es' | 'fr' | 'de' | 'nl' | 'nl-be' | 'zh';

const descriptions: Descriptions = {
  en: {
    heading: 'PM7Menu Component',
    intro: 'The PM7Menu component provides a flexible and customizable menu system for your application. It supports various features including:',
    multiLanguage: 'Multi-language support with automatic language detection',
    themeSwitching: 'Theme switching (light/dark mode)',
    submenu: 'Submenu support for nested navigation',
    icons: 'Icon integration with Lucide React icons',
    separators: 'Separators for visual organization',
    checkboxes: 'Checkboxes and switches for toggleable options',
    alignment: 'Flexible alignment options (start, center, end)',
    customIconColor: 'Customizable icon colors',
    gettingStarted: 'Getting Started',
    usage: 'To use the PM7Menu component in your project:',
    props: 'Props',
    mainComponent: 'Main Component'
  },
  // Add other languages as needed...
};

const ExampleMenuOverview = ({ selectedLanguage, theme }: { selectedLanguage: LanguageType; theme: 'light' | 'dark' }) => {
  const t = descriptions[selectedLanguage] || descriptions['en'];
  
  const containerStyle = {
    padding: '1.5rem'
  };

  const headingStyle = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: theme === 'dark' ? '#ffffff' : '#111827'
  };

  const subHeadingStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: theme === 'dark' ? '#ffffff' : '#111827'
  };

  const textStyle = {
    marginBottom: '1rem',
    color: theme === 'dark' ? '#d1d5db' : '#374151',
    lineHeight: '1.6'
  };

  const listStyle = {
    listStyle: 'disc',
    marginLeft: '1.25rem',
    marginBottom: '1.5rem',
    color: theme === 'dark' ? '#d1d5db' : '#374151'
  };

  const listItemStyle = {
    marginBottom: '0.5rem'
  };

  const codeContainerStyle = {
    marginTop: '0.5rem',
    borderRadius: '0.375rem',
    overflow: 'hidden'
  };

  const codeBlockStyle = {
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f3f4f6',
    padding: '1rem',
    overflowX: 'auto' as const,
    fontSize: '0.875rem'
  };

  const codeStyle = {
    color: theme === 'dark' ? '#e5e7eb' : '#1f2937',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>{t.heading}</h1>
      <h2 style={subHeadingStyle}>{t.props}</h2>
      <p style={textStyle}>{t.intro}</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>{t.multiLanguage}</li>
        <li style={listItemStyle}>{t.themeSwitching}</li>
        <li style={listItemStyle}>{t.submenu}</li>
        <li style={listItemStyle}>{t.icons}</li>
        <li style={listItemStyle}>{t.separators}</li>
        <li style={listItemStyle}>{t.checkboxes}</li>
        <li style={listItemStyle}>{t.alignment}</li>
        <li style={listItemStyle}>{t.customIconColor}</li>
      </ul>
      <p style={textStyle}>
        Check the <strong>Demo</strong> tab to see the menu in action with different configurations, the <strong>Usage</strong> tab for implementation details, and the <strong>Documentation</strong> tab for complete API reference.
      </p>
      <h2 style={subHeadingStyle}>{t.mainComponent}</h2>
      <p style={textStyle}>{t.usage}</p>
      <div style={codeContainerStyle}>
        <div style={codeBlockStyle}>
          <code style={codeStyle}>
            {`// For local development, use relative imports
import { PM7Menu } from '../src/components/menu';

// Basic usage
<PM7Menu
  menuItems={menuItems}
  theme="light"
/>`}
          </code>
        </div>
      </div>
    </div>
  );
};

export default ExampleMenuOverview;