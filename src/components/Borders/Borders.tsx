import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Borders = () => {
  const borders = (tokens as any).borders || [];
  const sizes = (tokens as any).sizes || [];
  const gaps = (tokens as any).gaps || [];
  const colors = (tokens as any).colors || [];
  const allSizes = [...sizes, ...gaps];

  const getStyle = (b: any) => (b.dashPattern && b.dashPattern.length > 0) ? 'dashed' : 'solid';

  const getColorName = (hex: string) => {
    if (!hex) return '';
    const normalizedHex = hex.toLowerCase().trim();
    const match = colors.find((c: any) => c.value.toLowerCase().trim() === normalizedHex);
    return match ? match.name : hex;
  };

  const getSizeName = (weight: number) => {
    if (weight === 0) return '0px';
    const matches = allSizes.filter(s => Math.abs(s.value - weight) < 0.01);
    const semanticMatch = matches.find(s => isNaN(Number(s.name)));
    if (semanticMatch) return semanticMatch.name;
    const numericMatch = matches[0];
    return numericMatch ? `${numericMatch.name}px` : `${weight}px`;
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Borders</h1>
      {borders.length === 0 ? (
        <p style={{ color: '#666' }}>No border tokens found. Sync tokens from Figma to see them here.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {borders.map((b: any) => {
            const sizeName = getSizeName(b.weight);
            const colorName = getColorName(b.color);
            return (
              <div key={b.name} style={{ display: 'flex', gap: '2rem', padding: '1.5rem', borderBottom: '1px solid #f0f0f0', alignItems: 'flex-start' }}>
                <div style={{
                  width: '120px',
                  minWidth: '120px',
                  height: '80px',
                  border: `${b.weight}px ${getStyle(b)} ${b.color}`,
                  borderRadius: '4px',
                }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{b.name}</div>
                  {b.category && (
                    <div style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase' }}>{b.category}</div>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <div style={{ width: '12px', height: '12px', backgroundColor: b.color, borderRadius: '2px', border: '1px solid #ddd' }} />
                      <span style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>color: {colorName}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>weight: {sizeName || `${b.weight}px`}</div>
                    <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>style: {getStyle(b)}</div>
                    {b.strokeAlign && (
                      <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>align: {b.strokeAlign.toLowerCase()}</div>
                    )}
                    {b.strokeCap && (
                      <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>cap: {b.strokeCap.toLowerCase()}</div>
                    )}
                    {b.strokeJoin && (
                      <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>join: {b.strokeJoin.toLowerCase()}</div>
                    )}
                    {b.dashPattern && b.dashPattern.length > 0 && (
                      <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>dash: [{b.dashPattern.join(', ')}]</div>
                    )}
                  </div>
                  {b.strokeTopWeight !== undefined && (
                    <div style={{ fontSize: '0.75rem', color: '#888', fontFamily: 'monospace', marginTop: '0.25rem' }}>
                      per-side: top {b.strokeTopWeight}px · right {b.strokeRightWeight}px · bottom {b.strokeBottomWeight}px · left {b.strokeLeftWeight}px
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
