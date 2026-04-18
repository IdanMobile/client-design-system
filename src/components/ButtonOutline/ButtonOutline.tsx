import { forwardRef } from 'react';
import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export interface ButtonOutlineProps extends Omit<MuiButtonProps, 'variant' | 'color'> {
  /** Disable interaction and apply the Figma "Disabled" variant styling. */
  isDisabled?: boolean;
  /** Replace children with a centered spinner and disable the button. */
  isLoading?: boolean;
  /** Mouse-enter handler (wraps onMouseEnter for API parity with other DS primitives). */
  onHover?: () => void;
  /** Optional leading icon slot (renders before children). */
  icon?: React.ReactNode;
}

/**
 * Button / Outline
 *
 * Generated deterministically from the Figma "Button (Outline)"
 * component. Always renders as a MUI "outlined" button so the primary fill
 * and typography defined in Figma come through via the DesignSystemProvider theme.
 */
export const ButtonOutline = forwardRef<HTMLButtonElement, ButtonOutlineProps>(
  function ButtonOutline(
    { isDisabled, isLoading, onHover, icon, children, disabled, onMouseEnter, startIcon, sx, ...rest },
    ref,
  ) {
    return (
      <MuiButton
        ref={ref}
        variant="outlined"
        color="primary"
        disabled={disabled || isDisabled || isLoading}
        startIcon={isLoading ? <CircularProgress size={16} color="inherit" /> : (icon ?? startIcon)}
        onMouseEnter={(e) => {
          onHover?.();
          onMouseEnter?.(e);
        }}
        sx={{ textTransform: 'none', ...sx }}
        {...rest}
      >
        {isLoading ? null : children}
      </MuiButton>
    );
  },
);
