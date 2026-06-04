import React from 'react';

const tickers = [
  { name: 'IBOV', val: '129.842', delta: '+0.84%', pos: true },
  { name: 'S&P 500', val: '5.812', delta: '+0.31%', pos: true },
  { name: 'USD/BRL', val: '5.4218', delta: '−0.22%', pos: false },
  { name: 'BTC', val: '98.412', delta: '+1.92%', pos: true },
  { name: 'DI 2025', val: '10.74%', delta: '−0.04', pos: false },
  { name: 'VALE3', val: '62.18', delta: '+0.47%', pos: true },
  { name: 'PETR4', val: '38.92', delta: '−0.18%', pos: false },
  { name: 'ITUB4', val: '33.71', delta: '+0.62%', pos: true },
  { name: 'WEGE3', val: '54.04', delta: '+1.05%', pos: true },
  { name: 'GOLD', val: '2.681', delta: '+0.14%', pos: true },
];

const styles = `
@keyframes ticker-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.ticker-track {
  display: flex;
  animation: ticker-scroll 32s linear infinite;
  width: max-content;
}
.ticker-track:hover {
  animation-play-state: paused;
}
`;

export default function TickerStrip() {
  const items = [...tickers, ...tickers]; // double for seamless loop

  return (
    <>
      <style>{styles}</style>
      <div style={{
        padding: '9px 0',
        borderTop: '0.5px solid var(--border)',
        borderBottom: '0.5px solid var(--border)',
        background: 'var(--ticker-bg)',
        overflow: 'hidden',
        transition: 'background 0.25s ease',
      }}>
        <div className="ticker-track">
          {items.map((t, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0 24px',
              fontSize: '12px',
              whiteSpace: 'nowrap',
              borderRight: '0.5px solid var(--border)',
            }}>
              <span style={{ color: 'var(--text)', fontWeight: 500 }}>{t.name}</span>
              <span style={{ color: 'var(--text-muted)' }}>{t.val}</span>
              <span style={{ color: t.pos ? 'var(--accent)' : 'var(--red)', fontWeight: 500 }}>
                {t.delta}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
