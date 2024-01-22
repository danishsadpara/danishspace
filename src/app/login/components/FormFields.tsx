import React from "react";
import { TextField, Typography, Box } from "@mui/material";
import { Styles } from "../analytics/styles";

interface FormFieldProps {
  field: {
    name: string;
    label?: string;
    type?: string;
  };
  register: any;
  error: any;
}

const FormField: React.FC<FormFieldProps> = ({ field, register, error }) => {
  const classes = Styles();

  return (
    <Box>
      <Typography>
        {field.label ?? (
          <span className={classes.helperText}>
            pass label from schema to show here
          </span>
        )}
      </Typography>
      <TextField
        type={field.type ?? "text"}
        size="small"
        className={classes.textField ?? ""}
        {...register(field.name)}
      />
      {error && <span className={classes.helperText}>{error.message}</span>}
    </Box>
  );
};

export default FormField;
