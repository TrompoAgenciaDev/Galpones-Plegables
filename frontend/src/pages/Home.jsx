import Hero from "../layouts/Hero.jsx"
import About from "../layouts/About.jsx"
import Servicios from "../layouts/Servicios.jsx"
import Etapas from "../layouts/Etapas.jsx"
import Recientes from "../layouts/Recientes.jsx"
import SliderFeatured from "../layouts/SliderFeatured.jsx"
import Clients from "../layouts/Clients.jsx"

const Home = () => {
  return (
    <>
      <Hero
       titulo1="Infraestructura"
       titulo2="Industrial Plegable."
       subtitulo="Espacios industriales en alquiler inmediato para almacenamiento, producción y logística."
      />
      <About />
      <Clients/>
      <Servicios />
      <Etapas />
      <Recientes
        titulo='Proyectos recientes'
      />
      <SliderFeatured/>
    </>
  )
}


export default Home