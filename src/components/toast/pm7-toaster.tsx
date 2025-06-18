"use client"

import { useToast } from "./use-pm7-toast"
import {
  PM7Toast,
  PM7ToastAction,
  PM7ToastClose,
  PM7ToastDescription,
  PM7ToastProvider,
  PM7ToastTitle,
  PM7ToastViewport,
} from "./pm7-toast"

export function PM7Toaster() {
  const { toasts } = useToast()

  return (
    <PM7ToastProvider swipeDirection="right">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <PM7Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <PM7ToastTitle>{title}</PM7ToastTitle>}
              {description && (
                <PM7ToastDescription>{description}</PM7ToastDescription>
              )}
            </div>
            {action && (
              <PM7ToastAction
                altText={action.label}
                onClick={action.onClick}
              >
                {action.label}
              </PM7ToastAction>
            )}
            <PM7ToastClose />
          </PM7Toast>
        )
      })}
      <PM7ToastViewport />
    </PM7ToastProvider>
  )
}