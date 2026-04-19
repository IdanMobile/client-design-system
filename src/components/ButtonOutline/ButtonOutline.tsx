// src/components/ButtonOutline/ButtonOutline.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/material';

/**
 * Props for the ButtonOutline component.
 */
export interface ButtonOutlineProps {
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
   * Class name for styling overrides.
   */
  className?: string;
  /**
   * Type of button, either text or icon.
   */
  type?: 'text' | 'icon';
  /**
   * Size of the button.
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Width of the button.
   */
  width?: 'compact' | 'fluid';
}

/**
 * ButtonOutline component.
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
      type = 'text',
      size = 'md',
      width = 'compact',
    },
    ref
  ) => {
    const paddingLeft = size === 'lg' ? 'var(--dimension-24---1-5-rem)' : size === 'md' ? 'var(--dimension-20---1-25-rem)' : 'var(--dimension-16---1-rem)';
    const paddingRight = paddingLeft;
    const paddingIcon = size === 'lg' ? 'var(--dimension-12---0-75-rem)' : 'var(--dimension-8---0-5-rem)';

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
          paddingLeft: type === 'icon' ? paddingIcon : paddingLeft,
          paddingRight: type === 'icon' ? paddingIcon : paddingRight,
          borderRadius: size === 'xs' ? 'var(--border-radius-md)' : 'var(--border-radius-lg)',
          borderWidth: 'var(--border-width-thin)',
          borderStyle: 'solid',
          borderColor: 'var(--color-border-neutral-subtle-300)',
          fontFamily: 'var(--font-text-md-l-24-medium-family)',
          fontSize: size === 'sm' ? 'var(--font-text-sm-l-20-medium-size)' : size === 'xs' ? 'var(--font-text-xs-medium-size)' : 'var(--font-text-md-l-24-medium-size)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight)',
          letterSpacing: size === 'sm' ? 'var(--gap-body-sm-letter-spacing)' : size === 'xs' ? 'var(--gap-body-xs-letter-spacing)' : 'var(--gap-body-md-letter-spacing)',
          lineHeight: size === 'sm' ? 'var(--body-sm-line-height-l-20)' : size === 'xs' ? 'var(--body-xs-line-height)' : 'var(--body-md-line-height-24)',
          width: width === 'fluid' ? '100%' : 'auto',
          '&:hover': {
            backgroundColor: 'var(--color-background-state-interaction-hover-neutral)',
          },
          '&:focus': {
            backgroundColor: 'var(--background-white-base)',
          },
          '&:disabled': {
            borderColor: 'var(--color-border-neutral-subtle-200)',
            color: 'var(--color-text-neutral-subtle-500)',
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