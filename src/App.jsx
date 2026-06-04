import React, { createContext, useContext, useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerStrip from './components/TickerStrip';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import ModulesSection from './components/ModulesSection';
import EngineSection from './components/EngineSection';
import ExplainabilitySection from './components/ExplainabilitySection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import IntegrationsSection from './components/IntegrationsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

function Divider() {
  return (
    <div style={{
      height: '0.5px',
      background: 'var(--border)',
      margin: '0 32px',
    }} />
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('quantia-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('quantia-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ background: 'var(--bg-base)', minHeight: '100vh', transition: 'background 0.25s ease' }}>
        <Navbar />
        <Hero />
        <TickerStrip />
        <ProblemSection />
        <Divider />
        <div id="plataforma"><SolutionSection /></div>
        <Divider />
        <div id="como-funciona"><HowItWorks /></div>
        <Divider />
        <ModulesSection />
        <Divider />
        <div id="research"><EngineSection /></div>
        <Divider />
        <ExplainabilitySection />
        <Divider />
        <div id="planos"><PricingSection /></div>
        <Divider />
        <TestimonialsSection />
        <Divider />
        <div id="seguranca"><IntegrationsSection /></div>
        <div id="faq"><CtaSection /></div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
