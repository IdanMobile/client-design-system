import React, { useMemo, useState } from 'react';
import tokens from '../../design-tokens/tokens.json';

/* ------------------------------------------------------------------ */
/* Types & helpers                                                     */
/* ------------------------------------------------------------------ */

type AnyToken = Record<string, any> & { name?: string; category?: string };

interface SectionDef {
  key: string;
  label: string;
  kind: 'tokens' | 'styles' | 'variables' | 'structure' | 'aliases';
  description: string;
  renderPreview?: (item: AnyToken) => React.ReactNode;
}

/**
 * Figma categorises extracted tokens with a path like:
 *   "MIA Mobile - production cycle 2 / Search meetings / 2 / Keyboards"
 * The first segment is treated as the "source file / page" so we can
 * group everything by Figma source and see what came from where.
 */
const getSource = (category?: string): string => {
  if (!category) return 'Uncategorised';
  const first = category.split('/')[0]?.trim();
  return first || 'Uncategorised';
};

const isStyleCategory = (category?: string) =>
  (category || '').trim().toLowerCase() === 'styles';

/* Kind classification:
 *   - styles      → Figma *Styles* (paint, text, effect styles)
 *   - variables   → Figma *Variables* (design tokens with scopes)
 *   - tokens      → Raw values harvested from layers (no style / var binding)
 *   - structure   → Layer trees (frames, nodes)
 *   - aliases     → AI-generated Universal Semantic Model
 *
 * In the current extractor we don't yet flag variables vs. raw, so we use a
 * heuristic: `category === "Styles"` or sizes/radius where category contains
 * "Token" → treat as styles/variables; everything else → raw tokens harvested
 * from layers. This is surfaced so the user can see what's formalised vs.
 * loose values that still need to be canonicalised.
 */
const classifyKind = (sectionKey: string, item: AnyToken): SectionDef['kind'] => {
  const cat = (item.category || '').toLowerCase();
  if (isStyleCategory(item.category)) return 'styles';
  if (cat.includes('token')) return 'variables';
  if (sectionKey === 'structure') return 'structure';
  return 'tokens';
};

/* ------------------------------------------------------------------ */
/* Section definitions                                                 */
/* ------------------------------------------------------------------ */

const TOKEN_SECTIONS: SectionDef[] = [
  {
    key: 'colors',
    label: 'Colors',
    kind: 'tokens',
    description: 'Solid fills harvested from Figma (both color styles and hard-coded layer fills).',
    renderPreview: (c) => (
      <span
        title={c.value}
        style={{
          display: 'inline-block',
          width: 14,
          height: 14,
          borderRadius: 3,
          backgroundColor: c.value,
          border: '1px solid rgba(0,0,0,0.15)',
          verticalAlign: 'middle',
          marginRight: 6,
        }}
      />
    ),
  },
  {
    key: 'gradients',
    label: 'Gradients',
    kind: 'tokens',
    description: 'Linear / radial gradients discovered as paint styles or layer fills.',
  },
  {
    key: 'typography',
    label: 'Typography',
    kind: 'tokens',
    description: 'Text styles: family, size, weight, line-height, letter-spacing.',
    renderPreview: (t) => (
      <span style={{ fontSize: 11, color: '#666', marginRight: 6 }}>
        {t.fontFamily} · {t.fontSize}px / {t.fontWeight}
      </span>
    ),
  },
  {
    key: 'radius',
    label: 'Radius',
    kind: 'tokens',
    description: 'Corner radius values (per-corner preserved when asymmetric).',
    renderPreview: (r) => (
      <span
        style={{
          display: 'inline-block',
          width: 14,
          height: 14,
          background: '#e5e7eb',
          borderRadius: Math.min(Number(r.value) || 0, 7),
          marginRight: 6,
          verticalAlign: 'middle',
        }}
      />
    ),
  },
  {
    key: 'shadows',
    label: 'Shadows',
    kind: 'tokens',
    description: 'Drop / inner shadow effects from effect styles or layer effects.',
  },
  {
    key: 'borders',
    label: 'Borders',
    kind: 'tokens',
    description: 'Stroke colors, weights, alignment, dash patterns.',
    renderPreview: (b) => (
      <span
        style={{
          display: 'inline-block',
          width: 14,
          height: 14,
          background: '#fff',
          border: `${Math.min(Number(b.weight) || 1, 4)}px solid ${b.color || '#111'}`,
          borderRadius: 3,
          marginRight: 6,
          verticalAlign: 'middle',
        }}
      />
    ),
  },
  {
    key: 'sizes',
    label: 'Sizes',
    kind: 'tokens',
    description: 'Spacing / size values, usually from a size-token library.',
  },
  {
    key: 'opacity',
    label: 'Opacity',
    kind: 'tokens',
    description: 'Opacity + blend-mode values from layers.',
  },
  {
    key: 'blurs',
    label: 'Blurs',
    kind: 'tokens',
    description: 'Layer / background blurs.',
  },
  {
    key: 'layoutGrids',
    label: 'Layout Grids',
    kind: 'tokens',
    description: 'Grid / column / row definitions from Figma frames.',
  },
];

