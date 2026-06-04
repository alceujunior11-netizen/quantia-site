import React, { useState } from 'react';
import { Eyebrow, SectionTitle, Section } from './ui';

const plans = [
  {
    name: 'ESSENTIAL',
    monthly: 39,
    annual: 468,
    cycle: '/mês',
    featured: false,
    badge: null,
    cta: 'Iniciar teste grátis',
    features: [
      'Ranking quantitativo básico',
      'Score simplificado',
      '1 carteira monitorada',
      'Alertas básicos',
      'Research mensal',
    ],
  },
  {
    name: 'PROFESSIONAL',
    monthly: 119,
    annual: 1428,
    cycle: '/mês',
    featured: true,
    badge: 'Mais popular',
    cta: 'Iniciar teste grátis',
    features: [
      'Carteira Inteligente IA',
      'Rebalanceamento adaptativo',
      'Explainability completa',
      'Simulações de cenários',
      '3 carteiras monitoradas',
    ],
  },
  {
    name: 'BLACK',
    monthly: 319,
    annual: 3828,
    cycle: '/mês',
    featured: false,
    badge: null,
    cta: 'Iniciar teste grátis',
    features: [
      'Markowitz + Sharpe ótimo',
      'Carteiras ilimitadas',
      'Backtests históricos',
      'IA Premium + automação',
      'Research diário',
    ],
  },
  {
    name: 'INSTITUTIONAL',
    monthly: null,
    annual: null,
    cycle: null,
    featured: false,
    badge: null,
    cta: 'Falar com vendas',
    features: [
      'Multiusuário',
      'APIs e webhooks',
      'White label completo',
      'Gestão de clientes',
      'SLA dedicado',
    ],
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <Section>
      <Eyebrow>Planos</Eyebrow>
      <SectionTitle>Tecnologia institucional,<br />acesso direto.</SectionTitle>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
        <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
          14 dias de teste completo. Sem cartão. Cancele quando quiser.
        </p>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <span style={{ fontSize: '13px', color: annual ? 'var(--text-dim)' : 'var(--text)' }}>Mensal</span>
          <button
            onClick={() => setAnnual(a => !a)}
            style={{
              width: '44px',
              height: '24px',
              borderRadius: '12px',
              border: 'none',
              background: annual ? 'var(--accent)' : 'var(--border-strong)',
              position: 'relative',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            <div style={{
              position: 'absolute',
              top: '3px',
              left: annual ? '22px' : '3px',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: '#fff',
              transition: 'left 0.2s',
            }} />
          </button>
          <span style={{ fontSize: '13px', color: annual ? 'var(--text)' : 'var(--text-dim)' }}>
            Anual <span style={{ color: 'var(--accent)', fontSize: '11px' }}>−20%</span>
          </span>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
      }}>
        {plans.map(plan => {
          const price = plan.monthly
            ? (annual ? Math.round(plan.annual / 12) : plan.monthly)
            : null;

          return (
            <div
              key={plan.name}
              style={{
                padding: '20px',
                border: plan.featured
                  ? '1px solid rgba(0,200,83,0.4)'
                  : '0.5px solid var(--border)',
                borderRadius: '10px',
                background: plan.featured ? 'var(--accent-glow)' : 'var(--bg-surface)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'background 0.25s ease, border-color 0.25s ease',
              }}
            >
              {plan.badge && (
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
                  alignSelf: 'flex-start',
                }}>
                  {plan.badge}
                </div>
              )}

              <div style={{
                fontSize: '11px',
                fontWeight: 500,
                color: 'var(--text-dim)',
                letterSpacing: '0.07em',
                marginBottom: '8px',
              }}>
                {plan.name}
              </div>

              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '30px',
                color: 'var(--text)',
                lineHeight: 1,
                marginBottom: '4px',
              }}>
                {price ? `R$ ${price}` : 'Sob'}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-dim)', marginBottom: '16px' }}>
                {plan.cycle
                  ? `${plan.cycle} · R$ ${annual ? plan.annual : plan.monthly * 12}/ano`
                  : 'consulta · family offices e RIAs'}
              </div>

              <div style={{ height: '0.5px', background: 'var(--border)', marginBottom: '14px' }} />

              <div style={{ flex: 1 }}>
                {plan.features.map((f, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: '8px',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    marginBottom: '8px',
                    lineHeight: 1.45,
                  }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0, fontSize: '12px', marginTop: '1px' }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.location.href = 'mailto:contato@quantia.com.br?subject=Interesse%20no%20plano%20' + encodeURIComponent(plan.name)}
                style={{
                  width: '100%',
                  marginTop: '16px',
                  padding: '10px',
                  borderRadius: '8px',
                  border: plan.featured ? 'none' : '0.5px solid var(--border-strong)',
                  background: plan.featured ? 'var(--accent)' : 'transparent',
                  color: plan.featured ? '#000' : 'var(--text-muted)',
                  fontSize: '13px',
                  fontWeight: plan.featured ? 500 : 400,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  transition: 'opacity 0.2s',
                }}>
                {plan.cta}
              </button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
