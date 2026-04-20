// src/components/ButtonPrimary/ButtonPrimary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';

/**
 * Props for the ButtonPrimary component.
 */
export interface ButtonPrimaryProps {
  /**
   * Click handler for the button.
   */
  onClick?: () => void;
  /**
   * Hover handler for the button.
   */
  onHover?: () => void;
  /**
   * Disables the button when true.
   */
  isDisabled?: boolean;
  /**
   * Shows a loading spinner when true.
   */
  isLoading?: boolean;
  /**
   * Content of the button.
   */
  children?: React.ReactNode;
  /**
   * Style overrides.
   */
  sx?: Record<string, unknown>;
  /**
   * Class name overrides.
   */
  className?: string;
  /**
   * Type of the button: 'Text button' or 'Icon button'.
   */
  type?: 'Text button' | 'Icon button';
  /**
   * Size of the button: 'lg', 'md', 'sm', or 'xs'.
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Width of the button: 'Compact' or 'Fluid/block'.
   */
  width?: 'Compact' | 'Fluid/block';
}

/**
 * A primary button component with multiple variants.
 */
const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  (
    {
      onClick,
      onHover,
      isDisabled = false,
      isLoading = false,
      children,
      sx = {},
      className,
      type = 'Text button',
      size = 'md',
      width = 'Compact',
    },
    ref
  ) => {
    const isIconButton = type === 'Icon button';

    const paddingStyles = {
      lg: isIconButton ? 'var(--dimension-12---0-75-rem)' : 'var(--dimension-24---1-5-rem)',
      md: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-20---1-25-rem)',
      sm: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-16---1-rem)',
      xs: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-16---1-rem)',
    };

    const fontSizeStyles = {
      lg: 'var(--font-text-md-l-24-medium-size)',
      md: 'var(--font-text-md-l-24-medium-size)',
      sm: 'var(--font-text-sm-l-20-medium-size)',
      xs: 'var(--font-text-xs-medium-size)',
    };

    const buttonStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: paddingStyles[size],
      paddingRight: paddingStyles[size],
      borderRadius: size === 'xs' ? 'var(--border-radius-md)' : 'var(--border-radius-lg)',
      fontSize: fontSizeStyles[size],
      fontFamily: 'var(--font-text-md-l-24-medium-family)',
      fontWeight: 'var(--font-text-md-l-24-medium-weight)',
      letterSpacing: 'var(--body-md-letter-spacing)',
      lineHeight: 'var(--body-md-line-height-24)',
      width: width === 'Fluid/block' ? '100%' : 'auto',
      cursor: isDisabled || isLoading ? 'not-allowed' : 'pointer',
      opacity: isDisabled ? 0.5 : 1,
      ...sx,
    };

    return (
      <MuiButton
        ref={ref}
        onClick={onClick}
        onMouseEnter={onHover}
        disabled={isDisabled || isLoading}
        className={className}
        sx={buttonStyles}
      >
        {isLoading ? <CircularProgress size={24} /> : children}
      </MuiButton>
    );
  }
);

ButtonPrimary.displayName = 'ButtonPrimary';

export { ButtonPrimary };