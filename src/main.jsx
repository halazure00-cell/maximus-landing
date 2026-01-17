import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landing from './pages/Landing.jsx'

const applyStoredTheme = () => {
  try {
    const settings = localStorage.getItem('maximus_settings')
    if (!settings) return
    const parsed = JSON.parse(settings)
    if (parsed.darkMode === true) {
      document.documentElement.classList.add('dark')
    }
  } catch (error) {
    console.error('Error reading theme settings:', error)
  }
}

applyStoredTheme()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Landing />
  </StrictMode>,
)
