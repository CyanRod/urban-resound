import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageArrows from './components/PageArrows'
import HomePage from './pages/HomePage'
import ProblemaPage from './pages/ProblemaPage'
import SolucionPage from './pages/SolucionPage'
import ProcesoPage from './pages/ProcesoPage'
import ImpactoPage from './pages/ImpactoPage'
import ODSPage from './pages/ODSPage'
import EquipoPage from './pages/EquipoPage'
import ContactoPage from './pages/ContactoPage'
import DonatePage from './pages/DonatePage'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Navbar />
      <PageArrows />
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/problema"  element={<ProblemaPage />} />
        <Route path="/solucion"  element={<SolucionPage />} />
        <Route path="/proceso"   element={<ProcesoPage />} />
        <Route path="/impacto"   element={<ImpactoPage />} />
        <Route path="/ods"       element={<ODSPage />} />
        <Route path="/equipo"    element={<EquipoPage />} />
        <Route path="/contacto"  element={<ContactoPage />} />
        <Route path="/dona"      element={<DonatePage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
