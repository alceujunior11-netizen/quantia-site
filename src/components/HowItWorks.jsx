import React from 'react';
import { Eyebrow, SectionTitle, SectionSub, Section, Card } from './ui';

const steps = [
  {
    num: '1',
    title: 'Conecte sua carteira',
    text: 'Integração segura via Open Finance ou importação manual. Leitura criptografada, sem acesso a movimentações.',
  },
  {
    num: '2',
    title: 'IA analisa cada ativo',
    text: 'Engine quantitativa avalia 8 fatores: valuation, qualidade, momentum, dividendos, crescimento, volatilidade, liquidez, correlação.',
  },
  {
    num: '3',
    title: 'Modelo otimiza alocação',
    text: 'Markowitz + Sharpe ótimo + restrições reais (liquidez, perfil, IR) geram a fronteira eficiente para o seu caso.',
  },
  {
    num: '4',
    title: 'Recomendações com explainability',
    text: 'Plano de rebalanceamento com racional auditável — quantitativo, fundamentalista, de risco e diversificação.',
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <Eyebrow>Fluxo da plataforma</Eyebrow>
      <SectionTitle>Da carteira ao plano executável.</SectionTitle>
      <SectionSub>Quatro etapas. Menos de 90 segundos.</SectionSub>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
      }}>
        {steps.map(step => (
          <Card key={step.num}>
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              border: '0.5px solid var(--accent)',
              color: 'var(--accent)',
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '14px',
              fontWeight: 500,
            }}>
              {step.num}
            </div>
            <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '7px' }}>
              {step.title}
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              {step.text}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
