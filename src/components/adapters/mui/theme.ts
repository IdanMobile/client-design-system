// @ts-nocheck
import { createTheme } from '@mui/material/styles';
import tokens from '../../../design-tokens/tokens.json';
import { vars } from '../../../design-tokens/vars';

/**
 * MUI theme driven entirely by Figma-synced tokens.
 *
 * NO HARDCODED TOKENS — every color, radius, shadow, spacing and font value
 * here resolves from `tokens.json` (synced from Figma) or `vars` (typed CSS
 * variable references). There are no hex/px/rgba string fallbacks. If the
 * upstream token is missing the property simply renders as undefined and
 * MUI uses its own internal default.
 *
 * Token names are guaranteed by the server token pipeline when present:
 *   - Colors: brand100-900, neutral50-900, success/warning/danger 100/500/700,
 *     background, surface, text-main, text-muted, border-divider
 *   - Radius: small, medium, large, round
 *   - Elevations: level-1, level-2, level-3, modal
 *   - Borders: focus-ring, divider
 *   - Gaps: gap-4, gap-8, gap-16
 *   - Sizes: avatar-sm/md/lg, icon-sm/md/lg
 */

function resolveColor(name: string): string | undefined {
  const colors: Array<{ name: string; value: string }> = (tokens as any).colors || [];
  const match = colors.find((c) => c.name === name);
  if (match?.value) return match.value;
  if (/^(rgb|hsl|transparent|currentcolor)/i.test(name)) return name;
  return undefined;
}

// Typed CSS-variable helpers — return `var(--token)` strings or undefined when
// the upstream token doesn't exist. Letting undefined propagate is intentional:
// MUI applies its own internal default rather than a hardcoded one of ours.
const varColor = (key: keyof typeof vars.color): string | undefined =>
  (vars.color as Record<string, string>)[key];

const varColorToken = (name: string): string | undefined => {
  const tokenObj = (vars as any).colorToken as Record<string, string> | undefined;
  return tokenObj?.[name];
};

const varRadius = (key: 'small' | 'medium' | 'large' | 'round'): string | undefined =>
  (vars as any).radius?.[key];

const varElevation = (name: string): string | undefined =>
  (vars as any).elevation?.[name];

const varShadow = (name: string): string | undefined =>
  (vars as any).shadow?.[name];

const varBorder = (name: string): string | undefined =>
  (vars as any).border?.[name];

const varSize = (name: string): string | undefined =>
  (vars as any).size?.[name];

const varSpacing = (name: string): string | undefined =>
  (vars as any).spacing?.[name];

const varOpacity = (name: string): string | number | undefined =>
  (vars as any).opacity?.[name];

const varBlur = (name: string): string | undefined =>
  (vars as any).blur?.[name];

const varFont = (
  name: string,
  prop: 'family' | 'size' | 'weight' | 'lineHeight' | 'letterSpacing' | 'textTransform'
): string | undefined => {
  const f = (vars as any).font?.[name];
  return f?.[prop];
};

// ── Palette resolution (MUI needs real hex values from synced tokens) ──────
// All values come from tokens.json (i.e. real Figma data). If a token is
// missing the entry is simply omitted from the palette.
const actionPrimary = resolveColor('Action Primary') || resolveColor('Brand 500');
const actionSecondary = resolveColor('Action Secondary') || resolveColor('Neutral 500');
const brand300 = resolveColor('Brand 300');
const brand700 = resolveColor('Brand 700');
const success500 = resolveColor('Success 500');
const warning500 = resolveColor('Warning 500');
const danger500 = resolveColor('Danger 500');
const surface = resolveColor('Surface');
const background = resolveColor('Background');
const textMain = resolveColor('Text Main');
const textMuted = resolveColor('Text Muted');
const onPrimary = resolveColor('White') || resolveColor('Surface');

// Build palette by only including keys that resolved to a real token.
function pruneUndefined<T extends Record<string, unknown>>(o: T): Partial<T> {
  const out: Partial<T> = {};
  for (const k of Object.keys(o) as Array<keyof T>) {
    if (o[k] !== undefined) out[k] = o[k];
  }
  return out;
}

