// Enhancement: Updated Button example to demonstrate how PM7 UI Style Guide enhances ShadCN/UI components
import React from 'react';
import { PM7Button as Button, buttonRules } from '../src/components/button/pm7-button.tsx';

const ButtonExample = () => (
  <section className="space-y-8">
    <div>
      <h2 className="text-2xl font-bold mb-4">Button</h2>
      <p className="mb-4">The PM7 UI Style Guide provides styling rules for ShadCN/UI Button components:</p>
    </div>

    <div className="p-6 border border-gray-200 rounded-md bg-gray-50">
      <h3 className="text-xl font-semibold mb-3">Architecture</h3>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1 p-4 border border-gray-300 rounded-md bg-white">
          <h4 className="font-medium mb-2">1. Base: Tailwind CSS</h4>
          <p className="text-sm text-gray-600 mb-2">Utility classes for styling</p>
          <div className="h-px bg-gray-200 my-2"></div>
          <div className="flex gap-2">
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">rounded-md</code>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">px-4</code>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">py-2</code>
          </div>
        </div>
        
        <div className="flex-1 p-4 border border-gray-300 rounded-md bg-white">
          <h4 className="font-medium mb-2">2. Components: ShadCN/UI</h4>
          <p className="text-sm text-gray-600 mb-2">Accessible, unstyled components</p>
          <div className="h-px bg-gray-200 my-2"></div>
          <div className="flex gap-2">
            <button className="bg-gray-200 text-gray-800 rounded-md px-4 py-2 text-sm font-medium">Default Button</button>
          </div>
        </div>
        
        <div className="flex-1 p-4 border border-gray-300 rounded-md bg-white">
          <h4 className="font-medium mb-2">3. Branding: PM7 UI Style Guide</h4>
          <p className="text-sm text-gray-600 mb-2">Winfakt styling rules</p>
          <div className="h-px bg-gray-200 my-2"></div>
          <div className="flex gap-2">
            <Button>Winfakt Button</Button>
          </div>
        </div>
      </div>
    </div>

    <div className="p-6 border border-gray-200 rounded-md bg-gray-50">
      <h3 className="text-xl font-semibold mb-3">Styling Rules</h3>
      <p className="mb-4">These are the Winfakt-specific styling rules that should be applied to ShadCN/UI buttons:</p>
      <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto">
        {JSON.stringify(buttonRules, null, 2)}
      </pre>
      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-2">In a real application using ShadCN/UI, you would apply these rules to your button component:</p>
        <pre className="p-4 bg-gray-800 text-white rounded-md overflow-auto text-xs">
{`// Example: Applying PM7 UI Style Guide rules to ShadCN/UI Button
import { Button } from "@/components/ui/button";
import { buttonRules } from "pm7-ui-style-guide";

// In your tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: buttonRules.primaryColor,
        border: buttonRules.borderColor,
      }
    }
  }
}

// In your global CSS
.button {
  cursor: buttonRules.cursor;
}

// In your component
<Button>Winfakt-styled Button</Button>`}
        </pre>
      </div>
    </div>

    <div className="p-6 border border-gray-200 rounded-md bg-gray-50">
      <h3 className="text-xl font-semibold mb-3">Example Buttons</h3>
      <div className="flex flex-wrap gap-4 items-center">
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button className="outline">Outline</Button>
        <Button onClick={() => alert('Button clicked!')}>With Click Handler</Button>
      </div>
    </div>
  </section>
);

export default ButtonExample;
