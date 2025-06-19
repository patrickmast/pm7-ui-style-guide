// Enhancement: Provides PM7-specific styling for ShadCN/UI Button component
// Bug Fix: Enhanced PM7Button component to support multiple button variants
import React from 'react';
import './pm7-button.css';

// Button rules for pm7-ui-style-guide - these are the only changes needed
// for apps that already use ShadCN/UI
export const buttonRules = {
  // Colors
  primaryColor: '#1C86EF', // PM7 primary blue for buttons
  borderColor: '#D4D4D4', // PM7 border color

  // Behavior
  cursor: 'pointer', // Always show pointer cursor on hover

  // Focus state
  focusRingColor: '#1C86EF', // Use primary color for focus rings

  // CSS Classes for different button variants
  button: 'pm7-button',
  outline: 'pm7-button-outline',
  secondary: 'pm7-button-secondary',
  ghost: 'pm7-button-ghost',
  link: 'pm7-button-link',
  small: 'pm7-button-small',
  large: 'pm7-button-large',
  disabled: 'pm7-button-disabled'
};

// Simple Button component for the examples app
// In a real app that already uses ShadCN/UI, they would apply buttonRules to their existing Button
export interface PM7ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'light' | 'dark';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  effect?: '6stars' | 'none';
}

// Star component for 6stars effect
const Star = ({ index }: { index: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" version="1.1" style={{shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'auto', fillRule: 'evenodd', clipRule: 'evenodd'}} viewBox="0 0 784.11 815.53" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id={`starGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#1C86EF' }} />
        <stop offset="100%" style={{ stopColor: '#1C86EF' }} />
      </linearGradient>
    </defs>
    <g id="Layer_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer" />
      <path fill={`url(#starGradient${index})`} d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
    </g>
  </svg>
);

export const PM7Button: React.FC<PM7ButtonProps> = ({ children, spacing = 'md', icon, iconPosition = 'left', effect = 'none', ...props }) => {
  const getSpacing = () => {
    switch (spacing) {
      case 'none': return '0';
      case 'sm': return '0.125rem';
      case 'md': return '0.25rem';
      case 'lg': return '0.5rem';
      default: return '0.25rem';
    }
  };

  const getButtonStyles = () => {
    const className = props.className || '';
    const baseStyles = {
      cursor: 'pointer',
      borderRadius: '6px',
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      margin: getSpacing(),
    };

    // Handle different button variants
    if (className.includes(buttonRules.outline)) {
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        // Use white text in dark mode, otherwise inherit from parent
        color: props.disabled ? '#9CA3AF' : (props.theme === 'dark' ? 'white' : 'inherit'),
        border: '1px solid #D4D4D4',
      };
    } else if (className.includes(buttonRules.secondary)) {
      return {
        ...baseStyles,
        backgroundColor: '#f3f4f6',
        color: '#111827',
        border: 'none',
      };
    } else if (className.includes(buttonRules.ghost)) {
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: props.disabled ? '#9CA3AF' : (props.theme === 'dark' ? 'white' : '#111827'),
        border: 'none',
      };
    } else if (className.includes(buttonRules.link)) {
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: '#1C86EF',
        border: 'none',
        padding: '0',
        textDecoration: 'underline',
        height: 'auto',
      };
    } else {
      // Default button style
      return {
        ...baseStyles,
        backgroundColor: props.disabled ? '#E5E7EB' : '#1C86EF',
        color: props.disabled ? '#9CA3AF' : 'white',
        border: 'none',
      };
    }
  };

  // Handle size variants
  const getSizeStyles = () => {
    const className = props.className || '';
    if (className.includes(buttonRules.small)) {
      return {
        fontSize: '0.75rem',
        padding: '0.25rem 0.5rem',
      };
    } else if (className.includes(buttonRules.large)) {
      return {
        fontSize: '1.125rem',
        padding: '0.75rem 1.5rem',
      };
    }
    return {};
  };

  // Add CSS for focus state
  const focusStyles = {
    outline: 'none',
    boxShadow: 'none'
  };

  // Render icon with proper styling
  const renderIcon = () => {
    if (!icon) return null;
    
    return React.cloneElement(icon as React.ReactElement, {
      style: {
        width: '1rem',
        height: '1rem',
        ...((icon as React.ReactElement).props?.style || {})
      }
    });
  };

  // Render button content with icon positioning
  const renderContent = () => {
    if (!icon) return children;
    
    const iconElement = renderIcon();
    const hasChildren = children && React.Children.count(children) > 0;
    
    if (!hasChildren) {
      // Icon only button
      return iconElement;
    }
    
    if (iconPosition === 'right') {
      return (
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {children}
          {iconElement}
        </span>
      );
    } else {
      // Default: left position
      return (
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {iconElement}
          {children}
        </span>
      );
    }
  };

  const buttonClass = effect === '6stars' ? 'pm7-button-6stars' : '';
  const showStars = effect === '6stars' && !props.disabled;

  return (
    <button
      {...props}
      className={`${buttonClass} ${props.className || ''}`}
      disabled={props.className?.includes(buttonRules.disabled) || props.disabled}
      style={{
        ...getButtonStyles(),
        ...getSizeStyles(),
        ...props.style
      }}
      onFocus={(e) => {
        if (props.onFocus) props.onFocus(e);
        e.currentTarget.style.outline = 'none';
        e.currentTarget.style.boxShadow = focusStyles.boxShadow;
      }}
      onBlur={(e) => {
        if (props.onBlur) props.onBlur(e);
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {renderContent()}
      {showStars && [...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`pm7-star pm7-star-${i}`}
        >
          <Star index={i} />
        </div>
      ))}
    </button>
  );
};
