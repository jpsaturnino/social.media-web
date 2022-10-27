import { createRoot } from 'react-dom/client'
import { AppRoutes } from 'routes'
import '@assets/global.css'
import React from 'react'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
