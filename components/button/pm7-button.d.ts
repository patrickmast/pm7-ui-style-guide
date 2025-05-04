import * as React from 'react';

/**
 * Button styling rules according to Winfakt's design system
 * @property cursor - The cursor style for buttons (always 'pointer' per Winfakt guidelines)
 */
export declare const buttonRules: {
    cursor: string;
};

/**
 * Button variant types
 */
export type PM7ButtonVariant = 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';

/**
 * Button size options
 */
export type PM7ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

/**
 * Properties for the PM7Button component
 * @property variant - Button style variant
 * @property size - Button size
 * @property asChild - Whether to render as a child component
 */
export interface PM7ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: PM7ButtonVariant;
    size?: PM7ButtonSize;
    asChild?: boolean;
}

/**
 * Button component that follows Winfakt's design system
 * 
 * @example
 * ```tsx
 * import { PM7Button } from 'pm7-ui-style-guide';
 * 
 * function MyComponent() {
 *   return (
 *     <PM7Button variant="primary" onClick={() => console.log('Clicked')}>
 *       Click Me
 *     </PM7Button>
 *   );
 * }
 * ```
 */
export declare const PM7Button: React.ForwardRefExoticComponent<PM7ButtonProps & React.RefAttributes<HTMLButtonElement>>;

/**
 * Alias for PM7Button for convenience
 */
export { PM7Button as Button };
