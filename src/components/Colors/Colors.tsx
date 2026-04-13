import React from 'react';
import tokens from '../../design-tokens/tokens.json';
import { ColorToken } from '../../design-tokens';

export const Colors = () => {
  const colors: ColorToken[] = (tokens as any).colors || [];
  const gradients = (tokens as any).gradients || [];

  const grouped: Record<string, ColorToken[]> = {};
  colors.forEach((c) => {
    const cat = c.category || 'General';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(c);
  });

  const toKebab = (s: string) => s.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/ /g, '-').replace(/_/g, '-').toLowerCase();

  const getColorName = (hex: string) => {
    if (!hex) return '';
    const normalizedHex = hex.toLowerCase().trim();
    const match = colors.find((c: any) => c.value.toLowerCase().trim() === normalizedHex);
    return match ? match.name : hex;
  };

  const hexToRgba = (hex: string, alpha: number) => {
    let r = 0, g = 0, b = 0;
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

  const renderGradient = (g: any) => {
    const stops = g.stops.map((s: any) => `${hexToRgba(s.color, s.opacity)} ${Math.round(s.position * 100)}%`).join(', ');
    const angle = g.gradientType === 'radial' ? 'circle at center' : 'to bottom right';
    return `${g.gradientType}-gradient(${angle}, ${stops})`;
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Colors</h1>

      {colors.length === 0 && (
        <p style={{ color: '#666' }}>No colors found. Sync tokens from Figma to see them here.</p>
      )}

      {Object.entries(grouped).map(([category, catColors]) => (
        <div key={category} style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
            {category}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {catColors.map((color: ColorToken) => (
              <div key={color.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div style={{
                  width: '100%',
                  height: '80px',
                  backgroundColor: 'var(--color-' + toKebab(color.name) + ')',
                  borderRadius: '8px',
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }} />
                <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{color.name}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <div style={{ color: '#555', fontSize: '0.8rem', fontFamily: 'monospace' }}>hex: {color.value}</div>
                  <div style={{ color: '#aaa', fontSize: '0.7rem', fontFamily: 'monospace' }}>var: --color-{toKebab(color.name)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {gradients.length > 0 && (
        <div style={{ marginTop: '4rem' }}>
          <h1 style={{ marginBottom: '2rem' }}>Gradients</h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {gradients.map((g: any) => (
              <div key={g.name} style={{ display: 'flex', gap: '2rem', padding: '1.5rem', borderBottom: '1px solid #f0f0f0', alignItems: 'flex-start' }}>
                <div style={{
                  width: '200px',
                  minWidth: '200px',
                  height: '100px',
                  background: renderGradient(g),
                  borderRadius: '12px',
                  border: '1px solid rgba(0,0,0,0.08)',
                }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{g.name}</div>
                  {g.category && (
                    <div style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase' }}>{g.category}</div>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.25rem' }}>
                    <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>type: {g.gradientType}</div>
                    <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>stops: {g.stops.length}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.75rem' }}>
                    {g.stops.map((s: any, i: number) => {
                      const colorName = getColorName(s.color);
                      return (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                          <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#777' }}>Stop {i + 1} ({Math.round(s.position * 100)}%)</div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                            <div style={{ width: '12px', height: '12px', backgroundColor: s.color, borderRadius: '2px', border: '1px solid #ddd', opacity: s.opacity }} />
                            <span style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>
                              color: {colorName}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
