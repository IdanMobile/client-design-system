// src/components/ButtonPrimary/ButtonPrimary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import { SxProps } from '@mui/system';

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
   * If true, the button will be disabled.
   */
  isDisabled?: boolean;
  /**
   * If true, a loading spinner will be shown instead of children.
   */
  isLoading?: boolean;
  /**
   * The content of the button.
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
   * Size of the button, can be 'lg', 'md', 'sm', or 'xs'.
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Width of the button, can be 'Compact' or 'Fluid/block'.
   */
  width?: 'Compact' | 'Fluid/block';
}

/**
 * ButtonPrimary component for the design system.
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

    const paddingSize = {
      lg: isIconButton ? 'var(--dimension-12---0-75-rem)' : 'var(--dimension-24---1-5-rem)',
      md: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-20---1-25-rem)',
      sm: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-16---1-rem)',
      xs: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-16---1-rem)',
    };

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
          paddingLeft: paddingSize[size],
          paddingRight: paddingSize[size],
          borderRadius,
          letterSpacing: 'var(--body-md-letter-spacing)',
          fontSize: 'var(--font-text-md-l-24-medium-size)',
          fontFamily: 'var(--font-text-md-l-24-medium-family)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight)',
          lineHeight: 'var(--body-md-line-height-24)',
          width: width === 'Fluid/block' ? '100%' : 'auto',
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