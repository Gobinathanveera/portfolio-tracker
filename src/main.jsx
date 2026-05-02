import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginOverlay from './LoginOverlay.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginOverlay>
      <App />
    </LoginOverlay>
  </StrictMode>,
)
