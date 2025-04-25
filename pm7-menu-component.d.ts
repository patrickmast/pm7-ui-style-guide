import React from "react";
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
export declare const PM7MenuComponent: React.FC<PM7MenuProps>;
export { PM7MenuComponent as Menu };
export default PM7MenuComponent;
