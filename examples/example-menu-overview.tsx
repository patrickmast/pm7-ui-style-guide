// Refactor: Extracted the "Overview" tab content from example-menu.tsx to this file as ExampleMenuOverview.
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
  };
}

type LanguageType = 'en' | 'es' | 'fr' | 'de' | 'nl' | 'nl-be' | 'zh';

const descriptions: Descriptions = {
  en: {
    heading: 'PM7 Menu Component',
    intro: 'The PM7 Menu component provides a flexible and customizable menu system for your application. It supports various features including:',
    multiLanguage: 'Multi-language support with automatic language detection',
    themeSwitching: 'Theme switching (light/dark mode)',
    submenu: 'Submenu support for nested navigation',
    icons: 'Icon integration with Lucide React icons',
    separators: 'Separators for visual organization',
    checkboxes: 'Checkboxes and switches for toggleable options',
    alignment: 'Flexible alignment options (start, center, end)',
    customIconColor: 'Customizable icon colors',
    gettingStarted: 'Getting Started',
    usage: 'To use the PM7 Menu component in your project:',
  },
  // Add other languages as needed...
};

const ExampleMenuOverview = ({ selectedLanguage, theme }: { selectedLanguage: LanguageType, theme: 'light' | 'dark' }) => {
  const t = descriptions[selectedLanguage] || descriptions['en'];
  return (
    <div className={`component-example ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{t.heading}</h2>
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
        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">{t.gettingStarted}</h3>
          <p>{t.usage}</p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mt-2 overflow-x-auto">
            <code>{`// For local development, use relative imports\nimport { PM7Menu } from '../src/components/menu';\n\n// Basic usage\n<PM7Menu\n  menuItems={menuItems}\n  initialTheme=\"light\"\n/>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ExampleMenuOverview;
