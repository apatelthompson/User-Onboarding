import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm() {
  return (
    <Form>
      <div>
        <Field type="text" name="name" placeholder="Name" />
      </div>
      <div>
        <Field type="email" name="email" placeholder="Email" />
      </div>
      <div>
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <label>
        <Field type="checkbox" name="terms" checked={values.terms} />
        Terms of Service
      </label>
      <button onSubmit={handleSubmit}>Submit</button>
    </Form>
  );
}

// const FormikLoginForm = withFormik({
//   mapPropsToValues({ email, password, name, terms }) {
//     return {
//       name: name || "",
//       email: email || "",
//       password: password || "",
//       terms: terms || false,
//     };
//   },
//
//   handleSubmit(values) {
//     console.log(values);
//     axios
//       .post("https://yourdatabaseurlgoeshere.com", sentData)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
// })(LoginForm);

export default FormikLoginForm;
