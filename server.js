// Servidor de produção: serve o build do Vite (dist/).
// Hostinger (Node.js Web App): preset Express/Other, entry file `server.js`, build `npm run build`.
import { existsSync } from 'node:fs'
import path from 'node:path'
import express from 'express'

const distDir = path.join(import.meta.dirname, 'dist')
const indexHtml = path.join(distDir, 'index.html')
const port = Number(process.env.PORT) || 3000

if (!existsSync(indexHtml)) {
  console.error(`[actum] ${indexHtml} não encontrado. Rode "npm run build" antes de iniciar o servidor.`)
  process.exit(1)
}

const app = express()
app.disable('x-powered-by')

// Arquivos com hash no nome (dist/assets) podem ficar em cache "para sempre".
app.use('/assets', express.static(path.join(distDir, 'assets'), { immutable: true, maxAge: '1y' }))
app.use(express.static(distDir))

// Qualquer outra rota cai no index.html (single page).
app.use((_req, res) => res.sendFile(indexHtml))

app.listen(port, () => {
  console.log(`[actum] servidor rodando na porta ${port}`)
})
