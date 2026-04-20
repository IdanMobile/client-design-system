// src/components/ButtonPrimary/ButtonPrimary.tsx
import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import CircularProgress from '@mui/material/CircularProgress';

export interface ButtonPrimaryProps {
  onClick?: () => void;
  onHover?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  sx?: Record<string, unknown>;
  className?: string;
  /**
   * Type of button: 'Text button' or 'Icon button'.
   */
  type?: 'Text button' | 'Icon button';
  /**
   * Size of the button: 'lg', 'md', 'sm', or 'xs'.
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Width of the button: 'Compact' or 'Fluid/block'.
   */
  width?: 'Compact' | 'Fluid/block';
}

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
    const isIconButton = type === 'Icon button';
    const paddingSize = size === 'lg' ? 'var(--dimension-24---1-5-rem)' : size === 'md' ? 'var(--dimension-20---1-25-rem)' : 'var(--dimension-16---1-rem)';
    const iconPaddingSize = size === 'lg' ? 'var(--dimension-12---0-75-rem)' : 'var(--dimension-8---0-5-rem)';
    const borderRadius = size === 'xs' ? 'var(--border-radius-md)' : 'var(--border-radius-lg)';
    const gapSize = size === 'xs' ? 'var(--dimension-4---0-25-rem)' : 'var(--dimension-8---0-5-rem)';

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
          gap: gapSize,
          paddingLeft: isIconButton ? iconPaddingSize : paddingSize,
          paddingRight: isIconButton ? iconPaddingSize : paddingSize,
          borderRadius,
          fontFamily: 'var(--font-family-body)',
          fontWeight: 'var(--font-weight-medium---500)',
          fontSize: size === 'xs' ? 'var(--body-xs-font-size)' : 'var(--body-md-font-size)',
          lineHeight: size === 'xs' ? 'var(--body-xs-line-height)' : 'var(--body-md-line-height-24)',
          letterSpacing: size === 'xs' ? 'var(--body-xs-letter-spacing)' : 'var(--body-md-letter-spacing)',
          '&:hover': {
            backgroundColor: 'var(--color-background-state-interaction-hover-primary)',
          },
          '&:focus': {
            boxShadow: '0 0 0 3px var(--color-background-white-base)',
          },
          '&.Mui-disabled': {
            backgroundColor: 'var(--color-background-state-interaction-disabled-neutral)',
            color: 'var(--color-text-neutral-subtle-300)',
          },
          ...sx,
        }}
      >
        {isLoading ? <CircularProgress size={24} /> : children}
      </ButtonBase>
    );
  }
);

ButtonPrimary.displayName = 'ButtonPrimary';

export { ButtonPrimary };