import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Gaps = () => {
  const gaps = (tokens as any).gaps || [];

  const toKebab = (s: string) => s.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/ /g, '-').replace(/_/g, '-').toLowerCase();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Gaps (Spacing)</h1>
      {gaps.length === 0 ? (
        <p style={{ color: '#666' }}>No gap tokens found.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {gaps.map((g: any) => (
            <div key={g.name} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '0.5rem 0', borderBottom: '1px solid #f9f9f9' }}>
              <div style={{ width: '140px', fontWeight: 'bold', fontSize: '0.9rem' }}>{g.name}</div>
              <div style={{ width: `${g.value}px`, height: '20px', background: '#667eea', borderRadius: '2px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', minWidth: '100px' }}>
                <div style={{ color: '#555', fontFamily: 'monospace', fontSize: '0.8rem' }}>size: {g.value}px</div>
                <div style={{ color: '#aaa', fontFamily: 'monospace', fontSize: '0.7rem' }}>var: --gap-{toKebab(g.name)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
