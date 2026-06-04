import React from 'react';
import { Eyebrow, Section } from './ui';

const brokers = [
  'XP', 'BTG Pactual', 'Itaú', 'Inter', 'Rico',
  'Avenue', 'Nubank', 'Clear', 'Genial', 'Modal', 'Toro', 'Open Finance',
];

export default function IntegrationsSection() {
  return (
    <section style={{ padding: '40px 32px 56px' }}>
      <Eyebrow>Integrações</Eyebrow>
      <div style={{
        fontSize: '18px',
        fontWeight: 500,
        color: 'var(--text)',
        marginBottom: '8px',
        fontFamily: 'var(--font-sans)',
      }}>
        Conectada onde você opera.
      </div>
      <p style={{
        fontSize: '14px',
        color: 'var(--text-muted)',
        marginBottom: '24px',
      }}>
        Brokers, custodiantes e plataformas de execução em um único hub.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {brokers.map(b => (
          <div key={b} style={{
            padding: '7px 16px',
            border: '0.5px solid var(--border-strong)',
            borderRadius: '20px',
            fontSize: '13px',
            color: 'var(--text-muted)',
            background: 'var(--bg-surface)',
            transition: 'border-color 0.2s, color 0.2s',
            cursor: 'default',
          }}>
            {b}
          </div>
        ))}
      </div>
    </section>
  );
}
