import React from 'react';

const ExampleThemeToggleOverview = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <div>
      <h2>Theme Toggle</h2>
      <p>A theme toggle component that allows users to switch between light and dark modes.</p>
      
      <h3>Features</h3>
      <ul>
        <li><strong>Automatic theme detection:</strong> Detects system preference on first load</li>
        <li><strong>LocalStorage persistence:</strong> Remembers user preference across sessions</li>
        <li><strong>Keyboard accessible:</strong> Supports Enter and Space key navigation</li>
        <li><strong>Multiple sizes:</strong> Small, medium (default), and large variants</li>
        <li><strong>Controlled/Uncontrolled:</strong> Can be used with external state management or handle state internally</li>
        <li><strong>PM7 branded styling:</strong> Uses PM7 color scheme with yellow/gray theme indicators</li>
      </ul>

      <h3>When to Use</h3>
      <ul>
        <li>When your application supports both light and dark themes</li>
        <li>In application headers or settings panels</li>
        <li>When you want to give users control over their viewing experience</li>
        <li>For accessibility compliance with user preference detection</li>
      </ul>

      <h3>Behavior</h3>
      <ul>
        <li><strong>Uncontrolled mode:</strong> Automatically manages theme state and applies to document.documentElement and document.body</li>
        <li><strong>Controlled mode:</strong> Calls onThemeChange callback without applying theme to DOM (parent component responsibility)</li>
        <li><strong>Initial state:</strong> Checks localStorage → system preference → defaults to 'light'</li>
        <li><strong>Persistence:</strong> Saves theme preference to localStorage as 'pm7-theme'</li>
      </ul>

      <h3>Accessibility</h3>
      <ul>
        <li><strong>Keyboard navigation:</strong> Enter and Space keys toggle theme</li>
        <li><strong>Focus indication:</strong> Clear focus outline following PM7 design system</li>
        <li><strong>Screen reader support:</strong> Descriptive aria-label indicating current action</li>
        <li><strong>Semantic HTML:</strong> Uses proper button role and tabIndex</li>
      </ul>
    </div>
  );
};

export default ExampleThemeToggleOverview;