// src/components/ButtonOutline/ButtonOutline.tsx
import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import CircularProgress from '@mui/material/CircularProgress';

export interface ButtonOutlineProps {
  /** Click event handler */
  onClick?: () => void;
  /** Hover event handler */
  onHover?: () => void;
  /** Disabled state */
  isDisabled?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Button content */
  children?: React.ReactNode;
  /** Style overrides */
  sx?: Record<string, unknown>;
  /** Class name overrides */
  className?: string;
  /** Button type */
  type?: 'text' | 'icon';
  /** Button size */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /** Button width */
  width?: 'compact' | 'fluid';
}

const ButtonOutline = React.forwardRef<HTMLButtonElement, ButtonOutlineProps>(({
  onClick,
  onHover,
  isDisabled = false,
  isLoading = false,
  children,
  sx = {},
  className,
  type = 'text',
  size = 'md',
  width = 'compact',
}, ref) => {
  const paddingLeft = size === 'lg' ? 'var(--dimension-24---1-5-rem)' : size === 'md' ? 'var(--dimension-20---1-25-rem)' : 'var(--dimension-16---1-rem)';
  const paddingRight = paddingLeft;
  const paddingIcon = size === 'lg' ? 'var(--dimension-12---0-75-rem)' : size === 'md' ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-8---0-5-rem)';
  const padding = type === 'icon' ? paddingIcon : paddingLeft;
  const borderRadius = size === 'xs' ? 'var(--border-radius-md)' : 'var(--border-radius-lg)';
  const fontSize = size === 'lg' ? 'var(--font-text-md-l-24-medium-size)' : size === 'md' ? 'var(--font-text-md-l-24-medium-size)' : 'var(--font-text-sm-l-20-medium-size)';
  const lineHeight = size === 'lg' ? 'var(--body-md-line-height-24)' : size === 'md' ? 'var(--body-md-line-height-24)' : 'var(--body-sm-line-height-l-20)';
  const letterSpacing = size === 'lg' ? 'var(--body-md-letter-spacing)' : size === 'md' ? 'var(--body-md-letter-spacing)' : 'var(--body-sm-letter-spacing)';

  return (
    <ButtonBase
      ref={ref}
      onClick={onClick}
      onMouseEnter={onHover}
      disabled={isDisabled || isLoading}
      className={className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--dimension-8---0-5-rem)',
        paddingLeft: padding,
        paddingRight: padding,
        borderRadius,
        borderWidth: 'var(--border-width-thin)',
        borderStyle: 'solid',
        letterSpacing,
        fontSize,
        fontFamily: 'var(--font-family-body)',
        lineHeight,
        fontWeight: 'var(--font-weight-medium---500)',
        '&:hover': {
          backgroundColor: 'var(--color-background-state-interaction-hover-neutral)',
        },
        '&:focus': {
          backgroundColor: 'var(--background-white-base)',
        },
        '&.Mui-disabled': {
          backgroundColor: 'var(--color-background-state-interaction-disabled-neutral)',
        },
        ...sx,
      }}
    >
      {isLoading ? <CircularProgress size={24} /> : children}
    </ButtonBase>
  );
});

ButtonOutline.displayName = 'ButtonOutline';

export { ButtonOutline };