// FormSubmission.tsx
import React from "react";
import { Button, Typography, Paper, Box } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, formFields, schema } from "../analytics/schema";
import FormField from "./FormFields";
import { Styles } from "../analytics/styles";

const FormSubmission: React.FC = () => {
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
  const classes = Styles();
  const onSubmitFn: SubmitHandler<formFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error();
    } catch {
      setError("root", {
        message: "This error belongs to the whole form",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFn)}>
      {LoginSchema.map((field, index) => (
        <Box className={classes.pb10} key={index}>
          <FormField
            field={field}
            register={register}
            error={errors[field.name]}
          />
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
  );
};

export default FormSubmission;
