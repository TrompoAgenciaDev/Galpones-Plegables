import { useState } from "react";
import { animate } from "framer-motion";
import { NavLink } from "react-router-dom";
import routesConfig from "@/config/routesConfig";

const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const scramble = () => {
    animate(0, text.length, {
      duration: 0.7,
      ease: "easeInOut",
      onUpdate: (latest) => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index < latest) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
      },
    });
  };

  return (
    <span onMouseEnter={scramble} className="white-color">
      {displayText}
    </span>
  );
};

const Menu = ({ menu, onItemClick }) => {
  const menuItems = routesConfig[menu] || [];

  return (
    <nav className={`menu-nav menu-${menu}`}>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.path} className="menu-item">
            <NavLink 
              to={item.path} 
              onClick={onItemClick}
              className={({ isActive }) => 
                isActive ? "menu-link active" : "menu-link"
              }
            >
              <ScrambleText text={item.label} />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
