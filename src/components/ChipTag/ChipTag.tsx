// src/components/ChipTag/ChipTag.tsx

import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';

/**
 * Props for the ChipTag component.
 */
export interface ChipTagProps {
  /**
   * Click handler for the chip.
   */
  onClick?: () => void;
  /**
   * Hover handler for the chip.
   */
  onHover?: () => void;
  /**
   * Disables the chip when true.
   */
  isDisabled?: boolean;
  /**
   * Shows a loading spinner when true.
   */
  isLoading?: boolean;
  /**
   * Content of the chip.
   */
  children?: React.ReactNode;
  /**
   * Style overrides.
   */
  sx?: Record<string, unknown>;
  /**
   * Class name overrides.
   */
  className?: string;
  /**
   * Type of the chip.
   */
  type?: 'Gray' | 'Gray - outline' | 'Primary' | 'Primary - outline';
  /**
   * Size of the chip.
   */
  size?: 'xs' | 'sm' | 'md';
  /**
   * State of the chip.
   */
  state?: 'Default' | 'Hover' | 'Disabled';
  /**
   * Whether the chip is selected.
   */
  isSelected?: boolean;
}

const ChipTag = React.forwardRef<HTMLButtonElement, ChipTagProps>(({
  onClick,
  onHover,
  isDisabled = false,
  isLoading = false,
  children,
  sx = {},
  className,
  type = 'Gray',
  size = 'xs',
  state = 'Default',
  isSelected = false,
}, ref) => {
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
        gap: 'var(--gap-body-xs-letter-spacing)',
        padding: size === 'xs' ? '4px 8px' : '6px 8px',
        borderRadius: 'var(--radius-border-radius-xs)',
        fontSize: size === 'md' ? 'var(--font-text-sm-l-20-medium-size)' : 'var(--font-text-xs-medium-size)',
        fontFamily: 'var(--font-text-xs-medium-family)',
        fontWeight: 'var(--font-text-xs-medium-weight)',
        letterSpacing: size === 'md' ? 'var(--gap-body-sm-letter-spacing)' : 'var(--gap-body-xs-letter-spacing)',
        lineHeight: size === 'md' ? 'var(--body-sm-line-height-l-20)' : 'var(--body-xs-line-height)',
        backgroundColor: type.includes('Primary') ? 'var(--color-background-primary-subtle-200)' : 'var(--color-background-neutral-subtle-300)',
        border: type.includes('outline') ? '1px solid var(--color-border-neutral-subtle-300)' : 'none',
        '&:hover': {
          backgroundColor: 'var(--color-background-state-interaction-hover-neutral)',
        },
        '&.Mui-disabled': {
          backgroundColor: 'var(--color-background-state-interaction-disabled-neutral)',
        },
        ...sx,
      }}
    >
      {isLoading ? <span>Loading...</span> : children}
    </ButtonBase>
  );
});

export { ChipTag };