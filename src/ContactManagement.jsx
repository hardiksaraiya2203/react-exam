import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactManagement = () => {
  const validationSchema = () => {
    return Yup.object().shape({
      firstName: Yup.string().required("firstName is required"),
      lastName: Yup.string().required("lastName is required"),
      email: Yup.string().required("email is required").email('email should be correctly entered'),
    });
  };

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone:"",
        }}
        onSubmit={(value) => {
          console.log(value);
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="form-group">
            <label>firstName</label>
            <Field name="firstName" type="text" className="form-control" />
            <ErrorMessage
              name="firstName"
              component="span"
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
            <label>email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <label>phone</label>
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
