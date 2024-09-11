import style from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`${style.heroSection} container`}>
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
        <img className={style.bground} src="/assets/img/background-removebg-preview.png" alt="background"/>
        <img
          className={style.heroImg}
          srcSet="
            /assets/img/x2/girl-person@2x.png 2x,
            /assets/img/girl-person.png
            "
          src="/assets/img/girl-person.png"
          alt="Girl Photo"
        />
      </div>
    </section>
  );
};

export default Hero;
