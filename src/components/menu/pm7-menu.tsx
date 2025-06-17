// Bug Fix: Restored checkbox/checkmark icon in front of the text for check-menu-items. The checkmark is now shown before the label for check-menu-items, using CheckIcon from lucide-react, matching the previous behavior.
// Bug Fix: Ensure checkmark/checkbox icon is always rendered before the label for all check-type menu items, including those in submenus.
// Bug Fix: Removed custom checkmark rendering for check-type menu items. Now only the built-in checkmark from PM7MenuCheckboxItem is shown.
// ENHANCEMENT: Wrap the switch SVG icon in a <span> with className 'menu-item-switch-icon' to apply the new spacing.

"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import "./pm7-menu.css";

// Menu styling constants
const MENU_STYLES = {
  // Menu Item Padding
  ITEM_HORIZONTAL_PADDING: 'px-4', // 16px
  ITEM_VERTICAL_PADDING_DESKTOP: 'py-2', // 8px
  ITEM_VERTICAL_PADDING_MOBILE: 'py-3', // 12px
  ITEM_ICON_TEXT_GAP: 'gap-3', // 12px
  // Dropdown Container Styling
  CONTAINER_PADDING: 'py-3 px-3', // 12px
  CONTAINER_BORDER_RADIUS: 'rounded-[6px]', // 6px
  CONTAINER_SHADOW: 'rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px',
  CONTAINER_MIN_WIDTH_DESKTOP: 'min-w-[12rem]', // 12rem
  CONTAINER_MIN_WIDTH_MOBILE: 'min-w-[16rem]', // 16rem
  CONTAINER_MAX_WIDTH: 'max-w-[18.8rem]',
  CONTAINER_MARGIN_TOP: 'mt-1', // 4px
  // Default Z-Index
  DEFAULT_Z_INDEX: 50,
  // Default Accent Color
  DEFAULT_ACCENT_COLOR: '#1C86EF'
};

// Utility function for combining class names
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

// Menu item types
export enum PM7MenuItemType {
  NORMAL = 'normal',
  CHECK = 'check',
  RADIO = 'radio',
  SUBMENU = 'submenu',
  SEPARATOR = 'separator',
  SWITCH = 'switch'
}

// Menu item type
export type PM7MenuItem = {
  id: string;
  label: React.ReactNode;
  type?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  submenuItems?: any[]; // Using any[] to avoid circular reference
  [key: string]: any; // For language-specific labels
}

// Root component
const PM7MenuRoot = DropdownMenuPrimitive.Root;
export { PM7MenuRoot };

// Trigger component
const PM7MenuTrigger = DropdownMenuPrimitive.Trigger;
export { PM7MenuTrigger };

// Group component
const PM7MenuGroup = DropdownMenuPrimitive.Group;
export { PM7MenuGroup };

// Portal component
const PM7MenuPortal = DropdownMenuPrimitive.Portal;
export { PM7MenuPortal };

// Sub component
const PM7MenuSub = DropdownMenuPrimitive.Sub;
export { PM7MenuSub };

// Radio group component
const PM7MenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export { PM7MenuRadioGroup };

// SubTrigger component
const PM7MenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, style, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-pointer select-none items-center rounded-md px-4 py-2 text-sm outline-none",
      "data-[state=open]:bg-[#1C86EF] data-[state=open]:text-white",
      inset && "pl-8",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "data-[highlighted]:bg-[#1C86EF] data-[highlighted]:text-white",
      "text-black dark:text-[#FAFAFA] dark:text-opacity-100 !important",
      className
    )}
    style={{
      ...style,
      // Enhance data-highlighted and data-state=open states with shadow
      ...((props['data-highlighted'] || props['data-state'] === 'open') && {
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px',
        zIndex: 10,
        position: 'relative',
        transform: 'translateZ(0)'
      })
    }}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
PM7MenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
export { PM7MenuSubTrigger };

// SubContent component
const PM7MenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-[6px] border py-3 px-3 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "bg-white dark:bg-[#262626] border-[#D5D5D5] dark:border-[#525252] text-black dark:text-[#FAFAFA] dark:text-opacity-100",
      className
    )}
    {...props}
  />
));
PM7MenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
export { PM7MenuSubContent };

