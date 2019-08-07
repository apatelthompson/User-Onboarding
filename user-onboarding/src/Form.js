import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm({ values, errors, touched }) {
  return (
    <Form>
      <div>
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <Field type="text" name="name" placeholder="Name" />
      </div>
      <div>
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <Field type="email" name="email" placeholder="Email" />
      </div>
      <div>
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <label>
        <Field
          className="terms"
          type="checkbox"
          name="terms"
          checked={values.terms}
        />
        Terms of Service
      </label>
      <button type="submit">Submit</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password, name, terms }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: terms || false
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string(),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6)
      .required("Password is required"),
    terms: Yup.boolean().required()
  }),

  handleSubmit(values, { resetForm, setStatus }) {
    console.log(values);
    axios
      .post("https://reqres.in/api/users/", values)
      .then(response => {
        console.log(response.data);
        setStatus(response.data);
        resetForm();
      })
      .catch(error => {
        console.log(error);
      });
  }
})(LoginForm);

export default FormikLoginForm;
