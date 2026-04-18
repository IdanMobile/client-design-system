import React from 'react';
import MuiTypography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';
import { designTokens } from '../../design-tokens';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Convert a camelCase token key to a CSS variable prefix.
 *
 * e.g. "headlineMed18Med" → "--font-headline-med-18-med"
 *      "h1"               → "--font-h-1"  (MUI semantic)
 *      "labelSml"         → "--font-label-sml"
 */
function toCssVarPrefix(camelKey: string): string {
  const kebab = camelKey
    .replace(/([A-Z0-9]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
    .toLowerCase();
  return `--font-${kebab}`;
}

/**
 * Capitalise the first character of a string.
 * e.g. "headlineMed18Med" → "HeadlineMed18Med"
 *      "h1"               → "H1"
 */
function toPascalCase(key: string): string {
  return key.charAt(0).toUpperCase() + key.slice(1);
}

// ---------------------------------------------------------------------------
// Per-token sub-components (auto-derived, no hardcoded names)
// ---------------------------------------------------------------------------

type TokenKey = keyof typeof designTokens.typography;

/**
 * The sub-component map: one React component per typography token key, keyed
 * by the PascalCase version of the token name.
 *
 * TypeScript infers the shape via `Capitalize<TokenKey>` so autocomplete
 * lists every available token as `Typography.<Name>`.
 */
type TypographySubComponents = {
  [K in TokenKey as Capitalize<K>]: React.FC<TypographyProps>;
};

const subComponents = Object.fromEntries(
  (Object.keys(designTokens.typography) as TokenKey[]).map((key) => {
    const prefix = toCssVarPrefix(key);
    const displayName = `Typography.${toPascalCase(key)}`;

    const Component: React.FC<TypographyProps> = ({ style, ...rest }) => (
      <MuiTypography
        style={{
          fontFamily:    `var(${prefix}-family)`,
          fontSize:      `var(${prefix}-size)`,
          fontWeight:    `var(${prefix}-weight)`,
          lineHeight:    `var(${prefix}-line-height)`,
          letterSpacing: `var(${prefix}-letter-spacing)`,
          textTransform: `var(${prefix}-text-transform)` as React.CSSProperties['textTransform'],
          ...style,
        }}
        {...rest}
      />
    );

    Component.displayName = displayName;

    return [toPascalCase(key), Component];
  })
) as TypographySubComponents;

// ---------------------------------------------------------------------------
// Exported Typography namespace
// ---------------------------------------------------------------------------

/**
 * Design-system Typography component.
 *
 * Supports two usage patterns:
 *
 * **Token sub-components (preferred)**
 * Each sub-component is auto-derived from the Figma typography tokens and
 * applies the matching CSS variables at render time.
 *
 * ```tsx
 * <Typography.HeadlineMed18Med>Page Title</Typography.HeadlineMed18Med>
 * <Typography.LabelSml color="text.secondary">Subtitle</Typography.LabelSml>
 * ```
 *
 * **Base MUI Typography (backward compatible)**
 * The root export is MUI Typography itself, so existing `variant` usage still
 * works without any changes.
 *
 * ```tsx
 * <Typography variant="h4" fontWeight="bold">Legacy usage</Typography>
 * ```
 */
export const Typography = Object.assign(MuiTypography, subComponents) as typeof MuiTypography & TypographySubComponents;
