// src/components/ButtonOutline/ButtonOutline.tsx
import React from 'react';
import { Button as MuiButton, CircularProgress } from '@mui/material';
import type { SxProps } from '@mui/system';

export interface ButtonOutlineProps {
  onClick?: () => void;
  onHover?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  sx?: SxProps;
  className?: string;
  /**
   * Type of the button: 'text' or 'icon'.
   */
  type?: 'text' | 'icon';
  /**
   * Size of the button: 'lg', 'md', 'sm', or 'xs'.
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Width of the button: 'compact' or 'fluid'.
   */
  width?: 'compact' | 'fluid';
}

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
    const isIconButton = type === 'icon';

    const paddingMap = {
      lg: isIconButton ? 'var(--dimension-12---0-75-rem)' : 'var(--dimension-24---1-5-rem)',
      md: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-20---1-25-rem)',
      sm: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-16---1-rem)',
      xs: isIconButton ? 'var(--dimension-8---0-5-rem)' : 'var(--dimension-16---1-rem)',
    };

    const borderRadiusMap = {
      lg: 'var(--border-radius-lg)',
      md: 'var(--border-radius-lg)',
      sm: 'var(--border-radius-lg)',
      xs: 'var(--border-radius-md)',
    };

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
          gap: 'var(--dimension-8---0-5-rem)',
          paddingLeft: paddingMap[size],
          paddingRight: paddingMap[size],
          borderRadius: borderRadiusMap[size],
          borderWidth: 'var(--border-width-thin)',
          borderStyle: 'solid',
          borderColor: 'var(--color-border-neutral-bold-100)',
          fontFamily: 'var(--font-text-md-l-24-medium-family)',
          fontSize: size === 'xs' ? 'var(--font-text-xs-regular-size)' : 'var(--font-text-md-l-24-medium-size)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight)',
          lineHeight: size === 'xs' ? 'var(--body-xs-line-height)' : 'var(--body-md-line-height-24)',
          letterSpacing: size === 'xs' ? 'var(--body-xs-letter-spacing)' : 'var(--body-md-letter-spacing)',
          width: width === 'fluid' ? '100%' : 'auto',
          '&:hover': {
            backgroundColor: 'var(--color-background-state-interaction-hover-neutral)',
          },
          '&:focus': {
            boxShadow: '0 0 0 3px var(--color-background-white-base)',
          },
          '&:disabled': {
            borderColor: 'var(--color-border-neutral-subtle-200)',
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

export { ButtonOutline };