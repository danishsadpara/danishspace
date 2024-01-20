export interface LoginField {
  placeholder: string;
  type: "text" | "password";
}

export const LoginSchema: LoginField[] = [
  { placeholder: "Username", type: "text" },
  { placeholder: "Password", type: "password" },
];
