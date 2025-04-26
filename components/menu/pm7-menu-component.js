"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = exports.PM7MenuComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// Bug Fix: Moved PM7MenuComponent implementation from index.tsx to pm7-menu-component.tsx to follow project structure pattern
const react_1 = __importStar(require("react"));
const pm7_menu_1 = require("./pm7-menu");
require("./pm7-menu.css");
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
// Custom menu component with self-contained dark mode
const PM7MenuComponent = ({ menuItems = [], initialTheme = 'light', mobileBreakpoint = 768, }) => {
    // State for menu open/close
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    // State for mobile detection
    const [isMobile, setIsMobile] = (0, react_1.useState)(false);
    // Refs for menu elements
    const menuRef = (0, react_1.useRef)(null);
    const menuButtonRef = (0, react_1.useRef)(null);
    // State for theme (light/dark)
    const [theme, setTheme] = (0, react_1.useState)(initialTheme);
    // State for hover tracking
    const [hoveredItem, setHoveredItem] = (0, react_1.useState)(null);
    // State for tracking open submenu
    const [openSubmenu, setOpenSubmenu] = (0, react_1.useState)(null);
    // Update theme when initialTheme prop changes
    (0, react_1.useEffect)(() => {
        if (initialTheme) {
            setTheme(initialTheme);
        }
    }, [initialTheme]);
    // Check for mobile viewport
    (0, react_1.useEffect)(() => {
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
    (0, react_1.useEffect)(() => {
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
    return ((0, jsx_runtime_1.jsx)("div", { ref: menuRef, className: "relative inline-block", children: (0, jsx_runtime_1.jsxs)(pm7_menu_1.PM7Menu, { open: isOpen, onOpenChange: (open) => {
                setIsOpen(open);
                if (!open) {
                    // Reset states when menu closes
                    setHoveredItem(null);
                    setOpenSubmenu(null);
                }
            }, children: [(0, jsx_runtime_1.jsx)(pm7_menu_1.PM7MenuTrigger, { asChild: true, children: (0, jsx_runtime_1.jsx)("button", { ref: menuButtonRef, "aria-label": "Open menu", className: `flex items-center justify-center rounded-md cursor-pointer text-black hover:bg-opacity-10 hover:bg-gray-200 focus:outline-none focus-visible:outline-none`, onClick: () => setIsOpen(!isOpen), children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: theme === 'dark' ? '#FAFAFA' : 'currentColor', strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", className: "menu-trigger-icon", children: (0, jsx_runtime_1.jsx)("path", { d: "M4 6h16M4 12h16M4 18h16" }) }) }) }), (0, jsx_runtime_1.jsx)(pm7_menu_1.PM7MenuContent, { align: "end", alignOffset: 0, sideOffset: 4, className: theme === 'dark' ? 'dark' : '', style: {
                        borderRadius: MENU_STYLES.CONTAINER_BORDER_RADIUS,
                        minWidth: isMobile ? MENU_STYLES.CONTAINER_MIN_WIDTH_MOBILE : MENU_STYLES.CONTAINER_MIN_WIDTH_DESKTOP,
                        maxWidth: MENU_STYLES.CONTAINER_MAX_WIDTH,
                        padding: MENU_STYLES.CONTAINER_PADDING,
                        boxShadow: MENU_STYLES.CONTAINER_SHADOW,
                        backgroundColor: currentTheme.bgColor,
                        color: currentTheme.textColor,
                        borderColor: currentTheme.borderColor,
                        marginTop: '-4px'
                    }, onCloseAutoFocus: (e) => {
                        e.preventDefault();
                        setHoveredItem(null);
                        setOpenSubmenu(null);
                    }, children: menuItems.map((item) => {
                        var _a;
                        return ((0, jsx_runtime_1.jsx)(react_1.default.Fragment, { children: item.type === 'separator' ? ((0, jsx_runtime_1.jsx)(pm7_menu_1.PM7MenuSeparator, {})) : item.type === 'submenu' && item.submenuItems ? ((0, jsx_runtime_1.jsxs)(pm7_menu_1.PM7MenuSub, { onOpenChange: (open) => {
                                    if (open) {
                                        setOpenSubmenu(item.id);
                                    }
                                    else if (openSubmenu === item.id) {
                                        setOpenSubmenu(null);
                                    }
                                }, children: [(0, jsx_runtime_1.jsxs)(pm7_menu_1.PM7MenuSubTrigger, { className: `${theme === 'dark' ? 'dark' : ''}`, style: {
                                            backgroundColor: hoveredItem === item.id || openSubmenu === item.id ? '#1C86EF' : 'transparent',
                                            color: hoveredItem === item.id || openSubmenu === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                                        }, onMouseEnter: () => setHoveredItem(item.id), onMouseLeave: () => setHoveredItem(null), children: [item.icon && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-icon", style: {
                                                    color: hoveredItem === item.id || openSubmenu === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                                                }, children: item.icon })), (0, jsx_runtime_1.jsx)("span", { className: "flex-1", children: item.label })] }), (0, jsx_runtime_1.jsx)(pm7_menu_1.PM7MenuSubContent, { className: `pm7-submenu ${MENU_STYLES.CONTAINER_BORDER_RADIUS} ${isMobile ? MENU_STYLES.CONTAINER_MIN_WIDTH_MOBILE : MENU_STYLES.CONTAINER_MIN_WIDTH_DESKTOP} ${MENU_STYLES.CONTAINER_MAX_WIDTH} border z-50 ${isMobile ? 'max-h-[90vh] overflow-y-auto' : ''} ${theme === 'dark' ? 'dark' : ''}`, style: {
                                            boxShadow: MENU_STYLES.CONTAINER_SHADOW,
                                            backgroundColor: currentTheme.bgColor,
                                            color: currentTheme.textColor,
                                            borderColor: currentTheme.borderColor,
                                            marginTop: '-10px',
                                            marginLeft: '4px'
                                        }, children: (_a = item.submenuItems) === null || _a === void 0 ? void 0 : _a.map((subItem) => (subItem.type === 'separator' ? ((0, jsx_runtime_1.jsx)(pm7_menu_1.PM7MenuSeparator, {}, subItem.id)) : ((0, jsx_runtime_1.jsxs)(pm7_menu_1.PM7MenuItem, { onClick: subItem.onClick, disabled: subItem.disabled, style: {
                                                backgroundColor: hoveredItem === subItem.id ? '#1C86EF' : 'transparent',
                                                color: hoveredItem === subItem.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                                            }, onMouseEnter: () => setHoveredItem(subItem.id), onMouseLeave: () => setHoveredItem(null), className: theme === 'dark' ? 'dark' : '', children: [subItem.type === 'check' && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-check", style: { position: 'relative', alignItems: 'left', width: '20px', marginLeft: '-6px', marginRight: '0' }, children: subItem.checked ? ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: { position: 'absolute', left: '0' }, children: (0, jsx_runtime_1.jsx)("polyline", { points: "16 6 5 17 0 12" }) })) : ((0, jsx_runtime_1.jsx)("span", { style: { width: '16px', height: '16px' } })) })), subItem.icon && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-icon", style: {
                                                        color: hoveredItem === subItem.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black'),
                                                        marginLeft: subItem.type === 'check' ? '-4px' : '0'
                                                    }, children: subItem.icon })), (0, jsx_runtime_1.jsx)("span", { className: "flex-1", style: { marginLeft: subItem.type === 'check' && !subItem.icon ? '-4px' : '0' }, children: subItem.label })] }, subItem.id)))) })] })) : item.type === 'check' ? ((0, jsx_runtime_1.jsxs)(pm7_menu_1.PM7MenuCheckboxItem, { checked: item.checked || false, onCheckedChange: (checked) => item.onChange && item.onChange(checked), disabled: item.disabled, style: {
                                    backgroundColor: hoveredItem === item.id ? '#1C86EF' : 'transparent',
                                    color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                                }, onMouseEnter: () => setHoveredItem(item.id), onMouseLeave: () => setHoveredItem(null), className: theme === 'dark' ? 'dark' : '', children: [item.icon && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-icon", style: {
                                            color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                                        }, children: item.icon })), (0, jsx_runtime_1.jsx)("span", { className: "flex-1", children: item.label })] }, item.id)) : item.type === 'switch' ? ((0, jsx_runtime_1.jsxs)(pm7_menu_1.PM7MenuItem, { onClick: () => {
                                    if (item.onChange) {
                                        item.onChange(!item.checked);
                                    }
                                    else if (item.onClick) {
                                        item.onClick();
                                    }
                                }, disabled: item.disabled, style: {
                                    backgroundColor: hoveredItem === item.id ? '#1C86EF' : 'transparent',
                                    color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                                }, onMouseEnter: () => setHoveredItem(item.id), onMouseLeave: () => setHoveredItem(null), children: [item.icon && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-icon", style: {
                                            color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                                        }, children: item.icon })), (0, jsx_runtime_1.jsx)("span", { className: "flex-1", children: item.label }), item.type === 'switch' && ((0, jsx_runtime_1.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", width: "16", height: "16", strokeWidth: "1.75", children: [(0, jsx_runtime_1.jsx)("path", { d: "M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }), (0, jsx_runtime_1.jsx)("path", { d: "M2 12a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6" })] }))] }, item.id)) : ((0, jsx_runtime_1.jsxs)(pm7_menu_1.PM7MenuItem, { onClick: item.onClick, disabled: item.disabled, style: {
                                    backgroundColor: hoveredItem === item.id ? '#1C86EF' : 'transparent',
                                    color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                                }, onMouseEnter: () => setHoveredItem(item.id), onMouseLeave: () => setHoveredItem(null), children: [item.icon && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-icon", style: {
                                            color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                                        }, children: item.icon })), (0, jsx_runtime_1.jsx)("span", { className: "flex-1", children: item.label })] }, item.id)) }, item.id));
                    }) })] }) }));
};
exports.PM7MenuComponent = PM7MenuComponent;
exports.Menu = exports.PM7MenuComponent;
exports.default = exports.PM7MenuComponent;
