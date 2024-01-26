export interface ILoginField {
  label?: string;
  name: "email" | "password";
  type: "text" | "password";
}

export interface FormFieldProps {
  field: {
    name: string;
    label?: string;
    type?: string;
  };
  register: any;
  error: any;
}
