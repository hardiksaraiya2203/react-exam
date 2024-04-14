import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactManagement = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  const handleSubmit = (data) => {
    console.log(data);
  };
  const validationSchema = () => {
    return Yup.object().shape({
      firstName: Yup.string().required("firstName is required"),
      lastName: Yup.string().required("lastName is required"),
      email: Yup.string().required("email is required").email('fill correctly'),
    });
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
            <label htmlFor="lastName"> lastName </label>
            <Field name="lastName" type="text" className="form-control" />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email"> Email </label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone"> phone </label>
            <Field name="phone" type="tel" className="form-control" />
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

export default ContactManagement;
