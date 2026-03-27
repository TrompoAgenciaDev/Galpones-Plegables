import '../styles/footer.css'
import Menu from '../components/menus/Menu';


const Footer = () => {
    const base = import.meta.env.BASE_URL;
    return (
        <footer className="full-container bg-blue">

            <div className="full-container footer-top">
                <div className="full-container">
                </div>
                <div className="full-container">
                    <div className="container">
                        <h4>
                            Suscribite a nuestro newsletter
                        </h4>
                    </div>
                </div>
                <div className="full-container">
                    <div className="container">
                        <form className="footer-form">
                            <input type="text" placeholder="Nombre" required />
                            <input type="text" placeholder="Apellido" required />
                            <input type="email" placeholder="E-mail" required />
                            <button type="submit" className="btn btn-white">Suscribirme</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="full-container footer-mid bg-white">
                <div className="full-container">
                    <div className="container">
                        <h3>¿Necesitás ampliar tu infraestructura de forma rápida y adaptable?</h3>
                    </div>
                </div>
                <div className="full-container">
                    <div className="container">
                        <form className="footer-form orange">
                            <input type="email" placeholder="E-mail" required />
                            <button type="submit" className="btn btn-orange">Solicitar presupuesto</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="full-container footer-bottom">
                <div className="full-container">
                    <div className="container">
                        <div className="footer-logo">
                            <img src={`${base}logo.svg`} alt="Logo" />
                        </div>
                        <p className='upper-text text-white'>
                            © 2026 - diseñado x <a href="http://trompoagencia.com" target="_blank" rel="noopener noreferrer"><strong>trompo agencia</strong></a> Todos los derechos reservados
                        </p>
                    </div>
                </div>
                <div className="full-container">
                    <div className="container">
                        <div className="menu-container">
                            <Menu menu="menuLeft" />
                            <Menu menu="menuRight" />
                        </div>
                        <form className="footer-form">
                            <input type="email" placeholder="E-mail" required />
                            <button type="submit" className="btn btn-white">solicitar información</button>
                        </form>
                    </div>
                </div>
                <div className="full-container">
                    <div className="container">
                        <div className="footer-contact-group">
                            <span className="upper-text text-white">TELÉFONO</span>
                            <p className="text-white">+54 9 3512056182</p>
                        </div>
                        <div className="footer-contact-group">
                            <span className="upper-text text-white">EMAIL</span>
                            <p className="text-white">CONTACTO@GALPONESPLEGABLES.COM</p>
                        </div>
                        <div className="footer-contact-group">
                            <span className="upper-text text-white">UBICACIÓN</span>
                            <p className="text-white">CORDOBA, ARGENTINA</p>
                        </div>
                        <div className="footer-contact-group">
                            <div className="footer-social">
                                <a href="#" className="upper-text text-white">FACEBOOK</a>
                                <a href="#" className="upper-text text-white">INSTAGRAM</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;