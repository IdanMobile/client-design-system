import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const Grids = () => {
  const grids = (tokens as any).layoutGrids || [];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '2rem' }}>Layout Grids</h1>
      {grids.length === 0 ? (
        <p style={{ color: '#666' }}>No layout grid tokens found. Sync tokens from Figma to see them here.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {grids.map((g: any) => (
            <div key={g.name} style={{ padding: '1.5rem', borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.25rem' }}>{g.name}</div>
              {g.category && (
                <div style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase', marginBottom: '1rem' }}>{g.category}</div>
              )}
              <div style={{
                width: '100%',
                height: '80px',
                background: '#f9f9f9',
                borderRadius: '8px',
                display: 'flex',
                gap: '4px',
                padding: '4px',
                marginBottom: '1rem'
              }}>
                {Array.from({ length: Math.min(g.grids[0]?.count || 4, 12) }).map((_: any, i: number) => (
                  <div key={i} style={{
                    flex: 1,
                    height: '100%',
                    background: 'rgba(102,126,234,0.08)',
                    borderLeft: '1px solid rgba(102,126,234,0.15)',
                    borderRight: '1px solid rgba(102,126,234,0.15)',
                    borderRadius: '4px'
                  }} />
                ))}
              </div>
              {g.grids.map((grid: any, i: number) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#777' }}>Grid Layer {i + 1}</div>
                  <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>pattern: {grid.pattern}</div>
                  {grid.count !== undefined && (
                    <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>count: {grid.count === -1 ? 'Auto' : grid.count}</div>
                  )}
                  {grid.sectionSize !== undefined && grid.sectionSize > 0 && (
                    <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>size: {grid.sectionSize}px</div>
                  )}
                  {grid.gutterSize !== undefined && (
                    <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>gutter: {grid.gutterSize}px</div>
                  )}
                  {grid.alignment && (
                    <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: 'monospace' }}>alignment: {grid.alignment.toLowerCase()}</div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
