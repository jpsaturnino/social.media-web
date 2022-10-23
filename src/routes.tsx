import Explore from '@pages/explore/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Explore />} />
      </Routes>
    </Router>
  )
}
