import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function () {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    name: "",
    email: "",
    password: null,
  };

  const handleSubmit = () => {};

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div>
            <label htmlFor={nameFieldId}>Username</label>
            <Field id={nameFieldId} name="name" type="text" />
            <ErrorMessage name="name" component="p" />
          </div>
          <div>
            <label htmlFor={emailFieldId}>Email</label>
            <Field id={emailFieldId} name="name" type="email" />
            <ErrorMessage name="name" component="p" />
          </div>
          <div>
            <label htmlFor={passwordFieldId}>Password</label>
            <Field id={passwordFieldId} name="name" type="password" />
            <ErrorMessage name="name" component="p" />
          </div>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
}
