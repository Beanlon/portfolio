import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'virtual:app-styles.css'
import HomePage from './pages/HomePage'
import FeaturedProjectRoute from './sections/projects/FeaturedProjectRoute'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
    document.title = 'Jeric Mata | Portfolio'
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <BrowserRouter>
      <div className="page-bg min-h-screen font-[family-name:var(--font-sans)] text-slate-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<FeaturedProjectRoute />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
