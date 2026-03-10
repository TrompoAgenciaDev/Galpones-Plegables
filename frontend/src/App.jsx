import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Productos from './pages/Productos'
import SobreNosotros from './pages/SobreNosotros'
import CasosExito from './pages/CasosExito'
import Presupuestar from './pages/Presupuestar'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/casos-exito" element={<CasosExito />} />
        <Route path="/presupuestar" element={<Presupuestar />} />
      </Routes>
    </Layout>
  )
}

export default App
