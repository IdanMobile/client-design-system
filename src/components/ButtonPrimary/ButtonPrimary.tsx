// src/components/ButtonPrimary/ButtonPrimary.tsx

import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import CircularProgress from '@mui/material/CircularProgress';

export interface ButtonPrimaryProps {
  /**
   * Click event handler
   */
  onClick?: () => void;
  /**
   * Hover event handler
   */
  onHover?: () => void;
  /**
   * Disables the button
   */
  isDisabled?: boolean;
  /**
   * Shows a loading spinner
   */
  isLoading?: boolean;
  /**
   * Content of the button
   */
  children?: React.ReactNode;
  /**
   * Style overrides
   */
  sx?: Record<string, unknown>;
  /**
   * Class name overrides
   */
  className?: string;
  /**
   * Button type
   */
  type?: 'text' | 'icon';
  /**
   * Button size
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
  /**
   * Button width
   */
  width?: 'compact' | 'fluid';
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
          gap: type === 'icon' ? 'var(--dimension-4---0-25-rem)' : 'var(--dimension-8---0-5-rem)',
          paddingLeft: type === 'icon' ? paddingIcon : paddingLeft,
          paddingRight: type === 'icon' ? paddingIcon : paddingRight,
          borderRadius: size === 'xs' ? 'var(--border-radius-md)' : 'var(--border-radius-lg)',
          fontSize: size === 'lg' ? 'var(--font-text-md-l-24-medium-size)' : size === 'sm' ? 'var(--font-text-sm-l-20-medium-size)' : 'var(--font-text-md-l-20-medium-size)',
          fontFamily: 'var(--font-text-md-l-24-medium-family)',
          fontWeight: 'var(--font-text-md-l-24-medium-weight)',
          lineHeight: size === 'lg' ? 'var(--body-md-line-height-24)' : size === 'sm' ? 'var(--body-sm-line-height-l-20)' : 'var(--body-md-line-height-24)',
          letterSpacing: size === 'lg' ? 'var(--body-md-letter-spacing)' : size === 'sm' ? 'var(--body-sm-letter-spacing)' : 'var(--body-md-letter-spacing)',
          width: width === 'fluid' ? '100%' : 'auto',
          '&:hover': {
            backgroundColor: 'var(--color-background-state-interaction-hover-primary)',
          },
          '&:focus': {
            backgroundColor: 'var(--color-background-white-base)',
          },
          '&.Mui-disabled': {
            backgroundColor: 'var(--color-background-state-interaction-disabled-neutral)',
            color: 'var(--color-text-neutral-subtle-200)',
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