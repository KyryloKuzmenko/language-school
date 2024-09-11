import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={`${style.headerWrap} container`}>
        <nav className={style.navigate}>
          <span className={style.brand}>Brand</span>
          <ul className={style.list}>
            <li className={style.listItem}>
              <a className={style.listLink} href="/">
                Home
              </a>
            </li>
            <li className={style.listItem}>
              <a className={style.listLink} href="#">
                Product
              </a>
            </li>
            <li className={style.listItem}>
              <a className={style.listLink} href="#">
                Pricing
              </a>
            </li>
            <li className={style.listItem}>
              <a className={style.listLink} href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <address className={style.address}>
          <ul class={style.listAddress}>
            <li className={style.listAddressItem}>
              <a class={style.addresLink} href="mailto:info@devstudio.com">
                info@devstudio.com
              </a>
            </li>
            <li>
              <a class={style.addressLink} href="tel:+110001111111">
                +11 (000) 111-11-11
              </a>
            </li>
          </ul>
        </address>
        <a className={style.contactFormBtn} href="#contact-form">
          JOIN US
          <span>
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2636_2027)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36109 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z"
                  fill="white"
                />
              </g>
            </svg>
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
