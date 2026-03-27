import '../styles/footer.css'
import Menu from '../components/menus/Menu';


const Footer = () => {
    const base = import.meta.env.BASE_URL;
    return (
        <footer className="bg-blue">

            <div className="full-container footer-top">
                <div
                    className="full-container footer-bg"
                    style={{ backgroundImage: `url(${base}assets/img/footer.png)` }}
                >
                </div>
                <div className="full-container desktop">
                    <div className="container">
                        <h4 className="text-white">
                            Suscribite a nuestro newsletter
                        </h4>
                    </div>
                </div>
                <div className="full-container form-container">
                    <h4 className="text-white mobile">
                        Suscribite a nuestro newsletter
                    </h4>
                    <div className="container">
                        <form className="footer-form">
                            <input type="text" id="newsletter-nombre" name="nombre" placeholder="Nombre" required />
                            <input type="text" id="newsletter-apellido" name="apellido" placeholder="Apellido" required />
                            <input type="email" id="newsletter-email" name="email" placeholder="E-mail" required />
                            <button type="submit" className="btn btn-white">Suscribirme</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="full-container footer-mid bg-white">
                <div className="full-container bg-white position">
                    <div className="container cta-presupuesto">
                        <h4>¿Necesitás ampliar tu infraestructura de forma rápida y adaptable?</h4>
                    </div>
                </div>
                <div className="full-container bg-white position">
                    <div className="container">
                        <form className="footer-form orange">
                            <input type="email" id="presupuesto-email" name="email" placeholder="E-mail" required />
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
                    </div>
                </div>
                <div className="full-container">
                    <div className="container">
                        <div className="menu-container">
                            <Menu menu="menuLeft" />
                            <Menu menu="menuRight" />
                        </div>
                    </div>
                </div>
                <div className="full-container">
                    <div className="container info-group">
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
            <div className="full-container copy-container">
                <div className="container">
                    <p className='upper-text text-white'>
                        © 2026 - diseñado x <a href="http://trompoagencia.com" target="_blank" rel="noopener noreferrer"><strong>trompo agencia</strong></a> Todos los derechos reservados
                    </p>
                    <form className="footer-form copy-form">
                        <h4 className='text-white'>Solicitar información</h4>
                        <input type="email" id="info-email" name="email" placeholder="E-mail" required />
                    </form>
                    <div className="container"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;