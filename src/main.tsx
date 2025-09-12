import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import initializeBackground from './assets/background'

initializeBackground()

createRoot(document.getElementById('root')!).render(
    <App />
)
