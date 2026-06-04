import React from 'react';
import { Eyebrow, SectionTitle, Section } from './ui';

const factors = [
  { name: 'Valuation', desc: 'P/L, EV/EBITDA, P/B normalizados por setor', pct: 18 },
  { name: 'Qualidade', desc: 'ROIC, ROE, margem operacional, dívida líquida', pct: 16 },
  { name: 'Crescimento', desc: 'CAGR receita, lucro, FCF — janela 5y', pct: 14 },
  { name: 'Momentum', desc: '12-1 momentum, força relativa setorial', pct: 12 },
  { name: 'Volatilidade', desc: 'Vol realizada e implícita, beta condicional', pct: 11 },
  { name: 'Correlação', desc: 'Correlação com benchmark e regime change', pct: 10 },
  { name: 'Dividendos', desc: 'DY sustentável, payout, histórico de cortes', pct: 10 },
  { name: 'Liquidez', desc: 'ADTV, free float, impacto de mercado', pct: 9 },
];

const metrics = [
  { val: '487', label: 'Ativos cobertos' },
  { val: 'Intraday', label: 'Reavaliação' },
  { val: '25 anos', label: 'Dados históricos' },
  { val: '<280ms', label: 'Latência score' },
];

const methodology = [
  'Normalização cross-sectional por setor e capitalização',
  'Shrinkage de Ledoit-Wolf na matriz de covariância',
  'Otimização Markowitz com restrições de liquidez e turnover',
  'Validação walk-forward em janela de 25 anos',
  'Detecção de regime via Hidden Markov Model',
];

export default function EngineSection() {
  return (
    <Section>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
        {/* Left — copy */}
        <div>
          <Eyebrow>Engine multifatorial</Eyebrow>
          <SectionTitle size={30}>Oito fatores.<br />Dinâmicos por regime.</SectionTitle>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-muted)',
            lineHeight: 1.65,
            marginBottom: '28px',
          }}>
            Normalização cross-sectional por setor, Shrinkage de Ledoit-Wolf, validação walk-forward em 25 anos. Reavaliação intraday, recalibragem semanal.
          </p>

          {/* Methodology */}
          <div style={{
            padding: '18px',
            background: 'var(--bg-surface)',
            border: '0.5px solid var(--border)',
            borderRadius: '10px',
            marginBottom: '20px',
          }}>
            <div style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: '12px', fontWeight: 500 }}>
              METODOLOGIA
            </div>
            {methodology.map((m, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '10px',
                fontSize: '12px',
                color: 'var(--text-muted)',
                marginBottom: '7px',
                lineHeight: 1.5,
              }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>·</span>
                {m}
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
          }}>
            {metrics.map(m => (
              <div key={m.label} style={{
                padding: '14px',
                background: 'var(--bg-surface)',
                border: '0.5px solid var(--border)',
                borderRadius: '8px',
              }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  color: 'var(--accent)',
                  marginBottom: '4px',
                }}>
                  {m.val}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '0.04em' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — factor bars */}
        <div>
          <div style={{
            padding: '20px',
            background: 'var(--bg-surface)',
            border: '0.5px solid var(--border)',
            borderRadius: '10px',
          }}>
            <div style={{ fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '0.08em', marginBottom: '20px' }}>
              FATORES E PESOS DINÂMICOS · REGIME: NEUTRO
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {factors.map(f => (
                <div key={f.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>
                      {f.name}
                    </span>
                    <span style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 500 }}>
                      {f.pct}%
                    </span>
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)', marginBottom: '6px', lineHeight: 1.4 }}>
                    {f.desc}
                  </div>
                  <div style={{
                    height: '3px',
                    borderRadius: '2px',
                    background: 'var(--border-strong)',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${(f.pct / 18) * 100}%`,
                      background: 'var(--accent)',
                      borderRadius: '2px',
                      opacity: 0.75,
                      transition: 'width 1s ease',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
