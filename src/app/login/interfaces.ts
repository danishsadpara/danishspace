export interface ILoginField {
  label?: string;
  name: "email" | "password";
  type: "text" | "password";
  validation?: object;
  button?: {
    variant: "contained" | "outlined" | "text";
    color: "primary" | "secondary";
    disabled?: boolean;
  };
}

export interface IValidationSchema {
  email: "string";
  password: "string";
}
