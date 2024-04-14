import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    contactNo: "",
    email:"",
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  const Validation = () => {
    return Yup.object().shape({
      firstName: Yup.string().required("firstName must be filled"),
      lastName: Yup.string().required("lastName must be filled"),
      email: Yup.string().required("email is required").email('fill correctly'),
    });
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={Validation}
      >
        <Form>
          <div className="form-group">
            <label>firstName</label>
            <Field name="firstName" type="text" className="form-control" />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <label>lastName</label>
            <Field name="lastName" type="text" className="form-control" />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <label>contactNo</label>
            <Field name="contactNo" type="tel" className="form-control" />
          </div>

          <div className="form-group">
            <label>email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
