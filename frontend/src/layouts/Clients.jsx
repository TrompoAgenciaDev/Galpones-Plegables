import "../styles/clients.css";


const Clients = () => {
    
    const base = import.meta.env.BASE_URL;
    
    return (
        <>
            <section className="full-container clients">
                <div className="container grid-clients">
                    <div className="item-client">
                        <h4 className="text-orange">Quiénes confiaron en nosotros</h4>
                    </div>
                    <div className="item-client">
                        <img src={`${base}assets/img/cocacola.png`} alt="" />
                        <img src={`${base}assets/img/valle.png`} alt="" />
                        <img src={`${base}assets/img/inomax.png`} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}


export default Clients;