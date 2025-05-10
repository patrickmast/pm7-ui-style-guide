import React from 'react';
import { PM7Card } from '../src/components/card';

const ExampleButtonUsage = ({ theme }: { theme: 'light' | 'dark' }) => (
  <PM7Card>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4">PM7Button Component</h3>
      <p className="mb-4">The PM7Button component is a customizable button that supports various styles, sizes, and states with automatic theme detection.</p>
      <h4 className="text-lg font-medium mt-6 mb-3">Installation</h4>
      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4">
        <p>npm install pm7-ui-style-guide</p>
      </div>
      <h4 className="text-lg font-medium mt-6 mb-3">Import</h4>
      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4">
        <p>import {'{ PM7Button as Button, buttonRules }'} from 'pm7-ui-style-guide';</p>
      </div>
      <h4 className="text-lg font-medium mt-6 mb-3">Button Variants</h4>
      <p className="mb-3">PM7Button supports multiple style variants through CSS classes:</p>
      <div className="space-y-4">
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
          <h5 className="font-medium mb-2">Default Button</h5>
          <p>Use the base button class for the default style.</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">className="pm7-button"</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
          <h5 className="font-medium mb-2">Outline Button</h5>
          <p>Buttons with a border and transparent background.</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">className="pm7-button pm7-button-outline"</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
          <h5 className="font-medium mb-2">Secondary Button</h5>
          <p>Alternative button style with different background color.</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">className="pm7-button pm7-button-secondary"</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
          <h5 className="font-medium mb-2">Ghost Button</h5>
          <p>Transparent button that becomes visible on hover.</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">className="pm7-button pm7-button-ghost"</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
          <h5 className="font-medium mb-2">Link Button</h5>
          <p>Button that appears as a text link with underline.</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">className="pm7-button pm7-button-link"</p>
        </div>
      </div>
      <h4 className="text-lg font-medium mt-6 mb-3">Button Sizes</h4>
      <p className="mb-3">Customize button size using the size classes:</p>
      <div className="space-y-4">
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
          <h5 className="font-medium mb-2">Small Button</h5>
          <p>Reduced size button for compact interfaces.</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">className="pm7-button pm7-button-small"</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
          <h5 className="font-medium mb-2">Default Size</h5>
          <p>Standard button size, no additional class needed.</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">className="pm7-button"</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
          <h5 className="font-medium mb-2">Large Button</h5>
          <p>Larger button for emphasis or improved touch targets.</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">className="pm7-button pm7-button-large"</p>
        </div>
      </div>
      <h4 className="text-lg font-medium mt-6 mb-3">Button States</h4>
      <p className="mb-3">Handle disabled state:</p>
      <div className="space-y-4">
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
          <h5 className="font-medium mb-2">Disabled Button</h5>
          <p>Use the disabled attribute to make a button non-interactive.</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">disabled={'{true}'}</p>
        </div>
      </div>
      <h4 className="text-lg font-medium mt-6 mb-3">Theme Support</h4>
      <p className="mb-3">PM7Button automatically adapts to light and dark themes:</p>
      <div className="space-y-4">
        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded">
          <h5 className="font-medium mb-2">Theme Prop</h5>
          <p>Set the theme prop to 'light' or 'dark' to control the button's appearance.</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">theme="light" or theme="dark"</p>
        </div>
      </div>
      <h4 className="text-lg font-medium mt-6 mb-3">Button Rules Object</h4>
      <p className="mb-3">The buttonRules object provides CSS classes for styling:</p>
      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4">
        <p>The buttonRules object contains the following properties:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>button:</strong> Base button class (required)</li>
          <li><strong>outline:</strong> Outline variant</li>
          <li><strong>secondary:</strong> Secondary variant</li>
          <li><strong>ghost:</strong> Ghost variant</li>
          <li><strong>link:</strong> Link variant</li>
          <li><strong>small:</strong> Small size</li>
          <li><strong>large:</strong> Large size</li>
          <li><strong>disabled:</strong> Disabled state</li>
        </ul>
      </div>
      <h4 className="text-lg font-medium mt-6 mb-3">Props</h4>
      <p className="mb-3">PM7Button accepts the following props:</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="py-2 px-4 border-b text-left">Prop</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Default</th>
              <th className="py-2 px-4 border-b text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <td className="py-2 px-4"><code>theme</code></td>
              <td className="py-2 px-4"><code>'light' | 'dark'</code></td>
              <td className="py-2 px-4"><code>'light'</code></td>
              <td className="py-2 px-4">Sets the button's theme</td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <td className="py-2 px-4"><code>className</code></td>
              <td className="py-2 px-4"><code>string</code></td>
              <td className="py-2 px-4"><code>''</code></td>
              <td className="py-2 px-4">Additional CSS classes</td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <td className="py-2 px-4"><code>disabled</code></td>
              <td className="py-2 px-4"><code>boolean</code></td>
              <td className="py-2 px-4"><code>false</code></td>
              <td className="py-2 px-4">Disables the button</td>
            </tr>
            <tr>
              <td className="py-2 px-4"><code>...props</code></td>
              <td className="py-2 px-4"><code>ButtonHTMLAttributes</code></td>
              <td className="py-2 px-4">-</td>
              <td className="py-2 px-4">All standard button attributes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </PM7Card>
);

export default ExampleButtonUsage;