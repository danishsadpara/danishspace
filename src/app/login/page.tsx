"use client";
import React from "react";
import { Paper, TextField, Typography, Button, Box } from "@mui/material";
import { loginStyles } from "./analytics/styles";
import { LoginSchema, formFields, schema } from "./analytics/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm: React.FC = () => {
  const classes = loginStyles();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<formFields>({
    defaultValues: {
      email: "test@email.com",
    },
    resolver: zodResolver(schema),
  });

  const onSubmitFn: SubmitHandler<formFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error();
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
          <Box key={index}>
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
              {...register(field.name)}
            />
            {errors[field.name] && (
              <span className={classes.helperText}>
                {errors[field.name]?.message}
              </span>
            )}
          </Box>
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
