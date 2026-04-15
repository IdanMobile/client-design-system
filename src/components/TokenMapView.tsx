import React, { useState } from 'react';

export interface TokenMapping {
  token: string;
  property: string;
  category: string;
  component: string;
}

export interface TokenMapData {
  library: string;
  approach: string;
  mappings: TokenMapping[];
}

const catColors: Record<string, { bg: string; fg: string }> = {
  Colors: { bg: 'var(--color-brand-100)', fg: 'var(--color-brand-700)' },
  Typography: { bg: '#fef3c7', fg: '#92400e' },
  Radius: { bg: '#dbeafe', fg: '#1e40af' },
  Shadows: { bg: '#f3e8ff', fg: '#6b21a8' },
  Elevations: { bg: '#f3e8ff', fg: '#6b21a8' },
  Borders: { bg: '#fee2e2', fg: '#991b1b' },
  Gaps: { bg: '#d1fae5', fg: '#065f46' },
  Sizes: { bg: '#e0e7ff', fg: '#3730a3' },
  Opacity: { bg: '#fce7f3', fg: '#9d174d' },
  Blurs: { bg: '#f0fdf4', fg: '#166534' },
  Gradients: { bg: '#fff7ed', fg: '#9a3412' },
};

export const TokenMapView: React.FC<TokenMapData> = ({ library, approach, mappings }) => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState('');

  const components = [...new Set(mappings.map(m => m.component))];
  const categories = [...new Set(mappings.map(m => m.category))];
  const total = mappings.length;

  const filtered = filter
    ? mappings.filter(m =>
        m.token.toLowerCase().includes(filter.toLowerCase()) ||
        m.property.toLowerCase().includes(filter.toLowerCase()) ||
        m.component.toLowerCase().includes(filter.toLowerCase()) ||
        m.category.toLowerCase().includes(filter.toLowerCase())
      )
    : mappings;

  // Group by component
  const grouped = components.reduce<Record<string, TokenMapping[]>>((acc, comp) => {
    acc[comp] = filtered.filter(m => m.component === comp);
    return acc;
  }, {});

  // Auto-expand first component if none expanded
  const activeExpanded = expanded ?? (filter ? null : components[0] ?? null);

  const s: Record<string, React.CSSProperties> = {
    page: { padding: '2rem', fontFamily: 'var(--font-body-regular-family)', color: 'var(--color-text-main)', maxWidth: 960 },
    h1: { fontSize: 28, fontWeight: 700, marginBottom: 8, fontFamily: 'var(--font-heading-1-family)' },
    sub: { fontSize: 14, color: 'var(--color-text-muted)', marginBottom: 16, lineHeight: 1.6 },
    approach: { fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 24, padding: '8px 12px', borderRadius: 'var(--radius-medium)', border: 'var(--border-divider)', backgroundColor: 'var(--color-surface)' },
    stat: { padding: '12px 16px', borderRadius: 'var(--radius-medium)', border: 'var(--border-divider)', backgroundColor: 'var(--color-surface)', minWidth: 100, textAlign: 'center' as const },
    input: { width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-medium)', border: 'var(--border-divider)', fontFamily: 'var(--font-body-regular-family)', fontSize: 14, marginBottom: 24, outline: 'none', backgroundColor: 'var(--color-surface)', color: 'var(--color-text-main)' },
  };

  return (
    <div style={s.page}>
      <h1 style={s.h1}>Token Map — {library}</h1>
      <p style={s.sub}>
        Every design token CSS variable mapped to its {library} equivalent.
        When tokens change in Figma, every component updates automatically.
      </p>
      <div style={s.approach}>
        <strong>Injection approach:</strong> {approach}
      </div>

      <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
        {[['Mappings', total], ['Components', components.length], ['Categories', categories.length]].map(([l, v]) => (
          <div key={String(l)} style={s.stat}>
            <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-brand-500)' }}>{v}</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
        {categories.map(c => (
          <span key={c} style={{ padding: '2px 10px', borderRadius: 'var(--radius-round)', fontSize: 12, fontWeight: 500, backgroundColor: catColors[c]?.bg || '#f3f4f6', color: catColors[c]?.fg || '#374151' }}>{c}</span>
        ))}
      </div>

      <input
        style={s.input}
        placeholder="Filter by token, property, component, or category..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />

      {filter ? (
        // Flat list when filtering
        filtered.length > 0 ? (
          <MappingTable mappings={filtered} library={library} />
        ) : (
          <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', padding: 24 }}>No mappings match "{filter}"</p>
        )
      ) : (
        // Grouped by component with accordion
        components.map(comp => {
          const compMappings = grouped[comp];
          if (!compMappings || compMappings.length === 0) return null;
          const isOpen = activeExpanded === comp;
          const compCats = [...new Set(compMappings.map(m => m.category))];
          return (
            <div key={comp} style={{ marginBottom: 8 }}>
              <button
                onClick={() => setExpanded(isOpen ? null : comp)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '12px 16px', background: isOpen ? 'var(--color-brand-100)' : 'var(--color-neutral-100)',
                  border: 'none', borderRadius: 'var(--radius-medium)', cursor: 'pointer',
                  fontFamily: 'var(--font-body-regular-family)', fontSize: 15, fontWeight: 600,
                  color: isOpen ? 'var(--color-brand-700)' : 'var(--color-text-main)',
                }}
              >
                <span>{isOpen ? '▾' : '▸'} {comp}</span>
                <span style={{ fontSize: 12, fontWeight: 400, color: 'var(--color-text-muted)' }}>
                  {compMappings.length} mappings · {compCats.join(', ')}
                </span>
              </button>
              {isOpen && (
                <div style={{ padding: '12px 0 0' }}>
                  <MappingTable mappings={compMappings} library={library} />
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

const MappingTable: React.FC<{ mappings: TokenMapping[]; library: string }> = ({ mappings, library }) => (
  <div style={{ marginBottom: 16, border: 'var(--border-divider)', borderRadius: 'var(--radius-large)', overflow: 'hidden', backgroundColor: 'var(--color-surface)' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
      <thead>
        <tr style={{ textAlign: 'left', borderBottom: 'var(--border-divider)' }}>
          <th style={{ padding: '8px 16px', fontWeight: 600, width: '35%' }}>Design Token</th>
          <th style={{ padding: '8px 16px', fontWeight: 600, width: '40%' }}>{library} Property</th>
          <th style={{ padding: '8px 16px', fontWeight: 600, width: '25%' }}>Category</th>
        </tr>
      </thead>
      <tbody>
        {mappings.map((m, i) => (
          <tr key={i} style={{ borderBottom: i < mappings.length - 1 ? '1px solid var(--color-neutral-100)' : 'none' }}>
            <td style={{ padding: '6px 16px' }}>
              <code style={{ fontSize: 12, fontFamily: 'var(--font-code-family)', color: 'var(--color-brand-700)', backgroundColor: 'var(--color-brand-100)', padding: '1px 6px', borderRadius: 4 }}>{m.token}</code>
            </td>
            <td style={{ padding: '6px 16px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-code-family)', fontSize: 12 }}>{m.property}</td>
            <td style={{ padding: '6px 16px' }}>
              <span style={{ padding: '1px 8px', borderRadius: 'var(--radius-round)', fontSize: 11, fontWeight: 500, backgroundColor: catColors[m.category]?.bg || '#f3f4f6', color: catColors[m.category]?.fg || '#374151' }}>{m.category}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
