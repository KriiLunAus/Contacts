import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { logInUser } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export default function () {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(logInUser(values));
    action.resetForm();
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.formContainer}>
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
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
}
