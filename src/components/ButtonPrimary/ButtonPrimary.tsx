// src/components/ButtonPrimary/ButtonPrimary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/system';

/**
 * Props for the ButtonPrimary component.
 */
export interface ButtonPrimaryProps {
  /**
   * Click handler.
   */
  onClick?: () => void;
  /**
   * Mouse enter handler.
   */
  onHover?: () => void;
  /**
   * Whether the button is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the button is in a loading state.
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
   * Class name for styling overrides.
   */
  className?: string;
  /**
   * Type of the button, either 'text' or 'icon'.
   */
  type?: 'text' | 'icon';
  /**
   * Size of the button, either 'lg', 'md', 'sm', or 'xs'.
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Width of the button, either 'compact' or 'fluid'.
   */
  width?: 'compact' | 'fluid';
}

/**
 * Primary button component.
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
      type = 'text',
      size = 'md',
      width = 'compact',
    },
    ref
  ) => {
    const paddingSizes = {
      lg: 'var(--dimension-24---1-5-rem)',
      md: 'var(--dimension-20---1-25-rem)',
      sm: 'var(--dimension-16---1-rem)',
      xs: 'var(--dimension-16---1-rem)',
    };

    const iconPaddingSizes = {
      lg: 'var(--dimension-12---0-75-rem)',
      md: 'var(--dimension-8---0-5-rem)',
      sm: 'var(--dimension-8---0-5-rem)',
      xs: 'var(--dimension-8---0-5-rem)',
    };

    const buttonPadding = type === 'icon' ? iconPaddingSizes[size] : paddingSizes[size];

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
          paddingLeft: buttonPadding,
          paddingRight: buttonPadding,
          borderRadius: size === 'xs' ? 'var(--radius-border-radius-md)' : 'var(--radius-border-radius-lg)',
          fontFamily: 'var(--font-text-md-l-24-medium-family)',
          fontSize: 'var(--font-text-md-l-24-medium-size)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight)',
          letterSpacing: 'var(--body-md-letter-spacing)',
          lineHeight: 'var(--body-md-line-height-24)',
          width: width === 'fluid' ? '100%' : 'auto',
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