// ButtonOutline.tsx
import React from 'react';
import { ButtonBase, CircularProgress, Box } from '@mui/material';
import type { SxProps } from '@mui/system';

/**
 * Props for the ButtonOutline component.
 */
export interface ButtonOutlineProps {
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
   * Content to be displayed inside the button.
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
}

/**
 * ButtonOutline component - a button with an outline style.
 */
export const ButtonOutline = React.forwardRef<HTMLButtonElement, ButtonOutlineProps>(
  ({ onClick, onHover, isDisabled, isLoading, children, sx, className }, ref) => {
    return (
      <ButtonBase
        ref={ref}
        onClick={onClick}
        onMouseEnter={onHover}
        disabled={isDisabled || isLoading}
        className={className}
        sx={{
          border: '1px solid',
          borderColor: 'var(--color-border-primary-subtle-200)',
          borderRadius: '5px',
          padding: '8px 16px',
          color: 'var(--color-text-primary-base)',
          backgroundColor: 'transparent',
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
        {isLoading ? (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress size={24} sx={{ color: 'var(--color-icon-primary-base)' }} />
          </Box>
        ) : (
          children
        )}
      </ButtonBase>
    );
  }
);

ButtonOutline.displayName = 'ButtonOutline';

export const Button = { Outline: ButtonOutline };