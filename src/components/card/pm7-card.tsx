"use client"

import * as React from "react"

const PM7Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`pm7-card bg-background border shadow-lg p-6 sm:rounded-lg ${className}`}
    style={{
      backgroundColor: className?.includes("dark") ? "#262626" : "white",
      border: `1px solid ${className?.includes("dark") ? "#525252" : "#e2e8f0"}`,
    }}
    {...props}
  />
))
PM7Card.displayName = "PM7Card"

const PM7CardHeader = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`pm7-card-header flex flex-col space-y-1.5 text-center sm:text-left ${className}`} {...props} />
)
PM7CardHeader.displayName = "PM7CardHeader"

const PM7CardFooter = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`pm7-card-footer flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`} {...props} />
)
PM7CardFooter.displayName = "PM7CardFooter"

const PM7CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className = "", ...props }, ref) => (
  <h3 ref={ref} className={`pm7-card-title text-lg font-semibold leading-none tracking-tight ${className}`} {...props} />
))
PM7CardTitle.displayName = "PM7CardTitle"

const PM7CardSubTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = "", ...props }, ref) => (
  <p ref={ref} className={`pm7-card-subtitle text-sm text-muted-foreground ${className}`} {...props} />
))
PM7CardSubTitle.displayName = "PM7CardSubTitle"

export {
  PM7Card,
  PM7CardHeader,
  PM7CardFooter,
  PM7CardTitle,
  PM7CardSubTitle,
}