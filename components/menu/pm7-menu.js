"use strict";
// Bug Fix: Restored checkbox/checkmark icon in front of the text for check-menu-items. The checkmark is now shown before the label for check-menu-items, using CheckIcon from lucide-react, matching the previous behavior. Bump version in package.json before publishing to npm.
// Bug Fix: Ensure checkmark/checkbox icon is always rendered before the label for all check-type menu items, including those in submenus. This guarantees the checkmark is visible for the selected language in the Language submenu and all other check-type menu items. Bump version in package.json before publishing to npm.
// Bug Fix: Removed custom checkmark rendering for check-type menu items. Now only the built-in checkmark from PM7MenuCheckboxItem is shown, preventing double checkmarks for checked items in menus and submenus. Bump version in package.json before publishing to npm.
// ENHANCEMENT: Wrap the switch SVG icon in a <span> with className 'menu-item-switch-icon' to apply the new spacing. This ensures the switch icon is spaced from the label, per the new CSS rule.
"use client";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PM7MenuRadioGroup = exports.PM7MenuSubTrigger = exports.PM7MenuSubContent = exports.PM7MenuSub = exports.PM7MenuPortal = exports.PM7MenuGroup = exports.PM7MenuShortcut = exports.PM7MenuSeparator = exports.PM7MenuLabel = exports.PM7MenuRadioItem = exports.PM7MenuCheckboxItem = exports.PM7MenuItem = exports.PM7MenuContent = exports.PM7MenuTrigger = exports.PM7Menu = exports.Menu = exports.PM7MenuComponent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const DropdownMenuPrimitive = __importStar(require("@radix-ui/react-dropdown-menu"));
const lucide_react_1 = require("lucide-react");
require("./pm7-menu.css");
// Menu styling constants (from template-menu/src/app/constants/menuStyles.ts)
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
// You may want to replace this with your own utility if not using Tailwind's cn()
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
const PM7MenuRoot = DropdownMenuPrimitive.Root;
exports.PM7Menu = PM7MenuRoot;
const PM7MenuTrigger = DropdownMenuPrimitive.Trigger;
exports.PM7MenuTrigger = PM7MenuTrigger;
const PM7MenuGroup = DropdownMenuPrimitive.Group;
exports.PM7MenuGroup = PM7MenuGroup;
const PM7MenuPortal = DropdownMenuPrimitive.Portal;
exports.PM7MenuPortal = PM7MenuPortal;
const PM7MenuSub = DropdownMenuPrimitive.Sub;
exports.PM7MenuSub = PM7MenuSub;
const PM7MenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
exports.PM7MenuRadioGroup = PM7MenuRadioGroup;
const PM7MenuSubTrigger = React.forwardRef((_a, ref) => {
    var { className, inset, children } = _a, props = __rest(_a, ["className", "inset", "children"]);
    return ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.SubTrigger, Object.assign({ ref: ref, className: cn("flex cursor-pointer select-none items-center rounded-md px-4 py-2 text-sm outline-none", "data-[state=open]:bg-[#1C86EF] data-[state=open]:text-white", inset && "pl-8", "data-[disabled]:pointer-events-none data-[disabled]:opacity-50", "data-[highlighted]:bg-[#1C86EF] data-[highlighted]:text-white", "text-black dark:text-[#FAFAFA] dark:text-opacity-100 !important", className) }, props, { children: [children, (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRightIcon, { className: "ml-auto h-4 w-4" })] })));
});
exports.PM7MenuSubTrigger = PM7MenuSubTrigger;
PM7MenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const PM7MenuSubContent = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.SubContent, Object.assign({ ref: ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-[6px] border py-3 px-3 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "bg-white dark:bg-[#262626] border-[#D5D5D5] dark:border-[#525252] text-black dark:text-[#FAFAFA] dark:text-opacity-100", className) }, props)));
});
exports.PM7MenuSubContent = PM7MenuSubContent;
PM7MenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const PM7MenuContent = React.forwardRef((_a, ref) => {
    var { className, sideOffset = 4 } = _a, props = __rest(_a, ["className", "sideOffset"]);
    return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Portal, { children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Content, Object.assign({ ref: ref, sideOffset: sideOffset, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-[6px] border py-3 px-3 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "bg-white dark:bg-[#262626] border-[#D5D5D5] dark:border-[#525252] text-black dark:text-[#FAFAFA] dark:text-opacity-100", className) }, props)) }));
});
exports.PM7MenuContent = PM7MenuContent;
PM7MenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const PM7MenuItem = React.forwardRef((_a, ref) => {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Item, Object.assign({ ref: ref, className: cn("relative flex cursor-pointer select-none items-center rounded-md px-4 py-2 text-sm outline-none", inset && "pl-8", "data-[highlighted]:bg-[#1C86EF] data-[highlighted]:text-white", "text-black dark:text-[#FAFAFA] dark:text-opacity-100 !important", className) }, props)));
});
exports.PM7MenuItem = PM7MenuItem;
PM7MenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const PM7MenuCheckboxItem = React.forwardRef((_a, ref) => {
    var { className, children, checked } = _a, props = __rest(_a, ["className", "children", "checked"]);
    return ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.CheckboxItem, Object.assign({ ref: ref, className: cn("relative flex cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[#1C86EF] focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50", "hover:bg-[#1C86EF] hover:text-white", "text-black dark:text-[#FAFAFA] dark:text-opacity-100 !important", className), checked: checked }, props, { children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.CheckIcon, { className: "h-4 w-4" }) }) }), children] })));
});
exports.PM7MenuCheckboxItem = PM7MenuCheckboxItem;
PM7MenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const PM7MenuRadioItem = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.RadioItem, Object.assign({ ref: ref, className: cn("relative flex cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[#1C86EF] focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50", "hover:bg-[#1C86EF] hover:text-white", "text-black dark:text-[#FAFAFA] dark:text-opacity-100 !important", className) }, props, { children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.CircleIcon, { className: "h-2 w-2 fill-current" }) }) }), children] })));
});
exports.PM7MenuRadioItem = PM7MenuRadioItem;
PM7MenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const PM7MenuLabel = React.forwardRef((_a, ref) => {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Label, Object.assign({ ref: ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", "text-black dark:text-[#FAFAFA] dark:text-opacity-100", className) }, props)));
});
exports.PM7MenuLabel = PM7MenuLabel;
PM7MenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const PM7MenuSeparator = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "py-2 flex items-center justify-center", children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Separator, Object.assign({ ref: ref, className: cn("w-[95%] h-[1px] bg-[#D5D5D5] dark:bg-[#525252]", className) }, props)) }));
});
exports.PM7MenuSeparator = PM7MenuSeparator;
PM7MenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const PM7MenuShortcut = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: cn("ml-auto text-xs tracking-widest opacity-60", className) }, props)));
};
exports.PM7MenuShortcut = PM7MenuShortcut;
PM7MenuShortcut.displayName = "PM7MenuShortcut";
// Custom menu component with self-contained dark mode
const PM7MenuComponent = ({ menuItems = [], initialTheme = 'light', mobileBreakpoint = 768, }) => {
    // State for menu open/close
    const [isOpen, setIsOpen] = React.useState(false);
    // State for mobile detection
    const [isMobile, setIsMobile] = React.useState(false);
    // Refs for menu elements
    const menuRef = React.useRef(null);
    const menuButtonRef = React.useRef(null);
    // State for theme (light/dark)
    const [theme, setTheme] = React.useState(initialTheme);
    // State for hover tracking
    const [hoveredItem, setHoveredItem] = React.useState(null);
    // State for tracking open submenu
    const [openSubmenu, setOpenSubmenu] = React.useState(null);
    // Update theme when initialTheme prop changes
    React.useEffect(() => {
        if (initialTheme) {
            setTheme(initialTheme);
        }
    }, [initialTheme]);
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
    return ((0, jsx_runtime_1.jsx)("div", { ref: menuRef, className: "relative inline-block", children: (0, jsx_runtime_1.jsxs)(PM7MenuRoot, { open: isOpen, onOpenChange: (open) => {
                setIsOpen(open);
                if (!open) {
                    // Reset states when menu closes
                    setHoveredItem(null);
                    setOpenSubmenu(null);
                }
            }, children: [(0, jsx_runtime_1.jsx)(PM7MenuTrigger, { asChild: true, children: (0, jsx_runtime_1.jsx)("button", { ref: menuButtonRef, "aria-label": "Open menu", className: `flex items-center justify-center rounded-md cursor-pointer text-black hover:bg-opacity-10 hover:bg-gray-200 focus:outline-none focus-visible:outline-none`, onClick: () => setIsOpen(!isOpen), children: (0, jsx_runtime_1.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: theme === 'dark' ? '#FAFAFA' : 'currentColor', strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)("line", { x1: "4", x2: "20", y1: "12", y2: "12" }), (0, jsx_runtime_1.jsx)("line", { x1: "4", x2: "20", y1: "6", y2: "6" }), (0, jsx_runtime_1.jsx)("line", { x1: "4", x2: "20", y1: "18", y2: "18" })] }) }) }), (0, jsx_runtime_1.jsx)(PM7MenuContent, { align: "end", style: {
                        backgroundColor: currentTheme.bgColor,
                        borderColor: currentTheme.borderColor,
                        color: currentTheme.textColor,
                        boxShadow: MENU_STYLES.CONTAINER_SHADOW,
                        minWidth: isMobile ? MENU_STYLES.CONTAINER_MIN_WIDTH_MOBILE : MENU_STYLES.CONTAINER_MIN_WIDTH_DESKTOP,
                        maxWidth: MENU_STYLES.CONTAINER_MAX_WIDTH,
                    }, className: theme === 'dark' ? 'dark' : '', children: menuItems.map((item) => ((0, jsx_runtime_1.jsx)(React.Fragment, { children: item.type === 'separator' ? ((0, jsx_runtime_1.jsx)(PM7MenuSeparator, {})) : item.type === 'submenu' && item.submenuItems ? ((0, jsx_runtime_1.jsxs)(PM7MenuSub, { open: openSubmenu === item.id, onOpenChange: (open) => {
                                if (open) {
                                    setOpenSubmenu(item.id);
                                }
                                else if (openSubmenu === item.id) {
                                    setOpenSubmenu(null);
                                }
                            }, children: [(0, jsx_runtime_1.jsxs)(PM7MenuSubTrigger, { style: {
                                        backgroundColor: hoveredItem === item.id ? '#1C86EF' : 'transparent',
                                        color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                                    }, onMouseEnter: () => setHoveredItem(item.id), onMouseLeave: () => setHoveredItem(null), disabled: item.disabled, children: [item.icon && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-icon", style: {
                                                color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                                            }, children: item.icon })), (0, jsx_runtime_1.jsx)("span", { className: "flex-1", children: item.label })] }), (0, jsx_runtime_1.jsx)(PM7MenuSubContent, { style: {
                                        backgroundColor: currentTheme.bgColor,
                                        borderColor: currentTheme.borderColor,
                                        color: currentTheme.textColor,
                                    }, className: theme === 'dark' ? 'dark' : '', children: item.submenuItems.map((subItem) => ((0, jsx_runtime_1.jsx)(React.Fragment, { children: subItem.type === 'check' ? ((0, jsx_runtime_1.jsxs)(PM7MenuCheckboxItem, { checked: subItem.checked, onCheckedChange: checked => {
                                                if (subItem.onChange)
                                                    subItem.onChange(!!checked);
                                                if (subItem.onClick)
                                                    subItem.onClick();
                                            }, disabled: subItem.disabled, style: {
                                                backgroundColor: hoveredItem === subItem.id ? '#1C86EF' : 'transparent',
                                                color: hoveredItem === subItem.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                                            }, onMouseEnter: () => setHoveredItem(subItem.id), onMouseLeave: () => setHoveredItem(null), className: theme === 'dark' ? 'dark' : '', children: [subItem.icon && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-icon", style: {
                                                        color: hoveredItem === subItem.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black'),
                                                        marginRight: '0.75rem',
                                                        display: 'flex',
                                                        alignItems: 'center'
                                                    }, children: subItem.icon })), (0, jsx_runtime_1.jsx)("span", { className: "flex-1", children: subItem.label })] }, subItem.id)) : ((0, jsx_runtime_1.jsxs)(PM7MenuItem, { onClick: subItem.onClick, disabled: subItem.disabled, style: {
                                                backgroundColor: hoveredItem === subItem.id ? '#1C86EF' : 'transparent',
                                                color: hoveredItem === subItem.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                                            }, onMouseEnter: () => setHoveredItem(subItem.id), onMouseLeave: () => setHoveredItem(null), children: [subItem.icon && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-icon", style: {
                                                        color: hoveredItem === subItem.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                                                    }, children: subItem.icon })), (0, jsx_runtime_1.jsx)("span", { className: "flex-1", children: subItem.label })] }, subItem.id)) }, subItem.id))) })] })) : item.type === 'check' ? ((0, jsx_runtime_1.jsxs)(PM7MenuCheckboxItem, { checked: item.checked, onCheckedChange: checked => {
                                if (item.onChange)
                                    item.onChange(!!checked);
                                if (item.onClick)
                                    item.onClick();
                            }, disabled: item.disabled, style: {
                                backgroundColor: hoveredItem === item.id ? '#1C86EF' : 'transparent',
                                color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                            }, onMouseEnter: () => setHoveredItem(item.id), onMouseLeave: () => setHoveredItem(null), className: theme === 'dark' ? 'dark' : '', children: [item.icon && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-icon", style: {
                                        color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black'),
                                        marginRight: '0.75rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }, children: item.icon })), (0, jsx_runtime_1.jsx)("span", { className: "flex-1", children: item.label })] }, item.id)) : item.type === 'switch' ? ((0, jsx_runtime_1.jsxs)(PM7MenuItem, { onClick: () => {
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
                                    }, children: item.icon })), (0, jsx_runtime_1.jsx)("span", { className: "flex-1", children: item.label }), item.type === 'switch' && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-switch-icon", children: (0, jsx_runtime_1.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", width: "16", height: "16", strokeWidth: "1.75", children: [(0, jsx_runtime_1.jsx)("path", { d: "M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" }), (0, jsx_runtime_1.jsx)("path", { d: "M2 12a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6" })] }) }))] }, item.id)) : ((0, jsx_runtime_1.jsxs)(PM7MenuItem, { onClick: item.onClick, disabled: item.disabled, style: {
                                backgroundColor: hoveredItem === item.id ? '#1C86EF' : 'transparent',
                                color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                            }, onMouseEnter: () => setHoveredItem(item.id), onMouseLeave: () => setHoveredItem(null), children: [item.icon && ((0, jsx_runtime_1.jsx)("span", { className: "menu-item-icon", style: {
                                        color: hoveredItem === item.id ? 'white' : (theme === 'dark' ? '#FAFAFA' : 'black')
                                    }, children: item.icon })), (0, jsx_runtime_1.jsx)("span", { className: "flex-1", children: item.label })] }, item.id)) }, item.id))) })] }) }));
};
exports.PM7MenuComponent = PM7MenuComponent;
exports.Menu = exports.PM7MenuComponent;
