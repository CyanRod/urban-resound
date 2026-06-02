import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import DonatePage from './pages/DonatePage.tsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dona" element={<DonatePage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
