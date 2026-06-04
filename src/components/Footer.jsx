import React from 'react';

const columns = [
  {
    title: 'PLATAFORMA',
    links: ['Carteira Inteligente IA', 'Ranking Quantitativo', 'Simulador', 'Comparador', 'Alertas'],
  },
  {
    title: 'RECURSOS',
    links: ['Markowitz Engine', 'Explainability', 'Backtests', 'APIs', 'Integrações'],
  },
  {
    title: 'RESEARCH',
    links: ['Relatórios diários', 'Insights de regime', 'Cobertura setorial', 'Macro tracker'],
  },
  {
    title: 'EMPRESA',
    links: ['Sobre', 'Carreiras', 'Imprensa', 'Contato'],
  },
  {
    title: 'COMPLIANCE',
    links: ['Termos de uso', 'Privacidade', 'Disclaimer', 'LGPD'],
  },
];

const socialIcons = [
  { label: 'LinkedIn', symbol: 'in' },
  { label: 'X', symbol: '𝕏' },
  { label: 'YouTube', symbol: '▶' },
  { label: 'GitHub', symbol: '<>' },
];

export default function Footer() {
  return (
    <footer style={{
      padding: '48px 32px 28px',
      borderTop: '0.5px solid var(--border)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr',
        gap: '24px',
        marginBottom: '40px',
      }}>
        {/* Brand column */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--text)',
            marginBottom: '8px',
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              background: 'var(--logo-bg)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--logo-color)',
              flexShrink: 0,
              transition: 'background 0.25s ease, color 0.25s ease',
            }}>
              Q
            </div>
            QuantIA Capital
          </div>
          <p style={{
            fontSize: '12px',
            color: 'var(--text-dim)',
            lineHeight: 1.65,
            maxWidth: '200px',
            marginBottom: '18px',
          }}>
            Plataforma institucional de inteligência quantitativa para investidores, advisors e gestoras independentes.
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            {socialIcons.map(s => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                style={{
                  width: '30px',
                  height: '30px',
                  border: '0.5px solid var(--border-strong)',
                  borderRadius: '7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '11px',
                  fontWeight: 500,
                  transition: 'color 0.2s, border-color 0.2s',
                  textDecoration: 'none',
                }}
              >
                {s.symbol}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {columns.map(col => (
          <div key={col.title}>
            <div style={{
              fontSize: '10px',
              letterSpacing: '0.09em',
              color: 'var(--text-dim)',
              marginBottom: '14px',
              fontWeight: 500,
            }}>
              {col.title}
            </div>
            {col.links.map(link => (
              <a
                key={link}
                href="#"
                style={{
                  display: 'block',
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  marginBottom: '8px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '0.5px solid var(--border)',
        paddingTop: '18px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '24px',
        flexWrap: 'wrap',
      }}>
        <div style={{ fontSize: '11px', color: 'var(--text-dim)', letterSpacing: '0.03em' }}>
          © 2026 QUANTIA CAPITAL · CNPJ 00.000.000/0001-00
        </div>
        <p style={{
          fontSize: '11px',
          color: 'var(--text-dim)',
          maxWidth: '400px',
          textAlign: 'right',
          lineHeight: 1.55,
        }}>
          A QuantIA Capital é uma plataforma de tecnologia para análise quantitativa. Não constitui recomendação personalizada de investimento. Rentabilidade passada não garante resultados futuros.
        </p>
      </div>
    </footer>
  );
}
