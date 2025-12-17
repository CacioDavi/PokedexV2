import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyle from './styles/GlobalStyle'

import Home from './pages/Home/Home'
import Info from './pages/Info/Info'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route Component={Home} path='/' />
          <Route Component={Info} path='/info' />
        </Routes>
      </BrowserRouter>
    </main>
  </StrictMode>,
)
