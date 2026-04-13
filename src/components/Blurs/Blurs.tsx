import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Blurs = () => {
  const blurs = (tokens as any).blurs || [];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Blurs</h1>
      {blurs.length === 0 ? (
        <p style={{ color: '#666' }}>No blur tokens found. Sync tokens from Figma to see them here.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {blurs.map((b: any) => (
            <div key={b.name} style={{ display: 'flex', gap: '2rem', padding: '1.5rem', borderBottom: '1px solid #f0f0f0', alignItems: 'flex-start' }}>
              <div style={{ position: 'relative', width: '160px', minWidth: '160px', height: '100px', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(45deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)'
                }} />
                <div style={{
                  position: 'absolute',
                  inset: '20px',
                  background: 'rgba(255,255,255,0.3)',
                  backdropFilter: b.blurType === 'background' ? `blur(\${b.radius}px)` : 'none',
                  filter: b.blurType === 'layer' ? `blur(\${b.radius}px)` : 'none',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.4)'
                }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
                <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{b.name}</div>
                {b.category && (
                  <div style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase' }}>{b.category}</div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>type: {b.blurType === 'background' ? 'backdrop-filter' : 'filter'}</div>
                  <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>value: blur({b.radius}px)</div>
                  <div style={{ fontSize: '0.8rem', color: '#888', fontFamily: 'monospace' }}>mode: {b.blurType}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
