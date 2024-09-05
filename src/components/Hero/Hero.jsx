import style from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`${style.heroSection} ${style.container}`}>
      <div className={style.wrapHero}>
        <a className={style.linkJoinUs} href="#join-us">
          Join Us
        </a>
        <h1 className={style.heroTitle}>HIGH QUALITY COURSES </h1>
        <p className={style.text}>
          Every day brings with it a fresh set of learning possibilities.
        </p>

        <div className={style.btnWrap}>
          <button className={style.joinUs}>Join Us</button>
          <button className={style.learnMore}>Learn More</button>
        </div>
      </div>
      <div className={`${style.heroPictureContainer} `}>
        <svg width="110" height="262" className={style.vector1}>
          <use href="/src/assets/icons/vectors.svg#vector1"></use>
        </svg>
        <svg width="49" height="212" className={style.vector2}>
          <use href="/src/assets/icons/vectors.svg#vector2"></use>
        </svg>
        <svg width="265" height="261" className={style.vector3}>
          <use href="/src/assets/icons/vectors.svg#vector3"></use>
        </svg>
        <svg width="120" height="171" className={style.vector4}>
          <use href="/src/assets/icons/vectors.svg#vector4"></use>
        </svg>
        <svg width="106" height="112" className={style.vector5}>
          <use href="/src/assets/icons/vectors.svg#vector5"></use>
        </svg>
        <svg width="230" height="240" className={style.vector6}>
          <use href="/src/assets/icons/vectors.svg#vector6"></use>
        </svg>
        <svg width="464" height="430" className={style.vector7}>
          <use href="/src/assets/icons/vectors.svg#vector7"></use>
        </svg>
        <svg width="195" height="224" className={style.vector8}>
          <use href="/src/assets/icons/vectors.svg#vector8"></use>
        </svg>
        <img
          className={style.heroImg}
          srcSet="
            /src/assets/img/x2/girl-person@2x.png 2x,
            /img/girl-person.png
            "
          src="/img/girl-person.png"
          alt="Girl Photo"
        />
      </div>
    </section>
  );
};

export default Hero;
