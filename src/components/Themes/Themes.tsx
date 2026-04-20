import React, { useState } from 'react';
import tokens from '../../design-tokens/tokens.json';

interface ColorToken { name: string; value: string; category?: string }
interface RadiusToken { name: string; value: number }
interface GapToken { name: string; value: number }
interface SizeToken { name: string; value: number }

interface ThemeTokens {
  colors?: ColorToken[];
  radius?: RadiusToken[];
  gaps?: GapToken[];
  sizes?: SizeToken[];
}

const toKebab = (s: string) =>
  s.replace(/([a-z])([A-Z])/g, '$1-$2')
   .replace(/([a-zA-Z])([0-9])/g, '$1-$2')
   .replace(/ /g, '-')
   .replace(/\/+/g, '-')
   .replace(/-+/g, '-')
   .toLowerCase()
   .replace(/[^a-z0-9-]/g, '');

const contrastText = (hex: string): string => {
  const h = hex.replace('#', '');
  if (h.length < 6) return '#111827';
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const luma = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luma > 0.6 ? '#111827' : '#ffffff';
};

export const Themes = () => {
  const themes: Record<string, ThemeTokens> = (tokens as any).themes || {};
  const themeNames = Object.keys(themes);
  const [selected, setSelected] = useState<string | null>(themeNames[0] ?? null);

  const active = selected ? themes[selected] : undefined;
  const activeSurface = active?.colors?.find((c) => /surface|background|bg/i.test(c.name))?.value
    ?? '#ffffff';
  const activeTextColor = active?.colors?.find((c) => /text|foreground|on-/i.test(c.name))?.value
    ?? '#111827';

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '0.25rem' }}>Themes</h1>
      <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        {themeNames.length === 0
          ? 'No theme modes extracted. Create multi-mode Variable Collections in Figma (e.g. Light / Dark) to enable themes.'
          : `${themeNames.length} theme ${themeNames.length === 1 ? 'mode' : 'modes'} extracted. Each overrides CSS variables at runtime via the ` }
        {themeNames.length > 0 && (
          <code>[data-theme="{toKebab(themeNames[0])}"]</code>
        )}
        {themeNames.length > 0 && ' selector.'}
      </p>

      {themeNames.length > 0 && (
        <>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {themeNames.map((n) => {
              const isSelected = selected === n;
              const themeAccent = themes[n]?.colors?.[0]?.value;
              return (
                <button
                  key={n}
                  onClick={() => setSelected(n)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '999px',
                    border: '1px solid',
                    borderColor: isSelected ? (themeAccent ?? '#111827') : '#e5e7eb',
                    background: isSelected ? (themeAccent ?? '#111827') : '#ffffff',
                    color: isSelected ? (themeAccent ? contrastText(themeAccent) : '#ffffff') : '#111827',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    fontWeight: isSelected ? 600 : 500,
                  }}
                >
                  {n}
                </button>
              );
            })}
          </div>

          {active && (
            <div
              data-theme={toKebab(selected!)}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '2rem',
                background: activeSurface,
                color: activeTextColor,
                transition: 'all 0.2s ease',
              }}
            >
              <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Preview — {selected}</h2>

              {(active.colors && active.colors.length > 0) && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                    Colors ({active.colors.length})
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.75rem' }}>
                    {active.colors.map((c) => (
                      <div key={c.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <div style={{
                          height: '48px',
                          borderRadius: '8px',
                          background: c.value,
                          border: '1px solid rgba(0,0,0,0.08)',
                        }} />
                        <div style={{ fontSize: '0.8rem', fontWeight: 500 }}>{c.name}</div>
                        <div style={{ fontSize: '0.7rem', color: '#888', fontFamily: 'monospace' }}>{c.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(active.radius && active.radius.length > 0) && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                    Radius overrides ({active.radius.length})
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {active.radius.map((r) => (
                      <span key={r.name} style={{
                        padding: '0.25rem 0.5rem',
                        borderRadius: '6px',
                        background: '#f3f4f6',
                        fontSize: '0.75rem',
                        fontFamily: 'monospace',
                      }}>
                        {r.name}: {r.value}px
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {(active.gaps && active.gaps.length > 0) && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                    Gap overrides ({active.gaps.length})
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {active.gaps.map((g) => (
                      <span key={g.name} style={{
                        padding: '0.25rem 0.5rem',
                        borderRadius: '6px',
                        background: '#f3f4f6',
                        fontSize: '0.75rem',
                        fontFamily: 'monospace',
                      }}>
                        {g.name}: {g.value}px
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {(active.sizes && active.sizes.length > 0) && (
                <div>
                  <h3 style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                    Size overrides ({active.sizes.length})
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {active.sizes.map((s) => (
                      <span key={s.name} style={{
                        padding: '0.25rem 0.5rem',
                        borderRadius: '6px',
                        background: '#f3f4f6',
                        fontSize: '0.75rem',
                        fontFamily: 'monospace',
                      }}>
                        {s.name}: {s.value}px
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
