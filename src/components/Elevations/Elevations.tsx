import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Elevations = () => {
  const elevations = (tokens as any).elevations || [];
  const colors = (tokens as any).colors || [];
  const sizes = (tokens as any).sizes || [];
  const gaps = (tokens as any).gaps || [];
  const allSizes = [...sizes, ...gaps];

  const getSizeName = (val: number) => {
    if (val === 0) return '0px';
    const matches = allSizes.filter(s => Math.abs(s.value - val) < 0.01);
    const semanticMatch = matches.find(s => isNaN(Number(s.name)));
    if (semanticMatch) return semanticMatch.name;
    const numericMatch = matches[0];
    return numericMatch ? `${numericMatch.name}px` : `${val}px`;
  };

  const getColorName = (hex: string) => {
    if (!hex) return '';
    const normalizedHex = hex.toLowerCase().trim();
    const match = colors.find((c: any) => c.value.toLowerCase().trim() === normalizedHex);
    return match ? match.name : hex;
  };

  const getShadowStyle = (s: any) => {
    return s.shadows.map((sh: any) => `${sh.type === 'inner' ? 'inset ' : ''}${sh.offsetX}px ${sh.offsetY}px ${sh.blur}px ${sh.spread}px rgba(0,0,0,${sh.opacity})`).join(', ');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Elevations</h1>
      {elevations.length === 0 ? (
        <p style={{ color: '#666' }}>No elevation tokens found. Sync tokens from Figma to see them here.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {elevations.map((e: any) => (
            <div key={e.name} style={{ display: 'flex', gap: '2rem', padding: '1.5rem', borderBottom: '1px solid #f0f0f0', alignItems: 'flex-start' }}>
              <div style={{
                width: '140px',
                minWidth: '140px',
                height: '100px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: getShadowStyle(e)
              }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
                <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{e.name}</div>
                {e.category && (
                  <div style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase' }}>{e.category}</div>
                )}
                <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace', marginBottom: '0.5rem' }}>layers: {e.shadows.length}</div>
                {e.shadows.map((sh: any, i: number) => {
                  const colorName = getColorName(sh.color);
                  return (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#777' }}>Layer {i + 1} ({sh.type})</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <div style={{ width: '10px', height: '10px', backgroundColor: sh.color, borderRadius: '2px', border: '1px solid #ddd', opacity: sh.opacity }} />
                        <span style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>color: {colorName} @{Math.round(sh.opacity * 100)}%</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>offset-x: {getSizeName(sh.offsetX)}</div>
                      <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>offset-y: {getSizeName(sh.offsetY)}</div>
                      <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>blur: {getSizeName(sh.blur)}</div>
                      <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>spread: {getSizeName(sh.spread)}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
