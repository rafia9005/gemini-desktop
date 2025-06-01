import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/main.css'

import { createRoot } from 'react-dom/client'
import Index from './pages/Index'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index />} />
    </Routes>
  </BrowserRouter>
)
