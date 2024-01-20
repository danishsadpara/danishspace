import { LoginField } from "./interfaces";

export const LoginSchema: LoginField[] = [
  {
    label: "Email",
    name: "email",
    type: "text",
    validation: {
      required: "Email is required",
      validate: (value: string) => {
        if (!value.includes("@")) {
          return "Email must include '@'";
        }
        return true;
      },
    },
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    validation: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  },
];