/* ------------------------------------------------------------------ */
/* Presentation helpers                                                */
/* ------------------------------------------------------------------ */

const card: React.CSSProperties = {
  background: '#fff',
  border: '1px solid #eaeaea',
  borderRadius: 10,
  boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
};

const pill = (bg: string, fg: string): React.CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  padding: '2px 8px',
  borderRadius: 999,
  background: bg,
  color: fg,
  fontSize: 11,
  fontWeight: 600,
  lineHeight: '16px',
});

const KIND_STYLES: Record<SectionDef['kind'], { bg: string; fg: string; label: string }> = {
  styles: { bg: '#ecfeff', fg: '#0e7490', label: 'Figma Style' },
  variables: { bg: '#eef2ff', fg: '#4338ca', label: 'Variable / Token' },
  tokens: { bg: '#f5f3ff', fg: '#6d28d9', label: 'Raw value' },
  structure: { bg: '#f1f5f9', fg: '#334155', label: 'Layer tree' },
  aliases: { bg: '#fef3c7', fg: '#92400e', label: 'AI alias' },
};

const KindPill: React.FC<{ kind: SectionDef['kind'] }> = ({ kind }) => {
  const s = KIND_STYLES[kind];
  return <span style={pill(s.bg, s.fg)}>{s.label}</span>;
};