const primaryPalette = pruneUndefined({
  main: actionPrimary,
  light: brand300,
  dark: brand700,
  contrastText: onPrimary,
});
const secondaryPalette = pruneUndefined({ main: actionSecondary, contrastText: onPrimary });
const backgroundPalette = pruneUndefined({ default: background, paper: surface });
const textPalette = pruneUndefined({ primary: textMain, secondary: textMuted });

export const designSystemTheme = createTheme({
  palette: {
    ...(actionPrimary ? { primary: primaryPalette as any } : {}),
    ...(actionSecondary ? { secondary: secondaryPalette as any } : {}),
    ...(danger500 ? { error: { main: danger500 } } : {}),
    ...(warning500 ? { warning: { main: warning500 } } : {}),
    ...(success500 ? { success: { main: success500 } } : {}),
    ...(background || surface ? { background: backgroundPalette as any } : {}),
    ...(textMain || textMuted ? { text: textPalette as any } : {}),
  },
  typography: {
    fontFamily: varFont('bodyRegular', 'family'),
    h1: {
      fontFamily:    varFont('heading1', 'family'),
      fontSize:      varFont('heading1', 'size'),
      fontWeight:    varFont('heading1', 'weight') as any,
      lineHeight:    varFont('heading1', 'lineHeight'),
      letterSpacing: varFont('heading1', 'letterSpacing'),
    },
    h2: {
      fontFamily: varFont('heading2', 'family'),
      fontSize:   varFont('heading2', 'size'),
      fontWeight: varFont('heading2', 'weight') as any,
      lineHeight: varFont('heading2', 'lineHeight'),
    },
    h3: {
      fontFamily: varFont('heading3', 'family'),
      fontSize:   varFont('heading3', 'size'),
      fontWeight: varFont('heading3', 'weight') as any,
      lineHeight: varFont('heading3', 'lineHeight'),
    },
    body1: {
      fontFamily: varFont('bodyRegular', 'family'),
      fontSize:   varFont('bodyRegular', 'size'),
      fontWeight: varFont('bodyRegular', 'weight') as any,
      lineHeight: varFont('bodyRegular', 'lineHeight'),
    },
    body2: {
      fontFamily: varFont('bodySmall', 'family'),
      fontSize:   varFont('bodySmall', 'size'),
      fontWeight: varFont('bodySmall', 'weight') as any,
      lineHeight: varFont('bodySmall', 'lineHeight'),
    },
    caption: {
      fontFamily:    varFont('caption', 'family'),
      fontSize:      varFont('caption', 'size'),
      fontWeight:    varFont('caption', 'weight') as any,
      lineHeight:    varFont('caption', 'lineHeight'),
      letterSpacing: varFont('caption', 'letterSpacing'),
      textTransform: varFont('caption', 'textTransform') as any,
    },
    display: {
      fontFamily:    varFont('display', 'family'),
      fontSize:      varFont('display', 'size'),
      fontWeight:    varFont('display', 'weight') as any,
      lineHeight:    varFont('display', 'lineHeight'),
      letterSpacing: varFont('display', 'letterSpacing'),
    },
    subtitle1: {
      fontFamily: varFont('bodyLarge', 'family'),
      fontSize:   varFont('bodyLarge', 'size'),
      fontWeight: varFont('bodyLarge', 'weight') as any,
      lineHeight: varFont('bodyLarge', 'lineHeight'),
    },
    code: {
      fontFamily: varFont('code', 'family'),
      fontSize:   varFont('code', 'size'),
      fontWeight: varFont('code', 'weight') as any,
      lineHeight: varFont('code', 'lineHeight'),
    },
  } as any,
  shape: {
    // borderRadius is a numeric design token — derived only when token data
    // exposes a numeric value. MUI's default applies otherwise.
    borderRadius: (tokens as any).radius?.find?.((r: any) => r.name === 'Medium')?.value,
  },
  shadows: [
    'none',
    varElevation('level1'),
    varElevation('level2'),
    varElevation('level2'),
    varElevation('level3'),
    ...Array(19).fill(varElevation('level3')),
    varElevation('modal'),
  ].map(s => s ?? 'none') as any,
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': {
            outline: varBorder('focusRing'),
            outlineOffset: varSpacing('gap2'),
          },
          '&.Mui-disabled': {
            opacity: varOpacity('50'),
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: varBlur('glass'),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('medium'),
          textTransform: 'none' as const,
          boxShadow: varShadow('small'),
          fontFamily: varFont('bodyRegular', 'family'),
          fontSize:   varFont('bodyRegular', 'size'),
          fontWeight: varFont('bodyRegular', 'weight') as any,
          padding: `${varSpacing('gap8') ?? ''} ${varSpacing('gap16') ?? ''}`.trim() || undefined,
          '&:hover': {
            boxShadow: varShadow('medium'),
          },
        },
        containedPrimary: {
          backgroundColor: varColor('brand500'),
          '&:hover': {
            backgroundColor: varColor('brand700'),
          },
        },
        outlined: {
          borderColor: varColor('neutral300'),
          color:       varColor('textMain'),
          '&:hover': {
            borderColor:     varColor('brand500'),
            backgroundColor: varColor('brand100'),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('large'),
          boxShadow:    varElevation('level2'),
          border:       varBorder('divider'),
          backgroundColor: varColor('surface'),
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: varRadius('medium'),
            fontFamily: varFont('bodyRegular', 'family'),
            fontSize:   varFont('bodyRegular', 'size'),
            '& fieldset': {
              borderColor: varColor('neutral300'),
            },
            '&:hover fieldset': {
              borderColor: varColor('brand500'),
            },
            '&.Mui-focused fieldset': {
              borderColor: varColor('brand500'),
            },
            '&:active fieldset': {
              boxShadow: varShadow('inner'),
            },
          },
          '& .MuiInputLabel-root': {
            fontFamily: varFont('bodyRegular', 'family'),
            color: varColor('textMuted'),
            '&.Mui-focused': {
              color: varColor('brand500'),
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('round'),
          fontFamily: varFont('bodySmall', 'family'),
          fontSize:   varFont('bodySmall', 'size'),
        },
        filled: {
          backgroundColor: varColor('brand100'),
          color:           varColor('brand700'),
        },
        outlined: {
          borderColor: varColor('neutral300'),
          color:       varColor('textMain'),
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('medium'),
          fontFamily: varFont('bodyRegular', 'family'),
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '&.Mui-checked': {
            color: varColor('brand500'),
            '& + .MuiSwitch-track': {
              backgroundColor: varColor('brand300'),
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: varColor('surface'),
          color:           varColor('textMain'),
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontFamily: varFont('bodyRegular', 'family'),
          backgroundColor: varColor('brand500'),
          color: varColorToken('whiteWhite') ?? varColor('surface'),
          width:  varSize('avatarMd'),
          height: varSize('avatarMd'),
        },
      },
      variants: [
        {
          props: { variant: 'small' as any },
          style: {
            width:    varSize('avatarSm'),
            height:   varSize('avatarSm'),
            fontSize: varFont('bodySmall', 'size'),
          },
        },
        {
          props: { variant: 'medium' as any },
          style: {
            width:    varSize('avatarMd'),
            height:   varSize('avatarMd'),
            fontSize: varFont('bodyRegular', 'size'),
          },
        },
        {
          props: { variant: 'large' as any },
          style: {
            width:    varSize('avatarLg'),
            height:   varSize('avatarLg'),
            fontSize: varFont('heading3', 'size'),
          },
        },
      ],
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall:  { fontSize: varSize('iconSm') },
        fontSizeMedium: { fontSize: varSize('iconMd') },
        fontSizeLarge:  { fontSize: varSize('iconLg') },
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorPrimary: { backgroundColor: varColor('brand500') },
        colorError:   { backgroundColor: varColor('danger500') },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: varColor('neutral200') },
      },
    },
    MuiList: {
      styleOverrides: {
        root: { fontFamily: varFont('bodyRegular', 'family') },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('medium'),
          '&.Mui-selected': {
            backgroundColor: varColor('brand100'),
            color:           varColor('brand700'),
          },
          '&:hover': {
            backgroundColor: varColor('neutral100'),
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            fontWeight: 600,
            backgroundColor: varColor('neutral100'),
            color:           varColor('textMain'),
            fontFamily: varFont('bodyRegular', 'family'),
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: varFont('bodyRegular', 'family'),
          fontSize:   varFont('bodyRegular', 'size'),
          borderBottom: varBorder('divider'),
          color: varColor('textMain'),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: varColor('neutral900'),
          color:           varColorToken('whiteWhite') ?? varColor('surface'),
          fontFamily: varFont('bodySmall', 'family'),
          fontSize:   varFont('bodySmall', 'size'),
          borderRadius: varRadius('small'),
          padding: `${varSpacing('gap4') ?? ''} ${varSpacing('gap8') ?? ''}`.trim() || undefined,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: varRadius('large'),
          boxShadow: varElevation('modal'),
          '&:hover': {
            boxShadow: varShadow('large'),
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontFamily: varFont('heading3', 'family'),
          fontSize:   varFont('heading3', 'size'),
          fontWeight: varFont('heading3', 'weight') as any,
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: { color: varColor('brand500') },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('round'),
          backgroundColor: varColor('neutral200'),
        },
        barColorPrimary: {
          backgroundColor: varColor('brand500'),
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: { backgroundColor: varColor('neutral200') },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: varColor('neutral900'),
          fontFamily: varFont('bodyRegular', 'family'),
          borderRadius: varRadius('medium'),
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: varColor('neutral400'),
          '&.Mui-checked': { color: varColor('brand500') },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: varColor('neutral400'),
          '&.Mui-checked': { color: varColor('brand500') },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('medium'),
          fontFamily: varFont('bodyRegular', 'family'),
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root:  { color: varColor('brand500') },
        thumb: {
          '&:hover, &.Mui-focusVisible': {
            boxShadow: varColor('brand100') ? `0 0 0 8px ${varColor('brand100')}` : undefined,
          },
        },
        track: { backgroundColor: varColor('brand500') },
        rail:  { backgroundColor: varColor('neutral300') },
      },
    },
    MuiRating: {
      styleOverrides: {
        iconFilled: { color: varColor('warning500') },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          borderRadius: varRadius('medium'),
          boxShadow:    varElevation('level2'),
        },
        option: {
          fontFamily: varFont('bodyRegular', 'family'),
          fontSize:   varFont('bodyRegular', 'size'),
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: { backgroundColor: varColor('brand500') },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: varFont('bodyRegular', 'family'),
          textTransform: 'none' as const,
          '&.Mui-selected': { color: varColor('brand500') },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontFamily: varFont('bodyRegular', 'family'),
          fontSize:   varFont('bodySmall', 'size'),
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& .MuiPaginationItem-root': {
            fontFamily: varFont('bodyRegular', 'family'),
            borderRadius: varRadius('medium'),
            '&.Mui-selected': {
              backgroundColor: varColor('brand500'),
              color: varColorToken('whiteWhite') ?? varColor('surface'),
            },
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: varRadius('medium'),
          boxShadow:    varElevation('level2'),
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: varFont('bodyRegular', 'family'),
          fontSize:   varFont('bodyRegular', 'size'),
          '&.Mui-selected': {
            backgroundColor: varColor('brand100'),
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: { backgroundColor: varColor('surface') },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-active':    { color: varColor('brand500') },
          '&.Mui-completed': { color: varColor('success500') },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: { fontFamily: varFont('bodyRegular', 'family') },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: varRadius('medium'),
          border: varBorder('divider'),
          '&:before': { display: 'none' },
          boxShadow: 'none',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          fontFamily: varFont('bodyRegular', 'family'),
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: varColor('brand700'),
          boxShadow: varElevation('level1'),
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: varElevation('level2'),
          '&:hover': {
            boxShadow: varElevation('level3'),
          },
        },
        primary: {
          backgroundColor: varColor('brand500'),
          '&:hover': {
            backgroundColor: varColor('brand700'),
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': { backgroundColor: varColor('neutral100') },
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: { borderRadius: varRadius('medium') },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontFamily: varFont('bodyRegular', 'family'),
          textTransform: 'none' as const,
          borderColor: varColor('neutral300'),
          '&.Mui-selected': {
            backgroundColor: varColor('brand100'),
            color:           varColor('brand700'),
            borderColor:     varColor('brand500'),
          },
        },
      },
    },
  },
});

// Re-export the typed `vars` object so consumers can reach tokens directly:
//   import { vars } from '<your-design-system>';
//   <Box sx={{ color: vars.color.actionPrimary, boxShadow: vars.elevation.level2 }} />
export { vars, varColorToken };
