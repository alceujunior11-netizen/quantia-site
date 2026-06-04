import React from 'react';
import { Eyebrow, SectionTitle, SectionSub, Section } from './ui';

const cards = [
  {
    type: 'RACIONAL QUANTITATIVO',
    headline: 'Score 8.4 vs setor 6.1',
    text: 'Posicionamento no decil superior do score multifatorial. Momentum acelerando, qualidade estável, valuation 14% abaixo da média histórica.',
  },
  {
    type: 'RACIONAL FUNDAMENTALISTA',
    headline: 'ROIC 22% sustentável',
    text: 'Margem operacional em expansão por 6 trimestres consecutivos. Endividamento líquido em queda. Reinvestimento acima da depreciação.',
  },
  {
    type: 'RACIONAL DE RISCO',
    headline: 'Beta condicional 0.82',
    text: 'Comportamento defensivo em regimes de stress. Drawdown médio 38% inferior ao Ibovespa em janelas de volatilidade elevada.',
  },
  {
    type: 'RACIONAL DE DIVERSIFICAÇÃO',
    headline: 'Correlação 0.31 com a carteira',
    text: 'Adição reduz correlação média intra-carteira em 4 pontos. Setor sub-representado em 7.2pp vs alocação ótima.',
  },
];

export default function ExplainabilitySection() {
  return (
    <Section>
      <Eyebrow>Explainability</Eyebrow>
      <SectionTitle>Nenhuma caixa preta.</SectionTitle>
      <SectionSub>
        Cada decisão da IA vem com quatro camadas de racional auditável — pronto para defender no comitê, com o cliente, ou consigo mesmo.
      </SectionSub>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px',
      }}>
        {cards.map(card => (
          <div key={card.type} style={{
            padding: '18px',
            border: '0.5px solid var(--border)',
            borderRadius: '10px',
            background: 'var(--bg-surface)',
            borderLeft: '3px solid var(--accent)',
            transition: 'background 0.25s ease',
          }}>
            <div style={{
              fontSize: '10px',
              letterSpacing: '0.09em',
              color: 'var(--accent)',
              marginBottom: '7px',
              fontWeight: 500,
            }}>
              {card.type}
            </div>
            <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '7px' }}>
              {card.headline}
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              {card.text}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
