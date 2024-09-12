import css from "./HeaderAddress.module.css"

const HeaderAddres = () => {

    return (
      <div className={css.addressWrap}>
        <address className={css.address}>
          <ul class={css.listAddress}>
            <li className={css.listAddressItem}>
              <a class={css.addresLink} href="mailto:info@devstudio.com">
                info@devstudio.com
              </a>
            </li>
            <li>
              <a class={css.addressLink} href="tel:+110001111111">
                +11 (000) 111-11-11
              </a>
            </li>
          </ul>
        </address>
      </div>
    );
}

export default HeaderAddres;