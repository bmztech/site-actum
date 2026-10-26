# Actum Precatórios — site (React + TypeScript + Vite)

Réplica do `actum-precatorios-atualizado(9).html` em React/TS, rodando em Node.

## Requisitos

- Node 20+ (testado com Node 24)

## Comandos

```bash
npm install
npm run dev       # servidor de desenvolvimento (http://localhost:5173)
npm run build     # typecheck + build de produção em dist/
npm run preview   # serve o build de dist/
npm run lint      # oxlint
```

## Estrutura

```
src/
  App.tsx                 # monta as seções na ordem do HTML original
  main.tsx
  styles/global.css       # CSS copiado 1:1 do HTML original
  assets/                 # logos (extraídas do base64 do HTML)
  hooks/useRevealOnScroll.ts
  lib/submitLead.ts       # ponto de integração do formulário (backend/CRM)
  components/             # Header, Hero, IntervalSection, HowItWorks, Services,
                          # Security, Eligibility, LeadForm, Footer, StickyCta, Icons
```
