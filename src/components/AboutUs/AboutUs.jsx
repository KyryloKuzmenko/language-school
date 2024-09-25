import css from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section className={`${css.aboutUsSection} container`}>
      <div className={css.wrap}>
        <h2 className={`${css.titleMobile} ${css.titlePC}`}>About Us</h2>
        <div className={css.aboutUsWrap}>
          <div className={css.imgWrap}>
            <img
              className={css.aboutUsImg}
              srcSet="/assets/img/about-us-img/boy-with-laptop/boy-with-laptop@2x.jpg 2x,
              /assets/img/about-us-img/boy-with-laptop/boy-with-laptop.jpg"
              src="/assets/img/about-us-img/boy-with-laptop/boy-with-laptop.jpg"
              alt="boy-with-laptop"
            />
            <img
              className={css.aboutUsImg}
              srcSet="/assets/img/about-us-img/girl-with-laptop/girl-with-laptop@2x.jpg 2x,
              /assets/img/about-us-img/girl-with-laptop/girl-with-laptop.jpg"
              src="/assets/img/about-us-img/girl-with-laptop/girl-with-laptop.jpg"
              alt="girl-with-laptop"
            />
            <img
              className={css.aboutUsImg}
              srcSet="/assets/img/about-us-img/man-with-laptop/man-with-laptop@2x.jpg 2x,
              /assets/img/about-us-img/man-with-laptop/man-with-laptop.jpg"
              src="/assets/img/about-us-img/man-with-laptop/man-with-laptop.jpg"
              alt="man-with-laptop"
            />
            <img
              className={css.aboutUsImg}
              srcSet="/assets/img/about-us-img/woman-with-laptop/woman-with-laptop@2x.jpg 2x,
              /assets/img/about-us-img/woman-with-laptop/woman-with-laptop.jpg"
              src="/assets/img/about-us-img/woman-with-laptop/woman-with-laptop.jpg"
              alt="woman-with-laptop"
            />
          </div>
            <p className={css.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt
              dolorum enim aliquid, quae dolore fugit, deleniti aperiam error nemo
              voluptates modi fugiat eligendi delectus tempore magni perferendis
              quam. Id! Nisi doloribus dignissimos quod impedit reiciendis fugiat
              at adipisci, ipsum ducimus et libero ullam molestiae aperiam quidem.
              Voluptatibus reiciendis voluptatem et quaerat voluptate neque
              molestiae ad! Maiores culpa veritatis architecto? Iure quia harum
              quam inventore! Delectus illum commodi quam sapiente numquam. Cum
              fugiat eaque rerum aperiam porro accusantium consectetur, id
              perspiciatis, aspernatur repellat nemo? Amet esse dolorum earum quo
              itaque.
            </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
