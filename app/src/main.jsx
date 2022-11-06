import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

import Home from './pages/Home'
import Series from './pages/Series'
import Movies from './pages/Movies'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />} >
        <Route index element={<Home />} />
        <Route path='/series' element={<Series />} />
        <Route path='/movies' element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
