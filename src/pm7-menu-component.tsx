// Enhancement: Ensure *left* submenu icon (.menu-item-icon) stays white when submenu is open. Removed theme-specific span wrapper around item.icon.
// Removed debug console logging.
"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  PM7Menu,
  PM7MenuTrigger,
  PM7MenuContent,
  PM7MenuItem,
  PM7MenuSub,
  PM7MenuSubTrigger,
  PM7MenuSubContent,
  PM7MenuSeparator
} from "./components/ui/pm7-menu";

// Menu styling constants based on template-menu README.md specifications
const MENU_STYLES = {
  // Menu Item Padding
  ITEM_HORIZONTAL_PADDING: 'px-4', // 16px
  ITEM_VERTICAL_PADDING_DESKTOP: 'py-2', // 8px
  ITEM_VERTICAL_PADDING_MOBILE: 'py-3', // 12px
  ITEM_ICON_TEXT_GAP: 'gap-3', // 12px - CRITICAL inner spacing
  
  // Dropdown Container Styling
  CONTAINER_PADDING: 'py-3 px-3', // 12px - critical visual breathing room
  CONTAINER_BORDER_RADIUS: 'rounded-[6px]', // 6px
  CONTAINER_SHADOW: 'rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px',
  CONTAINER_MIN_WIDTH_DESKTOP: 'min-w-[12rem]', // 12rem
  CONTAINER_MIN_WIDTH_MOBILE: 'min-w-[16rem]', // 16rem
  CONTAINER_MAX_WIDTH: 'max-w-[18.8rem]',
  CONTAINER_MARGIN_TOP: 'mt-1', // 4px
  
  // Button Dimensions
  BUTTON_SIZE_DESKTOP: '48px', 
  BUTTON_SIZE_MOBILE: '56px', 
  ICON_SIZE_DESKTOP: '32px', 
  ICON_SIZE_MOBILE: '36px', 
  
  // Default Z-Index
  DEFAULT_Z_INDEX: 50,
  
  // Default Accent Color
  DEFAULT_ACCENT_COLOR: '#1C86EF'
};

// Define the menu item interface
export interface PM7MenuItem {
  id: string;
  label: React.ReactNode;
  onClick?: () => void;
  onChange?: () => void;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: 'separator' | 'submenu' | 'check' | 'switch';
  submenuItems?: PM7MenuItem[];
  checked?: boolean;
}

export interface PM7MenuProps {
  menuItems?: PM7MenuItem[];
  initialTheme?: 'light' | 'dark';
  mobileBreakpoint?: number;
}

