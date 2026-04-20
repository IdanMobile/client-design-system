// src/components/ButtonOutline/ButtonOutline.tsx
import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';

/**
 * ButtonOutlineProps interface
 */
export interface ButtonOutlineProps {
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Hover handler
   */
  onHover?: () => void;
  /**
   * Disabled state
   */
  isDisabled?: boolean;
  /**
   * Loading state
   */
  isLoading?: boolean;
  /**
   * Button content
   */
  children?: React.ReactNode;
  /**
   * Style overrides
   */
  sx?: Record<string, unknown>;
  /**
   * Class overrides
   */
  className?: string;
}

/**
 * ButtonOutline component
 */
const ButtonOutline = React.forwardRef<HTMLButtonElement, ButtonOutlineProps>(
  ({ onClick, onHover, isDisabled, isLoading, children, sx, className }, ref) => {
    return (
      <ButtonBase
        ref={ref}
        onClick={onClick}
        onMouseEnter={onHover}
        disabled={isDisabled || isLoading}
        className={className}
        sx={{
          display: 'inline-flex',
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
          '&:focus': {
            backgroundColor: 'var(--background-white-base)',
          },
          '&.Mui-disabled': {
            backgroundColor: 'var(--color-background-state-interaction-disabled-neutral)',
          },
          // Additional properties from the Style Manifest
          gap: 'var(--dimension-8---0-5-rem)',
          borderTopLeftRadius: 'var(--border-radius-lg)',
          borderTopRightRadius: 'var(--border-radius-lg)',
          borderBottomLeftRadius: 'var(--border-radius-lg)',
          borderBottomRightRadius: 'var(--border-radius-lg)',
          borderTopWidth: 'var(--border-width-thin)',
          borderBottomWidth: 'var(--border-width-thin)',
          borderLeftWidth: 'var(--border-width-thin)',
          borderRightWidth: 'var(--border-width-thin)',
          paragraphSpacing: 'var(--body-md-paragaph-spacing)',
          ...sx,
        }}
      >
        {isLoading ? <span>Loading...</span> : children}
      </ButtonBase>
    );
  }
);

ButtonOutline.displayName = 'ButtonOutline';

export { ButtonOutline };