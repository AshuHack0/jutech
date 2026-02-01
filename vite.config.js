import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// For GitHub Pages project site: set VITE_BASE_PATH=/repo-name/ in the deploy workflow
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  build: {
    outDir: process.env.BUILD_OUT_DIR || 'dist',
  },
  server: {
    allowedHosts: ['jutech.onrender.com', 'https://jutech.co/', 'localhost'],
  },
  preview: {
    allowedHosts: ['jutech.onrender.com', 'https://jutech.co/', 'localhost'],
  },
  plugins: [react(), tailwindcss()],
})
