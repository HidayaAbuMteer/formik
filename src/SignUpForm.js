import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SignUpForm() {
   const [snackbar, setSnackbar] = React.useState({
  open: false,
  message: "",
  severity: "success" // "success" أو "error"
});

const handleClose = (event, reason) => {
  if (reason === "clickaway") return;
  setSnackbar({ ...snackbar, open: false });
};

  const validationSchema = Yup.object({
    firstName: Yup.string().min(2, "Must be at least 2 characters").required("First name is required"),
    lastName: Yup.string().min(2, "Must be at least 2 characters").required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const formik = useFormik({
    initialValues: { firstName: "", lastName: "", email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
     const existing = JSON.parse(localStorage.getItem("signupData")) || [];

  const foundUser = existing.find(user => user.email === values.email);

  if (foundUser) {
     setSnackbar({ open: true, message: "❌ This email is already registered!", severity: "error" });
  return;
  }

  const updated = [...existing, values];
  localStorage.setItem("signupData", JSON.stringify(updated));
  setSnackbar({ open: true, message: "🎉 Sign up successful!", severity: "success" });

    },
  });

  return (
    <>
        <form className="form" onSubmit={formik.handleSubmit}>
      <TextInput
        label="First Name"
        name="firstName"
        type="text"
        placeholder="First Name"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.firstName}
        touched={formik.touched.firstName}
      />

      <TextInput
        label="Last Name"
        name="lastName"
        type="text"
        placeholder="Last Name"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.lastName}
        touched={formik.touched.lastName}
      />

      <TextInput
        label="Email"
        name="email"
        type="email"
        placeholder="Email Address"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.email}
        touched={formik.touched.email}
      />

      <TextInput
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.password}
        touched={formik.touched.password}
      />
      <button type="submit">Claim your free trial</button>
      <small>
                By clicking the button, you are agreeing to our{" "}
                <span className="red">Terms and Services</span>
              </small>
    </form>
     <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={snackbar.severity} variant="filled">
         
          {snackbar.message}
        </Alert>
      </Snackbar>
      </>
  );
}