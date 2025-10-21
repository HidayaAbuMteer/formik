import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "./TextInput";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";

export default function LogInForm() {
    const navigate = useNavigate();
   const [snackbar, setSnackbar] = React.useState({
  open: false,
  message: "",
  severity: "success" 
});

const handleClose = (event, reason) => {
  if (reason === "clickaway") return;
  setSnackbar({ ...snackbar, open: false });
};

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
     const existing = JSON.parse(localStorage.getItem("signupData")) || [];

  const foundUser = existing.find(user => user.email === values.email && user.password===values.password);

  if (foundUser) {
     setSnackbar({ open: true, message: "🎉 Log in successful!", severity: "success" });
     setTimeout(() => navigate("/Dashboard"), 1500);

  }else{
     setSnackbar({ open: true, message: "❌ Email or password is incorrect!", severity: "error" });
  }


    },
  });

  return (
    <>
        <form className="form" onSubmit={formik.handleSubmit}>

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
      <button type="submit">Log in</button>
     \
    </form>
     <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={snackbar.severity} variant="filled">
         
          {snackbar.message}
        </Alert>
      </Snackbar>
      </>
  );
}