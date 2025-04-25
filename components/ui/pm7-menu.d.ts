import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
declare const PM7MenuRoot: React.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const PM7MenuTrigger: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const PM7MenuGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const PM7MenuPortal: React.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const PM7MenuSub: React.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const PM7MenuRadioGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const PM7MenuSubTrigger: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const PM7MenuSubContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const PM7MenuContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const PM7MenuItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const PM7MenuCheckboxItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const PM7MenuRadioItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const PM7MenuLabel: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const PM7MenuSeparator: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const PM7MenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { PM7MenuRoot as PM7Menu, PM7MenuTrigger, PM7MenuContent, PM7MenuItem, PM7MenuCheckboxItem, PM7MenuRadioItem, PM7MenuLabel, PM7MenuSeparator, PM7MenuShortcut, PM7MenuGroup, PM7MenuPortal, PM7MenuSub, PM7MenuSubContent, PM7MenuSubTrigger, PM7MenuRadioGroup, };