// Content component
const PM7MenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-[6px] border py-3 px-3 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "bg-white dark:bg-[#262626] border-[#D5D5D5] dark:border-[#525252] text-black dark:text-[#FAFAFA] dark:text-opacity-100",
        className || ""
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
PM7MenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
export { PM7MenuContent };

// Item component
const PM7MenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, style, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-md px-4 py-2 text-sm outline-none",
      inset && "pl-8",
      "data-[highlighted]:bg-[#1C86EF] data-[highlighted]:text-white",
      "text-black dark:text-[#FAFAFA] dark:text-opacity-100 !important",
      className || ""
    )}
    style={{
      ...style,
      // Enhance data-highlighted state with shadow - this ensures keyboard navigation also shows shadows
      ...(props['data-highlighted'] && {
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px',
        zIndex: 10,
        position: 'relative',
        transform: 'translateZ(0)'
      })
    }}
    {...props}
  />
));
PM7MenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
export { PM7MenuItem };

// CheckboxItem component
const PM7MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, style, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[#1C86EF] focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "hover:bg-[#1C86EF] hover:text-white",
      "data-[highlighted]:bg-[#1C86EF] data-[highlighted]:text-white",
      "text-black dark:text-[#FAFAFA] dark:text-opacity-100 !important",
      className || ""
    )}
    style={{
      ...style,
      // Enhance data-highlighted state with shadow - this ensures keyboard navigation also shows shadows
      ...(props['data-highlighted'] && {
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px',
        zIndex: 10,
        position: 'relative',
        transform: 'translateZ(0)'
      })
    }}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
PM7MenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
export { PM7MenuCheckboxItem };

// RadioItem component
const PM7MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[#1C86EF] focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "hover:bg-[#1C86EF] hover:text-white",
      "text-black dark:text-[#FAFAFA] dark:text-opacity-100 !important",
      className || ""
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CircleIcon className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
PM7MenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
export { PM7MenuRadioItem };

// Label component
const PM7MenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      "text-black dark:text-[#FAFAFA] dark:text-opacity-100",
      className || ""
    )}
    {...props}
  />
));
PM7MenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
export { PM7MenuLabel };

// Separator component
const PM7MenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn(
      "h-[1px] bg-[#D5D5D5] dark:bg-[#525252] my-2 mx-0 border-none",
      className || ""
    )}
    {...props}
  />
));
PM7MenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
export { PM7MenuSeparator };

// Shortcut component
const PM7MenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest opacity-60",
        className || ""
      )}
      {...props}
    />
  );
};
PM7MenuShortcut.displayName = "PM7MenuShortcut";
export { PM7MenuShortcut };

// Main menu component with self-contained dark mode
export interface PM7MenuProps {
  menuItems: any[]; // Using any[] to avoid circular reference
  theme?: 'light' | 'dark';
  mobileBreakpoint?: number;
  menuAlignment?: 'start' | 'center' | 'end';
  menuIcon?: React.ReactNode; // New: custom icon
  menuTriggerIconColor?: string; // Base icon color (used in light mode)
  menuTriggerIconColorDark?: string; // Icon color for dark mode
  menuTriggerLabelColor?: string; // Base label color (used in light mode)
  menuTriggerLabelColorDark?: string; // Label color for dark mode
  menuLabel?: React.ReactNode; // New: custom label (string or ReactNode)
  /**
   * If true, show border on the menu trigger. Default: false
   */
  menuTriggerBorder?: boolean;
  /**
   * If true, show background on the menu trigger. Default: false
   */
  menuTriggerBackground?: boolean;
  /**
   * If true, show border and background only on hover of the menu trigger. Default: false
   */
  menuTriggerOnHover?: boolean;
  /**
   * Background color for the menu trigger button (overrides default)
   */
  menuTriggerBackgroundColor?: string;
  /**
   * Background color for the menu trigger button in dark mode (overrides default)
   */
  menuTriggerBackgroundColorDark?: string;
  /**
   * Border color for the menu trigger button (overrides default)
   */
  menuTriggerBorderColor?: string;
  /**
   * Border color for the menu trigger button in dark mode (overrides default)
   */
  menuTriggerBorderColorDark?: string;
  /**
   * Background color for the menu trigger button on hover (overrides default)
   */
  menuTriggerHoverBackgroundColor?: string;
  /**
   * Background color for the menu trigger button on hover in dark mode (overrides default)
   */
  menuTriggerHoverBackgroundColorDark?: string;
  /**
   * Border color for the menu trigger button on hover (overrides default)
   */
  menuTriggerHoverBorderColor?: string;
  /**
   * Border color for the menu trigger button on hover in dark mode (overrides default)
   */
  menuTriggerHoverBorderColorDark?: string;
  /**
   * Background color for the dropdown menu content
   */
  menuBackgroundColor?: string;
  /**
   * Background color for the dropdown menu content in dark mode
   */
  menuBackgroundColorDark?: string;
}

