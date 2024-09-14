import css from './PopularCourses.module.css';

const PopularCourses = () => {
  return (
    <section className={`${css.popularCoursesSection} container`}>
      <div className={css.wrap}>
        <h2 className={css.title}>Most Popular Courses</h2>
        <ul className={css.courseList}>
          <li className={css.course}>
            <div className={css.box}>
              <h3 className={css.courseTitle}>Course1</h3>
              <span className={css.line}></span>
              <p className={css.text}>
                The gradual accumulation and small-scale..
              </p>
            </div>
          </li>
          <li className={css.course}>
            <div className={css.box}>
              <h3 className={css.courseTitle}>Course2</h3>
              <span className={css.line}></span>
              <p className={css.text}>
                The gradual accumulation and small-scale..
              </p>
            </div>
          </li>
          <li className={css.course}>
            <div className={css.box}>
              <h3 className={css.courseTitle}>Course3</h3>
              <span className={css.line}></span>
              <p className={css.text}>
                The gradual accumulation and small-scale..
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PopularCourses;
