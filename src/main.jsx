import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// BASE_URL from Vite (e.g. /JuTech/ for GitHub Pages); React Router basename has no trailing slash
const basename = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '/'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
)
