// src/components/ButtonPrimary/ButtonPrimary.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/system';

/**
 * Props for the ButtonPrimary component.
 */
export interface ButtonPrimaryProps {
  /**
   * Click event handler.
   */
  onClick?: () => void;
  /**
   * Hover event handler.
   */
  onHover?: () => void;
  /**
   * Disables the button.
   */
  isDisabled?: boolean;
  /**
   * Shows a loading spinner instead of children.
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
   * Class overrides.
   */
  className?: string;
}

/**
 * Primary button component.
 */
const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonPrimaryProps>(({
  onClick,
  onHover,
  isDisabled = false,
  isLoading = false,
  children,
  sx,
  className,
}, ref) => {
  return (
    <MuiButton
      ref={ref}
      onClick={onClick}
      onMouseEnter={onHover}
      disabled={isDisabled || isLoading}
      className={className}
      sx={{
        paddingLeft: 'var(--dimension-24---1-5-rem)',
        paddingRight: 'var(--dimension-24---1-5-rem)',
        borderRadius: 'var(--border-radius-lg)',
        letterSpacing: 'var(--body-md-letter-spacing)',
        fontSize: 'var(--font-text-md-l-24-medium-size)',
        fontFamily: 'var(--font-text-md-l-24-medium-family)',
        fontWeight: 'var(--font-text-md-l-24-medium-weight)',
        lineHeight: 'var(--body-md-line-height-24)',
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
});

ButtonPrimary.displayName = 'ButtonPrimary';

export { ButtonPrimary };