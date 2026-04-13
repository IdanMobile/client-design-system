import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Sizes = () => {
  const sizes = (tokens as any).sizes || [];

  const toKebab = (s: string) => s.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/ /g, '-').replace(/_/g, '-').toLowerCase();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Sizes</h1>
      {sizes.length === 0 ? (
        <p style={{ color: '#666' }}>No size tokens found.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '2rem' }}>
          {sizes.map((s: any) => (
            <div key={s.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: '1rem', border: '1px solid #f0f0f0', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '160px', background: '#fcfcfc', borderRadius: '4px' }}>
                <div style={{ width: `${Math.min(s.value, 140)}px`, height: `${Math.min(s.value, 140)}px`, background: '#764ba2', borderRadius: '4px', boxShadow: '0 4px 12px rgba(118,75,162,0.15)' }} />
              </div>
              <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{s.name}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <div style={{ color: '#555', fontFamily: 'monospace', fontSize: '0.8rem' }}>size: {s.value}px</div>
                <div style={{ color: '#aaa', fontFamily: 'monospace', fontSize: '0.7rem' }}>var: --size-{toKebab(s.name)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
