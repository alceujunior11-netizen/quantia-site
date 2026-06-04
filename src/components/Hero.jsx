import React, { useState, useEffect } from 'react';

const s = {
  hero: {
    padding: '80px 32px 56px',
  },
  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    padding: '4px 12px',
    border: '0.5px solid rgba(0,200,83,0.35)',
    borderRadius: '20px',
    background: 'var(--accent-dim)',
    fontSize: '11px',
    color: 'var(--accent)',
    letterSpacing: '0.07em',
    marginBottom: '28px',
    fontWeight: 500,
  },
  dotLive: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'var(--accent)',
    animation: 'pulse 2s infinite',
  },
  h1: {
    fontFamily: 'var(--font-serif)',
    fontSize: '52px',
    lineHeight: 1.1,
    fontWeight: 400,
    color: 'var(--text)',
    maxWidth: '580px',
    marginBottom: '20px',
  },
  sub: {
    fontSize: '16px',
    color: 'var(--text-muted)',
    maxWidth: '500px',
    lineHeight: 1.65,
    marginBottom: '36px',
  },
  ctaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '48px',
    flexWrap: 'wrap',
  },
  btnCta: {
    padding: '12px 26px',
    background: 'var(--accent)',
    color: '#000',
    border: 'none',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    transition: 'opacity 0.2s',
  },
  btnOutline: {
    padding: '12px 26px',
    background: 'transparent',
    color: 'var(--text-muted)',
    border: '0.5px solid var(--border-strong)',
    borderRadius: '10px',
    fontSize: '14px',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    transition: 'background 0.2s, color 0.2s',
  },
  statsRow: {
    display: 'flex',
    gap: '40px',
    paddingTop: '32px',
    borderTop: '0.5px solid var(--border)',
    flexWrap: 'wrap',
  },
  statVal: {
    fontFamily: 'var(--font-serif)',
    fontSize: '26px',
    color: 'var(--text)',
    lineHeight: 1,
    marginBottom: '4px',
  },
  statLabel: {
    fontSize: '12px',
    color: 'var(--text-dim)',
    letterSpacing: '0.02em',
  },
  terminal: {
    margin: '0 32px',
    border: '0.5px solid var(--border-strong)',
    borderRadius: '14px',
    background: 'var(--bg-surface)',
    overflow: 'hidden',
    transition: 'background 0.25s ease, border-color 0.25s ease',
  },
  termBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 18px',
    borderBottom: '0.5px solid var(--border)',
    background: 'var(--bg-card)',
  },
  termDots: {
    display: 'flex',
    gap: '6px',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  },
  termTitle: {
    fontSize: '11px',
    color: 'var(--text-dim)',
    letterSpacing: '0.07em',
  },
  termLive: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '10px',
    color: 'var(--accent)',
    letterSpacing: '0.08em',
    fontWeight: 500,
  },
  termBody: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  tPanel: {
    padding: '18px',
    borderRight: '0.5px solid var(--border)',
  },
  tLabel: {
    fontSize: '10px',
    color: 'var(--text-dim)',
    letterSpacing: '0.09em',
    textTransform: 'uppercase',
    marginBottom: '10px',
  },
  tScore: {
    fontFamily: 'var(--font-serif)',
    fontSize: '40px',
    color: 'var(--accent)',
    lineHeight: 1,
    marginBottom: '4px',
  },
  tDelta: {
    fontSize: '12px',
    color: 'var(--accent)',
    opacity: 0.75,
    marginBottom: '16px',
  },
  allocBar: {
    display: 'flex',
    height: '6px',
    borderRadius: '3px',
    overflow: 'hidden',
    gap: '1px',
    marginBottom: '12px',
  },
  allocLegend: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '5px',
  },
  allocItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '11px',
    color: 'var(--text-muted)',
  },
  allocDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    flexShrink: 0,
  },
  allocPct: {
    marginLeft: 'auto',
    fontSize: '11px',
    color: 'var(--text)',
    fontWeight: 500,
  },
  perfRow: {
    display: 'flex',
    gap: '8px',
    marginBottom: '8px',
  },
  perfMetric: {
    flex: 1,
    background: 'var(--bg-hover)',
    borderRadius: '6px',
    padding: '8px 10px',
    border: '0.5px solid var(--border)',
  },
  pmVal: {
    fontSize: '16px',
    fontWeight: 500,
    marginBottom: '2px',
  },
  pmLabel: {
    fontSize: '10px',
    color: 'var(--text-dim)',
    letterSpacing: '0.07em',
  },
  rebalItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '7px 0',
    borderBottom: '0.5px solid var(--border)',
    fontSize: '13px',
  },
  rebalTicker: {
    color: 'var(--text)',
    fontWeight: 500,
  },
  applyBtn: {
    width: '100%',
    marginTop: '12px',
    padding: '9px',
    background: 'var(--accent)',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
  },
};

const keyframes = `
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
`;

const allocations = [
  { label: 'Ações', pct: '42%', color: '#00C853', flex: 42 },
  { label: 'RF', pct: '28%', color: '#1E88E5', flex: 28 },
  { label: 'Cripto', pct: '8%', color: '#9C27B0', flex: 8 },
  { label: 'Internac.', pct: '14%', color: '#FF6D00', flex: 14 },
  { label: 'Caixa', pct: '8%', color: '#546E7A', flex: 8 },
];

