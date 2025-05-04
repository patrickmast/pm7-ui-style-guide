/**
 * PM7 Menu Component TypeScript definitions
 */

// Export all primitive components from pm7-menu
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
  type PM7MenuItemType,
  type PM7MenuItem as PM7MenuItemInterface
} from './pm7-menu';

// Export the main menu component from pm7-menu-component for clarity
export { 
  PM7MenuComponent, 
  type PM7MenuProps, 
  PM7MenuComponent as Menu 
} from './pm7-menu-component';

// Default export for convenience
import { PM7MenuComponent } from './pm7-menu-component';
export default PM7MenuComponent;
