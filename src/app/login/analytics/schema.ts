import { ILoginField } from "./interfaces";
import { z } from "zod";

export const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type formFields = z.infer<typeof schema>;

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
