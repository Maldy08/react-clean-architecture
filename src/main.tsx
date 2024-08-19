import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './presentation/App.tsx'
import '../src/presentation/App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
