"use client"

import * as React from "react"
import { X } from "lucide-react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"
import "./pm7-toast.css"

const PM7ToastProvider = ToastPrimitives.Provider

const PM7ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[9999] flex max-h-screen w-full flex-col p-4 sm:right-0 md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
PM7ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none",
  {
    variants: {
      variant: {
        default: "border bg-white text-foreground",
        destructive:
          "destructive group border-destructive bg-red-600 text-white",
        success: "border-green-600 bg-green-600 text-white",
        warning: "border-yellow-600 bg-yellow-600 text-white",
        info: "border-blue-600 bg-blue-600 text-white"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const PM7Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      style={{
        backgroundColor: variant === 'destructive' ? '#dc2626' : 'white',
        color: variant === 'destructive' ? 'white' : 'black',
        border: '1px solid ' + (variant === 'destructive' ? '#dc2626' : '#ccc'),
        padding: '1.5rem',
        borderRadius: '0.375rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        minWidth: '300px',
        ...props.style
      }}
      {...props}
    />
  )
})
PM7Toast.displayName = ToastPrimitives.Root.displayName

const PM7ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
PM7ToastAction.displayName = ToastPrimitives.Action.displayName

const PM7ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 group-[.success]:text-green-300 group-[.success]:hover:text-green-50 group-[.warning]:text-yellow-300 group-[.warning]:hover:text-yellow-50 group-[.info]:text-blue-300 group-[.info]:hover:text-blue-50",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
PM7ToastClose.displayName = ToastPrimitives.Close.displayName

const PM7ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
PM7ToastTitle.displayName = ToastPrimitives.Title.displayName

const PM7ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm", className)}
    {...props}
  />
))
PM7ToastDescription.displayName = ToastPrimitives.Description.displayName

type PM7ToastProps = React.ComponentPropsWithoutRef<typeof PM7Toast>

type PM7ToastActionElement = React.ReactElement<typeof PM7ToastAction>

export {
  type PM7ToastProps,
  type PM7ToastActionElement,
  PM7ToastProvider,
  PM7ToastViewport,
  PM7Toast,
  PM7ToastClose,
  PM7ToastTitle,
  PM7ToastDescription,
  PM7ToastAction,
}