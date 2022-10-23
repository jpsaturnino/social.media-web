import { createRoot } from 'react-dom/client'
import { AppRoutes } from 'routes'
import '@assets/global.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<AppRoutes />)
