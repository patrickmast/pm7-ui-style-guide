// Enhancement: Created a new PM7TabSelector component based on the tab selector design used in the examples app
// This component provides a reusable tab selector with support for both light and dark themes

"use client";

import * as React from "react";
import "./pm7-tab-selector.css";

// Tab item type
export type PM7TabItem = {
  id: string;
  label: React.ReactNode;
  disabled?: boolean;
};

// Props for the TabSelector component
export interface PM7TabSelectorProps {
  tabs: PM7TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
  initialTheme?: 'light' | 'dark';
}

/**
 * PM7TabSelector Component
 * 
 * A reusable tab selector component that supports both light and dark themes.
 * 
 * @param props - Component props
 * @returns React component
 */
export const PM7TabSelector: React.FC<PM7TabSelectorProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className = '',
  initialTheme = 'light'
}) => {
  // Theme state management
  const [theme, setTheme] = React.useState<'light' | 'dark'>(initialTheme);

  // Effect to listen for theme changes in localStorage
  React.useEffect(() => {
    // Function to handle storage events
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'pm7-theme' && (e.newValue === 'light' || e.newValue === 'dark')) {
        setTheme(e.newValue as 'light' | 'dark');
      }
    };

    // Function to check theme in localStorage
    const checkTheme = () => {
      const savedTheme = localStorage.getItem('pm7-theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        setTheme(savedTheme as 'light' | 'dark');
      }
    };

    // Set up interval to check theme
    const intervalId = setInterval(checkTheme, 500);

    // Add storage event listener
    window.addEventListener('storage', handleStorageChange);

    // Initial check
    checkTheme();

    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div 
      className={`pm7-tab-container ${className} ${theme === 'dark' ? 'dark' : ''}`}
      data-component-name="PM7TabSelector"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`pm7-tab-button ${activeTab === tab.id ? 'pm7-tab-active' : ''}`}
          onClick={() => onTabChange(tab.id)}
          disabled={tab.disabled}
          aria-selected={activeTab === tab.id}
          role="tab"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

// Default export
export default PM7TabSelector;
