import React, { useEffect, useMemo, useState } from 'react';
// Vite `?raw` import — ships the actual generated tokens.css text to the
// browser at build time so Storybook can show the file verbatim without a
// network fetch. Every Figma sync rewrites this file, so what you see here
// always matches what ships in the design-system package.
// @ts-expect-error — Vite's `?raw` suffix isn't in TS lib, module type is string
import tokensCssSource from '../../design-tokens/tokens.css?raw';

/* ------------------------------------------------------------------ */
/* Parsing                                                             */
/* ------------------------------------------------------------------ */

interface VarEntry {
  /** Full CSS custom-property name, e.g. "--color-primary-button" */
  name: string;
  /** Raw value as written in the CSS (may be `var(--…)` or a primitive). */
  value: string;
  /** Family prefix extracted from the name — color / radius / gap / … */
  family: string;
  /** The `:root` or selector block the variable was declared in. */
  selector: string;
}

const FAMILY_ORDER = [
  'color',
  'font',
  'radius',
  'shadow',
  'gap',
  'size',
  'opacity',
  'blur',
  'gradient',
  'border',
  'elevation',
  'icon',
  'grid',
  'other',
] as const;

type Family = typeof FAMILY_ORDER[number];

const FAMILY_LABELS: Record<Family, string> = {
  color: 'Colors',
  font: 'Typography',
  radius: 'Radius',
  shadow: 'Shadows',
  gap: 'Gaps / Spacing',
  size: 'Sizes',
  opacity: 'Opacity',
  blur: 'Blurs',
  gradient: 'Gradients',
  border: 'Borders',
  elevation: 'Elevations',
  icon: 'Icons',
  grid: 'Layout Grids',
  other: 'Other',
};

/** Tokens ending in `-rgb` are companion values for rgba() math — skip them
 *  in the overview, they clutter the list without adding information the user
 *  can't derive from the primary color var. They still appear in the raw source.
 */
const isRgbCompanion = (name: string) => /-rgb$/.test(name);

function classifyFamily(name: string): Family {
  // name looks like "--color-primary-button" / "--font-body-size" / ...
  const m = /^--([a-z]+)-/i.exec(name);
  const prefix = (m?.[1] ?? '').toLowerCase();
  if ((FAMILY_ORDER as readonly string[]).includes(prefix)) return prefix as Family;
  return 'other';
}

/** Parse every `--var: value;` declaration inside every `{ … }` block of the
 *  generated CSS. We keep the owning selector so users can see which block a
 *  variable came from (`:root`, `[data-theme='dark']`, etc.). */
function parseCssVars(source: string): VarEntry[] {
  const entries: VarEntry[] = [];
  const blockRe = /([^{}]+)\{([^{}]*)\}/g;
  let m: RegExpExecArray | null;
  while ((m = blockRe.exec(source)) !== null) {
    const selector = m[1].trim();
    const body = m[2];
    const declRe = /(--[a-z0-9-]+)\s*:\s*([^;]+);/gi;
    let d: RegExpExecArray | null;
    while ((d = declRe.exec(body)) !== null) {
      const name = d[1].trim();
      const value = d[2].trim();
      entries.push({ name, value, family: classifyFamily(name), selector });
    }
  }
  return entries;
}

/* ------------------------------------------------------------------ */
/* Rendering                                                           */
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

/** Resolve a CSS var via the live DOM so the displayed value reflects the
 *  currently selected theme (Storybook's theme toolbar toggles
 *  `data-theme` on `<body>`, which cascades into `:root` overrides). */
function useComputedVar(name: string, themeKey: string): string {
  const [val, setVal] = useState<string>('');
  useEffect(() => {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    setVal(v);
  }, [name, themeKey]);
  return val;
}

const SwatchOrPreview: React.FC<{ entry: VarEntry; resolved: string }> = ({ entry, resolved }) => {
  // Use the variable itself wherever possible so the preview naturally
  // reflects the active theme — cheaper and more accurate than parsing
  // the resolved string.
  const ref = `var(${entry.name})`;
  const common: React.CSSProperties = {
    width: 22,
    height: 22,
    borderRadius: 4,
    border: '1px solid rgba(0,0,0,0.12)',
    flexShrink: 0,
  };

  if (entry.family === 'color') {
    return <span style={{ ...common, backgroundColor: ref }} title={resolved} />;
  }
  if (entry.family === 'gradient') {
    return <span style={{ ...common, background: ref }} title={resolved} />;
  }
  if (entry.family === 'radius') {
    const px = parseFloat(resolved);
    return (
      <span
        style={{
          ...common,
          background: '#eef2ff',
          borderRadius: Math.min(isFinite(px) ? px : 4, 11),
        }}
        title={resolved}
      />
    );
  }
  if (entry.family === 'shadow' || entry.family === 'elevation') {
    return (
      <span
        style={{
          ...common,
          background: '#fff',
          boxShadow: ref,
        }}
        title={resolved}
      />
    );
  }
  if (entry.family === 'border') {
    const weight = parseFloat(resolved);
    return (
      <span
        style={{
          ...common,
          background: '#fff',
          border: `${Math.min(isFinite(weight) ? weight : 1, 4)}px solid #111`,
        }}
        title={resolved}
      />
    );
  }
  if (entry.family === 'opacity') {
    const op = parseFloat(resolved);
    return (
      <span
        style={{
          ...common,
          background: '#111',
          opacity: isFinite(op) ? op : 1,
        }}
        title={resolved}
      />
    );
  }
  if (entry.family === 'blur') {
    return (
      <span
        style={{
          ...common,
          background: 'linear-gradient(135deg, #60a5fa, #a855f7)',
          filter: `blur(${resolved})`,
        }}
        title={resolved}
      />
    );
  }
  return (
    <span
      style={{
        ...common,
        background: '#f1f5f9',
        fontSize: 10,
        color: '#64748b',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'monospace',
      }}
      title={resolved}
    >
      {entry.family.slice(0, 2)}
    </span>
  );
};

