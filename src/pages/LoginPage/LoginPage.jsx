import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
export default function () {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    email: "",
    password: null,
  };

  const handleSubmit = () => {};
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
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
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
}
