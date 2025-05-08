// Enhancement: The close (X) icon in the dialog now uses #333333 in light mode and white in dark mode for accessibility and theme consistency. This is achieved by applying a color style to the button parent, which the SVG icon inherits via `currentColor`.
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { PM7Button } from "../button/pm7-button"

const PM7Dialog = DialogPrimitive.Root

const PM7DialogTrigger = DialogPrimitive.Trigger

const PM7DialogPortal = DialogPrimitive.Portal

const PM7DialogClose = DialogPrimitive.Close

const PM7DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ${className || ''}`}
    style={{ cursor: 'pointer' }}
    {...props}
  />
))
PM7DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const PM7DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <PM7DialogPortal>
    <PM7DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={`fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg ${className || ''}`}
      style={{
        cursor: 'default',
        backgroundColor: className?.includes('dark') ? '#262626' : 'white',
        border: `1px solid ${className?.includes('dark') ? '#525252' : '#e2e8f0'}`
      }}
      {...props}
    >
      {children}
      <DialogPrimitive.Close asChild>
        <PM7Button
          className="pm7-dialog-close absolute right-4 top-4 opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          style={{ color: 'inherit', padding: '4px', minWidth: 'auto', background: 'transparent', border: 'none' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span className="sr-only">Close</span>
        </PM7Button>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </PM7DialogPortal>
))
PM7DialogContent.displayName = DialogPrimitive.Content.displayName

const PM7DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`flex flex-col space-y-1.5 text-center sm:text-left ${className || ''}`}
    {...props}
  />
)
PM7DialogHeader.displayName = "PM7DialogHeader"

const PM7DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pm7-dialog-footer ${className || ''}`}
    {...props}
  />
)
PM7DialogFooter.displayName = "PM7DialogFooter"

const PM7DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={`text-lg font-semibold leading-none tracking-tight ${className || ''}`}
    {...props}
  />
))
PM7DialogTitle.displayName = DialogPrimitive.Title.displayName

const PM7DialogSubTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={`text-sm text-muted-foreground ${className || ''}`}
    {...props}
  />
))
PM7DialogSubTitle.displayName = "PM7DialogSubTitle"

// Keep the old name for backward compatibility
const PM7DialogDescription = PM7DialogSubTitle

// Bug Fix: Added PM7DialogSeparator component for consistent separator styling with dark/light mode support
// Enhancement: Added marginTop and marginBottom parameters for customizable spacing
const PM7DialogSeparator = ({
  className,
  marginTop = '0px',
  marginBottom = '0px',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  marginTop?: string;
  marginBottom?: string;
}) => (
  <div
    className={`border-t ${className || ''}`}
    style={{
      borderColor: className?.includes('dark') ? '#525252' : '#e2e8f0',
      marginTop,
      marginBottom,
    }}
    {...props}
  />
)
PM7DialogSeparator.displayName = "PM7DialogSeparator"

export {
  PM7Dialog,
  PM7DialogPortal,
  PM7DialogOverlay,
  PM7DialogClose,
  PM7DialogTrigger,
  PM7DialogContent,
  PM7DialogHeader,
  PM7DialogFooter,
  PM7DialogTitle,
  PM7DialogSubTitle,
  PM7DialogDescription, // Keep for backward compatibility
  PM7DialogSeparator,
}
