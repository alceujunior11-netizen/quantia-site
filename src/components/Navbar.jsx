import React, { useState, useEffect } from 'react';
import { useTheme } from '../App';
import { Logo } from './ui';

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 32px',
    height: '60px',
    borderBottom: '0.5px solid var(--border)',
    position: 'sticky',
    top: 0,
    background: 'var(--nav-bg)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    zIndex: 100,
    transition: 'background 0.25s ease',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    gap: '28px',
    listStyle: 'none',
  },
  link: {
    color: 'var(--text-muted)',
    textDecoration: 'none',
    fontSize: '13px',
    transition: 'color 0.2s',
    cursor: 'pointer',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  themeBtn: {
    width: '36px',
    height: '36px',
    border: '0.5px solid var(--border-strong)',
    borderRadius: '8px',
    background: 'transparent',
    color: 'var(--text-muted)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background 0.2s, color 0.2s, border-color 0.2s',
    flexShrink: 0,
  },
  btnGhost: {
    padding: '7px 16px',
    border: '0.5px solid var(--border-strong)',
    borderRadius: '8px',
    background: 'transparent',
    color: 'var(--text-muted)',
    fontSize: '13px',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    transition: 'background 0.2s, color 0.2s',
  },
  btnPrimary: {
    padding: '7px 18px',
    border: 'none',
    borderRadius: '8px',
    background: 'var(--accent)',
    color: '#000',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    transition: 'opacity 0.2s',
  },
  mobileMenuBtn: {
    display: 'none',
    width: '36px',
    height: '36px',
    border: '0.5px solid var(--border-strong)',
    borderRadius: '8px',
    background: 'transparent',
    color: 'var(--text-muted)',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '18px',
  },
};

const navItems = [
  { label: 'Plataforma', id: 'plataforma' },
  { label: 'Research', id: 'research' },
  { label: 'Planos', id: 'planos' },
  { label: 'Segurança', id: 'seguranca' },
  { label: 'FAQ', id: 'faq' },
];

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      ...styles.nav,
      boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.15)' : 'none',
    }}>
      <a href="/" style={styles.logo}>
        <Logo />
      </a>

      <ul style={styles.links}>
        {navItems.map(item => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={e => { e.preventDefault(); scrollTo(item.id); }}
              style={{
                ...styles.link,
                color: hovered === item.id ? 'var(--text)' : 'var(--text-muted)',
              }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div style={styles.actions}>
        <button
          onClick={toggleTheme}
          style={styles.themeBtn}
          title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
          aria-label="Alternar tema"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button style={styles.btnGhost} onClick={() => scrollTo('planos')}>Entrar</button>
        <button style={styles.btnPrimary} onClick={() => scrollTo('planos')}>Começar agora</button>
      </div>
    </nav>
  );
}