const rebalItems = [
  { ticker: 'ITUB4', delta: '+1.8%', pos: true },
  { ticker: 'PETR4', delta: '−2.4%', pos: false },
  { ticker: 'WEGE3', delta: '+0.9%', pos: true },
  { ticker: 'VALE3', delta: '−0.3%', pos: false },
];

const stats = [
  { val: 'R$ 2.4B+', label: 'Monitorados' },
  { val: '+38%', label: 'Sharpe médio' },
  { val: '14.000+', label: 'Investidores' },
  { val: '487', label: 'Ativos cobertos' },
];

export default function Hero() {
  const [score, setScore] = useState(87.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore(prev => {
        const delta = (Math.random() - 0.5) * 0.4;
        return Math.round((prev + delta) * 10) / 10;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      <section style={s.hero}>
        <div style={s.heroBadge}>
          <div style={s.dotLive} />
          PLATAFORMA INSTITUCIONAL · CVM COMPLIANT
        </div>
        <h1 style={s.h1}>
          Seu <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>advisor quantitativo</em> institucional.
        </h1>
        <p style={s.sub}>
          Otimize carteiras com inteligência artificial, modelos proprietários de Markowitz e rebalanceamento adaptativo — a mesma toolbox usada por gestoras de wealth.
        </p>
        <div style={s.ctaRow}>
          <button style={s.btnCta} onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}>
            Começar teste grátis — 14 dias
          </button>
          <button style={s.btnOutline} onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}>
            Ver demonstração →
          </button>
        </div>
        <div style={s.statsRow}>
          {stats.map(st => (
            <div key={st.label}>
              <div style={s.statVal}>{st.val}</div>
              <div style={s.statLabel}>{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Terminal Preview */}
      <div style={s.terminal}>
        <div style={s.termBar}>
          <div style={s.termDots}>
            <div style={{ ...s.dot, background: '#FF5F56' }} />
            <div style={{ ...s.dot, background: '#FFBD2E' }} />
            <div style={{ ...s.dot, background: '#27C93F' }} />
          </div>
          <div style={s.termTitle}>QUANTIA / TERMINAL — CARTEIRA INTELIGENTE</div>
          <div style={s.termLive}>
            <div style={s.dotLive} />
            LIVE
          </div>
        </div>

        <div style={s.termBody}>
          {/* Panel 1 — Score + Allocation */}
          <div style={s.tPanel}>
            <div style={s.tLabel}>Score QuantIA</div>
            <div style={{ ...s.tScore, transition: 'color 0.3s' }}>{score}</div>
            <div style={s.tDelta}>+{(score - 54.2).toFixed(1)} vs atual</div>

            <div style={{ fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.07em', marginBottom: '8px' }}>
              ALOCAÇÃO ALVO
            </div>
            <div style={s.allocBar}>
              {allocations.map(a => (
                <div key={a.label} style={{ background: a.color, flex: a.flex }} />
              ))}
            </div>
            <div style={s.allocLegend}>
              {allocations.map(a => (
                <div key={a.label} style={s.allocItem}>
                  <div style={{ ...s.allocDot, background: a.color }} />
                  {a.label}
                  <span style={s.allocPct}>{a.pct}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 2 — Performance */}
          <div style={s.tPanel}>
            <div style={s.tLabel}>Performance 12M</div>
            <div style={s.perfRow}>
              <div style={s.perfMetric}>
                <div style={{ ...s.pmVal, color: 'var(--accent)' }}>+34.7%</div>
                <div style={s.pmLabel}>RETORNO</div>
              </div>
              <div style={s.perfMetric}>
                <div style={{ ...s.pmVal, color: 'var(--text)' }}>11.2%</div>
                <div style={s.pmLabel}>VOL</div>
              </div>
            </div>
            <div style={s.perfRow}>
              <div style={s.perfMetric}>
                <div style={{ ...s.pmVal, color: 'var(--red)' }}>−4.8%</div>
                <div style={s.pmLabel}>MAX DD</div>
              </div>
              <div style={s.perfMetric}>
                <div style={{ ...s.pmVal, color: 'var(--accent)' }}>+18.2%</div>
                <div style={s.pmLabel}>ALPHA</div>
              </div>
            </div>
            <div style={{ marginTop: '10px', fontSize: '11px', color: 'var(--text-dim)' }}>
              Sharpe 1.84 · Risco MOD. · Beta 0.82
            </div>
          </div>

          {/* Panel 3 — Rebalancing */}
          <div style={{ ...s.tPanel, borderRight: 'none' }}>
            <div style={s.tLabel}>Rebalanceamento IA — 3 ações</div>
            {rebalItems.map(item => (
              <div key={item.ticker} style={s.rebalItem}>
                <span style={s.rebalTicker}>{item.ticker}</span>
                <span style={{ color: item.pos ? 'var(--accent)' : 'var(--red)', fontWeight: 500 }}>
                  {item.delta}
                </span>
              </div>
            ))}
            <button style={s.applyBtn} onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}>
              Aplicar rebalanceamento →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
