"use strict";
// Enhancement: Renamed dropdown menu to pm7-menu to match the template-menu project naming. Uses Tailwind CSS for styling with consistent Winfakt/pm7 styling. Ensures correct bg, border, text, radius, shadow, and pointer cursor in all themes.
// Fix: Added custom CSS rule to ensure menu items with submenus show white text when the submenu is open in light mode.
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
exports.PM7MenuRadioGroup = exports.PM7MenuSubTrigger = exports.PM7MenuSubContent = exports.PM7MenuSub = exports.PM7MenuPortal = exports.PM7MenuGroup = exports.PM7MenuShortcut = exports.PM7MenuSeparator = exports.PM7MenuLabel = exports.PM7MenuRadioItem = exports.PM7MenuCheckboxItem = exports.PM7MenuItem = exports.PM7MenuContent = exports.PM7MenuTrigger = exports.PM7Menu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const DropdownMenuPrimitive = __importStar(require("@radix-ui/react-dropdown-menu"));
const lucide_react_1 = require("lucide-react");
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
    return ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.SubTrigger, Object.assign({ ref: ref, className: cn("flex cursor-pointer select-none items-center rounded-md px-4 py-2 text-sm outline-none", "focus:bg-[#1C86EF] focus:text-white", "data-[state=open]:bg-[#1C86EF] data-[state=open]:text-white", inset && "pl-8", "data-[disabled]:pointer-events-none data-[disabled]:opacity-50", "hover:bg-[#1C86EF] hover:text-white", "text-black dark:text-[#FAFAFA]", className) }, props, { children: [children, (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRightIcon, { className: "ml-auto h-4 w-4" })] })));
});
exports.PM7MenuSubTrigger = PM7MenuSubTrigger;
PM7MenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const PM7MenuSubContent = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.SubContent, Object.assign({ ref: ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-[6px] border py-3 px-3 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "bg-white dark:!bg-[#262626] border-[#D5D5D5] dark:border-[#525252]", className) }, props)));
});
exports.PM7MenuSubContent = PM7MenuSubContent;
PM7MenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const PM7MenuContent = React.forwardRef((_a, ref) => {
    var { className, sideOffset = 4 } = _a, props = __rest(_a, ["className", "sideOffset"]);
    return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Portal, { children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Content, Object.assign({ ref: ref, sideOffset: sideOffset, className: cn("z-50 min-w-[12rem] overflow-hidden rounded-[6px] border py-3 px-3 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "bg-white dark:!bg-[#262626] border-[#D5D5D5] dark:border-[#525252] text-black dark:text-[#FAFAFA]", className) }, props)) }));
});
exports.PM7MenuContent = PM7MenuContent;
PM7MenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const PM7MenuItem = React.forwardRef((_a, ref) => {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Item, Object.assign({ ref: ref, className: cn("relative flex cursor-pointer select-none items-center rounded-md px-4 py-2 text-sm outline-none transition-colors focus:bg-[#1C86EF] focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", "hover:bg-[#1C86EF] hover:text-white", "text-black dark:text-[#FAFAFA]", className) }, props)));
});
exports.PM7MenuItem = PM7MenuItem;
PM7MenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const PM7MenuCheckboxItem = React.forwardRef((_a, ref) => {
    var { className, children, checked } = _a, props = __rest(_a, ["className", "children", "checked"]);
    return ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.CheckboxItem, Object.assign({ ref: ref, className: cn("relative flex cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[#1C86EF] focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50", "hover:bg-[#1C86EF] hover:text-white", "text-black dark:text-[#FAFAFA]", className), checked: checked }, props, { children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.CheckIcon, { className: "h-4 w-4" }) }) }), children] })));
});
exports.PM7MenuCheckboxItem = PM7MenuCheckboxItem;
PM7MenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const PM7MenuRadioItem = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.RadioItem, Object.assign({ ref: ref, className: cn("relative flex cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[#1C86EF] focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50", "hover:bg-[#1C86EF] hover:text-white", "text-black dark:text-[#FAFAFA]", className) }, props, { children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.CircleIcon, { className: "h-2 w-2 fill-current" }) }) }), children] })));
});
exports.PM7MenuRadioItem = PM7MenuRadioItem;
PM7MenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const PM7MenuLabel = React.forwardRef((_a, ref) => {
    var { className, inset } = _a, props = __rest(_a, ["className", "inset"]);
    return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Label, Object.assign({ ref: ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", "text-black dark:text-[#FAFAFA]", className) }, props)));
});
exports.PM7MenuLabel = PM7MenuLabel;
PM7MenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const PM7MenuSeparator = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Separator, Object.assign({ ref: ref, className: cn("-mx-1 my-1 h-px bg-[#D5D5D5] dark:bg-[#525252]", className) }, props)));
});
exports.PM7MenuSeparator = PM7MenuSeparator;
PM7MenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const PM7MenuShortcut = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: cn("ml-auto text-xs tracking-widest opacity-60", className) }, props)));
};
exports.PM7MenuShortcut = PM7MenuShortcut;
PM7MenuShortcut.displayName = "PM7MenuShortcut";
// Add custom CSS for submenu trigger
const customStyles = `
  /* Style for hover states */
  [data-radix-dropdown-menu-subtrigger]:hover svg,
  [role="menuitem"]:hover svg {
    color: white !important;
  }
  
  /* Keep the icon white when submenu is open, regardless of hover state */
  [data-radix-dropdown-menu-subtrigger][data-state="open"] svg,
  [data-radix-dropdown-menu-subtrigger][data-state="open"] .submenu-icon svg {
    color: white !important;
  }
  
  /* Target the specific submenu icon */
  .submenu-icon svg {
    transition: color 0.2s ease;
  }
`;
// Inject custom styles if in browser environment
if (typeof document !== 'undefined') {
    const styleElement = document.createElement('style');
    styleElement.textContent = customStyles;
    document.head.appendChild(styleElement);
}
