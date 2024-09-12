import css from "./HeaderMenu.module.css"
import { useState } from "react";



const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
        <>
        {!isMenuOpen ? (
            <button className={css.menuButton} onClick={toggleMenu}>
            Menu
            </button>
        ) : (
            <button className={css.closeButton} onClick={toggleMenu}>
            X
            </button>
        )}
        <div className={`${css.menu} ${isMenuOpen ? css.open : ''}`}>
        <ul className={css.list}>
          <li className={css.listItem}>
            <a className={css.listLink} href="/">
              Home
            </a>
          </li>
          <li className={css.listItem}>
            <a className={css.listLink} href="product">
              Product
            </a>
          </li>
          <li className={css.listItem}>
            <a className={css.listLink} href="pricing">
              Pricing
            </a>
          </li>
          <li className={css.listItem}>
            <a className={css.listLink} href="contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
        </>
    );
}

export default HeaderMenu;