const PM7MenuComponent: React.FC<PM7MenuProps> = ({
  menuItems = [],
  theme = 'light',
  mobileBreakpoint = 768,
  menuAlignment = 'start',
  menuTriggerIconColor,
  menuTriggerIconColorDark,
  menuIcon,
  menuLabel,
  menuTriggerLabelColor,
  menuTriggerLabelColorDark,
  menuTriggerBorder = false,
  menuTriggerBackground = false,
  menuTriggerOnHover = false,
  menuTriggerBackgroundColor,
  menuTriggerBackgroundColorDark,
  menuTriggerBorderColor,
  menuTriggerBorderColorDark,
  menuTriggerHoverBackgroundColor,
  menuTriggerHoverBackgroundColorDark,
  menuTriggerHoverBorderColor,
  menuTriggerHoverBorderColorDark,
  menuBackgroundColor,
  menuBackgroundColorDark,
}) => {
  // State for menu open/close
  const [isOpen, setIsOpen] = React.useState(false);

  // State for mobile detection
  const [isMobile, setIsMobile] = React.useState(false);

  // Refs for menu elements
  const menuRef = React.useRef<HTMLDivElement>(null);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);

  // State for hover tracking
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  // State for tracking open submenu
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);

  // Check for mobile viewport
  React.useEffect(() => {
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
  React.useEffect(() => {
    if (!isOpen) {
      setHoveredItem(null);
      setOpenSubmenu(null);
    }
  }, [isOpen]);

  // Helper function for theme-aware color selection
  const getThemeColor = (baseColor: string | undefined, darkColor: string | undefined): string | undefined => {
    if (theme === 'dark') {
      return darkColor || baseColor;
    } else {
      return baseColor;
    }
  };

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
      <PM7MenuRoot
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) {
            // Reset states when menu closes
            setHoveredItem(null);
            setOpenSubmenu(null);
          }
        }}
      >
        <PM7MenuTrigger asChild>
          <button
            ref={menuButtonRef}
            aria-label="Open menu"
            className={cn(
              'flex items-center justify-center rounded-md cursor-pointer text-black focus:outline-none focus-visible:outline-none',
              // Apply border and background based on checkbox states
              // Background + Border (normal state)
              menuTriggerBorder && menuTriggerBackground && !menuTriggerOnHover && 'menu-trigger--bordered',
              // Border only (normal state)  
              menuTriggerBorder && !menuTriggerBackground && !menuTriggerOnHover && 'menu-trigger--border-only',
              // Background + Border (hover state)
              menuTriggerBorder && menuTriggerBackground && menuTriggerOnHover && 'menu-trigger--bordered menu-trigger--bordered-hover',
              // Border only (hover state) - use special border-only-hover class
              menuTriggerBorder && !menuTriggerBackground && menuTriggerOnHover && 'menu-trigger--border-only menu-trigger--border-only-hover',
              // Background only (normal state) - new case
              !menuTriggerBorder && menuTriggerBackground && !menuTriggerOnHover && 'menu-trigger--background-only',
              // Background only (hover state) - use special background-only-hover class
              !menuTriggerBorder && menuTriggerBackground && menuTriggerOnHover && 'menu-trigger--background-only menu-trigger--background-only-hover',
              // Hover only (no border or background normally, only on hover)
              !menuTriggerBorder && !menuTriggerBackground && menuTriggerOnHover && 'menu-trigger--bordered-hover'
            )}
            style={{
              // Base styles for all buttons
              border: '1px solid transparent',
              height: '32px',
              minWidth: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxSizing: 'border-box',
              // Add padding for text-containing buttons
              ...(menuLabel && {
                padding: '0 10px',
                minWidth: 'auto'
              }),
              // Icon-only buttons get square sizing
              ...(!menuLabel && {
                padding: '0',
                width: '32px'
              }),
              // Theme-aware color customization
              ...(getThemeColor(menuTriggerBackgroundColor, menuTriggerBackgroundColorDark) && {
                backgroundColor: getThemeColor(menuTriggerBackgroundColor, menuTriggerBackgroundColorDark),
                background: getThemeColor(menuTriggerBackgroundColor, menuTriggerBackgroundColorDark),
                '--menu-trigger-bg': getThemeColor(menuTriggerBackgroundColor, menuTriggerBackgroundColorDark),
              }),
              // Set border color - either custom or default
              ...(menuTriggerBorder && {
                '--menu-trigger-border-color': getThemeColor(menuTriggerBorderColor, menuTriggerBorderColorDark) || (theme === 'dark' ? '#525252' : '#D5D5D5'),
                ...(getThemeColor(menuTriggerBorderColor, menuTriggerBorderColorDark) && {
                  borderColor: getThemeColor(menuTriggerBorderColor, menuTriggerBorderColorDark),
                }),
              }),
              // CSS custom properties for hover colors
              ...(getThemeColor(menuTriggerHoverBackgroundColor, menuTriggerHoverBackgroundColorDark) && {
                '--menu-trigger-hover-bg': getThemeColor(menuTriggerHoverBackgroundColor, menuTriggerHoverBackgroundColorDark),
              }),
              // Set hover border color - either custom hover color or inherit current border color
              ...(menuTriggerOnHover && menuTriggerBorder && {
                '--menu-trigger-hover-border-color': getThemeColor(menuTriggerHoverBorderColor, menuTriggerHoverBorderColorDark) || getThemeColor(menuTriggerBorderColor, menuTriggerBorderColorDark) || (theme === 'dark' ? '#525252' : '#D5D5D5'),
              }),
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Priority: menuLabel (with optional icon), then menuIcon, then default icon */}
            {menuLabel ? (
              <span
                className="menu-trigger-label flex items-center gap-2"
                style={{
                  color: getThemeColor(menuTriggerLabelColor, menuTriggerLabelColorDark) 
                    || (theme === 'dark' ? '#FAFAFA' : '#000000'),
                }}
              >
                {menuIcon && (
                  <span
                    className="menu-trigger-icon menu-trigger-icon--custom"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '--menu-trigger-icon-color': getThemeColor(menuTriggerIconColor, menuTriggerIconColorDark) || '#000000', // Black fallback
                      '--menu-trigger-icon-color-dark': getThemeColor(menuTriggerIconColor, menuTriggerIconColorDark) || '#FAFAFA', // White fallback
                    } as React.CSSProperties}
                  >
                    {menuIcon}
                  </span>
                )}
                {menuLabel}
              </span>
            ) : menuIcon ? (
              <span
                className="menu-trigger-icon menu-trigger-icon--custom"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '--menu-trigger-icon-color': getThemeColor(menuTriggerIconColor, menuTriggerIconColorDark) || '#000000', // Black fallback
                  '--menu-trigger-icon-color-dark': getThemeColor(menuTriggerIconColor, menuTriggerIconColorDark) || '#FAFAFA', // White fallback
                } as React.CSSProperties}
              >
                {menuIcon}
              </span>
            ) : (
              <span
                className="menu-trigger-icon menu-trigger-icon--custom"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  '--menu-trigger-icon-color': getThemeColor(menuTriggerIconColor, menuTriggerIconColorDark) || '#000000', // Black fallback
                  '--menu-trigger-icon-color-dark': getThemeColor(menuTriggerIconColor, menuTriggerIconColorDark) || '#FAFAFA', // White fallback
                } as React.CSSProperties}
              >
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="18" height="2.5" rx="1.25" fill="currentColor"/>
                  <rect y="6.25" width="18" height="2.5" rx="1.25" fill="currentColor"/>
                  <rect y="12.5" width="18" height="2.5" rx="1.25" fill="currentColor"/>
                </svg>
              </span>
            )}
          </button>
        </PM7MenuTrigger>

        <PM7MenuContent
          align={menuAlignment}
          style={{
            backgroundColor: getThemeColor(menuBackgroundColor, menuBackgroundColorDark) || currentTheme.bgColor,
            borderColor: currentTheme.borderColor,
            color: currentTheme.textColor,
            boxShadow: MENU_STYLES.CONTAINER_SHADOW,
            borderRadius: '6px',
            border: `1px solid ${currentTheme.borderColor}`,
            minWidth: isMobile ? MENU_STYLES.CONTAINER_MIN_WIDTH_MOBILE : MENU_STYLES.CONTAINER_MIN_WIDTH_DESKTOP,
            maxWidth: MENU_STYLES.CONTAINER_MAX_WIDTH,
            // Additional inline styles for maximum specificity against framework conflicts
            zIndex: 1000,
            position: 'relative',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            willChange: 'auto',
            filter: 'none',
            backdropFilter: 'none'
          }}
          className={cn(
            'pm7-menu-content-shadow-fix',
            theme === 'dark' ? 'dark' : ''
          )}
        >
          {menuItems.map((item) => (
            <React.Fragment key={item.id}>
              {item.type === 'separator' ? (
                <PM7MenuSeparator />
              ) : item.type === 'submenu' && item.submenuItems ? (
                <PM7MenuSub
                  open={openSubmenu === item.id}
                  onOpenChange={(open) => {
                    if (open) {
                      setOpenSubmenu(item.id);
                    } else if (openSubmenu === item.id) {
                      setOpenSubmenu(null);
                    }
                  }}
                >
                  <PM7MenuSubTrigger
                    style={{
                      backgroundColor: hoveredItem === item.id ? '#1C86EF' : 'transparent',
                      color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black'),
                      boxShadow: hoveredItem === item.id ? 'rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px' : 'none',
                      zIndex: hoveredItem === item.id ? 10 : 'auto',
                      position: 'relative',
                      transform: hoveredItem === item.id ? 'translateZ(0)' : 'none'
                    }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    disabled={item.disabled}
                  >
                    {item.icon && (
                      <span className="menu-item-icon">{item.icon}</span>
                    )}
                    <span className="flex-1">{item.label}</span>
                  </PM7MenuSubTrigger>

                  <PM7MenuSubContent
                    style={{
                      backgroundColor: getThemeColor(menuBackgroundColor, menuBackgroundColorDark) || currentTheme.bgColor,
                      borderColor: currentTheme.borderColor,
                      color: currentTheme.textColor,
                      boxShadow: MENU_STYLES.CONTAINER_SHADOW,
                      borderRadius: '6px',
                      border: `1px solid ${currentTheme.borderColor}`,
                      // Additional inline styles for maximum specificity against framework conflicts
                      zIndex: 1000,
                      position: 'relative',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      willChange: 'auto',
                      filter: 'none',
                      backdropFilter: 'none'
                    }}
                    className={cn(
                      'pm7-menu-content-shadow-fix',
                      theme === 'dark' ? 'dark' : ''
                    )}
                  >
                    {item.submenuItems.map((subItem: any) => (
                      <React.Fragment key={subItem.id}>
                        {subItem.type === 'check' ? (
                          <PM7MenuCheckboxItem
                            checked={subItem.checked}
                            onCheckedChange={checked => {
                              if (subItem.onChange) subItem.onChange(!!checked);
                              if (subItem.onClick) subItem.onClick();
                            }}
                            disabled={subItem.disabled}
                            style={{
                              backgroundColor: hoveredItem === subItem.id ? '#1C86EF' : 'transparent',
                              color: hoveredItem === subItem.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black'),
                              boxShadow: hoveredItem === subItem.id ? 'rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px' : 'none',
                              zIndex: hoveredItem === subItem.id ? 10 : 'auto',
                              position: 'relative',
                              transform: hoveredItem === subItem.id ? 'translateZ(0)' : 'none'
                            }}
                            onMouseEnter={() => setHoveredItem(subItem.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={theme === 'dark' ? 'dark' : ''}
                          >
                            {subItem.icon && (
                              <span className="menu-item-icon">{subItem.icon}</span>
                            )}
                            <span className="flex-1">{subItem.label}</span>
                          </PM7MenuCheckboxItem>
                        ) : (
                          <PM7MenuItem
                            onClick={subItem.onClick}
                            disabled={subItem.disabled}
                            style={{
                              backgroundColor: hoveredItem === subItem.id ? '#1C86EF' : 'transparent',
                              color: hoveredItem === subItem.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black'),
                              boxShadow: hoveredItem === subItem.id ? 'rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px' : 'none',
                              zIndex: hoveredItem === subItem.id ? 10 : 'auto',
                              position: 'relative',
                              transform: hoveredItem === subItem.id ? 'translateZ(0)' : 'none'
                            }}
                            onMouseEnter={() => setHoveredItem(subItem.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            {subItem.icon && (
                              <span className="menu-item-icon">{subItem.icon}</span>
                            )}
                            <span className="flex-1">{subItem.label}</span>
                          </PM7MenuItem>
                        )}
                      </React.Fragment>
                    ))}
                  </PM7MenuSubContent>
                </PM7MenuSub>
              ) : item.type === 'check' ? (
                <PM7MenuCheckboxItem
                  checked={item.checked}
                  onCheckedChange={checked => {
                    if (item.onChange) item.onChange(!!checked);
                    if (item.onClick) item.onClick();
                  }}
                  disabled={item.disabled}
                  style={{
                    backgroundColor: hoveredItem === item.id ? '#1C86EF' : 'transparent',
                    color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black'),
                    boxShadow: hoveredItem === item.id ? 'rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px' : 'none',
                    zIndex: hoveredItem === item.id ? 10 : 'auto',
                    position: 'relative',
                    transform: hoveredItem === item.id ? 'translateZ(0)' : 'none'
                  }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={theme === 'dark' ? 'dark' : ''}
                >
                  {item.icon && (
                    <span className="menu-item-icon">{item.icon}</span>
                  )}
                  <span className="flex-1">{item.label}</span>
                </PM7MenuCheckboxItem>
              ) : item.type === 'switch' ? (
                <PM7MenuItem
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
                    color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black'),
                    boxShadow: hoveredItem === item.id ? 'rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px' : 'none',
                    zIndex: hoveredItem === item.id ? 10 : 'auto',
                    position: 'relative',
                    transform: hoveredItem === item.id ? 'translateZ(0)' : 'none'
                  }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.icon && (
                    <span className="menu-item-icon">{item.icon}</span>
                  )}
                  <span className="flex-1">{item.label}</span>
                  {item.type === 'switch' && (
                    <span className="menu-item-switch-icon">
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
                        <path d="M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
                        <path d="M2 12a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6" />
                      </svg>
                    </span>
                  )}
                </PM7MenuItem>
              ) : (
                <PM7MenuItem
                  onClick={item.onClick}
                  disabled={item.disabled}
                  style={{
                    backgroundColor: hoveredItem === item.id ? '#1C86EF' : 'transparent',
                    color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black'),
                    boxShadow: hoveredItem === item.id ? 'rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px' : 'none',
                    zIndex: hoveredItem === item.id ? 10 : 'auto',
                    position: 'relative',
                    transform: hoveredItem === item.id ? 'translateZ(0)' : 'none'
                  }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.icon && (
                    <span className="menu-item-icon">{item.icon}</span>
                  )}
                  <span className="flex-1">{item.label}</span>
                </PM7MenuItem>
              )}
            </React.Fragment>
          ))}
        </PM7MenuContent>
      </PM7MenuRoot>
    </div>
  );
};

export const PM7Menu = React.memo(PM7MenuComponent);

// Add the PM7MenuIcon component at the top (after imports)
export const PM7MenuIcon = ({ color = "currentColor", size = 24, className, style }: { color?: string; size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);