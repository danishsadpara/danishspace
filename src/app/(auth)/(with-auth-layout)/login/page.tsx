"use client";
import { Paper, Typography } from "@mui/material";
import React from "react";
import { Styles } from "./analytics/styles";
import FormSubmission from "./components/FromSubmission";

const LoginForm: React.FC = () => {
  const classes = Styles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" className={classes.title}>
        Login
      </Typography>
      <FormSubmission />
    </Paper>
  );
};

export default LoginForm;
