import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
    firstName: yup.string().required("firstName must be filled"),
    lastName: yup.string().required("lastName must be filled"),
    email: yup.string().required("email is required").email('fill correctly'),
});

const ContactManagement = () => {
  const formik = useFormik({
    initialValues: {
        firstName: "",
        lastName: "",
        contactNo: "",
        email:"",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="firstName"
          type="text"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />

        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="lastName"
          type="text"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />

        <TextField
          fullWidth
          id="contactNo"
          name="contactNo"
          label="contactNo"
          type="tel"
          value={formik.values.contactNo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactManagement;
