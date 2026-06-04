import React from 'react';
import { Eyebrow, SectionTitle, SectionSub, Section } from './ui';

const rows = [
  { label: 'Sharpe', before: '0.92', after: '1.84 ↑ 100%', afterGood: true },
  { label: 'Volatilidade', before: '18.4%', after: '11.2% ↓ 39%', afterGood: true },
  { label: 'Max drawdown', before: '−14.2%', after: '−4.8% ↓ 66%', afterGood: true },
  { label: 'Ações BR', before: '35%', after: '28%', afterGood: false },
  { label: 'Renda Fixa', before: '22%', after: '22%', afterGood: false },
  { label: 'Internac.', before: '18%', after: '18%', afterGood: false },
  { label: 'Caixa', before: '11%', after: '14%', afterGood: false },
];

const improvements = [
  { val: 'Sharpe ↑ 100%', sub: 'retorno por risco' },
  { val: 'Drawdown ↓ 66%', sub: 'perda máxima' },
  { val: 'Vol ↓ 39%', sub: 'volatilidade' },
];

function CompRow({ label, value, isGood }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '9px 0',
      borderBottom: '0.5px solid var(--border)',
      fontSize: '13px',
    }}>
      <span style={{ color: 'var(--text-muted)' }}>{label}</span>
      <span style={{
        fontWeight: 500,
        color: isGood ? 'var(--accent)' : 'var(--text)',
      }}>
        {value}
      </span>
    </div>
  );
}

export default function SolutionSection() {
  return (
    <Section>
      <Eyebrow>A solução</Eyebrow>
      <SectionTitle>Carteira Inteligente IA.</SectionTitle>
      <SectionSub>
        Score quantitativo proprietário, otimização de Markowitz com restrições reais e rebalanceamento adaptativo — em um único terminal institucional.
      </SectionSub>

      {/* Before/After comparison */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2px',
        border: '0.5px solid var(--border)',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '16px',
      }}>
        {/* Before */}
        <div style={{ padding: '20px', background: 'var(--bg-surface)' }}>
          <div style={{
            display: 'inline-block',
            padding: '3px 9px',
            borderRadius: '4px',
            background: 'var(--bg-hover)',
            color: 'var(--text-dim)',
            fontSize: '10px',
            letterSpacing: '0.06em',
            fontWeight: 500,
            marginBottom: '10px',
            border: '0.5px solid var(--border)',
          }}>
            CARTEIRA ATUAL
          </div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '30px',
            color: 'var(--red)',
            marginBottom: '12px',
          }}>
            Score 54.2
          </div>
          {rows.map(r => (
            <CompRow key={r.label} label={r.label} value={r.before} isGood={false} />
          ))}
        </div>

        {/* After */}
        <div style={{
          padding: '20px',
          background: 'var(--accent-glow)',
          borderLeft: '1px solid rgba(0,200,83,0.25)',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '3px 9px',
            borderRadius: '4px',
            background: 'var(--accent-dim)',
            color: 'var(--accent)',
            fontSize: '10px',
            letterSpacing: '0.06em',
            fontWeight: 500,
            marginBottom: '10px',
          }}>
            CARTEIRA OTIMIZADA IA
          </div>
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '30px',
            color: 'var(--accent)',
            marginBottom: '12px',
          }}>
            Score 87.4
          </div>
          {rows.map(r => (
            <CompRow
              key={r.label}
              label={r.label}
              value={r.after}
              isGood={r.afterGood}
            />
          ))}
        </div>
      </div>

      {/* Improvement summary bar */}
      <div style={{
        padding: '18px 24px',
        background: 'var(--accent-dim)',
        border: '0.5px solid rgba(0,200,83,0.25)',
        borderRadius: '10px',
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: '11px',
          color: 'var(--accent)',
          letterSpacing: '0.09em',
          marginBottom: '10px',
          fontWeight: 500,
        }}>
          POTENCIAL DE MELHORIA · +33.2 PTS
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
        }}>
          {improvements.map(item => (
            <div key={item.val}>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                color: 'var(--text)',
                lineHeight: 1,
                marginBottom: '4px',
              }}>
                {item.val}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
