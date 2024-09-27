import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import css from './UserForm.module.css';

// Валидация с помощью Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  number: Yup.string()
    .matches(
      /^\+\d{10,15}$/,
      'Phone number must start with "+" and contain 10-15 digits'
    )
    .required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  language: Yup.string().required('Please select a language'),
});

const UserForm = () => {
  const INITIAL_VALUES = {
    id: '',
    name: '',
    number: '',
    email: '',
    language: '',
  };

    return (
      <div className={css.formWrap}>
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log('DATA', values);
      }}
    >
      {({ errors, touched }) => (
        <Form className={`${css.form} container`}>
          <label className={css.label} htmlFor="nameField">
            <span>Name</span>
          </label>
          <Field
            className={css.userName}
            type="text"
            name="name"
            id="nameField"
          />

          {errors.name && touched.name ? <div>{errors.name}</div> : null}

          <label className={css.label} htmlFor="numberField">
            <span>Phone Number</span>
          </label>
          <Field
            className={css.userNumber}
            type="text"
            name="number"
            id="numberField"
          />

          {errors.number && touched.number ? <div>{errors.number}</div> : null}

          <label className={css.label} htmlFor="emailField">
            <span>Email</span>
          </label>
          <Field
            className={css.email}
            type="text"
            name="email"
            placeholder="example@gmail.com"
            id="emailField"
          />

          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <label className={css.label} htmlFor="lang">
            <span>Language</span>
          </label>
          <Field as="select" name="language" id="lang">
            <option value="">Select Language</option>
            <option value="Ukrainian">Ukrainian</option>
            <option value="English">English</option>
            <option value="Frances">Frances</option>
          </Field>

          {errors.language && touched.language ? (
            <div>{errors.language}</div>
          ) : null}

          <button className={css.submitBtn} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
      </div>
  );
};

export default UserForm;
