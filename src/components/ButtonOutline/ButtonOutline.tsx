// src/components/ButtonOutline/ButtonOutline.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/material';

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
  /** Content slot */
  children?: React.ReactNode;
  /** Style overrides */
  sx?: SxProps;
  /** Class overrides */
  className?: string;
  /** Button type */
  type?: 'text' | 'icon';
  /** Button size */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /** Button width */
  width?: 'compact' | 'fluid';
  /** Button state */
  state?: 'default' | 'hover' | 'focus' | 'disabled';
}

/**
 * ButtonOutline component for rendering an outlined button with various states and sizes.
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
      state = 'default',
    },
    ref
  ) => {
    const isIconButton = type === 'icon';
    const paddingLeft = isIconButton
      ? 'var(--dimension-8---0-5-rem)'
      : size === 'lg'
      ? 'var(--dimension-24---1-5-rem)'
      : size === 'md'
      ? 'var(--dimension-20---1-25-rem)'
      : 'var(--dimension-16---1-rem)';
    const paddingRight = paddingLeft;
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
          paddingLeft,
          paddingRight,
          borderRadius,
          borderWidth: 'var(--border-width-thin)',
          borderStyle: 'solid',
          borderColor: 'currentColor',
          fontSize: size === 'xs' ? 'var(--font-text-xs-medium-size)' : 'var(--font-text-md-l-24-medium-size)',
          fontFamily: 'var(--font-text-md-l-24-medium-family)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight)',
          letterSpacing: size === 'xs' ? 'var(--gap-body-xs-letter-spacing)' : 'var(--gap-body-md-letter-spacing)',
          lineHeight: size === 'xs' ? 'var(--body-xs-line-height)' : 'var(--body-md-line-height-24)',
          width: width === 'fluid' ? '100%' : 'auto',
          '&:hover': {
            backgroundColor: 'var(--color-background-state-interaction-hover-neutral)',
          },
          '&:focus': {
            outline: '2px solid var(--color-background-primary-bold-100)',
          },
          '&:disabled': {
            color: 'var(--color-text-neutral-subtle-300)',
            borderColor: 'var(--color-border-neutral-subtle-200)',
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