import Hero from "../layouts/Hero";
import "../styles/montaje.css";

const steps = [
    {
        number: "01",
        title: "Traslado",
        desc: "El galpón se transporta plegado sobre camión hasta el lugar de implantación.",
        highlight: "Su formato compacto reduce volumen, optimizando logística y costos de traslado.",
        img: "assets/img/montaje/traslado.png",
        alt: "Traslado del galpón plegable",
    },
    {
        number: "02",
        title: "Anclaje",
        desc: "Se realiza la fijación de la estructura al suelo mediante el sistema de anclaje definido, según el tipo de superficie y condiciones del terreno.",
        highlight: "El sistema permite transferir las cargas de forma segura y controlada.",
        img: "assets/img/montaje/anclaje.png",
        alt: "Anclaje de la estructura",
    },
    {
        number: "03",
        title: "Primer pórtico",
        desc: "Se posiciona y despliega el primer pórtico mediante grúa.",
        highlight: "Este elemento actúa como referencia inicial para el montaje del conjunto.",
        img: "assets/img/montaje/primer-portico.png",
        alt: "Instalación del primer pórtico",
    },
    {
        number: "04",
        title: "Despliegue de módulos",
        desc: "Se colocan y despliegan progresivamente los módulos a partir del primer pórtico, manteniendo alineación y continuidad estructural.",
        highlight: "El sistema permite una expansión rápida, controlada y segura.",
        img: "assets/img/montaje/despliegue.png",
        alt: "Despliegue de módulos",
    },
    {
        number: "05",
        title: "Cerramientos y adicionales",
        desc: "Se completan fijaciones, cerramientos y ajustes para garantizar estabilidad y correcto funcionamiento.",
        highlight: "La estructura queda preparada para operar en condiciones óptimas.",
        img: "assets/img/montaje/cerramientos.png",
        alt: "Cerramientos y adicionales",
    },
    {
        number: "06",
        title: "Puesta en operación",
        desc: "El galpón queda listo para su uso en pocas horas, sin necesidad de obras complejas.",
        highlight: "Permite iniciar o continuar la operación de forma inmediata.",
        img: "assets/img/montaje/puesta-operacion.png",
        alt: "Puesta en operación del galpón",
    },
];

const Montaje = () => {
    const base = import.meta.env.BASE_URL?.endsWith("/")
        ? import.meta.env.BASE_URL
        : `${import.meta.env.BASE_URL}/`;

    return (
        <>
            <Hero
                titulo2={"Montaje"}
                location="montaje"
            />

            <div className="full-container montaje-intro">
                <div className="container">
                    <h2 className="upper-text title-monaje">Del traslado a la operación en pocas etapas, con mínima intervención y máxima optimización de tiempos y costos.</h2>
                </div>
            </div>

            <div className="full-container">
                <div className="container">
                    <div className="montaje-steps">
                        {steps.map((step) => (
                            <div className="montaje-step" key={step.number}>
                                <div className="montaje-step__content">
                                    <span className="montaje-step__number">{step.number}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                    <p className="upper-text"><strong>{step.highlight}</strong></p>
                                </div>
                                <img
                                    className="montaje-step__image"
                                    src={`${base}${step.img}`}
                                    alt={step.alt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Montaje;
