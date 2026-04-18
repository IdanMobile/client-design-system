// @ts-nocheck
import { createTheme } from '@mui/material/styles';
import tokens from '../../../design-tokens/tokens.json';
import { vars } from '../../../design-tokens/vars';

/**
 * MUI theme driven by the design system — **zero hardcoded design fallbacks**.
 *
 * ### Resolution order
 *  1. `palette` values walk the Universal Semantic Model (aliases chain):
 *     `aliases.colors.primary` → Figma token name → hex in `tokens.colors`.
 *     If any link is missing, the key is **omitted** and MUI uses its own
 *     factory default — we intentionally refuse to invent a hex so a broken
 *     token pipeline can't be masked by a guessed brand color.
 *  2. Every other property (`typography`, `shape`, `shadows`, component
 *     overrides) references CSS variables exposed by `vars.ts`. If the token
 *     doesn't exist, the property is left `undefined`, the cascade kicks in,
 *     and nothing fakes the design system.
 *
 * Rule: **do not add hex / `'Roboto'` / `'#e5e7eb'` fallbacks to this file.**
 * If you need a value it must come from the extracted Figma tokens.
 */

type ColorToken = { name: string; value: string };
type TypographyToken = {
  name: string;
  fontFamily?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
  lineHeight?: number | string;
  letterSpacing?: number | string;
  textTransform?: string;
};

const tokenData = tokens as unknown as {
  colors?: ColorToken[];
  typography?: TypographyToken[];
  aliases?: {
    colors?: Record<string, string>;
    typography?: Record<string, string>;
    radii?: Record<string, string>;
    shadows?: Record<string, string>;
  };
};

const colorsArr: ColorToken[] = tokenData.colors ?? [];
const typographyArr: TypographyToken[] = tokenData.typography ?? [];
const aliases = tokenData.aliases ?? {};

const findColor = (name?: string): string | undefined => {
  if (!name) return undefined;
  return colorsArr.find((c) => c.name === name)?.value;
};

/**
 * Resolve a semantic color role through the Universal Model Map:
 *   aliases.colors[role] → Figma token name → hex.
 * Returns `undefined` if any link is missing.
 */
const colorRole = (role: string): string | undefined =>
  findColor(aliases.colors?.[role]);

const findTypography = (role: string): TypographyToken | undefined => {
  const name = aliases.typography?.[role];
  if (!name) return undefined;
  return typographyArr.find((t) => t.name === name);
};

const fontProp = (
  role: string,
  prop: keyof TypographyToken,
): string | number | undefined => {
  const entry = findTypography(role);
  const v = entry?.[prop];
  if (v === undefined || v === null || v === '') return undefined;
  return v as string | number;
};

// Typed CSS-variable accessors. Return undefined when the token doesn't exist
// so MUI leaves that style property unset and the cascade takes over.
const anyVars = vars as unknown as {
  color?: Record<string, string>;
  colorToken?: Record<string, string>;
  radius?: Record<string, string>;
  elevation?: Record<string, string>;
  shadow?: Record<string, string>;
  border?: Record<string, string>;
  size?: Record<string, string>;
  spacing?: Record<string, string>;
  opacity?: Record<string, string | number>;
  blur?: Record<string, string>;
};

const varColor = (key: string): string | undefined => anyVars.color?.[key];
const varColorToken = (name: string): string | undefined => anyVars.colorToken?.[name];
const varRadius = (key: string): string | undefined => anyVars.radius?.[key];
const varElevation = (name: string): string | undefined => anyVars.elevation?.[name];
const varShadow = (name: string): string | undefined => anyVars.shadow?.[name];
const varBorder = (name: string): string | undefined => anyVars.border?.[name];
const varSize = (name: string): string | undefined => anyVars.size?.[name];
const varSpacing = (name: string): string | undefined => anyVars.spacing?.[name];
const varOpacity = (name: string): string | number | undefined => anyVars.opacity?.[name];
const varBlur = (name: string): string | undefined => anyVars.blur?.[name];

const varFont = (
  role: string,
  prop: 'family' | 'size' | 'weight' | 'lineHeight' | 'letterSpacing' | 'textTransform',
): string | undefined => {
  const f = (vars as any).font?.[role];
  const v = f?.[prop];
  return typeof v === 'string' || typeof v === 'number' ? String(v) : undefined;
};

/** Drop keys whose value is `undefined` so MUI / downstream objects stay clean. */
const compact = <T extends Record<string, unknown>>(o: T): Partial<T> => {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(o)) {
    if (v !== undefined) out[k] = v;
  }
  return out as Partial<T>;
};

