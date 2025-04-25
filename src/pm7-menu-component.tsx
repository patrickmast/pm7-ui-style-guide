import React, { useState, useEffect, useRef } from 'react';
import {
  PM7Menu,
  PM7MenuTrigger,
  PM7MenuContent,
  PM7MenuItem,
  PM7MenuSeparator,
  PM7MenuSub,
  PM7MenuSubTrigger,
  PM7MenuSubContent,
  PM7MenuCheckboxItem,
  PM7MenuRadioGroup,
  PM7MenuRadioItem,
} from './components/ui/pm7-menu';
import './components/ui/pm7-menu.css';

// Define menu item types
export type PM7MenuItemType = 'item' | 'submenu' | 'separator' | 'check' | 'radio' | 'switch';

// Define menu item interface
export interface PM7MenuItem {
  id: string;
  label?: string;
  type?: PM7MenuItemType;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  submenuItems?: PM7MenuItem[];
}

// Define menu styles
const MENU_STYLES = {
  CONTAINER_BORDER_RADIUS: 'rounded-md',
  CONTAINER_MIN_WIDTH_DESKTOP: 'min-w-[220px]',
  CONTAINER_MIN_WIDTH_MOBILE: 'min-w-[280px]',
  CONTAINER_MAX_WIDTH: 'max-w-[320px]',
  CONTAINER_MARGIN_TOP: 'mt-2',
  CONTAINER_PADDING: 'p-2',
  CONTAINER_SHADOW: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

// Define menu props
export interface PM7MenuProps {
  menuItems?: PM7MenuItem[];
  initialTheme?: 'light' | 'dark';
  mobileBreakpoint?: number;
}

// Custom menu component with self-contained dark mode
export const PM7MenuComponent: React.FC<PM7MenuProps> = ({
  menuItems = [],
  initialTheme = 'light',
  mobileBreakpoint = 768,
}) => {
  // State for menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // State for mobile detection
  const [isMobile, setIsMobile] = useState(false);

  // Refs for menu elements
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // State for theme (light/dark)
  const [theme, setTheme] = useState<'light' | 'dark'>(initialTheme);

  // State for hover tracking
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // State for tracking open submenu
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Update theme when initialTheme prop changes
  useEffect(() => {
    if (initialTheme) {
      setTheme(initialTheme);
    }
  }, [initialTheme]);

  // Check for mobile viewport
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [mobileBreakpoint]);

  // Reset states when menu closes
  useEffect(() => {
    if (!isOpen) {
      setHoveredItem(null);
      setOpenSubmenu(null);
    }
  }, [isOpen]);

  // Define theme colors
  const themeColors = {
    light: {
      textColor: '#000000',
      bgColor: '#FFFFFF',
      borderColor: '#D5D5D5',
    },
    dark: {
      textColor: '#FAFAFA',
      bgColor: '#262626',
      borderColor: '#525252',
    }
  };

  // Get current theme colors
  const currentTheme = themeColors[theme];

  return (
    <div ref={menuRef} className="relative inline-block">
      <PM7Menu open={isOpen} onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          // Reset states when menu closes
          setHoveredItem(null);
          setOpenSubmenu(null);
        }
      }}>
        <PM7MenuTrigger asChild>
          <button
            ref={menuButtonRef}
            aria-label="Open menu"
            className={`flex items-center justify-center rounded-md cursor-pointer text-black hover:bg-opacity-10 hover:bg-gray-200 focus:outline-none focus-visible:outline-none`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={theme === 'dark' ? '#FAFAFA' : 'currentColor'}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="menu-trigger-icon"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </PM7MenuTrigger>
        <PM7MenuContent
          align="end"
          alignOffset={0}
          sideOffset={4}
          className={theme === 'dark' ? 'dark' : ''}
          style={{
            borderRadius: MENU_STYLES.CONTAINER_BORDER_RADIUS,
            minWidth: isMobile ? MENU_STYLES.CONTAINER_MIN_WIDTH_MOBILE : MENU_STYLES.CONTAINER_MIN_WIDTH_DESKTOP,
            maxWidth: MENU_STYLES.CONTAINER_MAX_WIDTH,
            padding: MENU_STYLES.CONTAINER_PADDING,
            boxShadow: MENU_STYLES.CONTAINER_SHADOW,
            backgroundColor: currentTheme.bgColor,
            color: currentTheme.textColor,
            borderColor: currentTheme.borderColor,
            marginTop: '-4px'
          }}
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            setHoveredItem(null);
            setOpenSubmenu(null);
          }}
        >
          {menuItems.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === 'separator' ? (
                <PM7MenuSeparator />
              ) : item.type === 'submenu' && item.submenuItems ? (
                <PM7MenuSub onOpenChange={(open) => {
                  if (open) {
                    setOpenSubmenu(item.id);
                  } else if (openSubmenu === item.id) {
                    setOpenSubmenu(null);
                  }
                }}>
                  <PM7MenuSubTrigger
                    className={`${theme === 'dark' ? 'dark' : ''}`}
                    style={{
                      backgroundColor: hoveredItem === item.id || openSubmenu === item.id ? '#1C86EF' : 'transparent',
                      color: hoveredItem === item.id || openSubmenu === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                    }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.icon && (
                      <span className="menu-item-icon" style={{
                        color: hoveredItem === item.id || openSubmenu === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                      }}>
                        {item.icon}
                      </span>
                    )}
                    <span className="flex-1">{item.label}</span>
                  </PM7MenuSubTrigger>
                  <PM7MenuSubContent
                    className={`pm7-submenu ${MENU_STYLES.CONTAINER_BORDER_RADIUS} ${isMobile ? MENU_STYLES.CONTAINER_MIN_WIDTH_MOBILE : MENU_STYLES.CONTAINER_MIN_WIDTH_DESKTOP} ${MENU_STYLES.CONTAINER_MAX_WIDTH} border z-50 ${isMobile ? 'max-h-[90vh] overflow-y-auto' : ''} ${theme === 'dark' ? 'dark' : ''}`}
                    style={{
                      boxShadow: MENU_STYLES.CONTAINER_SHADOW,
                      backgroundColor: currentTheme.bgColor,
                      color: currentTheme.textColor,
                      borderColor: currentTheme.borderColor,
                      marginTop: '-10px',
                      marginLeft: '4px'
                    }}
                  >
                    {item.submenuItems?.map((subItem) => (
                      subItem.type === 'separator' ? (
                        <PM7MenuSeparator key={subItem.id} />
                      ) : (
                        <PM7MenuItem
                          key={subItem.id}
                          onClick={subItem.onClick}
                          disabled={subItem.disabled}
                          style={{
                            backgroundColor: hoveredItem === subItem.id ? '#1C86EF' : 'transparent',
                            color: hoveredItem === subItem.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                          }}
                          onMouseEnter={() => setHoveredItem(subItem.id)}
                          onMouseLeave={() => setHoveredItem(null)}
                          className={theme === 'dark' ? 'dark' : ''}
                        >
                          {subItem.type === 'check' && (
                            <span className="menu-item-check" style={{ position: 'relative', alignItems: 'left', width: '20px', marginLeft: '-6px', marginRight: '0' }}>
                              {subItem.checked ? (
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
                                  style={{ position: 'absolute', left: '0' }}
                                >
                                  <polyline points="16 6 5 17 0 12" />
                                </svg>
                              ) : (
                                <span style={{ width: '16px', height: '16px' }}></span>
                              )}
                            </span>
                          )}
                          {subItem.icon && (
                            <span className="menu-item-icon" style={{
                              color: hoveredItem === subItem.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black'),
                              marginLeft: subItem.type === 'check' ? '-4px' : '0'
                            }}>
                              {subItem.icon}
                            </span>
                          )}
                          <span className="flex-1" style={{ marginLeft: subItem.type === 'check' && !subItem.icon ? '-4px' : '0' }}>{subItem.label}</span>
                        </PM7MenuItem>
                      )
                    ))}
                  </PM7MenuSubContent>
                </PM7MenuSub>
              ) : item.type === 'check' ? (
                <PM7MenuCheckboxItem
                  key={item.id}
                  checked={item.checked || false}
                  onCheckedChange={(checked) => item.onChange && item.onChange(checked as boolean)}
                  disabled={item.disabled}
                  style={{
                    backgroundColor: hoveredItem === item.id ? '#1C86EF' : 'transparent',
                    color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                  }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={theme === 'dark' ? 'dark' : ''}
                >
                  {item.icon && (
                    <span className="menu-item-icon" style={{
                      color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                    }}>
                      {item.icon}
                    </span>
                  )}
                  <span className="flex-1">{item.label}</span>
                </PM7MenuCheckboxItem>
              ) : item.type === 'switch' ? (
                <PM7MenuItem
                  key={item.id}
                  onClick={() => {
                    if (item.onChange) {
                      item.onChange(!item.checked);
                    } else if (item.onClick) {
                      item.onClick();
                    }
                  }}
                  disabled={item.disabled}
                  style={{
                    backgroundColor: hoveredItem === item.id ? '#1C86EF' : 'transparent',
                    color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                  }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.icon && (
                    <span className="menu-item-icon" style={{
                      color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                    }}>
                      {item.icon}
                    </span>
                  )}
                  <span className="flex-1">{item.label}</span>
                  {item.type === 'switch' && (
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
                  )}
                </PM7MenuItem>
              ) : (
                <PM7MenuItem
                  key={item.id}
                  onClick={item.onClick}
                  disabled={item.disabled}
                  style={{
                    backgroundColor: hoveredItem === item.id ? '#1C86EF' : 'transparent',
                    color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                  }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.icon && (
                    <span className="menu-item-icon" style={{
                      color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                    }}>
                      {item.icon}
                    </span>
                  )}
                  <span className="flex-1">{item.label}</span>
                </PM7MenuItem>
              )}
            </React.Fragment>
          ))}
        </PM7MenuContent>
      </PM7Menu>
    </div>
  );
};

// For backward compatibility
export { PM7MenuComponent as Menu };
export default PM7MenuComponent;
