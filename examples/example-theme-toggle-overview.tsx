import React from 'react';

const ExampleThemeToggleOverview = ({ theme }: { theme: 'light' | 'dark' }) => {
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

  const strongStyle = {
    fontWeight: 'bold',
    color: theme === 'dark' ? '#ffffff' : '#111827'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>PM7ThemeToggle Component</h1>
      <p style={textStyle}>A theme toggle component that allows users to switch between light and dark modes with automatic theme detection and persistence.</p>
      
      <h2 style={subHeadingStyle}>Features</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}><strong style={strongStyle}>Automatic theme detection:</strong> Detects system preference on first load</li>
        <li style={listItemStyle}><strong style={strongStyle}>LocalStorage persistence:</strong> Remembers user preference across sessions</li>
        <li style={listItemStyle}><strong style={strongStyle}>Keyboard accessible:</strong> Supports Enter and Space key navigation</li>
        <li style={listItemStyle}><strong style={strongStyle}>Multiple sizes:</strong> Small, medium (default), and large variants</li>
        <li style={listItemStyle}><strong style={strongStyle}>Controlled/Uncontrolled:</strong> Can be used with external state management or handle state internally</li>
        <li style={listItemStyle}><strong style={strongStyle}>PM7 branded styling:</strong> Uses PM7 color scheme with yellow/gray theme indicators</li>
      </ul>

      <h2 style={subHeadingStyle}>When to Use</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>When your application supports both light and dark themes</li>
        <li style={listItemStyle}>In application headers or settings panels</li>
        <li style={listItemStyle}>When you want to give users control over their viewing experience</li>
        <li style={listItemStyle}>For accessibility compliance with user preference detection</li>
      </ul>

      <h2 style={subHeadingStyle}>Behavior</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}><strong style={strongStyle}>Uncontrolled mode:</strong> Automatically manages theme state and applies to document.documentElement and document.body</li>
        <li style={listItemStyle}><strong style={strongStyle}>Controlled mode:</strong> Calls onThemeChange callback without applying theme to DOM (parent component responsibility)</li>
        <li style={listItemStyle}><strong style={strongStyle}>Initial state:</strong> Checks localStorage → system preference → defaults to 'light'</li>
        <li style={listItemStyle}><strong style={strongStyle}>Persistence:</strong> Saves theme preference to localStorage as 'pm7-theme'</li>
      </ul>

      <h2 style={subHeadingStyle}>Accessibility</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}><strong style={strongStyle}>Keyboard navigation:</strong> Enter and Space keys toggle theme</li>
        <li style={listItemStyle}><strong style={strongStyle}>Focus indication:</strong> Clear focus outline following PM7 design system</li>
        <li style={listItemStyle}><strong style={strongStyle}>Screen reader support:</strong> Descriptive aria-label indicating current action</li>
        <li style={listItemStyle}><strong style={strongStyle}>Semantic HTML:</strong> Uses proper button role and tabIndex</li>
      </ul>

      <p style={textStyle}>
        Check the <strong style={strongStyle}>Demo</strong> tab to see the theme toggle in action with different configurations, the <strong style={strongStyle}>Usage</strong> tab for implementation details, and the <strong style={strongStyle}>Documentation</strong> tab for complete API reference.
      </p>
    </div>
  );
};

export default ExampleThemeToggleOverview;