import React from 'react';
import { Eyebrow, SectionTitle, SectionSub, Section, Card } from './ui';

const problems = [
  {
    num: '01',
    title: 'Concentração excessiva',
    text: '76% das carteiras têm mais de 40% em um único setor — risco invisível e não compensado.',
    stat: '76%',
  },
  {
    num: '02',
    title: 'Decisões emocionais',
    text: 'Vieses cognitivos custam, em média, 3,2% de retorno anual ao investidor não-institucional.',
    stat: '−3.2%',
  },
  {
    num: '03',
    title: 'Diversificação ilusória',
    text: 'A correlação real entre ativos da maioria das carteiras é superior a 0,8 — diversificação sem proteção real.',
    stat: 'ρ > 0.8',
  },
  {
    num: '04',
    title: 'Ausência de modelo quantitativo',
    text: 'Sem framework de risco e otimização, decisões de alocação tornam-se intuição cara.',
    stat: '∅ modelo',
  },
];

export default function ProblemSection() {
  return (
    <Section>
      <Eyebrow>O diagnóstico</Eyebrow>
      <SectionTitle>A maioria das carteiras<br />tem risco oculto.</SectionTitle>
      <SectionSub>
        Análise quantitativa de 14.000+ carteiras de investidores brasileiros revela padrões consistentes de exposição não-intencional, ineficiência de Sharpe e correlação subestimada.
      </SectionSub>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
      }}>
        {problems.map(p => (
          <Card key={p.num}>
            <div style={{ fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '0.08em', marginBottom: '10px' }}>
              {p.num}
            </div>
            <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '7px' }}>
              {p.title}
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              {p.text}
            </div>
            <div style={{
              marginTop: '14px',
              fontFamily: 'var(--font-serif)',
              fontSize: '28px',
              color: 'var(--accent)',
            }}>
              {p.stat}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
