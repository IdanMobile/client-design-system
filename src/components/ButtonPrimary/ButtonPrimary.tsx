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
   * Mouse enter handler for hover state.
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
   * Type of the button, either 'Text button' or 'Icon button'.
   */
  type?: 'Text button' | 'Icon button';
  /**
   * Size of the button, one of 'lg', 'md', 'sm', 'xs'.
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Width of the button, either 'Compact' or 'Fluid/block'.
   */
  width?: 'Compact' | 'Fluid/block';
}

/**
 * ButtonPrimary component for primary actions.
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
    const paddingStyles = {
      lg: {
        paddingLeft: 'var(--dimension-24---1-5-rem)',
        paddingRight: 'var(--dimension-24---1-5-rem)',
      },
      md: {
        paddingLeft: 'var(--dimension-20---1-25-rem)',
        paddingRight: 'var(--dimension-20---1-25-rem)',
      },
      sm: {
        paddingLeft: 'var(--dimension-16---1-rem)',
        paddingRight: 'var(--dimension-16---1-rem)',
      },
      xs: {
        paddingLeft: 'var(--dimension-16---1-rem)',
        paddingRight: 'var(--dimension-16---1-rem)',
      },
    };

    const iconPaddingStyles = {
      lg: {
        paddingLeft: 'var(--dimension-12---0-75-rem)',
        paddingRight: 'var(--dimension-12---0-75-rem)',
      },
      md: {
        paddingLeft: 'var(--dimension-8---0-5-rem)',
        paddingRight: 'var(--dimension-8---0-5-rem)',
      },
      sm: {
        paddingLeft: 'var(--dimension-8---0-5-rem)',
        paddingRight: 'var(--dimension-8---0-5-rem)',
      },
      xs: {
        paddingLeft: 'var(--dimension-8---0-5-rem)',
        paddingRight: 'var(--dimension-8---0-5-rem)',
      },
    };

    const getPadding = () => {
      return type === 'Icon button' ? iconPaddingStyles[size] : paddingStyles[size];
    };

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
          borderRadius: size === 'xs' ? 'var(--border-radius-md)' : 'var(--border-radius-lg)',
          letterSpacing: 'var(--body-md-letter-spacing)',
          fontSize: 'var(--font-text-md-l-24-medium-size)',
          fontFamily: 'var(--font-text-md-l-24-medium-family)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight)',
          lineHeight: 'var(--body-md-line-height-24)',
          ...getPadding(),
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