export const PM7MenuComponent: React.FC<PM7MenuProps> = ({
  menuItems = [],
  initialTheme,
  mobileBreakpoint = 768,
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    initialTheme || (typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light')
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const submenuOpenRef = useRef(false);

  // Update theme when initialTheme prop changes
  useEffect(() => {
    if (initialTheme) {
      setTheme(initialTheme);
    }
  }, [initialTheme]);

  // Handle theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Sync with localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme);
    }
  }, []);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuButtonRef.current &&
        menuRef.current &&
        !menuButtonRef.current.contains(event.target as Node) &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Apply correct icon colors based on theme
  useEffect(() => {
    const menuItems = document.querySelectorAll('.menu-item-icon svg');
    menuItems.forEach(icon => {
      if ('style' in icon) {
        (icon as SVGElement).style.color = theme === 'dark' ? '#FAFAFA' : '#000';
      }
    });
  }, [theme, isOpen]);

  // Effect to handle submenu open state
  useEffect(() => {
    // Function to handle submenu state changes
    const handleSubmenuStateChange = (mutations: MutationRecord[]) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-state') {
          const target = mutation.target as HTMLElement;
          if (target.hasAttribute('data-radix-dropdown-menu-subtrigger')) {
            const isOpen = target.getAttribute('data-state') === 'open';
            submenuOpenRef.current = isOpen;
          }
        }
      }
    };
    
    // Set up mutation observer
    const observer = new MutationObserver(handleSubmenuStateChange);
    const menuElement = document.querySelector('[role="menu"]');
    
    if (menuElement) {
      observer.observe(menuElement, { attributes: true, subtree: true });
    }
    
    return () => observer.disconnect();
  }, [isOpen]);

  // Menu icon (hamburger) uses currentColor for stroke and adapts to theme
  const menuIcon = (
    <svg
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  return (
    <div ref={menuRef} className="relative inline-block">
      <PM7Menu open={isOpen} onOpenChange={setIsOpen}>
        <PM7MenuTrigger asChild>
          <button
            ref={menuButtonRef}
            aria-label="Open menu"
            className={`flex items-center justify-center rounded-md cursor-pointer text-black dark:text-white hover:bg-opacity-10 hover:bg-gray-200 dark:hover:bg-opacity-10 dark:hover:bg-gray-700 focus:outline-none focus-visible:outline-none`}
            style={{ 
              background: 'transparent', 
              width: isMobile ? MENU_STYLES.BUTTON_SIZE_MOBILE : MENU_STYLES.BUTTON_SIZE_DESKTOP, 
              height: isMobile ? MENU_STYLES.BUTTON_SIZE_MOBILE : MENU_STYLES.BUTTON_SIZE_DESKTOP, 
              border: 'none',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              outline: 'none'
            }}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div style={{ 
              width: isMobile ? MENU_STYLES.ICON_SIZE_MOBILE : MENU_STYLES.ICON_SIZE_DESKTOP,
              height: isMobile ? MENU_STYLES.ICON_SIZE_MOBILE : MENU_STYLES.ICON_SIZE_DESKTOP,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme === 'dark' ? '#FAFAFA' : 'currentColor' // Ensure icon is white in dark mode
            }}>
              {menuIcon}
            </div>
          </button>
        </PM7MenuTrigger>
        <PM7MenuContent
          align="end"
          alignOffset={0}
          sideOffset={4}
          className={`${MENU_STYLES.CONTAINER_BORDER_RADIUS} ${isMobile ? MENU_STYLES.CONTAINER_MIN_WIDTH_MOBILE : MENU_STYLES.CONTAINER_MIN_WIDTH_DESKTOP} ${MENU_STYLES.CONTAINER_MAX_WIDTH} ${MENU_STYLES.CONTAINER_MARGIN_TOP} ${MENU_STYLES.CONTAINER_PADDING} border z-50 ${isMobile ? 'max-h-[90vh] overflow-y-auto' : ''}`}
          style={{
            boxShadow: theme === 'dark' ? 'none' : MENU_STYLES.CONTAINER_SHADOW,
            backgroundColor: theme === 'dark' ? '#262626' : 'white',
            color: theme === 'dark' ? '#FAFAFA' : 'black',
            borderColor: theme === 'dark' ? '#525252' : '#D5D5D5'
          }}
        >
          {menuItems.map((item) => (
            item.type === 'separator' ? (
              <PM7MenuSeparator key={item.id} />
            ) : item.type === 'submenu' ? (
              <PM7MenuSub key={item.id}>
                <PM7MenuSubTrigger
                  className={`w-full text-left ${MENU_STYLES.ITEM_HORIZONTAL_PADDING} ${isMobile ? MENU_STYLES.ITEM_VERTICAL_PADDING_MOBILE : MENU_STYLES.ITEM_VERTICAL_PADDING_DESKTOP} cursor-pointer flex items-center justify-between ${isMobile ? 'text-base' : 'text-sm'} whitespace-nowrap overflow-hidden text-ellipsis`}
                >
                  <span className="inline-flex items-center gap-3">
                    {item.icon && (
                      <span className="menu-item-icon">
                        {item.icon}
                      </span>
                    )}
                    {item.label}
                  </span>
                  <span className="submenu-icon ml-auto h-4 w-4">
                    {item.rightIcon}
                  </span>
                </PM7MenuSubTrigger>
                <PM7MenuSubContent
                  className={`${MENU_STYLES.CONTAINER_BORDER_RADIUS} ${isMobile ? MENU_STYLES.CONTAINER_MIN_WIDTH_MOBILE : MENU_STYLES.CONTAINER_MIN_WIDTH_DESKTOP} ${MENU_STYLES.CONTAINER_MAX_WIDTH} ${MENU_STYLES.CONTAINER_MARGIN_TOP} ${MENU_STYLES.CONTAINER_PADDING} border z-50 ${isMobile ? 'max-h-[90vh] overflow-y-auto' : ''}`}
                  style={{ boxShadow: MENU_STYLES.CONTAINER_SHADOW }}
                >
                  {item.submenuItems && item.submenuItems.map((submenuItem) => (
                    submenuItem.type === 'separator' ? (
                      <PM7MenuSeparator key={submenuItem.id} />
                    ) : submenuItem.type === 'check' ? (
                      <PM7MenuItem
                        key={submenuItem.id}
                        onClick={() => {
                          if (submenuItem.onClick) {
                            submenuItem.onClick();
                            setIsOpen(false); // Close menu after check item click
                          }
                        }}
                        className={`w-full text-left ${MENU_STYLES.ITEM_HORIZONTAL_PADDING} ${isMobile ? MENU_STYLES.ITEM_VERTICAL_PADDING_MOBILE : MENU_STYLES.ITEM_VERTICAL_PADDING_DESKTOP} cursor-pointer flex items-center ${submenuItem.rightIcon ? 'justify-between' : ''} ${isMobile ? 'text-base' : 'text-sm'} whitespace-nowrap overflow-hidden text-ellipsis`}
                      >
                        <span className="inline-flex items-center gap-3">
                          <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                            {submenuItem.checked && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </span>
                          {submenuItem.icon && (
                            <span className="menu-item-icon">
                              {submenuItem.icon}
                            </span>
                          )}
                          {submenuItem.label}
                        </span>
                        {submenuItem.rightIcon && submenuItem.rightIcon}
                      </PM7MenuItem>
                    ) : submenuItem.type === 'switch' ? (
                      <PM7MenuItem
                        key={submenuItem.id}
                        onClick={() => {
                          if (submenuItem.onChange) {
                            submenuItem.onChange();
                          } else if (submenuItem.onClick) {
                            submenuItem.onClick();
                          }
                        }}
                        className={`w-full text-left ${MENU_STYLES.ITEM_HORIZONTAL_PADDING} ${isMobile ? MENU_STYLES.ITEM_VERTICAL_PADDING_MOBILE : MENU_STYLES.ITEM_VERTICAL_PADDING_DESKTOP} cursor-pointer flex items-center justify-between ${isMobile ? 'text-base' : 'text-sm'} whitespace-nowrap overflow-hidden text-ellipsis`}
                      >
                        <span className="inline-flex items-center gap-3">
                          {submenuItem.icon && (
                            <span className="menu-item-icon">
                              {submenuItem.icon}
                            </span>
                          )}
                          {submenuItem.label}
                        </span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          width="16" 
                          height="16" 
                          strokeWidth="1.75"
                        >
                          <path d="M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
                          <path d="M2 12a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6"/>
                        </svg>
                      </PM7MenuItem>
                    ) : (
                      <PM7MenuItem
                        key={submenuItem.id}
                        onClick={() => {
                          if (submenuItem.onClick) {
                            submenuItem.onClick();
                            setIsOpen(false); // Close menu after item click
                          }
                        }}
                        className={`w-full text-left ${MENU_STYLES.ITEM_HORIZONTAL_PADDING} ${isMobile ? MENU_STYLES.ITEM_VERTICAL_PADDING_MOBILE : MENU_STYLES.ITEM_VERTICAL_PADDING_DESKTOP} cursor-pointer flex items-center ${submenuItem.rightIcon ? 'justify-between' : ''} ${isMobile ? 'text-base' : 'text-sm'} whitespace-nowrap overflow-hidden text-ellipsis`}
                      >
                        <span className="inline-flex items-center gap-3">
                          {submenuItem.icon && (
                            <span className="menu-item-icon">
                              {submenuItem.icon}
                            </span>
                          )}
                          {submenuItem.label}
                        </span>
                        {submenuItem.rightIcon && submenuItem.rightIcon}
                      </PM7MenuItem>
                    )
                  ))}
                </PM7MenuSubContent>
              </PM7MenuSub>
            ) : item.type === 'switch' ? (
              <PM7MenuItem
                key={item.id}
                onClick={() => {
                  if (item.onChange) {
                    item.onChange();
                  } else if (item.onClick) {
                    item.onClick();
                  }
                  setIsOpen(false); // Close menu after item click
                }}
                className={`w-full text-left ${MENU_STYLES.ITEM_HORIZONTAL_PADDING} ${isMobile ? MENU_STYLES.ITEM_VERTICAL_PADDING_MOBILE : MENU_STYLES.ITEM_VERTICAL_PADDING_DESKTOP} cursor-pointer flex items-center justify-between ${isMobile ? 'text-base' : 'text-sm'} whitespace-nowrap overflow-hidden text-ellipsis`}
              >
                <span className="inline-flex items-center gap-3">
                  {item.icon && (
                    <span className="menu-item-icon">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  width="16" 
                  height="16" 
                  strokeWidth="1.75"
                >
                  <path d="M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
                  <path d="M2 12a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6"/>
                </svg>
              </PM7MenuItem>
            ) : (
              <PM7MenuItem
                key={item.id}
                onClick={() => {
                  if (item.onClick) {
                    item.onClick();
                    setIsOpen(false); // Close menu after item click
                  }
                }}
                className={`w-full text-left ${MENU_STYLES.ITEM_HORIZONTAL_PADDING} ${isMobile ? MENU_STYLES.ITEM_VERTICAL_PADDING_MOBILE : MENU_STYLES.ITEM_VERTICAL_PADDING_DESKTOP} cursor-pointer flex items-center ${item.rightIcon ? 'justify-between' : ''} ${isMobile ? 'text-base' : 'text-sm'} whitespace-nowrap overflow-hidden text-ellipsis`}
              >
                <span className="inline-flex items-center gap-3">
                  {item.icon && (
                    <span className="menu-item-icon">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </span>
                {item.rightIcon && item.rightIcon}
              </PM7MenuItem>
            )
          ))}
        </PM7MenuContent>
      </PM7Menu>
    </div>
  );
};

// For backward compatibility
export { PM7MenuComponent as Menu };
export default PM7MenuComponent;
