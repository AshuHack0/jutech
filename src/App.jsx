import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Home />} />
      <Route path="/process" element={<Home />} />
      <Route path="/contact" element={<Home />} />
    </Routes>
  )
}

export default App