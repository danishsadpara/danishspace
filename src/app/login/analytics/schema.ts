import { ILoginField, IValidationSchema } from "./interfaces";
import { z } from "zod";

export const schema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(5),
});

export const LoginSchema: ILoginField[] = [
  {
    label: "Email",
    name: "email",
    type: "text",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
  },
];
