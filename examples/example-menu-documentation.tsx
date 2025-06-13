// Enhancement: This Documentation tab is now a complete, semantic HTML/JSX rendering of the PM7Menu README. All sections, usage examples, props, best practices, primitive components, and styling info are present and always in sync with the README.
import React from 'react';

const ExampleMenuDocumentation = () => (
  <div className="p-6 text-base leading-relaxed dark:text-white">
    <h1 className="text-3xl font-bold mb-6">PM7Menu Component</h1>
    <section>
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <p className="mb-4">
        The PM7Menu component provides a flexible, accessible dropdown menu system for the PM7 UI Style Guide. It can be used with fully configurable menu items, allowing for complete customization of the menu content. This component follows the project's component directory pattern, located at <code>src/components/menu/pm7-menu.tsx</code>.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold mb-4">PM7MenuIcon (Official Menu Icon)</h2>
      <p className="mb-2">The <code>PM7MenuIcon</code> component provides the official hamburger menu icon used in the PM7Menu trigger and is recommended for use in menu items to ensure visual consistency across your application.</p>
      <ul className="list-disc ml-5 mb-2">
        <li><strong>Theme-aware:</strong> The icon automatically adapts to the current theme (light/dark) via the <code>color</code> prop (defaults to <code>currentColor</code>).</li>
        <li><strong>Consistent:</strong> Using <code>PM7MenuIcon</code> for both the menu trigger and menu items guarantees a unified look, even if the icon design changes in the future.</li>
      </ul>
      <div className="mb-4">
        <span className="font-semibold">Usage Example:</span>
        <div className="mt-2 rounded-md overflow-hidden">
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 overflow-x-auto text-sm">
            <code className="text-gray-800 dark:text-gray-200">
{`import { PM7Menu, PM7MenuIcon } from 'pm7-ui-style-guide';

const menuItems = [
  {
    id: 'home',
    label: 'Home',
    icon: <PM7MenuIcon size={16} />
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <PM7MenuIcon size={16} />
  },
  // ...other items
];

<PM7Menu menuItems={menuItems} theme="dark" />`}
            </code>
          </pre>
        </div>
        <ul className="list-disc ml-5 mt-2">
          <li>The menu trigger button also uses <code>PM7MenuIcon</code> by default.</li>
          <li>You can adjust the <code>size</code> and <code>color</code> props as needed (default color is <code>currentColor</code>).</li>
        </ul>
      </div>
    </section>
    <section>
      <h2 className="text-2xl font-bold mb-4">Usage</h2>
      <h3 className="text-xl font-semibold mb-2">Complete Menu Component</h3>
      <div className="rounded-md overflow-hidden mb-4">
        <pre className="bg-gray-100 dark:bg-gray-900 p-4 overflow-x-auto text-sm">
          <code className="text-gray-800 dark:text-gray-200">
{`// For local development, use relative imports
import { PM7Menu, PM7MenuIcon } from '../src/components/menu';
// For production, use package imports
// import { PM7Menu, PM7MenuIcon } from 'pm7-ui-style-guide';

function MyComponent() {
  // Define your custom menu items
  const menuItems = [
    {
      id: 'language',
      label: 'Set language',
      onClick: () => console.log('Language selected'),
      icon: <PM7MenuIcon size={16} />
    },
    {
      id: 'theme',
      label: 'Theme: Light',
      onClick: () => toggleTheme(),
      icon: <PM7MenuIcon size={16} />
    }
  ];

  // Theme should come from React state or context
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <PM7Menu
      menuItems={menuItems}
      theme={theme}
    />
  );
}`}
          </code>
        </pre>
      </div>

      <h3 className="text-xl font-semibold mb-2">Props</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-left border border-gray-200 dark:border-gray-700 text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="p-2 border-b border-gray-200 dark:border-gray-700 font-semibold">Prop</th>
              <th className="p-2 border-b border-gray-200 dark:border-gray-700 font-semibold">Type</th>
              <th className="p-2 border-b border-gray-200 dark:border-gray-700 font-semibold">Default</th>
              <th className="p-2 border-b border-gray-200 dark:border-gray-700 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2 align-top"><code>menuItems</code></td><td className="p-2 align-top"><code>PM7MenuItem[]</code></td><td className="p-2 align-top">[]</td><td className="p-2">Array of menu items to display (required)</td></tr>
            <tr><td className="p-2 align-top"><code>theme</code></td><td className="p-2 align-top"><code>'light' | 'dark'</code></td><td className="p-2 align-top">'light'</td><td className="p-2">The current theme for the menu. Should be controlled by React state or context for instant updates.</td></tr>
            <tr><td className="p-2 align-top"><code>mobileBreakpoint</code></td><td className="p-2 align-top"><code>number</code></td><td className="p-2 align-top">768</td><td className="p-2">Pixel width at which to switch to mobile styling</td></tr>
            <tr><td className="p-2 align-top"><code>menuAlignment</code></td><td className="p-2 align-top"><code>'start' | 'center' | 'end'</code></td><td className="p-2 align-top">'start'</td><td className="p-2">Alignment of the menu relative to the trigger</td></tr>
            <tr><td className="p-2 align-top"><code>menuIcon</code></td><td className="p-2 align-top"><code>React.ReactNode</code></td><td className="p-2 align-top">undefined</td><td className="p-2">Custom icon (SVG or React node) for the menu trigger. If not set, the default hamburger icon is used.</td></tr>
            <tr><td className="p-2 align-top"><code>menuLabel</code></td><td className="p-2 align-top"><code>React.ReactNode</code></td><td className="p-2 align-top">undefined</td><td className="p-2">Custom label (string or React node) for the menu trigger. Can be used alone or with <code>menuIcon</code>.</td></tr>
            <tr><td className="p-2 align-top"><code>menuTriggerIconColorLight</code></td><td className="p-2 align-top"><code>string</code></td><td className="p-2 align-top">#000000</td><td className="p-2">Icon color for light mode.</td></tr>
            <tr><td className="p-2 align-top"><code>menuTriggerIconColorDark</code></td><td className="p-2 align-top"><code>string</code></td><td className="p-2 align-top">#FAFAFA</td><td className="p-2">Icon color for dark mode.</td></tr>
            <tr><td className="p-2 align-top"><code>menuTriggerLabelColorLight</code></td><td className="p-2 align-top"><code>string</code></td><td className="p-2 align-top">#000000</td><td className="p-2">Label color for light mode.</td></tr>
            <tr><td className="p-2 align-top"><code>menuTriggerLabelColorDark</code></td><td className="p-2 align-top"><code>string</code></td><td className="p-2 align-top">#FAFAFA</td><td className="p-2">Label color for dark mode.</td></tr>
            <tr><td className="p-2 align-top"><code>showUncheckedIcon</code></td><td className="p-2 align-top"><code>boolean</code></td><td className="p-2 align-top">false</td><td className="p-2">Whether to show an icon for unchecked items.</td></tr>
            <tr><td className="p-2 align-top"><code>menuTriggerBordered</code></td><td className="p-2 align-top"><code>boolean</code></td><td className="p-2 align-top">false</td><td className="p-2">If true, always show a border and subtle background on the menu trigger. Takes precedence over <code>menuTriggerBorderedOnHover</code>.</td></tr>
            <tr><td className="p-2 align-top"><code>menuTriggerBorderedOnHover</code></td><td className="p-2 align-top"><code>boolean</code></td><td className="p-2 align-top">false</td><td className="p-2">If true, show a border and subtle background only on hover of the trigger. Ignored if <code>menuTriggerBordered</code> is true.</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h3 className="text-xl font-semibold mb-2">Icon and Label Coloring Rules</h3>
      <ul className="list-disc ml-5 mb-4">
        <li>If <code>menuTriggerIconColorLight</code> is set, it is used for the icon in light mode; otherwise, black (<code>#000000</code>) is used.</li>
        <li>If <code>menuTriggerIconColorDark</code> is set, it is used for the icon in dark mode; otherwise, white (<code>#FAFAFA</code>) is used.</li>
        <li>If <code>menuTriggerLabelColorLight</code> is set, it is used for the label in light mode; otherwise, black (<code>#000000</code>) is used.</li>
        <li>If <code>menuTriggerLabelColorDark</code> is set, it is used for the label in dark mode; otherwise, white (<code>#FAFAFA</code>) is used.</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Trigger Combinations</h3>
      <ul className="list-disc ml-5 mb-4">
        <li>If only <code>menuLabel</code> is set, the trigger is a label (e.g., "File").</li>
        <li>If only <code>menuIcon</code> is set, the trigger is an icon.</li>
        <li>If both are set, the trigger is a label with an icon (icon appears before the label).</li>
        <li>If neither is set, the trigger is the default hamburger icon.</li>
      </ul>
      <div className="mb-4">
        <span className="font-semibold">Usage Examples:</span>
        <div className="mt-2 rounded-md overflow-hidden">
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 overflow-x-auto text-sm">
            <code className="text-gray-800 dark:text-gray-200">
{`// Default Hamburger Icon
<PM7Menu menuItems={menuItems} />

// Custom Icon
<PM7Menu
  menuItems={menuItems}
  menuIcon={<MyCustomIcon />}
  menuTriggerIconColorLight="#1C86EF" // PM7 Blue
  menuTriggerIconColorDark="#FFDD00"  // Yellow
/>

// Label as Trigger
<PM7Menu
  menuItems={menuItems}
  menuLabel="File"
  menuTriggerLabelColorLight="#000000" // Black
  menuTriggerLabelColorDark="#FAFAFA"  // White
/>

// Label and Icon as Trigger
<PM7Menu
  menuItems={menuItems}
  menuLabel="File"
  menuIcon={<MyCustomIcon />}
  menuTriggerIconColorLight="#1C86EF" // PM7 Blue
  menuTriggerIconColorDark="#FFDD00"  // Yellow
  menuTriggerLabelColorLight="#000000" // Black
  menuTriggerLabelColorDark="#FAFAFA"  // White
/>`}
            </code>
          </pre>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">Menu Trigger Border &amp; Background</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-left border border-gray-200 dark:border-gray-700 text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="p-2 border-b border-gray-200 dark:border-gray-700 font-semibold">Prop</th>
              <th className="p-2 border-b border-gray-200 dark:border-gray-700 font-semibold">Type</th>
              <th className="p-2 border-b border-gray-200 dark:border-gray-700 font-semibold">Default</th>
              <th className="p-2 border-b border-gray-200 dark:border-gray-700 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2 align-top"><code>menuTriggerBordered</code></td><td className="p-2 align-top"><code>boolean</code></td><td className="p-2 align-top">false</td><td className="p-2">If true, always show a border and subtle background on the menu trigger. Takes precedence over <code>menuTriggerBorderedOnHover</code>.</td></tr>
            <tr><td className="p-2 align-top"><code>menuTriggerBorderedOnHover</code></td><td className="p-2 align-top"><code>boolean</code></td><td className="p-2 align-top">false</td><td className="p-2">If true, show a border and subtle background only on hover of the trigger. Ignored if <code>menuTriggerBordered</code> is true.</td></tr>
          </tbody>
        </table>
      </div>
      <span className="font-semibold">Examples:</span>
      <div className="mt-2 rounded-md overflow-hidden">
        <pre className="bg-gray-100 dark:bg-gray-900 p-4 overflow-x-auto text-sm">
          <code className="text-gray-800 dark:text-gray-200">
{`// Default (no border)
<PM7Menu menuItems={menuItems} />

// Always show border/background
<PM7Menu
  menuItems={menuItems}
  menuTriggerBordered={true}
/>

// Show border/background on hover only
<PM7Menu
  menuItems={menuItems}
  menuTriggerBorderedOnHover={true}
/>

// Combined with custom icon and label
<PM7Menu
  menuItems={menuItems}
  menuLabel="File"
  menuIcon={<PM7MenuIcon size={20} />}
  menuTriggerBorderedOnHover={true}
  menuTriggerIconColorLight="#1C86EF"
  menuTriggerLabelColorLight="#1C86EF"
  menuTriggerIconColorDark="#FFDD00"
  menuTriggerLabelColorDark="#FFDD00"
/>`}
          </code>
        </pre>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4">Menu Item Types</h2>
      <ul className="list-disc ml-5 mb-4">
        <li><strong>normal</strong> – Standard clickable menu item</li>
        <li><strong>check</strong> – Checkbox menu item</li>
        <li><strong>radio</strong> – Radio button menu item</li>
        <li><strong>submenu</strong> – Nested submenu</li>
        <li><strong>separator</strong> – Visual separator (requires both <code>id</code> and <code>type: 'separator'</code>)</li>
        <li><strong>switch</strong> – Toggle switch menu item</li>
      </ul>
      <div className="mb-4">
        <span className="font-semibold">Separator Usage:</span>
        <div className="mt-2 rounded-md overflow-hidden">
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 overflow-x-auto text-sm">
            <code className="text-gray-800 dark:text-gray-200">
{`// Correct separator format - both id and type are required
{
  id: 'separator1',    // Required for React keys
  type: 'separator'    // Required to identify as separator
}

// Complete example with separators
const menuItems = [
  { id: 'new', label: 'New File', onClick: () => {} },
  { id: 'open', label: 'Open File', onClick: () => {} },
  { id: 'separator1', type: 'separator' },  // Separator between groups
  { id: 'save', label: 'Save', onClick: () => {} },
  { id: 'saveAs', label: 'Save As...', onClick: () => {} },
  { id: 'separator2', type: 'separator' },  // Another separator
  { id: 'exit', label: 'Exit', onClick: () => {} }
];`}
            </code>
          </pre>
        </div>
        <div className="mt-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded">
          <p className="text-sm"><strong>Important:</strong> If separators are not appearing, ensure the PM7Menu CSS is imported and check for CSS conflicts. See the Troubleshooting section for solutions.</p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4">Internationalization</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>Supports multiple languages using <code>label-en</code>, <code>label-es</code>, etc. on menu items</li>
        <li>Always provide a default <code>label</code> as fallback</li>
        <li>RTL support: menu adapts to <code>dir="rtl"</code> on the HTML element</li>
        <li>Test with various languages and text lengths</li>
      </ul>
      <div className="mt-2 rounded-md overflow-hidden">
        <pre className="bg-gray-100 dark:bg-gray-900 p-4 overflow-x-auto text-sm">
          <code className="text-gray-800 dark:text-gray-200">
{`const menuItems = [
  {
    id: 'profile',
    label: 'Profile',
    'label-en': 'Profile',
    'label-es': 'Perfil',
    'label-fr': 'Profil',
    // ...other languages
    onClick: () => {}
  },
];`}
          </code>
        </pre>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
      <ul className="list-decimal ml-5 mb-4">
        <li>Use <code>PM7MenuIcon</code> for consistency in menu items and triggers.</li>
        <li>Control theme via React state/context for dynamic updates.</li>
        <li>Organize menu items with <code>type: 'separator'</code> and <code>type: 'submenu'</code>.</li>
        <li>Always provide <code>id</code> and <code>label</code> for accessibility.</li>
        <li>Memoize menu items and callbacks for performance.</li>
        <li>Use <code>mobileBreakpoint</code> for responsive design.</li>
        <li>Customize with color props or override CSS classes.</li>
        <li>Test all interactive elements and accessibility features.</li>
        <li>Handle errors and provide fallback content for dynamic labels/icons.</li>
        <li>Use consistent language code keys and provide fallback labels.</li>
        <li>Keep menu state in parent or context as needed; use <code>onOpenChange</code> for open/close events.</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4">CSS Framework Integration</h2>
      
      <h3 className="text-xl font-semibold mb-2">Tailwind CSS Projects</h3>
      <p className="mb-4">
        When using PM7Menu in Tailwind CSS or shadcn/ui projects, follow these guidelines for optimal compatibility:
      </p>
      
      <h4 className="font-semibold mb-2">CSS Import Order</h4>
      <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded">
        <p className="text-sm mb-2"><strong>Critical:</strong> Import order matters to ensure PM7Menu styles take precedence over framework defaults:</p>
      </div>
      <div className="rounded-md overflow-hidden mb-4">
        <pre className="bg-gray-100 dark:bg-gray-900 p-4 overflow-x-auto text-sm">
          <code className="text-gray-800 dark:text-gray-200">
{`// 1. First: Framework CSS
import './globals.css'; // Contains Tailwind directives

// 2. Second: PM7Menu CSS (must come after framework CSS)
import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css';

// 3. Third: Your custom overrides (optional)
import './custom-menu-overrides.css';`}
          </code>
        </pre>
      </div>
      <p className="mb-4 text-sm">
        <strong>Why order matters:</strong> CSS frameworks like Tailwind use reset styles that can interfere with Radix UI's default styling. PM7Menu CSS must be loaded after the framework to ensure proper component appearance.
      </p>
      
      <h4 className="font-semibold mb-2">CSS Overrides for Separator Visibility</h4>
      <p className="mb-2">
        In Tailwind/shadcn projects, separators may not be visible due to CSS framework conflicts. Add these overrides to ensure separator visibility:
      </p>
      <div className="rounded-md overflow-hidden mb-4">
        <pre className="bg-gray-100 dark:bg-gray-900 p-4 overflow-x-auto text-sm">
          <code className="text-gray-800 dark:text-gray-200">
{`/* Required overrides for Tailwind CSS compatibility */
*[data-radix-dropdown-menu-separator],
div[data-radix-dropdown-menu-separator],
hr[data-radix-dropdown-menu-separator] {
  height: 1px !important;
  background-color: #D5D5D5 !important;
  margin: 8px 0 !important;
  border: none !important;
}

/* Dark mode support */
.dark *[data-radix-dropdown-menu-separator],
.dark div[data-radix-dropdown-menu-separator],
.dark hr[data-radix-dropdown-menu-separator] {
  background-color: #525252 !important;
}`}
          </code>
        </pre>
      </div>
      <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded">
        <p className="text-sm"><strong>Note:</strong> These selectors use multiple element types (<code>*</code>, <code>div</code>, <code>hr</code>) to ensure compatibility across different Radix UI versions and rendering contexts.</p>
      </div>
      
      <h4 className="font-semibold mb-2">Recommended Integration Pattern</h4>
      <div className="rounded-md overflow-hidden mb-6">
        <pre className="bg-gray-100 dark:bg-gray-900 p-4 overflow-x-auto text-sm">
          <code className="text-gray-800 dark:text-gray-200">
{`// In your main CSS file (globals.css or similar)
@tailwind base;
@tailwind components;
@tailwind utilities;

/* PM7Menu overrides - place after Tailwind */
@import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css';

/* Separator visibility fixes */
*[data-radix-dropdown-menu-separator],
div[data-radix-dropdown-menu-separator],
hr[data-radix-dropdown-menu-separator] {
  height: 1px !important;
  background-color: #D5D5D5 !important;
  margin: 8px 0 !important;
  border: none !important;
}

.dark *[data-radix-dropdown-menu-separator],
.dark div[data-radix-dropdown-menu-separator],
.dark hr[data-radix-dropdown-menu-separator] {
  background-color: #525252 !important;
}`}
          </code>
        </pre>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
      <h3 className="text-xl font-semibold mb-2">Common Issues and Solutions</h3>
      
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Separators Not Appearing</h4>
        <div className="mb-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
          <p className="text-sm"><strong>This is the most common issue when integrating PM7Menu with CSS frameworks like Tailwind CSS or shadcn/ui.</strong></p>
        </div>
        <p className="mb-2"><strong>Root Cause:</strong> CSS framework reset styles override Radix UI's default separator styling, making separators invisible.</p>
        <p className="mb-3"><strong>Solution:</strong> Use the proven CSS overrides with proper specificity:</p>
        
        <ol className="list-decimal ml-5 mb-3">
          <li>Ensure both <code>id</code> and <code>type: 'separator'</code> are provided</li>
          <li>Verify CSS import order - PM7Menu CSS must come after framework CSS:</li>
        </ol>
        <div className="rounded-md overflow-hidden mb-3">
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 overflow-x-auto text-sm">
            <code className="text-gray-800 dark:text-gray-200">
{`// ❌ Wrong order
import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css';
import './globals.css'; // Tailwind CSS

// ✅ Correct order
import './globals.css'; // Tailwind CSS first
import 'pm7-ui-style-guide/src/components/menu/pm7-menu.css'; // PM7Menu second`}
            </code>
          </pre>
        </div>
        <ol className="list-decimal ml-5 mb-3" start="3">
          <li>Add CSS framework compatibility overrides - use these tested selectors:</li>
        </ol>
        <div className="rounded-md overflow-hidden mb-3">
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 overflow-x-auto text-sm">
            <code className="text-gray-800 dark:text-gray-200">
{`/* Working CSS Override Example - tested with Tailwind CSS */
*[data-radix-dropdown-menu-separator],
div[data-radix-dropdown-menu-separator],
hr[data-radix-dropdown-menu-separator] {
  height: 1px !important;
  background-color: #D5D5D5 !important;
  margin: 8px 0 !important;
  border: none !important;
}

/* Dark mode support */
.dark *[data-radix-dropdown-menu-separator],
.dark div[data-radix-dropdown-menu-separator],
.dark hr[data-radix-dropdown-menu-separator] {
  background-color: #525252 !important;
}`}
            </code>
          </pre>
        </div>
        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded">
          <p className="text-sm"><strong>Why these selectors work:</strong></p>
          <ul className="list-disc ml-5 text-sm mt-1">
            <li>Multiple element selectors (<code>*</code>, <code>div</code>, <code>hr</code>) ensure compatibility across Radix UI versions</li>
            <li><code>!important</code> declarations override framework reset styles</li>
            <li><code>border: none</code> prevents framework border styles from interfering</li>
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Menu Items Not Clickable</h4>
        <ul className="list-disc ml-5">
          <li>Verify <code>onClick</code> handlers are properly defined</li>
          <li>Check that items are not disabled</li>
          <li>Look for z-index conflicts with other elements</li>
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Theme Not Updating</h4>
        <ul className="list-disc ml-5">
          <li>Theme should be controlled by React state/context</li>
          <li>Ensure theme value is exactly <code>'light'</code> or <code>'dark'</code></li>
          <li>Check that dark mode classes are applied to parent elements</li>
        </ul>
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-bold mb-4">Primitive Components</h2>
      <ul className="list-disc ml-5 mb-4">
        <li><code>PM7MenuRoot</code> – Root menu state management</li>
        <li><code>PM7MenuTrigger</code> – Menu trigger button</li>
        <li><code>PM7MenuContent</code> – Dropdown container</li>
        <li><code>PM7MenuItem</code> – Individual menu item</li>
        <li><code>PM7MenuSeparator</code> – Visual separator</li>
        <li><code>PM7MenuCheckboxItem</code> – Checkbox item</li>
        <li><code>PM7MenuRadioItem</code> – Radio button item</li>
        <li><code>PM7MenuSub</code> – Submenu container</li>
        <li><code>PM7MenuSubTrigger</code> – Submenu trigger</li>
        <li><code>PM7MenuSubContent</code> – Submenu content</li>
      </ul>
    </section>
  </div>
);

export default ExampleMenuDocumentation;
