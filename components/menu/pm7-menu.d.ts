import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import './pm7-menu.css';

/**
 * Types of menu items that can be used in the PM7MenuComponent
 */
export type PM7MenuItemType = 'item' | 'submenu' | 'separator' | 'check' | 'radio' | 'switch';

/**
 * Properties for a menu item in the PM7MenuComponent
 * @property id - Unique identifier for the menu item
 * @property label - Text to display for the menu item
 * @property type - Type of menu item (defaults to 'item')
 * @property icon - Icon to display before the label
 * @property disabled - Whether the item is disabled
 * @property onClick - Function to call when the item is clicked
 * @property onChange - Function to call when a checkbox or radio item changes state
 * @property checked - Whether a checkbox or radio item is checked
 * @property submenuItems - Array of submenu items (only used when type is 'submenu')
 */
export type PM7MenuItem = {
    id: string;
    label?: string;
    type?: PM7MenuItemType;
    icon?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    onChange?: (checked: boolean) => void;
    checked?: boolean;
    submenuItems?: PM7MenuItem[];
};

/**
 * Properties for the PM7MenuComponent
 * @property menuItems - Array of menu items to display
 * @property initialTheme - Initial theme for the menu ('light' or 'dark')
 * @property mobileBreakpoint - Pixel width at which to switch to mobile styling
 */
export type PM7MenuProps = {
    menuItems?: PM7MenuItem[];
    initialTheme?: 'light' | 'dark';
    mobileBreakpoint?: number;
};

/**
 * Root menu component from Radix UI
 */
declare const PM7MenuRoot: React.FC<DropdownMenuPrimitive.DropdownMenuProps>;

/**
 * Trigger button for the menu
 */
declare const PM7MenuTrigger: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;

/**
 * Group component for organizing menu items
 */
declare const PM7MenuGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;

/**
 * Portal component for rendering the menu in a different DOM node
 */
declare const PM7MenuPortal: React.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;

/**
 * Submenu component for nested menus
 */
declare const PM7MenuSub: React.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;

/**
 * Radio group component for radio menu items
 */
declare const PM7MenuRadioGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;

/**
 * Submenu trigger component
 */
declare const PM7MenuSubTrigger: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;

/**
 * Submenu content component
 */
declare const PM7MenuSubContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

/**
 * Menu content component
 */
declare const PM7MenuContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

/**
 * Menu item component
 */
declare const PM7MenuItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;

/**
 * Checkbox menu item component
 */
declare const PM7MenuCheckboxItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

/**
 * Radio menu item component
 */
declare const PM7MenuRadioItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

/**
 * Menu label component
 */
declare const PM7MenuLabel: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;

/**
 * Menu separator component
 */
declare const PM7MenuSeparator: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

/**
 * Menu shortcut component for displaying keyboard shortcuts
 */
declare const PM7MenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

/**
 * Main menu component that provides a fully-styled dropdown menu
 * with configurable menu items
 * 
 * @example
 * ```tsx
 * import { PM7MenuComponent } from 'pm7-ui-style-guide';
 * 
 * const menuItems = [
 *   {
 *     id: 'settings',
 *     label: 'Settings',
 *     onClick: () => console.log('Settings clicked')
 *   }
 * ];
 * 
 * function MyComponent() {
 *   return <PM7MenuComponent menuItems={menuItems} />;
 * }
 * ```
 */
export declare const PM7MenuComponent: React.FC<PM7MenuProps>;

/**
 * Alias for PM7MenuComponent for convenience
 */
export { PM7MenuComponent as Menu };

/**
 * Export all primitive components for advanced customization
 */
export { PM7MenuRoot as PM7Menu, PM7MenuTrigger, PM7MenuContent, PM7MenuItem, PM7MenuCheckboxItem, PM7MenuRadioItem, PM7MenuLabel, PM7MenuSeparator, PM7MenuShortcut, PM7MenuGroup, PM7MenuPortal, PM7MenuSub, PM7MenuSubContent, PM7MenuSubTrigger, PM7MenuRadioGroup, };
