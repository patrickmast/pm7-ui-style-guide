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

const ExampleMenuUsage = ({ selectedLanguage, theme }: { selectedLanguage: LanguageType; theme: 'light' | 'dark' }) => {
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

  const codeInlineStyle = {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f3f4f6',
    padding: '0.125rem 0.5rem',
    borderRadius: '0.25rem',
    color: theme === 'dark' ? '#e5e7eb' : '#1f2937'
  };

  const codeBlockStyle = {
    backgroundColor: theme === 'dark' ? '#2A2A2A' : '#f3f4f6',
    padding: '1rem',
    borderRadius: '0.375rem',
    marginBottom: '1rem',
    overflowX: 'auto' as const,
    border: `1px solid ${theme === 'dark' ? '#525252' : '#d1d5db'}`
  };

  const codeStyle = {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    color: theme === 'dark' ? '#e5e7eb' : '#1f2937',
    fontSize: '0.875rem'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>{t.heading}</h1>
      <h2 style={subHeadingStyle}>{t.mainComponent}</h2>
      <p style={textStyle}>The <code style={codeInlineStyle}>PM7Menu</code> is the primary component that renders a complete dropdown menu with a hamburger icon trigger.</p>
      <div style={{marginBottom: '1.5rem'}}>
        <h2 style={subHeadingStyle}>{t.props}</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}><code style={codeInlineStyle}>menuItems</code> - Array of menu items to display (required)</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>theme</code> - Theme: 'light' or 'dark' (default: 'light')</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>menuAlignment</code> - Alignment of the menu: 'start', 'center', or 'end' (default: 'start')</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>menuTriggerIconColorLight</code> - Icon color for light mode (default: #000000)</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>menuTriggerIconColorDark</code> - Icon color for dark mode (default: #FAFAFA)</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>menuTriggerLabelColorLight</code> - Label color for light mode (default: #000000)</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>menuTriggerLabelColorDark</code> - Label color for dark mode (default: #FAFAFA)</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>mobileBreakpoint</code> - Pixel width at which to switch to mobile styling (default: 768)</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>showUncheckedIcon</code> - Show icon for unchecked items (default: false)</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>menuTriggerBordered</code> - Show border around trigger (default: false)</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>menuTriggerBorderedOnHover</code> - Show border on hover (default: false)</li>
        </ul>
      </div>
      <h2 style={subHeadingStyle}>{t.menuItemTypes}</h2>
      <p style={textStyle}>The <code style={codeInlineStyle}>PM7MenuItem</code> interface supports various item types:</p>
      <div style={{marginBottom: '1.5rem'}}>
        <ul style={listStyle}>
          <li style={listItemStyle}><code style={codeInlineStyle}>normal</code> - Standard clickable menu item (default)</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>check</code> - Checkbox menu item with checkmark icon</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>radio</code> - Radio button menu item</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>submenu</code> - Item that opens a nested submenu</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>separator</code> - Horizontal line to separate menu sections</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>switch</code> - Toggle switch menu item</li>
        </ul>
      </div>
      <h2 style={subHeadingStyle}>{t.menuItemProps}</h2>
      <p style={textStyle}>Each menu item accepts the following properties:</p>
      <div style={{marginBottom: '1.5rem'}}>
        <ul style={listStyle}>
          <li style={listItemStyle}><code style={codeInlineStyle}>id</code> - Unique identifier for the menu item (required)</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>label</code> - Text or component to display (required)</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>type</code> - Menu item type as described above (default: 'normal')</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>onClick</code> - Function to call when the item is clicked</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>icon</code> - Optional icon to display before the label</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>rightIcon</code> - Optional icon to display after the label</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>disabled</code> - Whether the item is disabled (default: false)</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>checked</code> - For check/radio/switch items, whether it's checked (default: false)</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>onChange</code> - For check/radio/switch items, function to call when checked state changes</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>submenuItems</code> - Array of menu items for submenu (required for type: 'submenu')</li>
        </ul>
      </div>
      <h2 style={subHeadingStyle}>{t.multiLanguageSupport}</h2>
      <p style={textStyle}>Menu items support multiple languages through language-specific label properties:</p>
      <div style={{marginBottom: '1.5rem'}}>
        <ul style={listStyle}>
          <li style={listItemStyle}><code style={codeInlineStyle}>label-en</code> - English label</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>label-es</code> - Spanish label</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>label-fr</code> - French label</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>label-de</code> - German label</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>label-nl</code> - Dutch label</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>label-nl-be</code> - Belgian Dutch label</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>label-zh</code> - Chinese label</li>
        </ul>
      </div>
      <h2 style={subHeadingStyle}>{t.primitiveComponents}</h2>
      <p style={textStyle}>For custom menu implementations, you can use these individual primitive components:</p>
      <div style={{marginBottom: '1.5rem'}}>
        <ul style={listStyle}>
          <li style={listItemStyle}><code style={codeInlineStyle}>PM7MenuRoot</code> - Root component that manages menu state</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>PM7MenuTrigger</code> - Button that toggles the menu</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>PM7MenuContent</code> - Dropdown content container</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>PM7MenuItem</code> - Individual menu item</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>PM7MenuCheckboxItem</code> - Checkbox menu item</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>PM7MenuRadioItem</code> - Radio button menu item</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>PM7MenuSeparator</code> - Horizontal separator line</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>PM7MenuSub</code> - Submenu container</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>PM7MenuSubTrigger</code> - Submenu trigger item</li>
          <li style={listItemStyle}><code style={codeInlineStyle}>PM7MenuSubContent</code> - Submenu content container</li>
        </ul>
      </div>
      <h2 style={subHeadingStyle}>{t.usageExample}</h2>
      <div style={codeBlockStyle}>
        <code style={codeStyle}>{`// For local development, use relative imports
import { PM7Menu } from '../src/components/menu';
import { HomeIcon, SettingsIcon, LanguagesIcon } from 'lucide-react';

// Define menu items
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
    type: 'separator'
  },
  {
    id: 'language',
    label: 'Language',
    icon: <LanguagesIcon size={16} />,
    type: 'submenu',
    submenuItems: [
      {
        id: 'en',
        label: 'English',
        type: 'check',
        checked: true,
        onClick: () => console.log('English selected')
      },
      {
        id: 'es',
        label: 'Español',
        type: 'check',
        checked: false,
        onClick: () => console.log('Spanish selected')
      }
    ]
  }
];

// Render menu with different alignments
function MenuExample() {
  return (
    <div className="flex flex-col gap-4">
      <PM7Menu
        menuItems={menuItems}
        theme="light"
        menuAlignment="start"
      />
      <PM7Menu
        menuItems={menuItems}
        theme="light"
        menuAlignment="center"
      />
      <PM7Menu
        menuItems={menuItems}
        theme="light"
        menuAlignment="end"
        menuTriggerIconColorLight="#1C86EF"
      />
    </div>
  );
}`}</code>
      </div>
    </div>
  );
};

export default ExampleMenuUsage;