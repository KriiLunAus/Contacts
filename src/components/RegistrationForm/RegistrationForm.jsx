import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function () {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, action) => {
    dispatch(registerUser(values));
    action.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.formContainer}>
          <div className={css.formGroup}>
            <label className={css.label} htmlFor={nameFieldId}>
              Username
            </label>
            <Field
              className={css.field}
              id={nameFieldId}
              name="name"
              type="text"
            />
            <ErrorMessage name="name" component="p" />
          </div>
          <div className={css.formGroup}>
            <label className={css.label} htmlFor={emailFieldId}>
              Email
            </label>
            <Field
              className={css.field}
              id={emailFieldId}
              name="email"
              type="email"
            />
            <ErrorMessage name="email" component="p" />
          </div>
          <div className={css.formGroup}>
            <label className={css.label} htmlFor={passwordFieldId}>
              Password
            </label>
            <Field
              className={css.field}
              id={passwordFieldId}
              name="password"
              type="password"
            />
            <ErrorMessage name="password" component="p" />
          </div>
          <button className={css.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
}
