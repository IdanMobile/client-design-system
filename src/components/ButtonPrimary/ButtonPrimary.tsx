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
   * Style overrides for the button.
   */
  sx?: Record<string, unknown>;
  /**
   * Class name for custom styling.
   */
  className?: string;
  /**
   * Icon to be displayed in the button.
   */
  icon?: React.ReactNode;
}

/**
 * ButtonPrimary component for primary actions.
 */
const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonPrimaryProps>(({
  onClick,
  onHover,
  isDisabled = false,
  isLoading = false,
  children,
  sx = {},
  className,
  icon,
}, ref) => {
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
        paddingLeft: 'var(--dimension-24---1-5-rem)',
        paddingRight: 'var(--dimension-24---1-5-rem)',
        borderRadius: 'var(--radius-border-radius-lg)',
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
      {isLoading ? <CircularProgress size={24} /> : icon}
      {children}
    </MuiButton>
  );
});

export { ButtonPrimary };