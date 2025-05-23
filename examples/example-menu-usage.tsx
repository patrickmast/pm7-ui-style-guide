// Enhancement: Synced with README. Added missing props and updated top comment to reflect latest documentation.
import React from 'react';

interface Descriptions {
  [key: string]: {
    heading: string;
    mainComponent: string;
    props: string;
    menuItemTypes: string;
    menuItemProps: string;
    multiLanguageSupport: string;
    primitiveComponents: string;
    usageExample: string;
  };
}

type LanguageType = 'en' | 'es' | 'fr' | 'de' | 'nl' | 'nl-be' | 'zh';

const descriptions: Descriptions = {
  en: {
    heading: 'PM7Menu Components and Properties',
    mainComponent: 'Main Component',
    props: 'Props:',
    menuItemTypes: 'Menu Item Types',
    menuItemProps: 'Menu Item Properties',
    multiLanguageSupport: 'Multi-language Support',
    primitiveComponents: 'Primitive Components',
    usageExample: 'Usage Example',
  },
  // Add other languages as needed...
};

const ExampleMenuUsage = ({ selectedLanguage }: { selectedLanguage: LanguageType }) => {
  const t = descriptions[selectedLanguage] || descriptions['en'];
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{t.heading}</h1>
      <h2 className="text-2xl font-bold mb-4">{t.mainComponent}</h2>
      <p className="mb-4">The <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">PM7Menu</code> is the primary component that renders a complete dropdown menu with a hamburger icon trigger.</p>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">{t.props}</h2>
        <ul className="list-disc ml-5 mb-4">
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">menuItems</code> - Array of menu items to display (required)</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">theme</code> - Theme: 'light' or 'dark' (default: 'light')</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">menuAlignment</code> - Alignment of the menu: 'start', 'center', or 'end' (default: 'start')</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">menuTriggerIconColorLight</code> - Icon color for light mode (default: #000000)</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">menuTriggerIconColorDark</code> - Icon color for dark mode (default: #FAFAFA)</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">menuTriggerLabelColorLight</code> - Label color for light mode (default: #000000)</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">menuTriggerLabelColorDark</code> - Label color for dark mode (default: #FAFAFA)</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">mobileBreakpoint</code> - Pixel width at which to switch to mobile styling (default: 768)</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">showUncheckedIcon</code> - Show icon for unchecked items (default: false)</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">menuTriggerBordered</code> - Show border around trigger (default: false)</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">menuTriggerBorderedOnHover</code> - Show border on hover (default: false)</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">{t.menuItemTypes}</h2>
      <p className="mb-4">The <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">PM7MenuItem</code> interface supports various item types:</p>
      <div className="mb-6">
        <ul className="list-disc ml-5 mb-4">
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">normal</code> - Standard clickable menu item (default)</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">check</code> - Checkbox menu item with checkmark icon</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">radio</code> - Radio button menu item</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">submenu</code> - Item that opens a nested submenu</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">separator</code> - Horizontal line to separate menu sections</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">switch</code> - Toggle switch menu item</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">{t.menuItemProps}</h2>
      <p className="mb-4">Each menu item accepts the following properties:</p>
      <div className="mb-6">
        <ul className="list-disc ml-5 mb-4">
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">id</code> - Unique identifier for the menu item (required)</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">label</code> - Text or component to display (required)</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">type</code> - Menu item type as described above (default: 'normal')</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">onClick</code> - Function to call when the item is clicked</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">icon</code> - Optional icon to display before the label</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">rightIcon</code> - Optional icon to display after the label</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">disabled</code> - Whether the item is disabled (default: false)</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">checked</code> - For check/radio/switch items, whether it's checked (default: false)</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">onChange</code> - For check/radio/switch items, function to call when checked state changes</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">submenuItems</code> - Array of menu items for submenu (required for type: 'submenu')</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">{t.multiLanguageSupport}</h2>
      <p className="mb-4">Menu items support multiple languages through language-specific label properties:</p>
      <div className="mb-6">
        <ul className="list-disc ml-5 mb-4">
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">label-en</code> - English label</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">label-es</code> - Spanish label</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">label-fr</code> - French label</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">label-de</code> - German label</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">label-nl</code> - Dutch label</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">label-nl-be</code> - Belgian Dutch label</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">label-zh</code> - Chinese label</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">{t.primitiveComponents}</h2>
      <p className="mb-4">For custom menu implementations, you can use these individual primitive components:</p>
      <div className="mb-6">
        <ul className="list-disc ml-5 mb-4">
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">PM7MenuRoot</code> - Root component that manages menu state</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">PM7MenuTrigger</code> - Button that toggles the menu</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">PM7MenuContent</code> - Dropdown content container</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">PM7MenuItem</code> - Individual menu item</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">PM7MenuCheckboxItem</code> - Checkbox menu item</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">PM7MenuRadioItem</code> - Radio button menu item</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">PM7MenuSeparator</code> - Horizontal separator line</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">PM7MenuSub</code> - Submenu container</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">PM7MenuSubTrigger</code> - Submenu trigger item</li>
          <li className="mb-2"><code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">PM7MenuSubContent</code> - Submenu content container</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">{t.usageExample}</h2>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-4">
        <code>{`// For local development, use relative imports\nimport { PM7Menu } from '../src/components/menu';\nimport { HomeIcon, SettingsIcon, LanguagesIcon } from 'lucide-react';\n\n// Define menu items\nconst menuItems = [\n  {\n    id: 'home',\n    label: 'Home',\n    icon: <HomeIcon size={16} />,\n    onClick: () => console.log('Home clicked')\n  },\n  {\n    id: 'settings',\n    label: 'Settings',\n    icon: <SettingsIcon size={16} />,\n    onClick: () => console.log('Settings clicked')\n  },\n  {\n    id: 'separator',\n    type: 'separator'\n  },\n  {\n    id: 'language',\n    label: 'Language',\n    icon: <LanguagesIcon size={16} />,\n    type: 'submenu',\n    submenuItems: [\n      {\n        id: 'en',\n        label: 'English',\n        type: 'check',\n        checked: true,\n        onClick: () => console.log('English selected')\n      },\n      {\n        id: 'es',\n        label: 'Español',\n        type: 'check',\n        checked: false,\n        onClick: () => console.log('Spanish selected')\n      }\n    ]\n  }\n];\n\n// Render menu with different alignments\nfunction MenuExample() {\n  return (\n    <div className=\"flex flex-col gap-4\">\n      <PM7Menu\n        menuItems={menuItems}\n        theme=\"light\"\n        menuAlignment=\"start\"\n      />\n      <PM7Menu\n        menuItems={menuItems}\n        theme=\"light\"\n        menuAlignment=\"center\"\n      />\n      <PM7Menu\n        menuItems={menuItems}\n        theme=\"light\"\n        menuAlignment=\"end\"\n        menuTriggerIconColorLight=\"#1C86EF\"\n      />\n    </div>\n  );\n}`}</code>
      </pre>
    </div>
  );
};

export default ExampleMenuUsage;
