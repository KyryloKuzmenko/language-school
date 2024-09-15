import css from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section className={`${css.aboutUsSection} container`}>
      <div className={css.wrap}>
        <h2 className={`${css.titleMobile}`}>About Us</h2>
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
        <div className={css.aboutUsWrap}>
          <h2 className={css.titlePC}>About Us</h2>
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
            itaque. Odit quis excepturi fuga qui aperiam quasi labore eveniet
            necessitatibus rem illo? Earum adipisci provident quis labore vitae
            magnam quia ducimus? Tempora fuga in voluptate quos dolorem velit
            nam vel. Aspernatur repellendus voluptatum itaque veniam! Eum
            exercitationem velit esse ullam odit. Iste modi minima quis
            repudiandae officiis obcaecati sequi similique necessitatibus nemo!
            Reiciendis laborum dolore repellat facilis ipsa. Eos, perferendis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