// ── Palette resolution ──────────────────────────────────────────────────────
// Every hex below comes strictly from the extracted aliases chain. No guesses.
const primary       = colorRole('primary');
const secondary     = colorRole('secondary');
const success       = colorRole('success');
const warning       = colorRole('warning');
const danger        = colorRole('danger');
const background    = colorRole('background');
const surface       = colorRole('surface');
const textMain      = colorRole('textMain');
const textMuted     = colorRole('textMuted');

// Brand ladder shades live directly on tokens (synthesised by the pipeline
// when `aliases.colors.primary` resolves). We read them but never fake them.
const brand300 = findColor('Brand 300');
const brand700 = findColor('Brand 700');
const white    = findColor('White') ?? findColor('white');

export const designSystemTheme = createTheme({
  palette: compact({
    primary: primary
      ? compact({ main: primary, light: brand300, dark: brand700, contrastText: white })
      : undefined,
    secondary: secondary ? compact({ main: secondary, contrastText: white }) : undefined,
    error:     danger  ? { main: danger }  : undefined,
    warning:   warning ? { main: warning } : undefined,
    success:   success ? { main: success } : undefined,
    background:
      background || surface
        ? compact({ default: background, paper: surface })
        : undefined,
    text:
      textMain || textMuted
        ? compact({ primary: textMain, secondary: textMuted })
        : undefined,
  }) as any,
  typography: compact({
    fontFamily: fontProp('bodyRegular', 'fontFamily') as string | undefined,
    h1: compact({
      fontFamily:    fontProp('heading1', 'fontFamily'),
      fontSize:      fontProp('heading1', 'fontSize'),
      fontWeight:    fontProp('heading1', 'fontWeight'),
      lineHeight:    fontProp('heading1', 'lineHeight'),
      letterSpacing: fontProp('heading1', 'letterSpacing'),
    }),
    h2: compact({
      fontFamily: fontProp('heading2', 'fontFamily'),
      fontSize:   fontProp('heading2', 'fontSize'),
      fontWeight: fontProp('heading2', 'fontWeight'),
      lineHeight: fontProp('heading2', 'lineHeight'),
    }),
    h3: compact({
      fontFamily: fontProp('heading3', 'fontFamily'),
      fontSize:   fontProp('heading3', 'fontSize'),
      fontWeight: fontProp('heading3', 'fontWeight'),
      lineHeight: fontProp('heading3', 'lineHeight'),
    }),
    body1: compact({
      fontFamily: fontProp('bodyRegular', 'fontFamily'),
      fontSize:   fontProp('bodyRegular', 'fontSize'),
      fontWeight: fontProp('bodyRegular', 'fontWeight'),
      lineHeight: fontProp('bodyRegular', 'lineHeight'),
    }),
    body2: compact({
      fontFamily: fontProp('bodySmall', 'fontFamily'),
      fontSize:   fontProp('bodySmall', 'fontSize'),
      fontWeight: fontProp('bodySmall', 'fontWeight'),
      lineHeight: fontProp('bodySmall', 'lineHeight'),
    }),
    caption: compact({
      fontFamily:    fontProp('caption', 'fontFamily'),
      fontSize:      fontProp('caption', 'fontSize'),
      fontWeight:    fontProp('caption', 'fontWeight'),
      lineHeight:    fontProp('caption', 'lineHeight'),
      letterSpacing: fontProp('caption', 'letterSpacing'),
      textTransform: fontProp('caption', 'textTransform'),
    }),
    subtitle1: compact({
      fontFamily: fontProp('bodyLarge', 'fontFamily'),
      fontSize:   fontProp('bodyLarge', 'fontSize'),
      fontWeight: fontProp('bodyLarge', 'fontWeight'),
      lineHeight: fontProp('bodyLarge', 'lineHeight'),
    }),
  }) as any,
  shape: {
    // 8 is a CSS pixel scalar, not a design-system color/brand value — safe.
    borderRadius: 8,
  },
  shadows: [
    'none',
    varElevation('level1') ?? 'none',
    varElevation('level2') ?? 'none',
    varElevation('level2') ?? 'none',
    varElevation('level3') ?? 'none',
    ...Array(19).fill(varElevation('level3') ?? 'none'),
    varElevation('modal') ?? 'none',
  ] as any,
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': compact({
            outline:       varBorder('focusRing'),
            outlineOffset: '2px',
          }),
          '&.Mui-disabled': compact({
            opacity: varOpacity('50'),
          }),
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: compact({
          backdropFilter: varBlur('glass'),
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: compact({
          borderRadius: varRadius('medium'),
          textTransform: 'none' as const,
          boxShadow:  varShadow('small'),
          fontFamily: varFont('bodyRegular', 'family'),
          fontSize:   varFont('bodyRegular', 'size'),
          fontWeight: 500,
          padding: varSpacing('gap8') && varSpacing('gap16')
            ? `${varSpacing('gap8')} ${varSpacing('gap16')}`
            : undefined,
          '&:hover': compact({
            boxShadow: varShadow('medium'),
          }),
        }),
        containedPrimary: compact({
          // Intentionally NO fallback hex. If brand500 isn't synthesized,
          // MUI's palette.primary.main (which itself comes from aliases)
          // stays in effect via the default containedPrimary styles.
          backgroundColor: varColor('brand500'),
          '&:hover': compact({
            backgroundColor: varColor('brand700'),
          }),
        }),
        outlined: compact({
          borderColor: varColor('neutral300'),
          color:       varColor('textMain'),
          '&:hover': compact({
            borderColor:     varColor('brand500'),
            backgroundColor: varColor('brand100'),
          }),
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: compact({
          borderRadius:    varRadius('large'),
          boxShadow:       varElevation('level2'),
          border:          varBorder('divider'),
          backgroundColor: varColor('surface'),
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': compact({
            borderRadius: varRadius('medium'),
            fontFamily:   varFont('bodyRegular', 'family'),
            fontSize:     varFont('bodyRegular', 'size'),
            '& fieldset': compact({
              borderColor: varColor('neutral300'),
            }),
            '&:hover fieldset': compact({
              borderColor: varColor('brand500'),
            }),
            '&.Mui-focused fieldset': compact({
              borderColor: varColor('brand500'),
              borderWidth: '2px',
            }),
            '&:active fieldset': compact({
              boxShadow: varShadow('inner'),
            }),
          }),
          '& .MuiInputLabel-root': compact({
            fontFamily: varFont('bodyRegular', 'family'),
            color:      varColor('textMuted'),
            '&.Mui-focused': compact({
              color: varColor('brand500'),
            }),
          }),
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: compact({
          borderRadius: varRadius('round'),
          fontFamily:   varFont('bodySmall', 'family'),
          fontSize:     varFont('bodySmall', 'size'),
        }),
        filled: compact({
          backgroundColor: varColor('brand100'),
          color:           varColor('brand700'),
        }),
        outlined: compact({
          borderColor: varColor('neutral300'),
          color:       varColor('textMain'),
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: compact({
          borderRadius: varRadius('medium'),
          fontFamily:   varFont('bodyRegular', 'family'),
        }),
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '&.Mui-checked': compact({
            color: varColor('brand500'),
            '& + .MuiSwitch-track': compact({
              backgroundColor: varColor('brand300'),
            }),
          }),
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: compact({
          backgroundColor: varColor('surface'),
          color:           varColor('textMain'),
        }),
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: compact({
          fontFamily:      varFont('bodyRegular', 'family'),
          backgroundColor: varColor('brand500'),
          color:           varColor('white'),
          width:           varSize('avatarMd'),
          height:          varSize('avatarMd'),
        }),
      },
      variants: [
        {
          props: { variant: 'small' as any },
          style: compact({
            width:    varSize('avatarSm'),
            height:   varSize('avatarSm'),
            fontSize: varFont('bodySmall', 'size'),
          }),
        },
        {
          props: { variant: 'medium' as any },
          style: compact({
            width:    varSize('avatarMd'),
            height:   varSize('avatarMd'),
            fontSize: varFont('bodyRegular', 'size'),
          }),
        },
        {
          props: { variant: 'large' as any },
          style: compact({
            width:    varSize('avatarLg'),
            height:   varSize('avatarLg'),
            fontSize: varFont('heading3', 'size'),
          }),
        },
      ],
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall:  compact({ fontSize: varSize('iconSm') }),
        fontSizeMedium: compact({ fontSize: varSize('iconMd') }),
        fontSizeLarge:  compact({ fontSize: varSize('iconLg') }),
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorPrimary: compact({ backgroundColor: varColor('brand500') }),
        colorError:   compact({ backgroundColor: varColor('danger500') }),
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: compact({ borderColor: varColor('neutral200') }),
      },
    },
    MuiList: {
      styleOverrides: {
        root: compact({ fontFamily: varFont('bodyRegular', 'family') }),
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('medium'),
          '&.Mui-selected': compact({
            backgroundColor: varColor('brand100'),
            color:           varColor('brand700'),
          }),
          '&:hover': compact({
            backgroundColor: varColor('neutral100'),
          }),
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': compact({
            fontWeight:      600,
            backgroundColor: varColor('neutral100'),
            color:           varColor('textMain'),
            fontFamily:      varFont('bodyRegular', 'family'),
          }),
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: compact({
          fontFamily:   varFont('bodyRegular', 'family'),
          fontSize:     varFont('bodyRegular', 'size'),
          borderBottom: varBorder('divider'),
          color:        varColor('textMain'),
        }),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: compact({
          backgroundColor: varColor('neutral900'),
          color:           varColor('white'),
          fontFamily:      varFont('bodySmall', 'family'),
          fontSize:        varFont('bodySmall', 'size'),
          borderRadius:    varRadius('small'),
          padding: varSpacing('gap4') && varSpacing('gap8')
            ? `${varSpacing('gap4')} ${varSpacing('gap8')}`
            : undefined,
        }),
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: varRadius('large'),
          boxShadow:    varElevation('modal'),
          '&:hover': compact({
            boxShadow: varShadow('large'),
          }),
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: compact({
          fontFamily: varFont('heading3', 'family'),
          fontSize:   varFont('heading3', 'size'),
          fontWeight: varFont('heading3', 'weight'),
        }),
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: compact({ color: varColor('brand500') }),
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: compact({
          borderRadius:    varRadius('round'),
          backgroundColor: varColor('neutral200'),
        }),
        barColorPrimary: compact({
          backgroundColor: varColor('brand500'),
        }),
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: compact({ backgroundColor: varColor('neutral200') }),
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: compact({
          backgroundColor: varColor('neutral900'),
          fontFamily:      varFont('bodyRegular', 'family'),
          borderRadius:    varRadius('medium'),
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: varColor('neutral400'),
          '&.Mui-checked': compact({ color: varColor('brand500') }),
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: varColor('neutral400'),
          '&.Mui-checked': compact({ color: varColor('brand500') }),
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: compact({
          borderRadius: varRadius('medium'),
          fontFamily:   varFont('bodyRegular', 'family'),
        }),
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: compact({ color: varColor('brand500') }),
        thumb: {
          '&:hover, &.Mui-focusVisible': compact({
            boxShadow: varColor('brand100')
              ? `0 0 0 8px ${varColor('brand100')}`
              : undefined,
          }),
        },
        track: compact({ backgroundColor: varColor('brand500') }),
        rail:  compact({ backgroundColor: varColor('neutral300') }),
      },
    },
    MuiRating: {
      styleOverrides: {
        iconFilled: compact({ color: varColor('warning500') }),
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: compact({
          borderRadius: varRadius('medium'),
          boxShadow:    varElevation('level2'),
        }),
        option: compact({
          fontFamily: varFont('bodyRegular', 'family'),
          fontSize:   varFont('bodyRegular', 'size'),
        }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: compact({ backgroundColor: varColor('brand500') }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily:    varFont('bodyRegular', 'family'),
          textTransform: 'none' as const,
          '&.Mui-selected': compact({ color: varColor('brand500') }),
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: compact({
          fontFamily: varFont('bodyRegular', 'family'),
          fontSize:   varFont('bodySmall', 'size'),
        }),
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root': {
            fontFamily:   varFont('bodyRegular', 'family'),
            borderRadius: varRadius('medium'),
            '&.Mui-selected': compact({
              backgroundColor: varColor('brand500'),
              color:           varColor('white'),
            }),
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: compact({
          borderRadius: varRadius('medium'),
          boxShadow:    varElevation('level2'),
        }),
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: varFont('bodyRegular', 'family'),
          fontSize:   varFont('bodyRegular', 'size'),
          '&.Mui-selected': compact({
            backgroundColor: varColor('brand100'),
          }),
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: compact({ backgroundColor: varColor('surface') }),
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-active':    compact({ color: varColor('brand500') }),
          '&.Mui-completed': compact({ color: varColor('success500') }),
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: compact({ fontFamily: varFont('bodyRegular', 'family') }),
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('medium'),
          border:       varBorder('divider'),
          '&:before':   { display: 'none' },
          boxShadow:    'none',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: compact({
          fontFamily: varFont('bodyRegular', 'family'),
          fontWeight: 500,
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: compact({
          backgroundColor: varColor('brand700'),
          boxShadow:       varElevation('level1'),
        }),
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: varElevation('level2'),
          '&:hover': compact({
            boxShadow: varElevation('level3'),
          }),
        },
        primary: compact({
          backgroundColor: varColor('brand500'),
          '&:hover': compact({
            backgroundColor: varColor('brand700'),
          }),
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': compact({ backgroundColor: varColor('neutral100') }),
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: compact({ borderRadius: varRadius('medium') }),
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontFamily:    varFont('bodyRegular', 'family'),
          textTransform: 'none' as const,
          borderColor:   varColor('neutral300'),
          '&.Mui-selected': compact({
            backgroundColor: varColor('brand100'),
            color:           varColor('brand700'),
            borderColor:     varColor('brand500'),
          }),
        },
      },
    },
  },
});

// Re-export the typed `vars` object so consumers can reach tokens directly:
//   import { vars } from '<your-design-system>';
//   <Box sx={{ color: vars.color.actionPrimary, boxShadow: vars.elevation.level2 }} />
export { vars, varColorToken };
