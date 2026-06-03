import Hero from "@/layouts/Hero";
import About from "@/layouts/About";
import Clients from "@/layouts/Clients";
import SliderNosotros from "@/layouts/SliderNosotros";
import AboutFeatures from "@/layouts/AboutFeatures";

const Nosotros = () => {
    return (
        <>
            <Hero
                titulo2="Sobre nosotros"
                location="nosotros"
            />
            <About location="nosotros" />
            <SliderNosotros />
            <AboutFeatures />
            <Clients />
        </>
    );
};

export default Nosotros;
