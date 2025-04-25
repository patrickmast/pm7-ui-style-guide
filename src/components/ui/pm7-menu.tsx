// Enhancement: Pure CSS solution for submenu icon color. Removed JS-injected CSS. Now imports static CSS file (pm7-menu.css) to ensure submenu icons match text color on hover and when open. Ensures maintainability and reliability. Bump version in package.json before publishing to npm.
"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import './pm7-menu.css';

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
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

const PM7MenuRoot = DropdownMenuPrimitive.Root;
const PM7MenuTrigger = DropdownMenuPrimitive.Trigger;
const PM7MenuGroup = DropdownMenuPrimitive.Group;
const PM7MenuPortal = DropdownMenuPrimitive.Portal;
const PM7MenuSub = DropdownMenuPrimitive.Sub;
const PM7MenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const PM7MenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-pointer select-none items-center rounded-md px-4 py-2 text-sm outline-none",
      "data-[state=open]:bg-[#1C86EF] data-[state=open]:text-white",
      inset && "pl-8",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "data-[highlighted]:bg-[#1C86EF] data-[highlighted]:text-white",
      "text-black dark:text-[#FAFAFA] dark:text-opacity-100 !important",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
PM7MenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const PM7MenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-[6px] border py-3 px-3 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "bg-white dark:bg-[#262626] border-[#D5D5D5] dark:border-[#525252] text-black dark:text-[#FAFAFA] dark:text-opacity-100",
      className
    )}
    {...props}
  />
))
PM7MenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

const PM7MenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-[6px] border py-3 px-3 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "bg-white dark:bg-[#262626] border-[#D5D5D5] dark:border-[#525252] text-black dark:text-[#FAFAFA] dark:text-opacity-100",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
PM7MenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const PM7MenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-md px-4 py-2 text-sm outline-none",
      inset && "pl-8",
      "data-[highlighted]:bg-[#1C86EF] data-[highlighted]:text-white",
      "text-black dark:text-[#FAFAFA] dark:text-opacity-100 !important",
      className
    )}
    {...props}
  />
))
PM7MenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const PM7MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[#1C86EF] focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "hover:bg-[#1C86EF] hover:text-white",
      "text-black dark:text-[#FAFAFA] dark:text-opacity-100 !important",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
PM7MenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const PM7MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[#1C86EF] focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "hover:bg-[#1C86EF] hover:text-white",
      "text-black dark:text-[#FAFAFA] dark:text-opacity-100 !important",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CircleIcon className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
PM7MenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const PM7MenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      "text-black dark:text-[#FAFAFA] dark:text-opacity-100",
      className
    )}
    {...props}
  />
))
PM7MenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const PM7MenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <div className="py-2 flex items-center justify-center">
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn("w-[95%] h-[1px] bg-[#D5D5D5] dark:bg-[#525252]", className)}
      {...props}
    />
  </div>
))
PM7MenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const PM7MenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
PM7MenuShortcut.displayName = "PM7MenuShortcut"

export {
  PM7MenuRoot as PM7Menu,
  PM7MenuTrigger,
  PM7MenuContent,
  PM7MenuItem,
  PM7MenuCheckboxItem,
  PM7MenuRadioItem,
  PM7MenuLabel,
  PM7MenuSeparator,
  PM7MenuShortcut,
  PM7MenuGroup,
  PM7MenuPortal,
  PM7MenuSub,
  PM7MenuSubContent,
  PM7MenuSubTrigger,
  PM7MenuRadioGroup,
}
