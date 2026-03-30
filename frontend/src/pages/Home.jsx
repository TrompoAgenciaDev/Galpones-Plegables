import Hero from "../layouts/Hero.jsx"
import About from "../layouts/About.jsx"
import Servicios from "../layouts/Servicios.jsx"
import Etapas from "../layouts/Etapas.jsx"
import Recientes from "../layouts/Recientes.jsx"
import CarruselFull from "../layouts/CarruselFull.jsx"
import SliderFeatured from "../layouts/SliderFeatured.jsx"
import Clients from "../layouts/Clients.jsx"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Servicios />
      <Etapas />
      <Recientes />
      <CarruselFull />
      <SliderFeatured/>
      <Clients/>
    </>
  )
}


export default Home