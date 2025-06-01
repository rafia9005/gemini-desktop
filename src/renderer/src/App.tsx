import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/main.css'

import { createRoot } from 'react-dom/client'
import Index from './pages/Index'
import { ThemeProvider } from './components/theme-provider'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)
