// src/components/ButtonPrimary/ButtonPrimary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/system';

/**
 * Props for the ButtonPrimary component.
 */
export interface ButtonPrimaryProps {
  /**
   * Click handler for the button.
   */
  onClick?: () => void;
  /**
   * Mouse enter handler for the button.
   */
  onHover?: () => void;
  /**
   * Disables the button if true.
   */
  isDisabled?: boolean;
  /**
   * Shows a loading spinner if true.
   */
  isLoading?: boolean;
  /**
   * Content of the button.
   */
  children?: React.ReactNode;
  /**
   * Style overrides.
   */
  sx?: SxProps;
  /**
   * Class name overrides.
   */
  className?: string;
  /**
   * Type of the button, either 'Text button' or 'Icon button'.
   */
  type?: 'Text button' | 'Icon button';
  /**
   * Size of the button.
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Width of the button.
   */
  width?: 'Compact' | 'Fluid/block';
}

/**
 * ButtonPrimary component.
 */
const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  (
    {
      onClick,
      onHover,
      isDisabled = false,
      isLoading = false,
      children,
      sx,
      className,
      type = 'Text button',
      size = 'md',
      width = 'Compact',
    },
    ref
  ) => {
    const isIconButton = type === 'Icon button';

    const padding = {
      lg: isIconButton ? 'var(--dimension-12---0-75-rem)' : 'var(--dimension-24---1-5-rem)',
      md: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-20---1-25-rem)',
      sm: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-16---1-rem)',
      xs: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-16---1-rem)',
    }[size];

    const borderRadius = size === 'xs' ? 'var(--border-radius-md)' : 'var(--border-radius-lg)';

    return (
      <MuiButton
        ref={ref}
        onClick={onClick}
        onMouseEnter={onHover}
        disabled={isDisabled || isLoading}
        className={className}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--dimension-8---0-5-rem)',
          paddingLeft: padding,
          paddingRight: padding,
          borderRadius,
          fontSize: 'var(--font-text-md-l-24-medium-size)',
          fontFamily: 'var(--font-text-md-l-24-medium-family)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight)',
          letterSpacing: 'var(--body-md-letter-spacing)',
          lineHeight: 'var(--body-md-line-height-24)',
          width: width === 'Fluid/block' ? '100%' : 'auto',
          '&:hover': {
            backgroundColor: 'var(--color-background-state-interaction-hover-primary)',
          },
          '&:disabled': {
            backgroundColor: 'var(--color-background-state-interaction-disabled-neutral)',
            color: 'var(--color-text-neutral-subtle-300)',
          },
          ...sx,
        }}
      >
        {isLoading ? <CircularProgress size={24} /> : children}
      </MuiButton>
    );
  }
);

ButtonPrimary.displayName = 'ButtonPrimary';

export { ButtonPrimary };