const Bar: React.FC<{ value: number; max: number; color: string }> = ({ value, max, color }) => (
  <div
    style={{
      flex: 1,
      height: 6,
      background: '#f1f5f9',
      borderRadius: 3,
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        width: `${max ? (value / max) * 100 : 0}%`,
        height: '100%',
        background: color,
      }}
    />
  </div>
);

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export const ExtractedData: React.FC = () => {
  const data: Record<string, any[]> = tokens as any;
  const aliases: Record<string, Record<string, string>> | undefined = (tokens as any).aliases;
  const structure: any[] = Array.isArray(data.structure) ? data.structure : [];

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setExpanded((e) => ({ ...e, [key]: !e[key] }));

  /* -- counts per token section, split by kind -- */
  const sectionStats = useMemo(() => {
    return TOKEN_SECTIONS.map((s) => {
      const items: AnyToken[] = Array.isArray(data[s.key]) ? data[s.key] : [];
      const kindCounts = { styles: 0, variables: 0, tokens: 0 };
      items.forEach((it) => {
        const k = classifyKind(s.key, it);
        if (k === 'styles') kindCounts.styles++;
        else if (k === 'variables') kindCounts.variables++;
        else kindCounts.tokens++;
      });
      return { section: s, items, kindCounts };
    });
  }, [data]);

  /* -- aggregate by source file (first segment of category) -- */
  const bySource = useMemo(() => {
    const map: Record<string, Record<string, number>> = {};
    sectionStats.forEach(({ section, items }) => {
      items.forEach((it) => {
        const src = getSource(it.category);
        if (!map[src]) map[src] = {};
        map[src][section.key] = (map[src][section.key] || 0) + 1;
      });
    });
    if (structure.length) {
      structure.forEach((n: any) => {
        const src = getSource(n?.sourceCategory) || 'Layer Structure';
        if (!map[src]) map[src] = {};
        map[src].structure = (map[src].structure || 0) + 1;
      });
    }
    return Object.entries(map)
      .map(([source, counts]) => ({
        source,
        counts,
        total: Object.values(counts).reduce((a, b) => a + b, 0),
      }))
      .sort((a, b) => b.total - a.total);
  }, [sectionStats, structure]);

  const totalTokens = sectionStats.reduce(
    (sum, s) => sum + s.kindCounts.styles + s.kindCounts.variables + s.kindCounts.tokens,
    0
  );
  const totalStyles = sectionStats.reduce((s, x) => s + x.kindCounts.styles, 0);
  const totalVars = sectionStats.reduce((s, x) => s + x.kindCounts.variables, 0);
  const totalRaw = sectionStats.reduce((s, x) => s + x.kindCounts.tokens, 0);

  /* -- aliases coverage -- */
  const aliasStats = useMemo(() => {
    if (!aliases) return null;
    const groups = Object.entries(aliases).map(([group, entries]) => {
      const total = Object.keys(entries).length;
      const mapped = Object.values(entries).filter(Boolean).length;
      return { group, total, mapped };
    });
    return groups;
  }, [aliases]);

  const maxSection = Math.max(1, ...sectionStats.map((s) => s.items.length));

  return (
    <div
      style={{
        padding: '2rem',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif',
        backgroundColor: '#fafcfd',
        minHeight: '100vh',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', color: '#111', margin: 0 }}>Extracted Data</h1>
          <p style={{ color: '#666', marginTop: 6, lineHeight: 1.5, maxWidth: 820 }}>
            Audit view of everything pulled from Figma on the last sync. Use this page to see
            what the plugin <em>found</em>, how it was classified, and how much of it has been
            promoted into the Universal Semantic Model that the codebase consumes.
          </p>
        </div>

        {/* Summary cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <StatCard label="Total tokens extracted" value={totalTokens} accent="#4f46e5" />
          <StatCard label="Figma Styles" value={totalStyles} accent="#0e7490" />
          <StatCard label="Variables / Size tokens" value={totalVars} accent="#4338ca" />
          <StatCard label="Raw values (from layers)" value={totalRaw} accent="#6d28d9" />
          <StatCard label="Layer frames" value={structure.length} accent="#334155" />
          {aliasStats && (
            <StatCard
              label="Semantic roles mapped"
              value={aliasStats.reduce((s, g) => s + g.mapped, 0)}
              suffix={` / ${aliasStats.reduce((s, g) => s + g.total, 0)}`}
              accent="#92400e"
            />
          )}
        </div>

        {/* Per-section overview */}
        <SectionHeader
          title="By data kind"
          subtitle="Each category extracted from Figma, with styles / variables / raw split."
        />
        <div style={{ ...card, overflow: 'hidden', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: '#f8fafc', textAlign: 'left', color: '#475569' }}>
                <th style={th}>Section</th>
                <th style={{ ...th, width: 120 }}>Count</th>
                <th style={{ ...th, width: 260 }}>Distribution</th>
                <th style={{ ...th, width: 260 }}>Kind split</th>
                <th style={th}>Sample names</th>
              </tr>
            </thead>
            <tbody>
              {sectionStats.map(({ section, items, kindCounts }) => {
                const sampleNames = items
                  .slice(0, 3)
                  .map((i) => i.name)
                  .filter(Boolean);
                const extra = items.length - sampleNames.length;
                const open = expanded[section.key];
                return (
                  <React.Fragment key={section.key}>
                    <tr
                      style={{ borderTop: '1px solid #f1f5f9', cursor: 'pointer' }}
                      onClick={() => toggle(section.key)}
                    >
                      <td style={td}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span
                            style={{
                              transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
                              transition: 'transform 120ms',
                              color: '#94a3b8',
                              fontSize: 10,
                            }}
                          >
                            ▶
                          </span>
                          <div>
                            <div style={{ fontWeight: 600, color: '#111' }}>{section.label}</div>
                            <div style={{ fontSize: 11, color: '#94a3b8' }}>{section.description}</div>
                          </div>
                        </div>
                      </td>
                      <td style={td}>
                        <span style={{ fontFamily: 'monospace', fontSize: 13, color: '#111' }}>
                          {items.length}
                        </span>
                      </td>
                      <td style={td}>
                        <Bar value={items.length} max={maxSection} color="#4f46e5" />
                      </td>
                      <td style={td}>
                        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                          {kindCounts.styles > 0 && (
                            <span style={pill(KIND_STYLES.styles.bg, KIND_STYLES.styles.fg)}>
                              {kindCounts.styles} styles
                            </span>
                          )}
                          {kindCounts.variables > 0 && (
                            <span
                              style={pill(KIND_STYLES.variables.bg, KIND_STYLES.variables.fg)}
                            >
                              {kindCounts.variables} variables
                            </span>
                          )}
                          {kindCounts.tokens > 0 && (
                            <span style={pill(KIND_STYLES.tokens.bg, KIND_STYLES.tokens.fg)}>
                              {kindCounts.tokens} raw
                            </span>
                          )}
                          {items.length === 0 && (
                            <span style={{ color: '#cbd5e1', fontSize: 11 }}>— empty —</span>
                          )}
                        </div>
                      </td>
                      <td style={td}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                          {items.slice(0, 3).map((it, i) => (
                            <span
                              key={i}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '2px 6px',
                                background: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                borderRadius: 4,
                                fontSize: 11,
                                color: '#334155',
                                maxWidth: 220,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                              }}
                              title={it.name}
                            >
                              {section.renderPreview?.(it)}
                              <span
                                style={{
                                  fontFamily: 'monospace',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                }}
                              >
                                {it.name}
                              </span>
                            </span>
                          ))}
                          {extra > 0 && (
                            <span style={{ fontSize: 11, color: '#64748b' }}>+{extra} more</span>
                          )}
                        </div>
                      </td>
                    </tr>
                    {open && (
                      <tr style={{ background: '#fafbfc' }}>
                        <td colSpan={5} style={{ padding: 0 }}>
                          <ExpandedSection section={section} items={items} />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Per Figma source file */}
        <SectionHeader
          title="By Figma source"
          subtitle="First segment of each token's Figma path → treated as the source file / page."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          {bySource.map(({ source, counts, total }) => (
            <div key={source} style={{ ...card, padding: '1rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 10,
                }}
              >
                <div style={{ fontWeight: 700, color: '#111', fontSize: 14 }}>{source}</div>
                <span style={pill('#eef2ff', '#3730a3')}>{total} items</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {TOKEN_SECTIONS.map((s) => {
                  const n = counts[s.key];
                  if (!n) return null;
                  return (
                    <span
                      key={s.key}
                      style={{
                        fontSize: 11,
                        padding: '2px 8px',
                        background: '#f1f5f9',
                        borderRadius: 4,
                        color: '#334155',
                      }}
                    >
                      {s.label}: <strong>{n}</strong>
                    </span>
                  );
                })}
                {counts.structure && (
                  <span
                    style={{
                      fontSize: 11,
                      padding: '2px 8px',
                      background: '#f1f5f9',
                      borderRadius: 4,
                      color: '#334155',
                    }}
                  >
                    Frames: <strong>{counts.structure}</strong>
                  </span>
                )}
              </div>
            </div>
          ))}
          {bySource.length === 0 && (
            <div style={{ color: '#94a3b8', fontSize: 13 }}>
              No source categories detected yet — sync from the plugin to populate this view.
            </div>
          )}
        </div>

        {/* AI Semantic Model coverage */}
        {aliasStats && (
          <>
            <SectionHeader
              title="AI semantic model"
              subtitle="How much of the extracted data has been promoted to universal roles the code consumes."
            />
            <div style={{ ...card, padding: '1rem 1.25rem', marginBottom: '2.5rem' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1rem',
                }}
              >
                {aliasStats.map(({ group, mapped, total }) => (
                  <div key={group}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: '#64748b',
                          fontWeight: 600,
                        }}
                      >
                        {group}
                      </span>
                      <span style={{ fontSize: 12, fontFamily: 'monospace', color: '#111' }}>
                        {mapped}/{total}
                      </span>
                    </div>
                    <Bar
                      value={mapped}
                      max={total}
                      color={mapped === total ? '#16a34a' : mapped > 0 ? '#f59e0b' : '#ef4444'}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Layer structure */}
        {structure.length > 0 && (
          <>
            <SectionHeader
              title="Layer structure"
              subtitle="Top-level frames captured from Figma. Full tree lives in tokens.json → structure."
            />
            <div style={{ ...card, padding: '1rem 1.25rem', marginBottom: '2.5rem' }}>
              <div style={{ fontSize: 13, color: '#475569', marginBottom: 8 }}>
                <strong>{structure.length}</strong> root frames captured.
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {structure.slice(0, 20).map((n: any) => (
                  <span
                    key={n.id}
                    style={{
                      fontSize: 11,
                      padding: '2px 8px',
                      background: '#f1f5f9',
                      borderRadius: 4,
                      color: '#334155',
                      fontFamily: 'monospace',
                    }}
                    title={`${n.type} · ${n.width}×${n.height}`}
                  >
                    {n.name}
                  </span>
                ))}
                {structure.length > 20 && (
                  <span style={{ fontSize: 11, color: '#94a3b8' }}>
                    +{structure.length - 20} more
                  </span>
                )}
              </div>
            </div>
          </>
        )}

        {/* Legend */}
        <div
          style={{
            ...card,
            padding: '1rem 1.25rem',
            fontSize: 12,
            color: '#475569',
            lineHeight: 1.6,
          }}
        >
          <div style={{ fontWeight: 700, color: '#111', marginBottom: 6 }}>Legend</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <span>
              <KindPill kind="styles" /> — harvested from a Figma <em>Style</em>.
            </span>
            <span>
              <KindPill kind="variables" /> — harvested from a Figma <em>Variable</em> or size
              token library.
            </span>
            <span>
              <KindPill kind="tokens" /> — raw value read off a layer (not yet formalised in
              Figma).
            </span>
            <span>
              <KindPill kind="aliases" /> — role assigned by the AI semantic mapper.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Sub-components                                                      */
/* ------------------------------------------------------------------ */

const StatCard: React.FC<{ label: string; value: number; accent: string; suffix?: string }> = ({
  label,
  value,
  accent,
  suffix,
}) => (
  <div style={{ ...card, padding: '1rem 1.25rem' }}>
    <div
      style={{
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: '#64748b',
        fontWeight: 600,
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontSize: '1.75rem',
        fontWeight: 700,
        color: accent,
        marginTop: 4,
        lineHeight: 1.1,
      }}
    >
      {value.toLocaleString()}
      {suffix && <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{suffix}</span>}
    </div>
  </div>
);

const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div style={{ margin: '0 0 1rem' }}>
    <h2
      style={{
        fontSize: 13,
        color: '#475569',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        margin: 0,
      }}
    >
      {title}
    </h2>
    {subtitle && (
      <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 4 }}>{subtitle}</div>
    )}
  </div>
);

const ExpandedSection: React.FC<{ section: SectionDef; items: AnyToken[] }> = ({
  section,
  items,
}) => {
  const grouped = useMemo(() => {
    const g: Record<string, AnyToken[]> = {};
    items.forEach((i) => {
      const src = getSource(i.category);
      if (!g[src]) g[src] = [];
      g[src].push(i);
    });
    return Object.entries(g).sort((a, b) => b[1].length - a[1].length);
  }, [items]);

  if (items.length === 0) {
    return (
      <div style={{ padding: '1rem 1.5rem', color: '#94a3b8', fontSize: 12 }}>
        Nothing extracted for this section.
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem 1.5rem 1.25rem' }}>
      {grouped.map(([source, rows]) => (
        <div key={source} style={{ marginBottom: '1rem' }}>
          <div
            style={{
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#64748b',
              marginBottom: 6,
              fontWeight: 700,
            }}
          >
            {source}{' '}
            <span style={{ color: '#cbd5e1', fontWeight: 500 }}>({rows.length})</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {rows.map((it, i) => {
              const kind = classifyKind(section.key, it);
              const ks = KIND_STYLES[kind];
              return (
                <span
                  key={i}
                  title={it.category || ''}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '3px 8px',
                    background: '#fff',
                    border: `1px solid ${ks.bg}`,
                    borderRadius: 4,
                    fontSize: 11,
                    color: '#334155',
                    gap: 6,
                  }}
                >
                  {section.renderPreview?.(it)}
                  <span style={{ fontFamily: 'monospace' }}>{it.name}</span>
                  <span
                    style={{
                      background: ks.bg,
                      color: ks.fg,
                      padding: '1px 6px',
                      borderRadius: 3,
                      fontSize: 10,
                      fontWeight: 600,
                    }}
                  >
                    {ks.label}
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

const th: React.CSSProperties = {
  padding: '10px 14px',
  fontWeight: 600,
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  borderBottom: '1px solid #e2e8f0',
};

const td: React.CSSProperties = {
  padding: '12px 14px',
  verticalAlign: 'top',
};
