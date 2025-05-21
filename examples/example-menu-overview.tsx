// Enhancement: Synced with README. Updated usage code to use theme="light" and confirmed all features match the latest documentation.
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

const ExampleMenuOverview = ({ selectedLanguage }: { selectedLanguage: LanguageType }) => {
  const t = descriptions[selectedLanguage] || descriptions['en'];
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{t.heading}</h1>
      <h2 className="text-2xl font-bold mb-4">{t.props}</h2>
      <p className="mb-4">{t.intro}</p>
      <ul className="list-disc ml-5 mb-6">
        <li className="mb-2">{t.multiLanguage}</li>
        <li className="mb-2">{t.themeSwitching}</li>
        <li className="mb-2">{t.submenu}</li>
        <li className="mb-2">{t.icons}</li>
        <li className="mb-2">{t.separators}</li>
        <li className="mb-2">{t.checkboxes}</li>
        <li className="mb-2">{t.alignment}</li>
        <li className="mb-2">{t.customIconColor}</li>
      </ul>
      <p className="mb-4">Check the <strong>Demo</strong> tab to see the menu in action with different configurations, the <strong>Usage</strong> tab for implementation details, and the <strong>Documentation</strong> tab for complete API reference.</p>
      <h2 className="text-2xl font-bold mb-4">{t.mainComponent}</h2>
      <p>{t.usage}</p>
      <div className="mt-2 rounded-md overflow-hidden">
        <pre className="bg-gray-100 dark:bg-gray-900 p-4 overflow-x-auto text-sm">
          <code className="text-gray-800 dark:text-gray-200">
            {`// For local development, use relative imports
import { PM7Menu } from '../src/components/menu';

// Basic usage
<PM7Menu
  menuItems={menuItems}
  theme="light"
/>`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ExampleMenuOverview;
