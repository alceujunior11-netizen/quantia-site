import React from 'react';
import { Eyebrow, SectionTitle, SectionSub, Section } from './ui';

const testimonials = [
  {
    initials: 'RC',
    name: 'Rafael Camargo',
    role: 'Sócio · Multi-family Office',
    aum: 'R$ 380M sob gestão',
    metric: '+27% Sharpe',
    quote: 'A QuantIA substituiu três ferramentas que usávamos. O explainability é o que diferencia — consigo defender qualquer alocação no comitê.',
  },
  {
    initials: 'MT',
    name: 'Mariana Tavares',
    role: 'Investment Advisor · CFP®',
    aum: 'R$ 92M em assessoria',
    metric: '−42% drawdown',
    quote: 'O rebalanceamento adaptativo capturou a inversão de regime de 2024 antes da maioria dos meus pares. Fez diferença real no portfólio dos clientes.',
  },
  {
    initials: 'HV',
    name: 'Henrique Vasconcellos',
    role: 'Investidor profissional',
    aum: 'Patrimônio R$ 14M',
    metric: '+34.7% YTD',
    quote: 'Tenho terminal Bloomberg no escritório e uso QuantIA todo dia em casa. A engine quantitativa é tão boa quanto qualquer mesa proprietária.',
  },
];

export default function TestimonialsSection() {
  return (
    <Section>
      <Eyebrow>Quem já usa</Eyebrow>
      <SectionTitle>Profissionais com<br />responsabilidade fiduciária.</SectionTitle>
      <SectionSub>Advisors, family offices e gestoras independentes que decidem com dados.</SectionSub>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
      }}>
        {testimonials.map(t => (
          <div key={t.name} style={{
            padding: '22px',
            border: '0.5px solid var(--border)',
            borderRadius: '10px',
            background: 'var(--bg-surface)',
            transition: 'background 0.25s ease',
          }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'var(--accent-dim)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--accent)',
              marginBottom: '12px',
            }}>
              {t.initials}
            </div>
            <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '3px' }}>
              {t.name}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-dim)', marginBottom: '2px' }}>{t.role}</div>
            <div style={{
              fontSize: '11px',
              color: 'var(--text-dim)',
              letterSpacing: '0.04em',
              marginBottom: '14px',
              textTransform: 'uppercase',
            }}>
              {t.aum}
            </div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '22px',
              color: 'var(--accent)',
              marginBottom: '12px',
            }}>
              {t.metric}
            </div>
            <p style={{
              fontSize: '13px',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              fontStyle: 'italic',
            }}>
              "{t.quote}"
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
