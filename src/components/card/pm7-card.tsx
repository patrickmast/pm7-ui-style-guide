"use client"

import * as React from "react"

export interface PM7CardProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: 'light' | 'dark';
  className?: string;
}

const PM7Card = React.forwardRef<
  HTMLDivElement,
  PM7CardProps
>(({ className = "", theme = 'light', ...props }, ref) => (
  <div
    ref={ref}
    className={`pm7-card ${className} ${theme === 'dark' ? 'dark' : ''}`}
    style={{
      backgroundColor: theme === 'dark' ? "#262626" : "white",
      border: `1px solid ${theme === 'dark' ? "#525252" : "#e2e8f0"}`,
      color: theme === 'dark' ? '#FAFAFA' : 'inherit',
      ...props.style,
    }}
    {...props}
  />
))
PM7Card.displayName = "PM7Card"

export interface PM7CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: 'light' | 'dark';
  variant?: 'default' | 'dark';
  className?: string;
}
const PM7CardHeader = ({ className = "", theme = 'light', variant = 'default', ...props }: PM7CardHeaderProps) => {
  const getDarkHeaderStyles = () => {
    if (variant === 'dark') {
      return {
        backgroundColor: theme === 'dark' ? '#374151' : '#f3f4f6',
        color: theme === 'dark' ? '#ffffff' : '#111827',
        margin: '-1.5rem -1.5rem 1rem -1.5rem',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem 0.5rem 0 0'
      };
    }
    return {};
  };

  return (
    <div 
      className={`pm7-card-header flex flex-col space-y-1.5 text-center sm:text-left ${className} ${theme === 'dark' ? 'dark' : ''}`} 
      style={{ ...getDarkHeaderStyles(), ...props.style }}
      {...props} 
    />
  );
}
PM7CardHeader.displayName = "PM7CardHeader"

export interface PM7CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: 'light' | 'dark';
  className?: string;
}
const PM7CardFooter = ({ className = "", theme = 'light', ...props }: PM7CardFooterProps) => (
  <div className={`pm7-card-footer flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className} ${theme === 'dark' ? 'dark' : ''}`} {...props} />
)
PM7CardFooter.displayName = "PM7CardFooter"

export interface PM7CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  theme?: 'light' | 'dark';
  className?: string;
}
const PM7CardTitle = React.forwardRef<
  HTMLHeadingElement,
  PM7CardTitleProps
>(({ className = "", theme = 'light', ...props }, ref) => (
  <h3 ref={ref} className={`pm7-card-title text-lg font-semibold leading-none tracking-tight ${className} ${theme === 'dark' ? 'dark' : ''}`} {...props} />
))
PM7CardTitle.displayName = "PM7CardTitle"

export interface PM7CardSubTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  theme?: 'light' | 'dark';
  className?: string;
}
const PM7CardSubTitle = React.forwardRef<
  HTMLParagraphElement,
  PM7CardSubTitleProps
>(({ className = "", theme = 'light', ...props }, ref) => (
  <p ref={ref} className={`pm7-card-subtitle text-sm text-muted-foreground ${className} ${theme === 'dark' ? 'dark' : ''}`} {...props} />
))
PM7CardSubTitle.displayName = "PM7CardSubTitle"

export {
  PM7Card,
  PM7CardHeader,
  PM7CardFooter,
  PM7CardTitle,
  PM7CardSubTitle,
}