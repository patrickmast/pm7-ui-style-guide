import React from 'react';
import './pm7-menu.css';
export type PM7MenuItemType = 'item' | 'submenu' | 'separator' | 'check' | 'radio' | 'switch';
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
export interface PM7MenuProps {
    menuItems?: PM7MenuItem[];
    initialTheme?: 'light' | 'dark';
    mobileBreakpoint?: number;
}
export declare const PM7MenuComponent: React.FC<PM7MenuProps>;
export { PM7MenuComponent as Menu };
export default PM7MenuComponent;
