import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import './pm7-theme-toggle.css';

export type ThemeType = 'light' | 'dark';

export interface PM7ThemeToggleProps {
  theme?: ThemeType;
  onThemeChange?: (theme: ThemeType) => void;
  size?: 'small' | 'medium' | 'large';
  showHover?: boolean;
  className?: string;
  'data-component-name'?: string;
}

export const PM7ThemeToggle: React.FC<PM7ThemeToggleProps> = ({
  theme: controlledTheme,
  onThemeChange,
  size = 'medium',
  showHover = true,
  className = '',
  'data-component-name': dataComponentName,
}) => {
  const [internalTheme, setInternalTheme] = useState<ThemeType>(() => {
    if (controlledTheme) return controlledTheme;
    
    const savedTheme = localStorage.getItem('pm7-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme as ThemeType;
    }
    
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const currentTheme = controlledTheme || internalTheme;

  useEffect(() => {
    if (!controlledTheme && typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark', currentTheme === 'dark');
      document.body.classList.toggle('dark', currentTheme === 'dark');
      localStorage.setItem('pm7-theme', currentTheme);
    }
  }, [currentTheme, controlledTheme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    if (onThemeChange) {
      onThemeChange(newTheme);
    } else {
      setInternalTheme(newTheme);
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'pm7-theme-toggle-small';
      case 'large':
        return 'pm7-theme-toggle-large';
      default:
        return '';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 12;
      case 'large':
        return 20;
      default:
        return 16;
    }
  };

  return (
    <div className={`pm7-theme-toggle ${getSizeClass()} ${className}`}>
      <div
        role="button"
        tabIndex={0}
        className={`pm7-theme-switch ${currentTheme === 'dark' ? 'dark' : ''} ${!showHover ? 'no-hover' : ''}`}
        onClick={toggleTheme}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
          }
        }}
        data-component-name={dataComponentName}
        aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
      >
        <div className="pm7-theme-switch-thumb">
          {currentTheme === 'dark' ? (
            <MoonIcon className="pm7-theme-icon" size={getIconSize()} />
          ) : (
            <SunIcon className="pm7-theme-icon" size={getIconSize()} />
          )}
        </div>
      </div>
    </div>
  );
};