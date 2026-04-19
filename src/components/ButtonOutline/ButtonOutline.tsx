// src/components/ButtonOutline/ButtonOutline.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/system';

/**
 * Props for the ButtonOutline component.
 */
export interface ButtonOutlineProps {
  /** Click handler */
  onClick?: () => void;
  /** Mouse enter handler */
  onHover?: () => void;
  /** Disabled state */
  isDisabled?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Content of the button */
  children?: React.ReactNode;
  /** Style overrides */
  sx?: SxProps;
  /** Class name overrides */
  className?: string;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * ButtonOutline component
 */
const ButtonOutline = React.forwardRef<HTMLButtonElement, ButtonOutlineProps>(
  ({ onClick, onHover, isDisabled, isLoading, children, sx, className, type = 'button' }, ref) => {
    return (
      <MuiButton
        ref={ref}
        onClick={onClick}
        onMouseEnter={onHover}
        disabled={isDisabled || isLoading}
        type={type}
        className={className}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 'var(--dimension-24---1-5-rem)',
          paddingRight: 'var(--dimension-24---1-5-rem)',
          borderRadius: 'var(--border-radius-lg)',
          borderWidth: 'var(--border-width-thin)',
          borderStyle: 'solid',
          letterSpacing: 'var(--body-md-letter-spacing)',
          fontSize: 'var(--font-text-md-l-24-medium-size)',
          fontFamily: 'var(--font-text-md-l-24-medium-family)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight)',
          lineHeight: 'var(--body-md-line-height-24)',
          '&:hover': {
            backgroundColor: 'var(--color-background-state-interaction-hover-neutral)',
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

ButtonOutline.displayName = 'ButtonOutline';

export { ButtonOutline };