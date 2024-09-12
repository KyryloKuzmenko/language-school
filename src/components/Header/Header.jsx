import css from './Header.module.css';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { useState } from 'react';
import JoinUs from '../JoinUs/JoinUs';
const Header = () => {

  return (
    <>
      <header className={css.header}>
        <div className={`${css.headerWrap} container`}>
            <span className={css.brand}>
              <a href="/">Brand</a>
            </span>
          <nav className={css.navigate}>
            <HeaderMenu className={css.headerMenu} />
          </nav>
          <JoinUs />
        </div>
      </header>
    </>
  );
};

export default Header;
