# Actum Precatórios — site (React + TypeScript + Vite)

Landing page da Actum Precatórios em React + TypeScript (Vite), servida por Node/Express em produção.

## Requisitos

- Node 22.12+ (testado com Node 24)

## Comandos

```bash
npm install
npm run dev       # servidor de desenvolvimento (http://localhost:5173)
npm run build     # typecheck + build de produção em dist/
npm run preview   # serve o build de dist/
npm run lint      # oxlint
npm start         # servidor de produção (server.js, Express) servindo dist/ na porta $PORT ou 3000
```

## Deploy (Hostinger — Node.js Web App)

| Campo            | Valor           |
| ---------------- | --------------- |
| Framework preset | Express         |
| Branch           | main            |
| Node.js version  | 22 ou 24        |
| Build command    | `npm run build` |
| Entry file       | `server.js`     |

Alternativa sem processo Node: preset **React + Vite**, output directory `dist`, sem entry file.

## Estrutura

```
src/
  App.tsx                 # monta as seções na ordem do HTML original
  main.tsx
  styles/global.css       # CSS copiado 1:1 do HTML original
  assets/                 # logos (extraídas do base64 do HTML)
  hooks/useRevealOnScroll.ts
  components/             # Header, Hero, IntervalSection, HowItWorks, Services,
                          # Security, Eligibility, Footer, StickyCta, Icons
  components/ContactLink.tsx  # URL do formulário externo (CTAs "Fale Conosco")
  lib/campaignParams.ts   # repassa a query string (utm_*, gclid, fbclid...) para o formulário
```
