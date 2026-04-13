import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Icons = () => {
  const icons = (tokens as any).icons || [];

  const grouped: Record<string, any[]> = {};
  icons.forEach((icon: any) => {
    const cat = icon.category || 'General';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(icon);
  });

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Icons</h1>
      {icons.length === 0 ? (
        <p style={{ color: '#666' }}>No icon tokens found. Sync tokens from Figma to see them here.</p>
      ) : (
        Object.entries(grouped).map(([category, catIcons]) => (
          <div key={category} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
              {category}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '1.5rem' }}>
              {catIcons.map((icon: any) => (
                <div key={icon.name} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  border: '1px solid #eee',
                  borderRadius: '8px'
                }}>
                  <div dangerouslySetInnerHTML={{ __html: atob(icon.svg) }} style={{ width: '32px', height: '32px' }} />
                  <div style={{ fontSize: '0.7rem', fontWeight: '500', textAlign: 'center', wordBreak: 'break-all', color: '#555' }}>{icon.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
