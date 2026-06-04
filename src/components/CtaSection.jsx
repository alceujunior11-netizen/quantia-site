import React from 'react';
import { BtnPrimary, BtnOutline } from './ui';

export default function CtaSection() {
  return (
    <section style={{
      padding: '72px 32px',
      textAlign: 'center',
      borderTop: '0.5px solid var(--border)',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '40px',
        fontWeight: 400,
        color: 'var(--text)',
        maxWidth: '520px',
        margin: '0 auto 16px',
        lineHeight: 1.2,
      }}>
        Transforme sua carteira em uma estratégia quantitativa profissional.
      </h2>
      <p style={{
        fontSize: '16px',
        color: 'var(--text-muted)',
        marginBottom: '32px',
      }}>
        14 dias de acesso completo ao Professional. Sem cartão. Sem compromisso.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <BtnPrimary onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}>
          Iniciar agora
        </BtnPrimary>
        <BtnOutline onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}>
          Solicitar demonstração
        </BtnOutline>
      </div>
    </section>
  );
}
