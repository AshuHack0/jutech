/**
 * Post-build prerender script for Homepage SEO.
 * Serves the built app, captures fully-rendered HTML with Puppeteer, and overwrites dist/index.html.
 * On Vercel uses @sparticuz/chromium (serverless Chromium); locally uses system Chrome.
 */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer-core'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(__dirname, '..', process.env.BUILD_OUT_DIR || 'dist')
const PORT = 37542

const SYSTEM_CHROME_PATHS = [
  process.platform === 'darwin' && '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  process.platform === 'darwin' && '/Applications/Chromium.app/Contents/MacOS/Chromium',
  process.platform === 'linux' && '/usr/bin/google-chrome',
  process.platform === 'linux' && '/usr/bin/chromium',
  process.platform === 'linux' && '/usr/bin/chromium-browser',
].filter(Boolean)

function getChromeExecutable() {
  for (const p of SYSTEM_CHROME_PATHS) {
    if (fs.existsSync(p)) return p
  }
  return process.env.PUPPETEER_EXECUTABLE_PATH || undefined
}

/** Launch options: use @sparticuz/chromium on Vercel, system Chrome locally. */
async function getLaunchOptions() {
  if (process.env.VERCEL === '1') {
    const chromium = await import('@sparticuz/chromium')
    const executablePath = await chromium.default.executablePath()
    return {
      executablePath,
      args: chromium.default.args,
      headless: 'shell', // required for @sparticuz/chromium headless-shell build
    }
  }
  const executablePath = getChromeExecutable()
  if (!executablePath) {
    console.error(
      '[prerender] No Chrome found. Install Chrome, or set PUPPETEER_EXECUTABLE_PATH, or run: npx puppeteer browsers install chrome'
    )
    process.exit(1)
  }
  return { executablePath, headless: true }
}

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

function serveStatic(dir) {
  return (req, res) => {
    const url = req.url === '/' ? '/index.html' : req.url
    const filePath = path.join(dir, url.split('?')[0])
    if (!filePath.startsWith(dir)) {
      res.statusCode = 403
      res.end()
      return
    }
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = err.code === 'ENOENT' ? 404 : 500
        res.end(err.code === 'ENOENT' ? 'Not Found' : 'Server Error')
        return
      }
      const ext = path.extname(filePath)
      res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream')
      res.end(data)
    })
  }
}

function createServer() {
  return new Promise((resolve) => {
    const server = http.createServer(serveStatic(DIST))
    server.listen(PORT, () => resolve(server))
  })
}

async function prerender() {
  if (!fs.existsSync(DIST)) {
    console.error('scripts/prerender.js: dist/ not found. Run "npm run build" first.')
    process.exit(1)
  }

  const server = await createServer()
  const baseUrl = `http://localhost:${PORT}`

  const launchOptions = await getLaunchOptions()

  let browser
  try {
    browser = await puppeteer.launch(launchOptions)
    const page = await browser.newPage()
    await page.goto(baseUrl + '/', { waitUntil: 'networkidle0', timeout: 30000 })
    await page.waitForSelector('#root > *', { timeout: 10000 }).catch(() => {})
    await new Promise((r) => setTimeout(r, 500))
    const html = await page.content()
    const outPath = path.join(DIST, 'index.html')
    fs.writeFileSync(outPath, html, 'utf8')
    console.log('[prerender] Homepage prerendered for SEO → dist/index.html')
  } finally {
    if (browser) await browser.close()
    server.close()
  }
}

prerender().catch((err) => {
  console.error('[prerender]', err)
  process.exit(1)
})
