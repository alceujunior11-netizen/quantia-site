import React from 'react';

export function Eyebrow({ children }) {
  return (
    <div style={{
      fontSize: '11px',
      letterSpacing: '0.12em',
      color: 'var(--accent)',
      fontWeight: 500,
      textTransform: 'uppercase',
      marginBottom: '12px',
    }}>
      {children}
    </div>
  );
}

export function SectionTitle({ children, size = 34 }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-serif)',
      fontSize: `${size}px`,
      fontWeight: 400,
      lineHeight: 1.2,
      marginBottom: '10px',
      color: 'var(--text)',
    }}>
      {children}
    </h2>
  );
}

export function SectionSub({ children, maxWidth = 520 }) {
  return (
    <p style={{
      fontSize: '15px',
      color: 'var(--text-muted)',
      maxWidth: `${maxWidth}px`,
      marginBottom: '40px',
      lineHeight: 1.65,
    }}>
      {children}
    </p>
  );
}

export function Section({ children, style }) {
  return (
    <section style={{
      padding: '64px 32px',
      ...style,
    }}>
      {children}
    </section>
  );
}

export function Card({ children, style, featured = false }) {
  return (
    <div style={{
      padding: '20px',
      border: featured
        ? '1px solid rgba(0,200,83,0.35)'
        : '0.5px solid var(--border)',
      borderRadius: '10px',
      background: featured ? 'var(--accent-glow)' : 'var(--bg-surface)',
      transition: 'background 0.25s ease, border-color 0.25s ease',
      ...style,
    }}>
      {children}
    </div>
  );
}

export function BtnPrimary({ children, style, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '11px 24px',
        background: 'var(--accent)',
        color: '#000',
        border: 'none',
        borderRadius: '10px',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        transition: 'opacity 0.2s',
        ...style,
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
    >
      {children}
    </button>
  );
}

export function BtnOutline({ children, style, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '11px 24px',
        background: 'transparent',
        color: 'var(--text-muted)',
        border: '0.5px solid var(--border-strong)',
        borderRadius: '10px',
        fontSize: '14px',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        transition: 'background 0.2s, color 0.2s',
        ...style,
      }}
    >
      {children}
    </button>
  );
}
