// @ts-nocheck
import { createTheme } from '@mui/material/styles';
// theme-semantics.ts is generated at publish time by the Guing server pipeline.
// It contains the exact hex values resolved from the current Figma token set so
// the MUI palette always matches the design — no runtime token lookup needed.
import { themeSemantics } from '../../../design-tokens/theme-semantics';

const {
  brand100,
  brand300,
  brand500,
  brand700,
  actionPrimary,
  actionSecondary,
  success500,
  warning500,
  danger500,
  surface,
  background,
  textMain,
  textMuted,
  white,
  black,
  neutral300,
} = themeSemantics;

/**
 * MUI theme driven by the design system.
 *
 * - `palette` uses resolved hex values (required by MUI internals).
 * - `components.styleOverrides` and `typography` use CSS custom properties
 *   so they react to theme switching at runtime without rebuilding the theme.
 *
 * Only overrides for components actually used by AI-generated code are kept here.
 * Components not imported via adapters/mui/internal.ts are intentionally absent.
 */
export const designSystemTheme = createTheme({
  palette: {
    primary: {
      main: actionPrimary,
      light: brand300,
      dark: brand700,
      contrastText: white,
    },
    secondary: {
      main: actionSecondary,
      contrastText: white,
    },
    error: { main: danger500 },
    warning: { main: warning500 },
    success: { main: success500 },
    background: {
      default: background,
      paper: surface,
    },
    text: {
      primary: textMain,
      secondary: textMuted,
    },
  },
  typography: {
    fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
    h1: {
      fontFamily: 'var(--font-heading-1-family, Inter, sans-serif)',
      fontSize: 'var(--font-heading-1-size, 32px)',
      fontWeight: 'var(--font-heading-1-weight, 700)' as any,
      lineHeight: 'var(--font-heading-1-line-height, 1.2)',
      letterSpacing: 'var(--font-heading-1-letter-spacing, -0.5px)',
    },
    h2: {
      fontFamily: 'var(--font-heading-2-family, Inter, sans-serif)',
      fontSize: 'var(--font-heading-2-size, 24px)',
      fontWeight: 'var(--font-heading-2-weight, 700)' as any,
      lineHeight: 'var(--font-heading-2-line-height, 1.3)',
    },
    h3: {
      fontFamily: 'var(--font-heading-3-family, Inter, sans-serif)',
      fontSize: 'var(--font-heading-3-size, 20px)',
      fontWeight: 'var(--font-heading-3-weight, 600)' as any,
      lineHeight: 'var(--font-heading-3-line-height, 1.4)',
    },
    h4: {
      fontFamily: 'var(--font-heading-4-family, Inter, sans-serif)',
      fontSize: 'var(--font-heading-4-size, 18px)',
      fontWeight: 'var(--font-heading-4-weight, 600)' as any,
      lineHeight: 'var(--font-heading-4-line-height, 1.4)',
    },
    body1: {
      fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
      fontSize: 'var(--font-body-regular-size, 16px)',
      fontWeight: 'var(--font-body-regular-weight, 400)' as any,
      lineHeight: 'var(--font-body-regular-line-height, 1.5)',
    },
    body2: {
      fontFamily: 'var(--font-body-small-family, Roboto, sans-serif)',
      fontSize: 'var(--font-body-small-size, 14px)',
      fontWeight: 'var(--font-body-small-weight, 400)' as any,
      lineHeight: 'var(--font-body-small-line-height, 1.5)',
    },
    caption: {
      fontFamily: 'var(--font-caption-family, Roboto, sans-serif)',
      fontSize: 'var(--font-caption-size, 12px)',
      fontWeight: 'var(--font-caption-weight, 500)' as any,
      lineHeight: 'var(--font-caption-line-height, 1.4)',
      letterSpacing: 'var(--font-caption-letter-spacing, 1px)',
      textTransform: 'var(--font-caption-text-transform, uppercase)' as any,
    },
    subtitle1: {
      fontFamily: 'var(--font-body-large-family, Roboto, sans-serif)',
      fontSize: 'var(--font-body-large-size, 18px)',
      fontWeight: 'var(--font-body-large-weight, 400)' as any,
      lineHeight: 'var(--font-body-large-line-height, 1.5)',
    },
  } as any,
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    'var(--elevation-level-1, 0px 1px 2px 0px rgba(0,0,0,0.05))',
    'var(--elevation-level-2, 0px 2px 4px 0px rgba(0,0,0,0.05), 0px 4px 8px -2px rgba(0,0,0,0.1))',
    'var(--elevation-level-2, 0px 2px 4px 0px rgba(0,0,0,0.05), 0px 4px 8px -2px rgba(0,0,0,0.1))',
    'var(--elevation-level-3, 0px 4px 8px 0px rgba(0,0,0,0.05), 0px 12px 24px -4px rgba(0,0,0,0.1))',
    ...Array(19).fill('var(--elevation-level-3, 0px 4px 8px 0px rgba(0,0,0,0.05), 0px 12px 24px -4px rgba(0,0,0,0.1))'),
    'var(--elevation-modal, 0px 24px 48px -12px rgba(0,0,0,0.25))',
  ] as any,
  components: {
    // ── Global ──────────────────────────────────────────────────────────────
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            outline: 'var(--border-focus-ring, 3px solid #0ea5e9)',
            outlineOffset: '2px',
          },
          '&.Mui-disabled': {
            opacity: 'var(--opacity-50, 0.5)',
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: 'var(--blur-glass-value, blur(12px))',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          fontSize: 'var(--size-icon-sm, 16px)',
        },
        fontSizeMedium: {
          fontSize: 'var(--size-icon-md, 24px)',
        },
        fontSizeLarge: {
          fontSize: 'var(--size-icon-lg, 32px)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--color-surface-base, #ffffff)',
          color: 'var(--color-text-neutral-base, #1D1F23)',
        },
      },
    },

    // ── AI-generated component primitives ───────────────────────────────────
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--radius-medium, 8px)',
          textTransform: 'none' as const,
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
          fontSize: 'var(--font-body-regular-size, 16px)',
          fontWeight: 500,
          padding: 'var(--gap-8, 8px) var(--gap-16, 16px)',
        },
        containedPrimary: {
          backgroundColor: 'var(--color-background-primary-bold-100, #0354A6)',
          color: 'var(--color-text-white-base, #FFFFFF)',
          '&:hover': {
            backgroundColor: 'var(--color-background-primary-bold-200, #024A95)',
          },
        },
        outlinedPrimary: {
          borderColor: 'var(--color-border-primary-bold-100, #0354A6)',
          color: 'var(--color-text-primary-base, #0354A6)',
          '&:hover': {
            backgroundColor: 'var(--color-background-primary-subtle-100, #EBF3FF)',
          },
        },
        textPrimary: {
          color: 'var(--color-text-primary-base, #0354A6)',
          '&:hover': {
            backgroundColor: 'var(--color-background-primary-subtle-100, #EBF3FF)',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: false,
      },
      styleOverrides: {
        root: {
          padding: '2px',
          color: 'var(--color-border-neutral-bold-100, #8B939F)',
          borderRadius: 'var(--radius-small, 6px)',
          '& .MuiSvgIcon-root': {
            fontSize: 20,
            borderRadius: 'var(--radius-small, 6px)',
          },
          '&.Mui-checked': {
            color: 'var(--color-border-primary-bold-100, #0354A6)',
          },
          '&.Mui-error': {
            color: 'var(--color-border-danger-bold-100, #BB251A)',
          },
          '&.Mui-disabled': {
            color: 'var(--color-border-neutral-subtle-100, #D0D5DD)',
            opacity: 0.6,
          },
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          gap: 'var(--gap-8, 8px)',
          marginLeft: 0,
          marginRight: 0,
        },
        label: {
          color: 'var(--color-text-neutral-base, #1D1F23)',
          fontFamily: 'var(--font-text-md-l-24-regular-family, Inter)',
          fontSize: 'var(--font-text-md-l-24-regular-size, 16px)',
          fontWeight: 'var(--font-text-md-l-24-regular-weight, 400)',
          lineHeight: 'var(--font-body-md-line-height-24, 24px)',
          '&.Mui-disabled': {
            color: 'var(--color-text-neutral-subtle-200, #6E7581)',
          },
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        disableRipple: false,
      },
      styleOverrides: {
        root: {
          padding: '2px',
          color: 'var(--color-border-neutral-bold-100, #8B939F)',
          '&.Mui-checked': {
            color: 'var(--color-border-primary-bold-100, #0354A6)',
          },
          '&.Mui-error': {
            color: 'var(--color-border-danger-bold-100, #BB251A)',
          },
          '&.Mui-disabled': {
            color: 'var(--color-border-neutral-subtle-100, #D0D5DD)',
            opacity: 0.6,
          },
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 'var(--radius-medium, 8px)',
            fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
            fontSize: 'var(--font-body-regular-size, 16px)',
            '& fieldset': {
              borderColor: 'var(--color-border-neutral-bold-100, #8B939F)',
            },
            '&:hover fieldset': {
              borderColor: 'var(--color-border-primary-bold-100, #0354A6)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--color-border-primary-bold-100, #0354A6)',
              borderWidth: '2px',
            },
          },
          '& .MuiInputLabel-root': {
            fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
            color: 'var(--color-text-neutral-subtle-100, #6E7581)',
            '&.Mui-focused': {
              color: 'var(--color-text-primary-base, #0354A6)',
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--radius-medium, 8px)',
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--radius-full, 9999px)',
          fontFamily: 'var(--font-body-small-family, Roboto, sans-serif)',
          fontSize: 'var(--font-body-small-size, 14px)',
        },
        filled: {
          backgroundColor: 'var(--color-background-primary-subtle-200, #D6E9FF)',
          color: 'var(--color-text-primary-bold-100, #024A95)',
        },
        outlined: {
          borderColor: 'var(--color-border-neutral-bold-100, #8B939F)',
          color: 'var(--color-text-neutral-base, #1D1F23)',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--radius-medium, 8px)',
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 'var(--radius-large, 16px)',
          boxShadow: 'var(--elevation-modal, 0px 24px 48px -12px rgba(0,0,0,0.25))',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-heading-3-family, Inter, sans-serif)',
          fontSize: 'var(--font-heading-3-size, 20px)',
          fontWeight: 'var(--font-heading-3-weight, 600)' as any,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '&.Mui-checked': {
            color: 'var(--color-background-primary-bold-100, #0354A6)',
            '& + .MuiSwitch-track': {
              backgroundColor: 'var(--color-background-primary-subtle-200, #D6E9FF)',
            },
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'var(--color-background-neutral-bold-300, #1D1F23)',
          color: 'var(--color-text-white-base, #FFFFFF)',
          fontFamily: 'var(--font-body-small-family, Roboto, sans-serif)',
          fontSize: 'var(--font-body-small-size, 14px)',
          borderRadius: 'var(--radius-small, 6px)',
          padding: 'var(--gap-4, 4px) var(--gap-8, 8px)',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 'var(--radius-medium, 8px)',
          boxShadow: 'var(--elevation-level-2, 0px 2px 4px 0px rgba(0,0,0,0.05), 0px 4px 8px -2px rgba(0,0,0,0.1))',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-body-regular-family, Roboto, sans-serif)',
          fontSize: 'var(--font-body-regular-size, 16px)',
          '&.Mui-selected': {
            backgroundColor: 'var(--color-background-primary-subtle-300, #EBF3FF)',
          },
        },
      },
    },
  },
});

