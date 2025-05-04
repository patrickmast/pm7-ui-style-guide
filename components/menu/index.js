"use strict";
// Bug Fix: Updated index.tsx to follow the project structure pattern by exporting from component implementation files
// Fixed duplicate identifier issue by renaming type exports
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = exports.PM7MenuComponent = exports.PM7MenuPortal = exports.PM7MenuGroup = exports.PM7MenuShortcut = exports.PM7MenuLabel = exports.PM7MenuRadioItem = exports.PM7MenuRadioGroup = exports.PM7MenuCheckboxItem = exports.PM7MenuSubContent = exports.PM7MenuSubTrigger = exports.PM7MenuSub = exports.PM7MenuSeparator = exports.PM7MenuItem = exports.PM7MenuContent = exports.PM7MenuTrigger = exports.PM7Menu = void 0;
// Export all primitive components from pm7-menu.tsx
var pm7_menu_1 = require("./pm7-menu");
Object.defineProperty(exports, "PM7Menu", { enumerable: true, get: function () { return pm7_menu_1.PM7Menu; } });
Object.defineProperty(exports, "PM7MenuTrigger", { enumerable: true, get: function () { return pm7_menu_1.PM7MenuTrigger; } });
Object.defineProperty(exports, "PM7MenuContent", { enumerable: true, get: function () { return pm7_menu_1.PM7MenuContent; } });
Object.defineProperty(exports, "PM7MenuItem", { enumerable: true, get: function () { return pm7_menu_1.PM7MenuItem; } });
Object.defineProperty(exports, "PM7MenuSeparator", { enumerable: true, get: function () { return pm7_menu_1.PM7MenuSeparator; } });
Object.defineProperty(exports, "PM7MenuSub", { enumerable: true, get: function () { return pm7_menu_1.PM7MenuSub; } });
Object.defineProperty(exports, "PM7MenuSubTrigger", { enumerable: true, get: function () { return pm7_menu_1.PM7MenuSubTrigger; } });
Object.defineProperty(exports, "PM7MenuSubContent", { enumerable: true, get: function () { return pm7_menu_1.PM7MenuSubContent; } });
Object.defineProperty(exports, "PM7MenuCheckboxItem", { enumerable: true, get: function () { return pm7_menu_1.PM7MenuCheckboxItem; } });
Object.defineProperty(exports, "PM7MenuRadioGroup", { enumerable: true, get: function () { return pm7_menu_1.PM7MenuRadioGroup; } });
Object.defineProperty(exports, "PM7MenuRadioItem", { enumerable: true, get: function () { return pm7_menu_1.PM7MenuRadioItem; } });
Object.defineProperty(exports, "PM7MenuLabel", { enumerable: true, get: function () { return pm7_menu_1.PM7MenuLabel; } });
Object.defineProperty(exports, "PM7MenuShortcut", { enumerable: true, get: function () { return pm7_menu_1.PM7MenuShortcut; } });
Object.defineProperty(exports, "PM7MenuGroup", { enumerable: true, get: function () { return pm7_menu_1.PM7MenuGroup; } });
Object.defineProperty(exports, "PM7MenuPortal", { enumerable: true, get: function () { return pm7_menu_1.PM7MenuPortal; } });
// Export main menu component and types
var pm7_menu_2 = require("./pm7-menu");
Object.defineProperty(exports, "PM7MenuComponent", { enumerable: true, get: function () { return pm7_menu_2.PM7MenuComponent; } });
Object.defineProperty(exports, "Menu", { enumerable: true, get: function () { return pm7_menu_2.PM7MenuComponent; } });
// Default export for convenience
const pm7_menu_3 = require("./pm7-menu");
exports.default = pm7_menu_3.PM7MenuComponent;
