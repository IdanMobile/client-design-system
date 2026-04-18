import React, { useState } from 'react';

export interface TokenBinding {
  designToken: string;
  libraryProperty: string;
  category: string;
}

interface InjectionViewProps {
  libraryName: string;
  approach: string;
  bindings: TokenBinding[];
}

const categoryColors: Record<string, { bg: string; fg: string }> = {
  Colors: { bg: 'var(--color-brand-100)', fg: 'var(--color-brand-700)' },
  Typography: { bg: '#fef3c7', fg: '#92400e' },
  Radius: { bg: '#dbeafe', fg: '#1e40af' },
  Shadows: { bg: '#f3e8ff', fg: '#6b21a8' },
  Spacing: { bg: '#d1fae5', fg: '#065f46' },
  Borders: { bg: '#fee2e2', fg: '#991b1b' },
  Elevations: { bg: '#f3e8ff', fg: '#6b21a8' },
  Layout: { bg: '#e0e7ff', fg: '#3730a3' },
};

export const InjectionView: React.FC<InjectionViewProps> = ({ libraryName, approach, bindings }) => {
  const [filter, setFilter] = useState('');
  const categories = [...new Set(bindings.map(b => b.category))];

  const filtered = filter
    ? bindings.filter(b =>
        b.designToken.toLowerCase().includes(filter.toLowerCase()) ||
        b.libraryProperty.toLowerCase().includes(filter.toLowerCase()) ||
        b.category.toLowerCase().includes(filter.toLowerCase())
      )
    : bindings;

  const grouped = categories
    .map(cat => ({ cat, items: filtered.filter(b => b.category === cat) }))
    .filter(g => g.items.length > 0);

  return (
    <div style={{ padding: 32, maxWidth: 960, fontFamily: 'var(--font-body-regular-family, Inter, sans-serif)', color: 'var(--color-text-main, #111827)' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4 }}>
        Token Injection — {libraryName}
      </h1>
      <p style={{ fontSize: 14, color: 'var(--color-text-muted, #6b7280)', marginBottom: 8, lineHeight: 1.6 }}>
        How design system tokens are injected into {libraryName} properties.
      </p>
      <p style={{ fontSize: 13, color: 'var(--color-text-muted, #6b7280)', marginBottom: 24 }}>
        Approach: <strong>{approach}</strong>
      </p>

      <div style={{ display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
        <div style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid var(--color-neutral-200, #e5e7eb)', background: 'var(--color-surface, #fff)', textAlign: 'center' }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-brand-500, #0ea5e9)' }}>{bindings.length}</div>
          <div style={{ fontSize: 11, color: 'var(--color-text-muted, #6b7280)' }}>Bindings</div>
        </div>
        <div style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid var(--color-neutral-200, #e5e7eb)', background: 'var(--color-surface, #fff)', textAlign: 'center' }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-brand-500, #0ea5e9)' }}>{categories.length}</div>
          <div style={{ fontSize: 11, color: 'var(--color-text-muted, #6b7280)' }}>Categories</div>
        </div>
      </div>

      <input
        style={{
          width: '100%', padding: '8px 12px', borderRadius: 8,
          border: '1px solid var(--color-neutral-200, #e5e7eb)',
          fontSize: 14, marginBottom: 24, outline: 'none',
          fontFamily: 'inherit',
          background: 'var(--color-surface, #fff)',
          color: 'var(--color-text-main, #111827)',
        }}
        placeholder="Filter by token, property, or category..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />

      {grouped.map(({ cat, items }) => (
        <div key={cat} style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{
              padding: '2px 10px', borderRadius: 9999, fontSize: 12, fontWeight: 600,
              background: categoryColors[cat]?.bg || '#f3f4f6',
              color: categoryColors[cat]?.fg || '#374151',
            }}>{cat}</span>
            <span style={{ fontSize: 12, color: 'var(--color-text-muted, #6b7280)' }}>
              {items.length} binding{items.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div style={{
            borderRadius: 8, overflow: 'hidden',
            border: '1px solid var(--color-neutral-200, #e5e7eb)',
            background: '#1e1e2e', color: '#cdd6f4',
            fontFamily: 'var(--font-code-family, monospace)', fontSize: 13,
          }}>
            {items.map((b, i) => (
              <div key={i} style={{
                padding: '6px 16px',
                borderBottom: i < items.length - 1 ? '1px solid #313244' : 'none',
                display: 'flex', gap: 8, alignItems: 'center',
              }}>
                <span style={{ color: '#89b4fa' }}>{b.designToken}</span>
                <span style={{ color: '#6c7086' }}>→</span>
                <span style={{ color: '#a6e3a1' }}>{b.libraryProperty}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
