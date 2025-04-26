"use strict";
// Enhancement: Added ShadCN-style dialog component for consistent UI
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
exports.PM7DialogDescription = exports.PM7DialogSubTitle = exports.PM7DialogTitle = exports.PM7DialogFooter = exports.PM7DialogHeader = exports.PM7DialogContent = exports.PM7DialogTrigger = exports.PM7DialogClose = exports.PM7DialogOverlay = exports.PM7DialogPortal = exports.PM7Dialog = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const DialogPrimitive = __importStar(require("@radix-ui/react-dialog"));
const PM7Dialog = DialogPrimitive.Root;
exports.PM7Dialog = PM7Dialog;
const PM7DialogTrigger = DialogPrimitive.Trigger;
exports.PM7DialogTrigger = PM7DialogTrigger;
const PM7DialogPortal = DialogPrimitive.Portal;
exports.PM7DialogPortal = PM7DialogPortal;
const PM7DialogClose = DialogPrimitive.Close;
exports.PM7DialogClose = PM7DialogClose;
const PM7DialogOverlay = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(DialogPrimitive.Overlay, Object.assign({ ref: ref, className: `fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ${className || ''}`, style: { cursor: 'pointer' } }, props)));
});
exports.PM7DialogOverlay = PM7DialogOverlay;
PM7DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const PM7DialogContent = React.forwardRef((_a, ref) => {
    var { className, children } = _a, props = __rest(_a, ["className", "children"]);
    return ((0, jsx_runtime_1.jsxs)(PM7DialogPortal, { children: [(0, jsx_runtime_1.jsx)(PM7DialogOverlay, {}), (0, jsx_runtime_1.jsxs)(DialogPrimitive.Content, Object.assign({ ref: ref, className: `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg ${className || ''}`, style: {
                    cursor: 'default',
                    backgroundColor: (className === null || className === void 0 ? void 0 : className.includes('dark')) ? '#262626' : 'white',
                    border: `1px solid ${(className === null || className === void 0 ? void 0 : className.includes('dark')) ? '#525252' : '#e2e8f0'}`
                } }, props, { children: [children, (0, jsx_runtime_1.jsxs)(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer", children: [(0, jsx_runtime_1.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)("path", { d: "M18 6 6 18" }), (0, jsx_runtime_1.jsx)("path", { d: "m6 6 12 12" })] }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Close" })] })] }))] }));
});
exports.PM7DialogContent = PM7DialogContent;
PM7DialogContent.displayName = DialogPrimitive.Content.displayName;
const PM7DialogHeader = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: `flex flex-col space-y-1.5 text-center sm:text-left ${className || ''}` }, props)));
};
exports.PM7DialogHeader = PM7DialogHeader;
PM7DialogHeader.displayName = "PM7DialogHeader";
const PM7DialogFooter = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: `flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pm7-dialog-footer ${className || ''}` }, props)));
};
exports.PM7DialogFooter = PM7DialogFooter;
PM7DialogFooter.displayName = "PM7DialogFooter";
const PM7DialogTitle = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(DialogPrimitive.Title, Object.assign({ ref: ref, className: `text-lg font-semibold leading-none tracking-tight ${className || ''}` }, props)));
});
exports.PM7DialogTitle = PM7DialogTitle;
PM7DialogTitle.displayName = DialogPrimitive.Title.displayName;
const PM7DialogSubTitle = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(DialogPrimitive.Description, Object.assign({ ref: ref, className: `text-sm text-muted-foreground ${className || ''}` }, props)));
});
exports.PM7DialogSubTitle = PM7DialogSubTitle;
PM7DialogSubTitle.displayName = "PM7DialogSubTitle";
// Keep the old name for backward compatibility
const PM7DialogDescription = PM7DialogSubTitle;
exports.PM7DialogDescription = PM7DialogDescription;
