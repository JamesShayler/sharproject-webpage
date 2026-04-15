import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import GitHubGrid from './gtihubGrid.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GitHubGrid />
  </StrictMode>,
)
