// Bug Fix: Updated index.tsx to follow the project structure pattern by exporting from component implementation files
// Fixed duplicate identifier issue by renaming type exports

// Export all primitive components from pm7-menu.tsx
export {
  PM7Menu,
  PM7MenuTrigger,
  PM7MenuContent,
  PM7MenuItem,
  PM7MenuSeparator,
  PM7MenuSub,
  PM7MenuSubTrigger,
  PM7MenuSubContent,
  PM7MenuCheckboxItem,
  PM7MenuRadioGroup,
  PM7MenuRadioItem,
  PM7MenuLabel,
  PM7MenuShortcut,
  PM7MenuGroup,
  PM7MenuPortal,
} from './pm7-menu';

// Export main menu component and types
export {
  PM7MenuComponent,
  type PM7MenuItemType,
  // Rename the interface export to avoid conflict with the component
  type PM7MenuItem as PM7MenuItemInterface,
  type PM7MenuProps,
  PM7MenuComponent as Menu,
} from './pm7-menu';

// Default export for convenience
import { PM7MenuComponent } from './pm7-menu';
export default PM7MenuComponent;
