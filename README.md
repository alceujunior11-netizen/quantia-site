# QuantIA Capital — Site Institucional

Stack: React 18 + CSS Variables (tema claro/escuro nativo)

## Estrutura

```
src/
  App.jsx                    # Root: ThemeContext + layout de seções
  index.css                  # Tokens CSS (dark/light via data-theme)
  index.js                   # Entry point
  components/
    Navbar.jsx               # Nav sticky + botão de tema (☀️/🌙)
    Hero.jsx                 # Hero + terminal preview animado
    TickerStrip.jsx          # Ticker com scroll infinito
    ProblemSection.jsx       # 4 problemas de carteira
    SolutionSection.jsx      # Comparação antes/depois + barra de melhoria
    HowItWorks.jsx           # 4 etapas do fluxo
    ModulesSection.jsx       # 9 módulos da plataforma
    EngineSection.jsx        # Engine multifatorial + 8 fatores
    ExplainabilitySection.jsx# 4 camadas de racional
    PricingSection.jsx       # 4 planos + toggle mensal/anual
    TestimonialsSection.jsx  # 3 depoimentos
    IntegrationsSection.jsx  # 12 brokers
    CtaSection.jsx           # CTA final
    Footer.jsx               # Footer com links e disclaimer
    ui.jsx                   # Componentes reutilizáveis (Button, Card, etc.)
```

## Como rodar localmente

```bash
npm install
npm start
```

## Deploy no Vercel

### Opção 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Opção 2 — GitHub → Vercel Dashboard
1. Faça push deste projeto para um repositório GitHub
2. Acesse vercel.com → "Add New Project"
3. Importe o repositório
4. Framework: **Create React App** (detectado automaticamente)
5. Build command: `npm run build`
6. Output directory: `build`
7. Clique em Deploy

### Opção 3 — Drag & drop
1. Rode `npm run build` localmente
2. Arraste a pasta `build/` para vercel.com/new

## Tema claro/escuro

O tema é controlado por `data-theme` no `<html>` com CSS Variables.
Persiste via `localStorage` entre sessões.
O script inline no `index.html` evita flash de tema na carga.

## Customização de cores

Edite as variáveis em `src/index.css`:
- `--accent`: cor verde principal (`#00C853` dark / `#008A39` light)
- `--bg-base`, `--bg-surface`, `--bg-card`: fundos em camadas

## Fontes

DM Serif Display (títulos) + DM Sans (corpo)
Carregadas via Google Fonts no `index.css`.
