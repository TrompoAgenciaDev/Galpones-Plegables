import Hero from "@/layouts/Hero";
import About from "@/layouts/About";
import Clients from "@/layouts/Clients";
import SliderNosotros from "@/layouts/SliderNosotros";

const Nosotros = () => {
    return (
        <>
            <Hero
                titulo2="Sobre nosotros"
                location="nosotros"
            />
            <About location="nosotros" />            
            <SliderNosotros />
            <Clients />
        </>
    );
};

export default Nosotros;
