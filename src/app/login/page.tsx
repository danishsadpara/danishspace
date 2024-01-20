"use client";
import React from "react";
import { Paper, TextField, Typography, Button } from "@mui/material";
import { loginStyles } from "./styles";
import { LoginSchema } from "./schema";
import { SubmitHandler, useForm } from "react-hook-form";
const LoginForm: React.FC = () => {
  const classes = loginStyles();
  type formFields = {
    email: string;
    password: string;
    validation: object;
  };
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<formFields>();

  const onSubmitFn: SubmitHandler<formFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
      console.log(data);
    } catch {
      setError("root", { message: "This error belongs to the whole form" });
    }
  };
  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" className={classes.title}>
        Login
      </Typography>

      <form onSubmit={handleSubmit(onSubmitFn)}>
        {LoginSchema.map((field, index) => (
          <>
            <Typography>
              {field.label ?? (
                <span className={classes.helperText}>
                  pass label from schema to show here
                </span>
              )}
            </Typography>
            <TextField
              key={index}
              type={field.type ?? "text"}
              size="small"
              className={classes.textField ?? ""}
              {...register(field.name, field.validation)}
            />
            {errors[field.name] && (
              <span className={classes.helperText}>
                {errors[field.name]?.message}
              </span>
            )}
          </>
        ))}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          className={classes.submitButton}
        >
          {isSubmitting ? "loading..." : "Submit"}
        </Button>
        {errors.root && (
          <span className={classes.helperText}>{errors.root.message}</span>
        )}
      </form>
    </Paper>
  );
};

export default LoginForm;
