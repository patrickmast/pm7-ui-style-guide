"use strict";
// Enhancement: Updated Menu component to match the styling specifications from the template-menu README.md, including exact padding, sizing, colors, and hover effects. Made menu items fully configurable.
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = exports.PM7MenuComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const pm7_menu_1 = require("./components/ui/pm7-menu");
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
const PM7MenuComponent = ({ menuItems = [], initialTheme, mobileBreakpoint = 768, }) => {
    const [theme, setTheme] = (0, react_1.useState)(initialTheme || (typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light'));
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [isMobile, setIsMobile] = (0, react_1.useState)(false);
    const menuRef = (0, react_1.useRef)(null);
    const menuButtonRef = (0, react_1.useRef)(null);
    const submenuOpenRef = (0, react_1.useRef)(false);
    // Update theme when initialTheme prop changes
    (0, react_1.useEffect)(() => {
        if (initialTheme) {
            setTheme(initialTheme);
        }
    }, [initialTheme]);
    // Handle theme changes
    (0, react_1.useEffect)(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);
    // Sync with localStorage on mount
    (0, react_1.useEffect)(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark' || storedTheme === 'light') {
            setTheme(storedTheme);
        }
    }, []);
    // Mobile detection
    (0, react_1.useEffect)(() => {
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
    (0, react_1.useEffect)(() => {
        const handleClickOutside = (event) => {
            if (isOpen &&
                menuButtonRef.current &&
                menuRef.current &&
                !menuButtonRef.current.contains(event.target) &&
                !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);
    // Apply correct icon colors based on theme
    (0, react_1.useEffect)(() => {
        const menuItems = document.querySelectorAll('.menu-item-icon svg');
        menuItems.forEach(icon => {
            if ('style' in icon) {
                icon.style.color = theme === 'dark' ? '#FAFAFA' : '#000';
            }
        });
    }, [theme, isOpen]);
    // Effect to handle submenu open state
    (0, react_1.useEffect)(() => {
        // Function to handle submenu state changes
        const handleSubmenuStateChange = (mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-state') {
                    const target = mutation.target;
                    if (target.hasAttribute('data-radix-dropdown-menu-subtrigger')) {
                        const isOpen = target.getAttribute('data-state') === 'open';
                        submenuOpenRef.current = isOpen;
                        // Find and update the icon color
                        const icon = target.querySelector('.submenu-icon svg');
                        if (icon) {
                            icon.style.color = isOpen ? 'white' : '';
                        }
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
    const menuIcon = ((0, jsx_runtime_1.jsx)("svg", { className: "w-full h-full", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.5", children: (0, jsx_runtime_1.jsx)("path", { d: "M4 6h16M4 12h16M4 18h16" }) }));
    return ((0, jsx_runtime_1.jsx)("div", { ref: menuRef, className: "relative inline-block", children: (0, jsx_runtime_1.jsxs)(pm7_menu_1.PM7Menu, { open: isOpen, onOpenChange: setIsOpen, children: [(0, jsx_runtime_1.jsx)(pm7_menu_1.PM7MenuTrigger, { asChild: true, children: (0, jsx_runtime_1.jsx)("button", { ref: menuButtonRef, "aria-label": "Open menu", className: `flex items-center justify-center rounded-md cursor-pointer text-black dark:text-white hover:bg-opacity-10 hover:bg-gray-200 dark:hover:bg-opacity-10 dark:hover:bg-gray-700 focus:outline-none focus-visible:outline-none`, style: {
                            background: 'transparent',
                            width: isMobile ? MENU_STYLES.BUTTON_SIZE_MOBILE : MENU_STYLES.BUTTON_SIZE_DESKTOP,
                            height: isMobile ? MENU_STYLES.BUTTON_SIZE_MOBILE : MENU_STYLES.BUTTON_SIZE_DESKTOP,
                            border: 'none',
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            outline: 'none'
                        }, type: "button", onClick: () => setIsOpen(!isOpen), children: (0, jsx_runtime_1.jsx)("div", { style: {
                                width: isMobile ? MENU_STYLES.ICON_SIZE_MOBILE : MENU_STYLES.ICON_SIZE_DESKTOP,
                                height: isMobile ? MENU_STYLES.ICON_SIZE_MOBILE : MENU_STYLES.ICON_SIZE_DESKTOP,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: theme === 'dark' ? '#FAFAFA' : 'currentColor' // Ensure icon is white in dark mode
                            }, children: menuIcon }) }) }), (0, jsx_runtime_1.jsx)(pm7_menu_1.PM7MenuContent, { align: "end", alignOffset: 0, sideOffset: 4, className: `${MENU_STYLES.CONTAINER_BORDER_RADIUS} ${isMobile ? MENU_STYLES.CONTAINER_MIN_WIDTH_MOBILE : MENU_STYLES.CONTAINER_MIN_WIDTH_DESKTOP} ${MENU_STYLES.CONTAINER_MAX_WIDTH} ${MENU_STYLES.CONTAINER_MARGIN_TOP} ${MENU_STYLES.CONTAINER_PADDING} border z-50 ${isMobile ? 'max-h-[90vh] overflow-y-auto' : ''}`, style: {
                        boxShadow: theme === 'dark' ? 'none' : MENU_STYLES.CONTAINER_SHADOW,
                        backgroundColor: theme === 'dark' ? '#262626' : 'white',
                        color: theme === 'dark' ? '#FAFAFA' : 'black',
                        borderColor: theme === 'dark' ? '#525252' : '#D5D5D5'
                    }, children: menuItems.map((item) => (item.type === 'separator' ? ((0, jsx_runtime_1.jsx)(pm7_menu_1.PM7MenuSeparator, {}, item.id)) : item.type === 'submenu' ? ((0, jsx_runtime_1.jsxs)(pm7_menu_1.PM7MenuSub, { onOpenChange: (open) => {
                            // Find the submenu trigger
                            const submenuTrigger = document.querySelector(`[data-radix-dropdown-menu-subtrigger][data-state="${open ? 'open' : 'closed'}"]`);
                            if (submenuTrigger) {
                                // Find and update the icon color
                                const icon = submenuTrigger.querySelector('.submenu-icon svg');
                                if (icon) {
                                    icon.style.color = open ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black');
                                }
                            }
                        }, children: [(0, jsx_runtime_1.jsxs)(pm7_menu_1.PM7MenuSubTrigger, { className: `w-full text-left ${MENU_STYLES.ITEM_HORIZONTAL_PADDING} ${isMobile ? MENU_STYLES.ITEM_VERTICAL_PADDING_MOBILE : MENU_STYLES.ITEM_VERTICAL_PADDING_DESKTOP} cursor-pointer flex items-center justify-between ${isMobile ? 'text-base' : 'text-sm'} whitespace-nowrap overflow-hidden text-ellipsis`, onMouseEnter: (e) => {
                                    // Set icon color to white on hover
                                    const icon = e.currentTarget.querySelector('.submenu-icon svg');
                                    if (icon)
                                        icon.style.color = 'white';
                                }, onMouseLeave: (e) => {
                                    // Only reset if not open
                                    if (e.currentTarget.getAttribute('data-state') !== 'open') {
                                        const icon = e.currentTarget.querySelector('.submenu-icon svg');
                                        if (icon)
                                            icon.style.color = theme === 'dark' ? '#FAFAFA' : 'black';
                                    }
                                }, children: [(0, jsx_runtime_1.jsxs)("span", { className: "inline-flex items-center gap-3", children: [item.icon && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-icon", children: (0, jsx_runtime_1.jsx)("span", { className: `${theme === 'dark' ? 'text-[#FAFAFA]' : 'text-black'} submenu-icon`, children: item.icon }) })), item.label] }), item.rightIcon] }), (0, jsx_runtime_1.jsx)(pm7_menu_1.PM7MenuSubContent, { className: `${MENU_STYLES.CONTAINER_BORDER_RADIUS} ${isMobile ? MENU_STYLES.CONTAINER_MIN_WIDTH_MOBILE : MENU_STYLES.CONTAINER_MIN_WIDTH_DESKTOP} ${MENU_STYLES.CONTAINER_MAX_WIDTH} ${MENU_STYLES.CONTAINER_MARGIN_TOP} ${MENU_STYLES.CONTAINER_PADDING} border z-50 ${isMobile ? 'max-h-[90vh] overflow-y-auto' : ''}`, style: {
                                    boxShadow: theme === 'dark' ? 'none' : MENU_STYLES.CONTAINER_SHADOW,
                                    backgroundColor: theme === 'dark' ? '#262626' : 'white',
                                    color: theme === 'dark' ? '#FAFAFA' : 'black',
                                    borderColor: theme === 'dark' ? '#525252' : '#D5D5D5'
                                }, children: item.submenuItems && item.submenuItems.map((submenuItem) => (submenuItem.type === 'separator' ? ((0, jsx_runtime_1.jsx)(pm7_menu_1.PM7MenuSeparator, {}, submenuItem.id)) : submenuItem.type === 'check' ? ((0, jsx_runtime_1.jsxs)(pm7_menu_1.PM7MenuItem, { onClick: () => {
                                        if (submenuItem.onClick) {
                                            submenuItem.onClick();
                                            setIsOpen(false); // Close menu after check item click
                                        }
                                    }, className: `w-full text-left ${MENU_STYLES.ITEM_HORIZONTAL_PADDING} ${isMobile ? MENU_STYLES.ITEM_VERTICAL_PADDING_MOBILE : MENU_STYLES.ITEM_VERTICAL_PADDING_DESKTOP} cursor-pointer flex items-center ${submenuItem.rightIcon ? 'justify-between' : ''} ${isMobile ? 'text-base' : 'text-sm'} whitespace-nowrap overflow-hidden text-ellipsis`, children: [(0, jsx_runtime_1.jsxs)("span", { className: "inline-flex items-center gap-3", children: [(0, jsx_runtime_1.jsx)("span", { className: "relative flex h-3.5 w-3.5 items-center justify-center", children: submenuItem.checked && ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: (0, jsx_runtime_1.jsx)("polyline", { points: "20 6 9 17 4 12" }) })) }), submenuItem.icon && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-icon", children: (0, jsx_runtime_1.jsx)("span", { className: `${theme === 'dark' ? 'text-[#FAFAFA]' : 'text-black'}`, children: submenuItem.icon }) })), submenuItem.label] }), submenuItem.rightIcon && submenuItem.rightIcon] }, submenuItem.id)) : submenuItem.type === 'switch' ? ((0, jsx_runtime_1.jsxs)(pm7_menu_1.PM7MenuItem, { onClick: () => {
                                        if (submenuItem.onChange) {
                                            submenuItem.onChange();
                                        }
                                        else if (submenuItem.onClick) {
                                            submenuItem.onClick();
                                        }
                                    }, className: `w-full text-left ${MENU_STYLES.ITEM_HORIZONTAL_PADDING} ${isMobile ? MENU_STYLES.ITEM_VERTICAL_PADDING_MOBILE : MENU_STYLES.ITEM_VERTICAL_PADDING_DESKTOP} cursor-pointer flex items-center justify-between ${isMobile ? 'text-base' : 'text-sm'} whitespace-nowrap overflow-hidden text-ellipsis`, children: [(0, jsx_runtime_1.jsxs)("span", { className: "inline-flex items-center gap-3", children: [submenuItem.icon && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-icon", children: (0, jsx_runtime_1.jsx)("span", { className: `${theme === 'dark' ? 'text-[#FAFAFA]' : 'text-black'}`, children: submenuItem.icon }) })), submenuItem.label] }), (0, jsx_runtime_1.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", width: "16", height: "16", strokeWidth: "1.75", children: [(0, jsx_runtime_1.jsx)("path", { d: "M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }), (0, jsx_runtime_1.jsx)("path", { d: "M2 12a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6" })] })] }, submenuItem.id)) : ((0, jsx_runtime_1.jsxs)(pm7_menu_1.PM7MenuItem, { onClick: () => {
                                        if (submenuItem.onClick) {
                                            submenuItem.onClick();
                                            setIsOpen(false); // Close menu after item click
                                        }
                                    }, className: `w-full text-left ${MENU_STYLES.ITEM_HORIZONTAL_PADDING} ${isMobile ? MENU_STYLES.ITEM_VERTICAL_PADDING_MOBILE : MENU_STYLES.ITEM_VERTICAL_PADDING_DESKTOP} cursor-pointer flex items-center ${submenuItem.rightIcon ? 'justify-between' : ''} ${isMobile ? 'text-base' : 'text-sm'} whitespace-nowrap overflow-hidden text-ellipsis`, children: [(0, jsx_runtime_1.jsxs)("span", { className: "inline-flex items-center gap-3", children: [submenuItem.icon && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-icon", children: (0, jsx_runtime_1.jsx)("span", { className: `${theme === 'dark' ? 'text-[#FAFAFA]' : 'text-black'}`, children: submenuItem.icon }) })), submenuItem.label] }), submenuItem.rightIcon && submenuItem.rightIcon] }, submenuItem.id)))) })] }, item.id)) : item.type === 'switch' ? ((0, jsx_runtime_1.jsxs)(pm7_menu_1.PM7MenuItem, { onClick: () => {
                            if (item.onChange) {
                                item.onChange();
                            }
                            else if (item.onClick) {
                                item.onClick();
                            }
                            setIsOpen(false); // Close menu after item click
                        }, className: `w-full text-left ${MENU_STYLES.ITEM_HORIZONTAL_PADDING} ${isMobile ? MENU_STYLES.ITEM_VERTICAL_PADDING_MOBILE : MENU_STYLES.ITEM_VERTICAL_PADDING_DESKTOP} cursor-pointer flex items-center justify-between ${isMobile ? 'text-base' : 'text-sm'} whitespace-nowrap overflow-hidden text-ellipsis`, children: [(0, jsx_runtime_1.jsxs)("span", { className: "inline-flex items-center gap-3", children: [item.icon && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-icon", children: (0, jsx_runtime_1.jsx)("span", { className: `${theme === 'dark' ? 'text-[#FAFAFA]' : 'text-black'}`, children: item.icon }) })), item.label] }), (0, jsx_runtime_1.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", width: "16", height: "16", strokeWidth: "1.75", children: [(0, jsx_runtime_1.jsx)("path", { d: "M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }), (0, jsx_runtime_1.jsx)("path", { d: "M2 12a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6" })] })] }, item.id)) : ((0, jsx_runtime_1.jsxs)(pm7_menu_1.PM7MenuItem, { onClick: () => {
                            if (item.onClick) {
                                item.onClick();
                                setIsOpen(false); // Close menu after item click
                            }
                        }, className: `w-full text-left ${MENU_STYLES.ITEM_HORIZONTAL_PADDING} ${isMobile ? MENU_STYLES.ITEM_VERTICAL_PADDING_MOBILE : MENU_STYLES.ITEM_VERTICAL_PADDING_DESKTOP} cursor-pointer flex items-center ${item.rightIcon ? 'justify-between' : ''} ${isMobile ? 'text-base' : 'text-sm'} whitespace-nowrap overflow-hidden text-ellipsis`, children: [(0, jsx_runtime_1.jsxs)("span", { className: "inline-flex items-center gap-3", children: [item.icon && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-icon", children: (0, jsx_runtime_1.jsx)("span", { className: `${theme === 'dark' ? 'text-[#FAFAFA]' : 'text-black'}`, children: item.icon }) })), item.label] }), item.rightIcon && item.rightIcon] }, item.id)))) })] }) }));
};
exports.PM7MenuComponent = PM7MenuComponent;
exports.Menu = exports.PM7MenuComponent;
exports.default = exports.PM7MenuComponent;
