import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

/**
 * Properties for the PM7Dialog component
 */
export interface PM7DialogProps extends DialogPrimitive.DialogProps {}

/**
 * Root dialog component
 */
declare const PM7Dialog: React.FC<PM7DialogProps>;

/**
 * Properties for the PM7DialogTrigger component
 */
export interface PM7DialogTriggerProps extends DialogPrimitive.DialogTriggerProps {}

/**
 * Button that opens the dialog
 */
declare const PM7DialogTrigger: React.ForwardRefExoticComponent<PM7DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;

/**
 * Properties for the PM7DialogPortal component
 */
export interface PM7DialogPortalProps extends DialogPrimitive.DialogPortalProps {}

/**
 * Portal component for rendering the dialog in a different DOM node
 */
declare const PM7DialogPortal: React.FC<PM7DialogPortalProps>;

/**
 * Properties for the PM7DialogClose component
 */
export interface PM7DialogCloseProps extends DialogPrimitive.DialogCloseProps {}

/**
 * Button that closes the dialog
 */
declare const PM7DialogClose: React.ForwardRefExoticComponent<PM7DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;

/**
 * Properties for the PM7DialogOverlay component
 */
export interface PM7DialogOverlayProps extends Omit<DialogPrimitive.DialogOverlayProps, "ref"> {}

/**
 * Overlay component that covers the page behind the dialog
 */
declare const PM7DialogOverlay: React.ForwardRefExoticComponent<PM7DialogOverlayProps & React.RefAttributes<HTMLDivElement>>;

/**
 * Properties for the PM7DialogContent component
 */
export interface PM7DialogContentProps extends Omit<DialogPrimitive.DialogContentProps, "ref"> {}

/**
 * Main content container for the dialog
 */
declare const PM7DialogContent: React.ForwardRefExoticComponent<PM7DialogContentProps & React.RefAttributes<HTMLDivElement>>;

/**
 * Properties for the PM7DialogHeader component
 */
export interface PM7DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Header component for the dialog
 */
declare const PM7DialogHeader: {
    ({ className, ...props }: PM7DialogHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

/**
 * Properties for the PM7DialogFooter component
 */
export interface PM7DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Footer component for the dialog
 */
declare const PM7DialogFooter: {
    ({ className, ...props }: PM7DialogFooterProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

/**
 * Properties for the PM7DialogTitle component
 */
export interface PM7DialogTitleProps extends Omit<DialogPrimitive.DialogTitleProps, "ref"> {}

/**
 * Title component for the dialog
 */
declare const PM7DialogTitle: React.ForwardRefExoticComponent<PM7DialogTitleProps & React.RefAttributes<HTMLHeadingElement>>;

/**
 * Properties for the PM7DialogSubTitle component
 */
export interface PM7DialogSubTitleProps extends Omit<DialogPrimitive.DialogDescriptionProps, "ref"> {}

/**
 * Subtitle component for the dialog
 */
declare const PM7DialogSubTitle: React.ForwardRefExoticComponent<PM7DialogSubTitleProps & React.RefAttributes<HTMLParagraphElement>>;

/**
 * Properties for the PM7DialogDescription component
 */
export interface PM7DialogDescriptionProps extends Omit<DialogPrimitive.DialogDescriptionProps, "ref"> {}

/**
 * Description component for the dialog
 */
declare const PM7DialogDescription: React.ForwardRefExoticComponent<PM7DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;

/**
 * Export all dialog components
 */
export { PM7Dialog, PM7DialogPortal, PM7DialogOverlay, PM7DialogClose, PM7DialogTrigger, PM7DialogContent, PM7DialogHeader, PM7DialogFooter, PM7DialogTitle, PM7DialogSubTitle, PM7DialogDescription, };
