import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Radius = () => {
  const radius = (tokens as any).radius || [];
  const sizes = (tokens as any).sizes || [];
  const gaps = (tokens as any).gaps || [];
  const allSizes = [...sizes, ...gaps];

  const toKebab = (s: string) => s.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/ /g, '-').replace(/_/g, '-').toLowerCase();

  const getSizeName = (val: number) => {
    if (val === 0) return '0px';
    const matches = allSizes.filter(s => Math.abs(s.value - val) < 0.01);
    const semanticMatch = matches.find(s => isNaN(Number(s.name)));
    if (semanticMatch) return semanticMatch.name;
    const numericMatch = matches[0];
    return numericMatch ? `${numericMatch.name}px` : `${val}px`;
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Border Radius</h1>
      {radius.length === 0 ? (
        <p style={{ color: '#666' }}>No radius tokens found. Sync tokens from Figma to see them here.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
          {radius.map((r: any) => {
            const sizeName = getSizeName(r.value);
            return (
              <div key={r.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{
                  width: '100%',
                  height: '100px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: `${r.topLeft}px ${r.topRight}px ${r.bottomRight}px ${r.bottomLeft}px`,
                  border: '1px solid #ddd'
                }} />
                <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{r.name}</div>
                {r.category && (
                  <div style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{r.category}</div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ color: '#555', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                    radius: {r.topLeft === r.topRight && r.topRight === r.bottomRight && r.bottomRight === r.bottomLeft
                      ? (sizeName || `${r.value}px`)
                      : `${r.topLeft}px ${r.topRight}px ${r.bottomRight}px ${r.bottomLeft}px`
                    }
                  </div>
                </div>
                <div style={{ color: '#aaa', fontFamily: 'monospace', fontSize: '0.7rem' }}>--radius-{toKebab(r.name)}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
