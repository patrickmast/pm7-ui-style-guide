"use strict";
// Enhancement: Improved exports to make components more accessible and clearly named
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Direct named exports for commonly used components
exports.PM7MenuComponent = exports.Menu = exports.PM7Button = exports.Button = exports.PM7Input = exports.Input = exports.PM7Dialog = exports.Dialog = void 0;

// Menu components
var menu_1 = require("./components/menu");
Object.defineProperty(exports, "PM7MenuComponent", { enumerable: true, get: function () { return menu_1.PM7MenuComponent; } });
Object.defineProperty(exports, "Menu", { enumerable: true, get: function () { return menu_1.PM7MenuComponent; } });

// Button components
var button_1 = require("./components/button");
Object.defineProperty(exports, "PM7Button", { enumerable: true, get: function () { return button_1.PM7Button; } });
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return button_1.PM7Button; } });

// Input components
var input_1 = require("./components/input");
Object.defineProperty(exports, "PM7Input", { enumerable: true, get: function () { return input_1.PM7Input; } });
Object.defineProperty(exports, "Input", { enumerable: true, get: function () { return input_1.PM7Input; } });

// Dialog components
var dialog_1 = require("./components/dialog");
Object.defineProperty(exports, "PM7Dialog", { enumerable: true, get: function () { return dialog_1.PM7Dialog; } });
Object.defineProperty(exports, "Dialog", { enumerable: true, get: function () { return dialog_1.PM7Dialog; } });

// Export all components and utilities
__exportStar(require("./components/menu"), exports);
__exportStar(require("./components/button"), exports);
__exportStar(require("./components/input"), exports);
__exportStar(require("./components/dialog"), exports);
__exportStar(require("./colors"), exports);
__exportStar(require("./tokens"), exports);
