import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Menu from "../components/menus/Menu";
import '../styles/header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    // Cierra el menú en cada cambio de ruta
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Bloquea el scroll del body mientras el menú está abierto
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const base = import.meta.env.BASE_URL;

    return (
        <>
            <header className="full-container">
                <div className="container header-content">
                    <div className="header-logo">
                        <Link to="/">
                            <img src={`${base}logo.svg`} alt="Logo" />
                        </Link>
                    </div>

                    <div className="header-menu">
                        <Menu menu="menuLeft" />
                        <Menu menu="menuRight" />
                    </div>

                    <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
                        {isOpen ? (
                            <svg height="24" viewBox="0 0 21 21" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m15.5 15.5-10-10" /><path d="m15.5 5.5-10 10" /></g></svg>
                        ) : (
                            <svg height="24" viewBox="0 0 21 21" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m4.5 6.5h12" /><path d="m4.498 10.5h11.997" /><path d="m4.5 14.5h11.995" /></g></svg>
                        )}
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu-popup"
                    >
                        <div className="container mobile-menu-content">
                            <Menu menu="menuLeft" onItemClick={closeMenu} />
                            <Menu menu="menuRight" onItemClick={closeMenu} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Header;