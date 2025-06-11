import React from 'react';

const ExampleThemeToggleUsage = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <div>
      <h2>Usage</h2>
      
      <h3>Installation</h3>
      <p>The ThemeToggle component is included in the PM7 UI Style Guide package.</p>
      <div className="example-code">
        <pre><code>{`npm install pm7-ui-style-guide`}</code></pre>
      </div>

      <h3>Import</h3>
      <div className="example-code">
        <pre><code>{`import { PM7ThemeToggle, ThemeType } from 'pm7-ui-style-guide';
import 'pm7-ui-style-guide/src/components/theme-toggle/pm7-theme-toggle.css';`}</code></pre>
      </div>

      <h3>Basic Usage (Uncontrolled)</h3>
      <p>This is the simplest way to use the theme toggle. It manages its own state and applies the theme to the document automatically.</p>
      <div className="example-code">
        <pre><code>{`import { PM7ThemeToggle } from 'pm7-ui-style-guide';

function App() {
  return (
    <div>
      <header>
        <PM7ThemeToggle />
      </header>
    </div>
  );
}`}</code></pre>
      </div>

      <h3>Controlled Usage</h3>
      <p>Use this approach when you need to manage the theme state in your application or sync it with other components.</p>
      <div className="example-code">
        <pre><code>{`import { PM7ThemeToggle, ThemeType } from 'pm7-ui-style-guide';
import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState<ThemeType>('light');

  // Apply theme to your app
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div>
      <header>
        <PM7ThemeToggle 
          theme={theme} 
          onThemeChange={setTheme} 
        />
      </header>
    </div>
  );
}`}</code></pre>
      </div>

      <h3>Size Variants</h3>
      <p>The theme toggle comes in three sizes to fit different UI contexts.</p>
      <div className="example-code">
        <pre><code>{`// Small size - good for compact headers
<PM7ThemeToggle size="small" />

// Medium size (default) - standard use case
<PM7ThemeToggle size="medium" />

// Large size - for prominent placement
<PM7ThemeToggle size="large" />`}</code></pre>
      </div>

      <h3>Custom Styling</h3>
      <p>You can add custom CSS classes and styles for additional customization.</p>
      <div className="example-code">
        <pre><code>{`<PM7ThemeToggle 
  className="custom-theme-toggle"
  style={{ marginLeft: '1rem' }}
/>`}</code></pre>
      </div>

      <h3>Integration with Context/Redux</h3>
      <p>For complex applications with global state management:</p>
      <div className="example-code">
        <pre><code>{`// With React Context
import { useTheme } from './ThemeContext';

function ThemeToggleWrapper() {
  const { theme, setTheme } = useTheme();
  
  return (
    <PM7ThemeToggle 
      theme={theme}
      onThemeChange={setTheme}
    />
  );
}

// With Redux
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from './themeSlice';

function ThemeToggleWrapper() {
  const theme = useSelector(state => state.theme.current);
  const dispatch = useDispatch();
  
  return (
    <PM7ThemeToggle 
      theme={theme}
      onThemeChange={(newTheme) => dispatch(setTheme(newTheme))}
    />
  );
}`}</code></pre>
      </div>
    </div>
  );
};

export default ExampleThemeToggleUsage;