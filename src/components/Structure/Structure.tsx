import React, { useMemo, useState } from 'react';
import tokens from '../../design-tokens/tokens.json';

interface NodeData {
  id: string;
  name?: string;
  type: string;
  width?: number;
  height?: number;
  children?: NodeData[];
  fills?: Array<{ type: string; color?: string }>;
  characters?: string;
  fontSize?: number;
  fontFamily?: string;
  componentId?: string;
  mainComponentId?: string;
  cornerRadius?: number | string;
}

const nodeColor = (type: string): string => {
  switch (type) {
    case 'FRAME':        return '#3b82f6';
    case 'COMPONENT':    return '#8b5cf6';
    case 'COMPONENT_SET': return '#7c3aed';
    case 'INSTANCE':     return '#ec4899';
    case 'TEXT':         return '#10b981';
    case 'RECTANGLE':    return '#f59e0b';
    case 'ELLIPSE':      return '#ef4444';
    case 'VECTOR':       return '#6366f1';
    case 'GROUP':        return '#64748b';
    default:             return '#9ca3af';
  }
};

const Tree = ({ node, depth, expandedPaths, togglePath }: {
  node: NodeData;
  depth: number;
  expandedPaths: Set<string>;
  togglePath: (id: string) => void;
}) => {
  const hasChildren = !!node.children && node.children.length > 0;
  const isOpen = expandedPaths.has(node.id);
  const label = node.name || `(${node.type})`;
  const color = nodeColor(node.type);

  return (
    <div style={{ marginLeft: depth === 0 ? 0 : '1rem' }}>
      <div
        onClick={() => hasChildren && togglePath(node.id)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.25rem 0.5rem',
          borderRadius: '4px',
          cursor: hasChildren ? 'pointer' : 'default',
          fontSize: '0.85rem',
          userSelect: 'none',
        }}
        onMouseEnter={(e) => { (e.currentTarget.style.background = '#f9fafb'); }}
        onMouseLeave={(e) => { (e.currentTarget.style.background = 'transparent'); }}
      >
        {hasChildren ? (
          <span style={{ width: 12, color: '#888', display: 'inline-block' }}>{isOpen ? '▾' : '▸'}</span>
        ) : (
          <span style={{ width: 12, display: 'inline-block' }} />
        )}
        <span style={{
          fontSize: '0.65rem',
          padding: '0.1rem 0.4rem',
          borderRadius: '4px',
          background: color,
          color: '#ffffff',
          fontFamily: 'monospace',
          minWidth: '55px',
          textAlign: 'center',
        }}>
          {node.type}
        </span>
        <span style={{ fontWeight: node.type === 'COMPONENT' || node.type === 'COMPONENT_SET' ? 600 : 400 }}>
          {label}
        </span>
        {node.width && node.height && (
          <span style={{ color: '#9ca3af', fontSize: '0.7rem', fontFamily: 'monospace' }}>
            {Math.round(node.width)}×{Math.round(node.height)}
          </span>
        )}
        {node.characters && (
          <span style={{ color: '#4b5563', fontSize: '0.7rem', fontStyle: 'italic' }}>
            "{node.characters.length > 40 ? node.characters.slice(0, 40) + '…' : node.characters}"
          </span>
        )}
      </div>
      {hasChildren && isOpen && (
        <div style={{ borderLeft: '1px dashed #e5e7eb', marginLeft: '1.25rem' }}>
          {node.children!.map((c) => (
            <Tree key={c.id} node={c} depth={depth + 1} expandedPaths={expandedPaths} togglePath={togglePath} />
          ))}
        </div>
      )}
    </div>
  );
};

export const Structure = () => {
  const roots: NodeData[] = useMemo(() => (tokens as any).structure || [], []);
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(() => {
    return new Set(roots.slice(0, 5).map((r) => r.id));
  });

  const togglePath = (id: string) => {
    setExpandedPaths((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => {
    const all = new Set<string>();
    const walk = (n: NodeData) => {
      all.add(n.id);
      n.children?.forEach(walk);
    };
    roots.forEach(walk);
    setExpandedPaths(all);
  };

  const collapseAll = () => setExpandedPaths(new Set());

  const countNodes = (n: NodeData): number =>
    1 + (n.children?.reduce((acc, c) => acc + countNodes(c), 0) ?? 0);
  const totalNodes = roots.reduce((acc, r) => acc + countNodes(r), 0);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '0.25rem' }}>Layer Structure</h1>
      <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        {roots.length === 0
          ? 'No layer structure extracted. Configure pages in the Figma plugin setup to capture layer trees on publish.'
          : `${roots.length} top-level ${roots.length === 1 ? 'frame' : 'frames'} · ${totalNodes} total nodes captured from Figma. Tap a frame to expand.`}
      </p>

      {roots.length > 0 && (
        <>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <button onClick={expandAll} style={btn}>Expand all</button>
            <button onClick={collapseAll} style={btn}>Collapse all</button>
          </div>
          <div style={{
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            padding: '1rem',
            background: '#ffffff',
            maxHeight: '70vh',
            overflow: 'auto',
          }}>
            {roots.map((r) => (
              <Tree key={r.id} node={r} depth={0} expandedPaths={expandedPaths} togglePath={togglePath} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const btn: React.CSSProperties = {
  padding: '0.35rem 0.75rem',
  fontSize: '0.8rem',
  borderRadius: '6px',
  border: '1px solid #e5e7eb',
  background: '#ffffff',
  cursor: 'pointer',
};
