import React from 'react';
import tokens from '../../design-tokens/tokens.json';

export const ModelMap = () => {
  const aliases = (tokens as any).aliases;
  const rawColors = (tokens as any).colors || [];

  if (!aliases) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ marginBottom: '1rem' }}>Universal Model Map</h1>
        <p style={{ color: '#666' }}>No Universal Semantic Model generated yet. Run the sync pipeline with AI enabled to map your custom Figma tokens.</p>
      </div>
    );
  }

  const getColorHex = (tokenName: string) => {
    if (!tokenName) return 'transparent';
    const match = rawColors.find((c: any) => c.name === tokenName);
    return match ? match.value : 'transparent';
  };

  const renderSection = (title: string, data: Record<string, string>, type: 'color' | 'text' = 'text') => {
    return (
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '1rem', 
          color: '#888', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em', 
          marginBottom: '1rem', 
          borderBottom: '1px solid #eee', 
          paddingBottom: '0.5rem' 
        }}>
          {title}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {Object.entries(data).map(([role, mappedTokenName]) => {
            const hasMapping = !!mappedTokenName;
            
            return (
              <div key={role} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                padding: '1rem',
                backgroundColor: '#ffffff',
                border: '1px solid #eaeaea',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}>
                {type === 'color' && (
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: hasMapping ? getColorHex(mappedTokenName) : '#fafafa',
                    border: '1px solid rgba(0,0,0,0.1)'
                  }} />
                )}
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111' }}>
                    {role}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#888' }}>points to ➔</span>
                    {hasMapping ? (
                      <span style={{ 
                        fontSize: '0.8rem', 
                        fontFamily: 'monospace', 
                        backgroundColor: '#f3f4f6', 
                        padding: '0.1rem 0.4rem', 
                        borderRadius: '4px',
                        color: '#3b82f6',
                        fontWeight: 600
                      }}>
                        {mappedTokenName}
                      </span>
                    ) : (
                      <span style={{ fontSize: '0.8rem', color: '#aaa', fontStyle: 'italic' }}>Unmapped</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#fafcfd', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2rem', color: '#111', marginBottom: '0.5rem' }}>Universal Model Map</h1>
          <p style={{ color: '#666', lineHeight: 1.5, maxWidth: '800px' }}>
            This is the AI-generated semantic mapping. It bridges the gap between the arbitrary, custom names your designers use in Figma and the strict architectural slots required by developers and standard UI libraries.
          </p>
        </div>

        {aliases.colors && renderSection('Colors', aliases.colors, 'color')}
        {aliases.typography && renderSection('Typography', aliases.typography, 'text')}
        {aliases.radii && renderSection('Border Radii', aliases.radii, 'text')}
        {aliases.shadows && renderSection('Shadows & Elevation', aliases.shadows, 'text')}
      </div>
    </div>
  );
};
