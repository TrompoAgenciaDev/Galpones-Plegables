import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        <Link to="/casos-exito">Casos de Éxito</Link>
        <Link to="/presupuestar">Presupuestar</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
