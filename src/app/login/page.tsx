"use client";
import React from "react";
import { Paper, TextField, Typography, Button } from "@mui/material";
import { loginStyles } from "./styles";
import { LoginSchema } from "./schema";
import { useForm } from "react-hook-form";
const LoginForm: React.FC = () => {
  const classes = loginStyles();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Handle form submission logic here
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" className={classes.title}>
        Login
      </Typography>

      <form onSubmit={handleSubmit}>
        {LoginSchema.map((field, index) => (
          <TextField
            key={index}
            placeholder={field.placeholder}
            type={field.type}
            size="small"
            className={classes.textField}
          />
        ))}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submitButton}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default LoginForm;
