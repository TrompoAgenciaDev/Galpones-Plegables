import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "../components/menus/Menu";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header className="full-container">
                <div className="container header-content">
                    <div className="header-logo">
                        <a href="/">
                            <img src="/logo.svg" alt="Logo" />
                        </a>
                    </div>

                    <div className="header-menu">
                        <Menu menu="menuLeft" />
                        <Menu menu="menuRight" />
                    </div>

                    <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
                        {isOpen ? (
                            <svg height="24" viewBox="0 0 21 21" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m15.5 15.5-10-10"/><path d="m15.5 5.5-10 10"/></g></svg>
                        ) : (
                            <svg height="24" viewBox="0 0 21 21" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 6.5h12"/><path d="m4.498 10.5h11.997"/><path d="m4.5 14.5h11.995"/></g></svg>
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