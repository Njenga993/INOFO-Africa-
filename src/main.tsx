// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="https://inofoafrica.org/">  {/* 👈 Important for GitHub Pages */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