const VarRow: React.FC<{ entry: VarEntry; themeKey: string }> = ({ entry, themeKey }) => {
  const resolved = useComputedVar(entry.name, themeKey);
  const isAlias = /^var\(--/.test(entry.value);
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '28px 1fr 1fr 1fr',
        alignItems: 'center',
        gap: 12,
        padding: '8px 12px',
        borderBottom: '1px solid #f1f5f9',
        fontSize: 12,
      }}
    >
      <SwatchOrPreview entry={entry} resolved={resolved} />
      <div style={{ fontFamily: 'monospace', color: '#111', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {entry.name}
      </div>
      <div
        style={{
          fontFamily: 'monospace',
          color: isAlias ? '#4338ca' : '#475569',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
        title={entry.value}
      >
        {entry.value}
      </div>
      <div
        style={{
          fontFamily: 'monospace',
          color: '#94a3b8',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
        title={resolved || '(empty)'}
      >
        {resolved || '—'}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export const TokensCss: React.FC = () => {
  const source = tokensCssSource as string;

  const entries = useMemo(() => parseCssVars(source), [source]);
  const [query, setQuery] = useState('');
  const [selectedFamily, setSelectedFamily] = useState<'all' | Family>('all');
  const [selectedSelector, setSelectedSelector] = useState<'all' | string>('all');
  const [showSource, setShowSource] = useState(false);
  const [copied, setCopied] = useState(false);

  // Force a re-read of computed values when Storybook's theme toolbar flips
  // `data-theme` on <body>. MutationObserver is the cleanest signal — there
  // is no synthetic event fired by the decorator.
  const [themeKey, setThemeKey] = useState('default');
  useEffect(() => {
    const update = () =>
      setThemeKey(document.body.getAttribute('data-theme') || 'default');
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);

  const selectors = useMemo(() => {
    const s = new Set<string>();
    entries.forEach((e) => s.add(e.selector));
    return Array.from(s);
  }, [entries]);

  const familyCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    entries.forEach((e) => {
      if (isRgbCompanion(e.name)) return;
      counts[e.family] = (counts[e.family] || 0) + 1;
    });
    return counts;
  }, [entries]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((e) => {
      if (isRgbCompanion(e.name)) return false;
      if (selectedFamily !== 'all' && e.family !== selectedFamily) return false;
      if (selectedSelector !== 'all' && e.selector !== selectedSelector) return false;
      if (!q) return true;
      return e.name.toLowerCase().includes(q) || e.value.toLowerCase().includes(q);
    });
  }, [entries, query, selectedFamily, selectedSelector]);

  const byFamily = useMemo(() => {
    const g: Record<string, VarEntry[]> = {};
    filtered.forEach((e) => {
      if (!g[e.family]) g[e.family] = [];
      g[e.family].push(e);
    });
    return (FAMILY_ORDER as readonly string[])
      .filter((f) => g[f]?.length)
      .map((f) => [f, g[f]] as const);
  }, [filtered]);

  const aliasCount = useMemo(
    () => entries.filter((e) => !isRgbCompanion(e.name) && /^var\(--/.test(e.value)).length,
    [entries]
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(source);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked — silent fallback */
    }
  };

  const totalVars = entries.filter((e) => !isRgbCompanion(e.name)).length;

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
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <h1 style={{ fontSize: '2rem', color: '#111', margin: 0 }}>tokens.css</h1>
            <span style={pill('#eef2ff', '#4338ca')}>{totalVars} variables</span>
            {aliasCount > 0 && (
              <span style={pill('#ecfeff', '#0e7490')}>{aliasCount} aliases</span>
            )}
          </div>
          <p style={{ color: '#666', marginTop: 6, lineHeight: 1.5, maxWidth: 820 }}>
            The generated CSS file at{' '}
            <code style={{ background: '#f1f5f9', padding: '1px 6px', borderRadius: 3 }}>
              src/design-tokens/tokens.css
            </code>
            . It is re-written on every Figma sync and imported globally by
            Storybook so every component in this library resolves its{' '}
            <code>var(--…)</code> references against the values shown below.
            Switch the theme in the toolbar to see alias chains cascade through.
          </p>
        </div>

        {/* Family filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
            marginBottom: '1rem',
          }}
        >
          <FilterChip
            active={selectedFamily === 'all'}
            onClick={() => setSelectedFamily('all')}
            label={`All (${totalVars})`}
          />
          {FAMILY_ORDER.map((f) => {
            const n = familyCounts[f] || 0;
            if (!n) return null;
            return (
              <FilterChip
                key={f}
                active={selectedFamily === f}
                onClick={() => setSelectedFamily(f)}
                label={`${FAMILY_LABELS[f]} (${n})`}
              />
            );
          })}
        </div>

        {/* Search + selector filter */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            marginBottom: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search variable name or value…"
            style={{
              flex: '1 1 240px',
              minWidth: 240,
              padding: '8px 12px',
              border: '1px solid #e2e8f0',
              borderRadius: 6,
              fontSize: 13,
              outline: 'none',
            }}
          />
          <select
            value={selectedSelector}
            onChange={(e) => setSelectedSelector(e.target.value)}
            style={{
              padding: '8px 12px',
              border: '1px solid #e2e8f0',
              borderRadius: 6,
              fontSize: 13,
              background: '#fff',
            }}
          >
            <option value="all">All scopes ({selectors.length})</option>
            {selectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => setShowSource((v) => !v)}
            style={{
              padding: '8px 14px',
              border: '1px solid #e2e8f0',
              borderRadius: 6,
              fontSize: 13,
              background: showSource ? '#111' : '#fff',
              color: showSource ? '#fff' : '#111',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            {showSource ? 'Hide raw CSS' : 'View raw CSS'}
          </button>
          <button
            type="button"
            onClick={handleCopy}
            style={{
              padding: '8px 14px',
              border: '1px solid #e2e8f0',
              borderRadius: 6,
              fontSize: 13,
              background: '#fff',
              color: '#111',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            {copied ? 'Copied ✓' : 'Copy file'}
          </button>
        </div>

        {/* Raw source viewer (collapsed by default) */}
        {showSource && (
          <div
            style={{
              ...card,
              marginBottom: '1.5rem',
              padding: 0,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                borderBottom: '1px solid #f1f5f9',
                padding: '8px 14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#f8fafc',
                fontSize: 12,
                color: '#475569',
              }}
            >
              <span style={{ fontFamily: 'monospace' }}>src/design-tokens/tokens.css</span>
              <span>{(source.length / 1024).toFixed(1)} KB</span>
            </div>
            <pre
              style={{
                margin: 0,
                padding: '14px 18px',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                fontSize: 12,
                lineHeight: 1.55,
                color: '#334155',
                background: '#fff',
                maxHeight: 480,
                overflow: 'auto',
                whiteSpace: 'pre',
              }}
            >
              {source}
            </pre>
          </div>
        )}

        {/* Grouped variable listing */}
        {byFamily.length === 0 && (
          <div
            style={{
              ...card,
              padding: '2rem',
              textAlign: 'center',
              color: '#94a3b8',
            }}
          >
            No variables match the current filters.
          </div>
        )}
        {byFamily.map(([family, rows]) => (
          <div key={family} style={{ ...card, marginBottom: '1.5rem', overflow: 'hidden' }}>
            <div
              style={{
                padding: '10px 14px',
                background: '#f8fafc',
                borderBottom: '1px solid #f1f5f9',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ fontWeight: 700, color: '#111', fontSize: 13 }}>
                {FAMILY_LABELS[family as Family]}
              </div>
              <span style={{ fontSize: 11, color: '#64748b' }}>
                {rows.length} variable{rows.length === 1 ? '' : 's'}
              </span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '28px 1fr 1fr 1fr',
                alignItems: 'center',
                gap: 12,
                padding: '8px 12px',
                borderBottom: '1px solid #f1f5f9',
                background: '#fbfcfe',
                fontSize: 11,
                color: '#64748b',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 600,
              }}
            >
              <div />
              <div>Variable</div>
              <div>Declared value</div>
              <div>Resolved (current theme)</div>
            </div>
            {rows.map((entry) => (
              <VarRow key={`${entry.selector}::${entry.name}`} entry={entry} themeKey={themeKey} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const FilterChip: React.FC<{ active: boolean; onClick: () => void; label: string }> = ({
  active,
  onClick,
  label,
}) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      padding: '4px 12px',
      border: '1px solid',
      borderColor: active ? '#111' : '#e2e8f0',
      background: active ? '#111' : '#fff',
      color: active ? '#fff' : '#334155',
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer',
    }}
  >
    {label}
  </button>
);
