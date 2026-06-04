import React from 'react';
import { Eyebrow, SectionTitle, SectionSub, Section } from './ui';

const modules = [
  {
    icon: '⊞',
    title: 'Dashboard',
    text: 'Score, performance, risco e alertas em uma única tela consolidada.',
  },
  {
    icon: '◈',
    title: 'Minha Carteira',
    text: 'Open Finance ou importação manual. Visão multibroker unificada.',
  },
  {
    icon: '◉',
    title: 'Carteira Inteligente IA',
    text: 'Rebalanceamento adaptativo e plano executável com 1 clique.',
  },
  {
    icon: '▣',
    title: 'Ranking Quantitativo',
    text: '487 ativos cobertos, score multifatorial atualizado intraday.',
  },
  {
    icon: '⇄',
    title: 'Comparador',
    text: 'Carteiras, benchmarks e cenários confrontados lado a lado.',
  },
  {
    icon: '⦿',
    title: 'Simulações',
    text: 'Stress test, Monte Carlo e backtest com 25 anos de série histórica.',
  },
  {
    icon: '◎',
    title: 'Alertas',
    text: 'Drift, regime change, eventos corporativos e quebras de correlação.',
  },
  {
    icon: '▤',
    title: 'Research',
    text: 'Relatórios diários, cobertura setorial e macro tracker integrado.',
  },
  {
    icon: '⚙',
    title: 'Configurações',
    text: 'Perfil de risco, restrições, IR, multibroker e integrações via API.',
  },
];

export default function ModulesSection() {
  const [hovered, setHovered] = React.useState(null);

  return (
    <Section>
      <Eyebrow>Recursos institucionais</Eyebrow>
      <SectionTitle>Nove módulos. Um terminal.</SectionTitle>
      <SectionSub>
        Dados unificados e contexto compartilhado entre todas as telas — como uma mesa quantitativa real.
      </SectionSub>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
      }}>
        {modules.map(mod => (
          <div
            key={mod.title}
            onMouseEnter={() => setHovered(mod.title)}
            onMouseLeave={() => setHovered(null)}
            style={{
              padding: '18px',
              border: hovered === mod.title
                ? '0.5px solid rgba(0,200,83,0.3)'
                : '0.5px solid var(--border)',
              borderRadius: '10px',
              background: hovered === mod.title ? 'var(--accent-glow)' : 'var(--bg-surface)',
              transition: 'background 0.2s, border-color 0.2s',
              cursor: 'default',
            }}
          >
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              background: 'var(--accent-dim)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px',
              color: 'var(--accent)',
              fontSize: '16px',
              transition: 'background 0.2s',
            }}>
              {mod.icon}
            </div>
            <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)', marginBottom: '5px' }}>
              {mod.title}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              {mod.text}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
