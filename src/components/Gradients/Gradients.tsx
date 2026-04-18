import React from 'react';
import tokens from '../../design-tokens/tokens.json';

interface GradientStop { position: number; color: string; opacity: number }
interface GradientToken { name: string; gradientType: string; stops: GradientStop[]; category?: string }

const hexToRgba = (hex: string, alpha: number) => {
  let r = 0, g = 0, b = 0;
  if (!hex) return `rgba(0,0,0,${alpha})`;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length >= 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const renderGradient = (g: GradientToken) => {
  const stops = g.stops.map(s => `${hexToRgba(s.color, s.opacity)} ${Math.round(s.position * 100)}%`).join(', ');
  switch (g.gradientType) {
    case 'radial':  return `radial-gradient(circle at center, ${stops})`;
    case 'angular': return `conic-gradient(from 0deg at 50% 50%, ${stops})`;
    case 'diamond': return `linear-gradient(135deg, ${stops})`;
    default:        return `linear-gradient(to bottom right, ${stops})`;
  }
};

const toKebab = (s: string) =>
  s.replace(/([a-z])([A-Z])/g, '$1-$2')
   .replace(/([a-zA-Z])([0-9])/g, '$1-$2')
   .replace(/ /g, '-')
   .replace(/_/g, '-')
   .replace(/\/+/g, '-')
   .replace(/-+/g, '-')
   .toLowerCase()
   .replace(/[^a-z0-9-]/g, '');

export const Gradients = () => {
  const gradients: GradientToken[] = (tokens as any).gradients || [];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '0.25rem' }}>Gradients</h1>
      <p style={{ color: '#666', marginBottom: '2rem', fontSize: '0.9rem' }}>
        {gradients.length} gradient {gradients.length === 1 ? 'token' : 'tokens'} extracted from Figma. Each resolves at
        runtime through <code>--gradient-&lt;name&gt;</code>.
      </p>

      {gradients.length === 0 ? (
        <p style={{ color: '#999' }}>
          No gradients found. Sync gradient paint styles from Figma to see them here.
        </p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {gradients.map((g) => (
            <div key={g.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{
                height: '140px',
                borderRadius: '12px',
                background: renderGradient(g),
                border: '1px solid rgba(0,0,0,0.08)',
              }} />
              <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{g.name}</div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '999px', background: '#f3f4f6', color: '#555' }}>
                  {g.gradientType}
                </span>
                <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '999px', background: '#f3f4f6', color: '#555' }}>
                  {g.stops.length} stops
                </span>
                {g.category && (
                  <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '999px', background: '#fef3c7', color: '#92400e' }}>
                    {g.category}
                  </span>
                )}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#888', fontFamily: 'monospace' }}>
                var(--gradient-{toKebab(g.name)})
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
