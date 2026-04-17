// src/components/ButtonOutline/ButtonOutline.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
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
   * If true, the button will be disabled.
   */
  isDisabled?: boolean;

  /**
   * If true, a loading spinner will be shown instead of the button content.
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
}

/**
 * ButtonOutline component.
 *
 * This component renders a button with an outline style, supporting various states and sizes.
 */
const ButtonOutline = React.forwardRef<HTMLButtonElement, ButtonOutlineProps>(
  (
    {
      onClick,
      onHover,
      isDisabled = false,
      isLoading = false,
      children,
      sx,
      className,
    },
    ref
  ) => {
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
          borderRadius: 'var(--border-radius-lg)',
          borderWidth: 'var(--border-width-thin)',
          borderStyle: 'solid',
          letterSpacing: 'var(--body-md-letter-spacing)',
          fontSize: 'var(--font-text-md-l-24-medium-size)',
          fontFamily: 'var(--font-text-md-l-24-medium-family)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight)',
          lineHeight: 'var(--body-md-line-height-24)',
          '&:hover': {
            backgroundColor: 'var(--background-state-interaction-hover-neutral)',
          },
          '&:focus': {
            backgroundColor: 'var(--background-white-base)',
          },
          '&:disabled': {
            backgroundColor: 'var(--background-state-interaction-disabled-neutral)',
            color: 'var(--color-text-neutral-subtle-200)',
          },
          ...sx,
        }}
      >
        {isLoading ? <CircularProgress size={24} /> : children}
      </MuiButton>
    );
  }
);

export { ButtonOutline };